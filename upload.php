<?php

// ============================
// CONFIGURACIÓN
// ============================
$projectId = 'emergencia24-7-e7acc';
$serviceAccount = json_decode(
    file_get_contents(__DIR__ . '/emergencia24-7-Key.json'),
    true
);

// ============================
// VALIDAR ARCHIVO
// ============================
if (!isset($_FILES['jsonfile'])) {
    exit('❌ No se recibió archivo');
}

$data = json_decode(
    file_get_contents($_FILES['jsonfile']['tmp_name']),
    true
);

if (!$data) {
    exit('❌ JSON inválido');
}

// ============================
// EXTRAER DATOS
// ============================
$cvegeo   = $data['properties']['CVEGEO'];
$nombre   = $data['properties']['NOMGEO'];
$estado   = $data['properties']['NOM_ENT'];
$poligono = $data['geometry']['coordinates'][0];

// ============================
// FUNCIÓN BASE64 URL SAFE
// ============================
function base64url($data)
{
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

// ============================
// CREAR JWT
// ============================
$header = base64url(json_encode(['alg' => 'RS256', 'typ' => 'JWT']));

$now = time();
$payload = base64url(json_encode([
    'iss'   => $serviceAccount['client_email'],
    'scope' => 'https://www.googleapis.com/auth/datastore',
    'aud'   => 'https://oauth2.googleapis.com/token',
    'iat'   => $now,
    'exp'   => $now + 3600
]));

openssl_sign(
    "$header.$payload",
    $signature,
    $serviceAccount['private_key'],
    'SHA256'
);

$jwt = "$header.$payload." . base64url($signature);

// ============================
// PEDIR ACCESS TOKEN
// ============================
$ch = curl_init('https://oauth2.googleapis.com/token');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        'assertion'  => $jwt
    ])
]);

$tokenResponse = json_decode(curl_exec($ch), true);
curl_close($ch);

if (!isset($tokenResponse['access_token'])) {
    exit('❌ Error al obtener token');
}

$accessToken = $tokenResponse['access_token'];

// ============================
// FORMATO FIRESTORE
// ============================
$body = [
    "fields" => [
        "cvegeo" => ["stringValue" => $cvegeo],
        "nombre" => ["stringValue" => $nombre],
        "estado" => ["stringValue" => $estado],
        "poligono" => [
            "arrayValue" => [
                "values" => array_map(fn($p) => [
                    "geoPointValue" => [
                        "latitude"  => $p[1],
                        "longitude" => $p[0]
                    ]
                ], $poligono)
            ]
        ],
        "created_at" => [
            "timestampValue" => gmdate("Y-m-d\TH:i:s\Z")
        ]
    ]
];

// ============================
// ENVIAR A FIRESTORE (AUTO ID)
// ============================
$url = "https://firestore.googleapis.com/v1/projects/$projectId/databases/(default)/documents/municipio_poligono";

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true, // 🔥 POST = ID AUTOMÁTICO
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer $accessToken",
        "Content-Type: application/json"
    ],
    CURLOPT_POSTFIELDS => json_encode($body)
]);

$response = curl_exec($ch);
curl_close($ch);

echo "✅ Municipio <b>$nombre</b> guardado con ID automático";
