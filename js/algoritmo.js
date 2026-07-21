/**
 * Algoritmo de procesamiento de respuestas
 */
const AlgoritmoEvaluacion = {
    // Escala estándar Likert de 5 puntos
    opcionesLikert: [
        { texto: "Totalmente en desacuerdo", valor: 1 },
        { texto: "En desacuerdo", valor: 2 },
        { texto: "Neutral / Indeciso", valor: 3 },
        { texto: "De acuerdo", valor: 4 },
        { texto: "Totalmente de acuerdo", valor: 5 }
    ],

    // Procesa el objeto de respuestas: { [questionId]: valorSeleccionado }
    calcularResultados: function (respuestas, bancoPreguntas) {
        let puntajes = {
            comunicacion: 0,
            vinculacion: 0,
            proyectos: 0
        };

        let maxPuntajes = {
            comunicacion: 0,
            vinculacion: 0,
            proyectos: 0
        };

        bancoPreguntas.forEach(q => {
            const respuestaUsuario = respuestas[q.id];
            const peso = q.peso || 1;

            if (q.tipo === "likert" || q.tipo === "situacional" || q.tipo === "inversa") {
                maxPuntajes[q.area] += 5 * peso;

                if (respuestaUsuario !== undefined) {
                    let valor = Number(respuestaUsuario);
                    // Invertir puntuación para preguntas de control/negativas
                    if (q.inversa) {
                        valor = 6 - valor;
                    }
                    puntajes[q.area] += valor * peso;
                }
            } else if (q.tipo === "forced") {
                // Elección múltiple donde cada opción da puntos a un área específica
                maxPuntajes[q.area] += 5 * peso;

                if (respuestaUsuario) {
                    // Si el usuario seleccionó la opción perteneciente a este área
                    const opcionElegida = q.opciones.find(opt => opt.texto === respuestaUsuario);
                    if (opcionElegida) {
                        puntajes[opcionElegida.area] += 5 * peso;
                    }
                }
            }
        });

        // Convertir resultados a porcentaje
        let porcentajes = {
            comunicacion: Math.round((puntajes.comunicacion / maxPuntajes.comunicacion) * 100) || 0,
            vinculacion: Math.round((puntajes.vinculacion / maxPuntajes.vinculacion) * 100) || 0,
            proyectos: Math.round((puntajes.proyectos / maxPuntajes.proyectos) * 100) || 0
        };

        // Ordenar áreas por puntaje
        let ranking = Object.keys(porcentajes).sort((a, b) => porcentajes[b] - porcentajes[a]);

        return {
            porcentajes,
            principal: ranking[0],
            secundario: ranking[1],
            diferencia: porcentajes[ranking[0]] - porcentajes[ranking[1]]
        };
    }
};
