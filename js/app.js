// Carga las preguntas combinadas desde js/preguntas.js
const questions = [...QUESTION_BANK].sort(() => Math.random() - 0.5);

const TOTAL = questions.length;

let current = 0;
let userAnswers = {};
let preguntasPendientes = [];
let modoRevision = false;

// Elementos DOM
const welcomeSection = document.getElementById("welcome");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");

const counterEl = document.getElementById("counter");
const progressBarEl = document.getElementById("progressBar");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

const btnStart = document.getElementById("start");
const btnPrevious = document.getElementById("previous");
const btnNext = document.getElementById("next");
const btnRestart = document.getElementById("restart");

// Evento para Iniciar Evaluación
btnStart.onclick = () => {
    welcomeSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    render();
};

// Evento para avanzar
btnNext.onclick = () => {
    if (current < TOTAL - 1) {
        current++;
        render();
    } else {
        validarPreguntas();
    }
};

// Evento para regresar
btnPrevious.onclick = () => {
    if (current > 0) {
        current--;
        render();
    }
};

// Evento para Reiniciar Test
if (btnRestart) {
    btnRestart.onclick = () => {
        userAnswers = {};
        current = 0;
        resultsSection.classList.add("hidden");
        welcomeSection.classList.remove("hidden");
    };
}

// Escala por defecto para preguntas Likert y Situacionales
const opcionesLikert = [
    { texto: "Totalmente en desacuerdo", valor: 1 },
    { texto: "En desacuerdo", valor: 2 },
    { texto: "Neutral / Indeciso", valor: 3 },
    { texto: "De acuerdo", valor: 4 },
    { texto: "Totalmente de acuerdo", valor: 5 }
];

// Función para renderizar la pregunta actual
function render() {
    const q = questions[current];

    // Actualizar encabezado y barra de progreso
    counterEl.innerText = `${current + 1} / ${TOTAL}`;
    progressBarEl.style.width = `${((current + 1) / TOTAL) * 100}%`;
    questionEl.innerText = q.texto;

    // Estado de botones
    btnPrevious.disabled = current === 0;
    btnNext.innerText = current === TOTAL - 1 ? "Finalizar" : "Siguiente";
    crearBotonesRevision();
    // Limpiar respuestas anteriores
    answersEl.innerHTML = "";

    // Renderizar opciones según el tipo de pregunta
    if (q.tipo === "forced") {
        q.opciones.forEach(opcion => {
            const div = document.createElement("div");
            div.className = "answer" + (userAnswers[q.id] === opcion.texto ? " selected" : "");
            div.innerText = opcion.texto;
            div.onclick = () => seleccionarOpcion(q.id, opcion.texto, div);
            answersEl.appendChild(div);
        });
    } else {
        opcionesLikert.forEach(opcion => {
            const div = document.createElement("div");
            div.className = "answer" + (userAnswers[q.id] === opcion.valor ? " selected" : "");
            div.innerText = opcion.texto;
            div.onclick = () => seleccionarOpcion(q.id, opcion.valor, div);
            answersEl.appendChild(div);
        });
    }
}

// Guardar la opción seleccionada
function seleccionarOpcion(idPregunta, valor, elemento) {
    userAnswers[idPregunta] = valor;

    // Resaltar visualmente la opción seleccionada
    const opcionesHTML = answersEl.querySelectorAll(".answer");
    opcionesHTML.forEach(op => op.classList.remove("selected"));
    elemento.classList.add("selected");
}

function validarPreguntas() {

    preguntasPendientes = [];


    questions.forEach((pregunta, index) => {

        if (userAnswers[pregunta.id] === undefined) {

            preguntasPendientes.push({
                id: pregunta.id,
                posicion: index,
                texto: pregunta.texto
            });

        }

    });


    if (preguntasPendientes.length > 0) {

        mostrarPreguntasPendientes();

    } else {

        mostrarResultados();

    }

}

// Muestra la sección de resultados al terminar

