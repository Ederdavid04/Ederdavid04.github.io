<!DOCTYPE html>
<html lang="es">

<head>
    <link rel="shortcut icon" href="img/logo_alumni.png" type="image/x-icon">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Vocacional - JA Alumni México</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <!-- Bienvenida -->
        <section id="welcome">
            <img src="img/logo_alumni.png" alt="JA Alumni Logo" class="logo">
            <h1>Test Vocacional<br>JA Alumni México</h1>
            <p>Descubre en qué equipo podrías desarrollar mejor tu talento.</p>
            <button id="start">Comenzar evaluación</button>
        </section>

        <!-- Quiz -->
        <section id="quiz" class="hidden">
            <div class="top">
                <div id="counter">1 / 90</div>
                <div class="progress">
                    <div id="progressBar"></div>
                </div>
            </div>
            <h2 id="question">Cargando pregunta...</h2>

            <!-- Aquí se renderizan dinámicamente los botones de opción -->
            <div id="answers"></div>

            <div class="buttons">
                <button id="previous" disabled>Anterior</button>
                <button id="next">Siguiente</button>
            </div>
        </section>

        <!-- Resultado -->
        <section id="results" class="hidden">
            <h1>Resultado de Tu Evaluación</h1>
            <div id="principal"></div>
            <div id="secondary"></div>
            <div id="confidence"></div>
            <div id="bars"></div>
            <br>
            <button id="restart">Volver a iniciar</button>
        </section>

        <div id="pendingQuestions"></div>
    </div>

    <script src="js/preguntas.js"></script>
    <script src="js/algoritmo.js"></script>
    <script src="js/app.js"></script>
</body>

</html>