function mostrarResultados() {
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");

    if (typeof AlgoritmoEvaluacion !== "undefined") {
        const res = AlgoritmoEvaluacion.calcularResultados(userAnswers, questions);

        const nombresAreas = {
            comunicacion: "Comunicación",
            vinculacion: "Comunidad y Vinculación",
            proyectos: "Proyectos y Eventos"
        };

        const descripcionesAreas = {
            comunicacion: "Tu perfil muestra una mayor afinidad por el área de <strong>Comunicación</strong>, destacando habilidades para transmitir ideas, gestionar redes sociales, crear contenido digital atractivo y difundir el impacto de la red.",
            vinculacion: "Tu perfil muestra una mayor afinidad por el área de <strong>Comunidad y Vinculación</strong>, destacando habilidades para generar relaciones públicas, captar y cuidar el bienestar de los voluntarios, y gestionar alianzas estratégicas.",
            proyectos: "Tu perfil muestra una mayor afinidad por el área de <strong>Proyectos y Eventos</strong>, destacando habilidades para la planeación, organización logística, asignación de tareas y control de tiempos."
        };

        // Header de Resultados
        const resultsHeader = document.querySelector("#results h1");
        if (resultsHeader) {
            resultsHeader.innerText = "¡Evaluación Completada!";
        }

        // Limpiamos los contenedores anteriores para reorganizar la estructura
        document.getElementById("principal").innerHTML = `
            <div class="result-hero-card">
                <div class="result-hero-header">
                    <div>
                        <span class="badge-tag">Resultado Principal</span>
                        <h2 class="result-title">${nombresAreas[res.principal]}</h2>
                    </div>
                    <div class="score-circle">
                        <span>${res.porcentajes[res.principal]}%</span>
                        <small>Afinidad</small>
                    </div>
                </div>
                <p class="result-description">${descripcionesAreas[res.principal]}</p>
            </div>
        `;

        // Área Secundaria y Margen agrupados en una tarjeta compacta
        document.getElementById("secondary").innerHTML = "";
        document.getElementById("confidence").innerHTML = "";

        // Reestructuramos la parte inferior en 2 columnas o un bloque compacto
        document.getElementById("bars").innerHTML = `
            <div class="results-grid">
                <!-- Tarjeta Secundarios & Margen -->
                <div class="subcard-info">
                    <div class="subcard-item">
                        <span class="subcard-label">Área Secundaria Sugerida</span>
                        <strong class="subcard-value">${nombresAreas[res.secundario]} (${res.porcentajes[res.secundario]}%)</strong>
                    </div>
                    <div class="subcard-divider"></div>
                    <div class="subcard-item">
                        <span class="subcard-label">Margen de Diferenciación</span>
                        <span class="subcard-value-sm">${res.diferencia}% entre áreas principales</span>
                    </div>
                </div>

                <!-- Desglose Gráfico de Barras -->
                <div class="bars-card">
                    <h3>Desglose de Compatibilidad</h3>
                    ${Object.keys(res.porcentajes).map(area => `
                        <div class="bar-item">
                            <div class="bar-info">
                                <span>${nombresAreas[area]}</span>
                                <strong>${res.porcentajes[area]}%</strong>
                            </div>
                            <div class="bar-track">
                                <div class="bar-fill" style="width: ${res.porcentajes[area]}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        document.getElementById("principal").innerText = "Evaluación completada con éxito.";
    }
}

function mostrarPreguntasPendientes() {

    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");


    document.getElementById("principal").innerHTML = `

        <h2>⚠️ Preguntas sin responder</h2>

        <p>
        Aún tienes ${preguntasPendientes.length} preguntas pendientes.
        Puedes volver y contestarlas antes de finalizar.
        </p>

        <div id="pendientes"></div>

    `;


    const contenedor = document.getElementById("pendientes");


    preguntasPendientes.forEach((pregunta) => {


        const boton = document.createElement("button");


        boton.className = "answer";


        boton.innerHTML = `

        Pregunta ${pregunta.posicion + 1}<br>

        ${pregunta.texto}

        `;


        boton.onclick = () => {


            current = pregunta.posicion;


            modoRevision = true;


            resultsSection.classList.add("hidden");

            quizSection.classList.remove("hidden");


            render();


        };

        contenedor.appendChild(boton);


    });



    const finalizar = document.createElement("button");

    finalizar.innerText = "✅ Ir a finalizar evaluación";

    finalizar.className = "btn";

    finalizar.onclick = () => {

        modoRevision = false;

        mostrarResultados();

    };


    contenedor.appendChild(finalizar);

}

function crearBotonesRevision() {
    let viejo = document.getElementById("revisionButtons");
    if (viejo) {
        viejo.remove();
    }
    if (!modoRevision) {
        return;
    }

    const contenedor = document.createElement("div");
    contenedor.id = "revisionButtons";
    contenedor.style.marginTop = "20px";

    // Botón volver a pendientes

    const btnPendientes = document.createElement("button");

    btnPendientes.innerText = "📋 Ver preguntas pendientes";

    btnPendientes.className = "btn";

    btnPendientes.onclick = () => {
        validarPreguntas();

    };

    contenedor.appendChild(btnPendientes);


    // Botón finalizar

    const btnFinalizar = document.createElement("button");

    btnFinalizar.innerText = "✅ Finalizar evaluación";

    btnFinalizar.className = "btn";

    btnFinalizar.style.marginLeft = "10px";

    btnFinalizar.onclick = () => {
        validarPreguntas();
    };
    contenedor.appendChild(btnFinalizar);
    answersEl.parentNode.appendChild(contenedor);
}