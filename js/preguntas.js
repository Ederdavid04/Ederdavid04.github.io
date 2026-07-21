
const QUESTION_BANK = [


    {
        id: 1,
        area: "comunicacion",
        tipo: "likert",
        peso: 1,
        inversa: false,
        texto: "Disfruto transformar una idea en un mensaje que otras personas comprendan fácilmente."
    },

    {
        id: 2,
        area: "comunicacion",
        tipo: "likert",
        peso: 1,
        inversa: false,
        texto: "Cuando veo una publicación o presentación, suelo fijarme en cómo podría hacerse más atractiva."
    },

    {
        id: 3,
        area: "comunicacion",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Si un evento tiene poca asistencia, mi primera reacción sería buscar una mejor forma de promocionarlo."
    },

    {
        id: 4,
        area: "comunicacion",
        tipo: "likert",
        peso: 1,
        inversa: false,
        texto: "Me gusta expresar ideas utilizando imágenes, videos o contenido digital."
    },

    {
        id: 5,
        area: "comunicacion",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Antes de compartir información importante, reviso que sea clara, correcta y fácil de entender."
    },

    {
        id: 6,
        area: "comunicacion",
        tipo: "inversa",
        peso: 2,
        inversa: true,
        texto: "No considero importante la forma en que se presenta un mensaje."
    },

    {
        id: 7,
        area: "comunicacion",
        tipo: "likert",
        peso: 1,
        inversa: false,
        texto: "Me entusiasma aprender herramientas para crear contenido digital."
    },

    {
        id: 8,
        area: "comunicacion",
        tipo: "forced",
        peso: 3,
        texto: "¿Qué actividad elegirías primero?",
        opciones: [
            { texto: "Crear la estrategia de difusión de un evento.", area: "comunicacion" },
            { texto: "Coordinar todas las actividades del evento.", area: "proyectos" },
            { texto: "Recibir e integrar a nuevos participantes.", area: "vinculacion" }
        ]
    },

    {
        id: 9,
        area: "comunicacion",
        tipo: "situacional",
        peso: 2,
        texto: "Si una campaña no funciona, me interesa analizar cómo mejorar el mensaje."
    },

    {
        id: 10,
        area: "comunicacion",
        tipo: "forced",
        peso: 3,
        texto: "¿Qué aprendizaje te llama más la atención?",
        opciones: [
            { texto: "Marketing y comunicación digital.", area: "comunicacion" },
            { texto: "Gestión de proyectos.", area: "proyectos" },
            { texto: "Relaciones institucionales.", area: "vinculacion" }
        ]
    },


    {
        id: 11,
        area: "vinculacion",
        tipo: "likert",
        peso: 1,
        texto: "Disfruto conocer personas nuevas y crear relaciones de confianza."
    },

    {
        id: 12,
        area: "vinculacion",
        tipo: "situacional",
        peso: 2,
        texto: "Cuando alguien nuevo llega a un equipo, procuro ayudarle a sentirse integrado."
    },

    {
        id: 13,
        area: "vinculacion",
        tipo: "likert",
        peso: 1,
        texto: "Escuchar a otras personas antes de dar una opinión me parece importante."
    },

    {
        id: 14,
        area: "vinculacion",
        tipo: "likert",
        peso: 1,
        texto: "Me motiva que las personas trabajen en un ambiente positivo."
    },

    {
        id: 15,
        area: "vinculacion",
        tipo: "situacional",
        peso: 2,
        texto: "Si un voluntario deja de participar, intentaría conocer la razón antes de sacar conclusiones."
    },

    {
        id: 16,
        area: "vinculacion",
        tipo: "inversa",
        peso: 2,
        inversa: true,
        texto: "Prefiero evitar actividades donde tenga que interactuar con muchas personas."
    },

    {
        id: 17,
        area: "vinculacion",
        tipo: "likert",
        peso: 1,
        texto: "Me interesa desarrollar habilidades para liderar personas."
    },

    {
        id: 18,
        area: "vinculacion",
        tipo: "forced",
        peso: 3,
        texto: "¿Qué actividad disfrutarías más?",
        opciones: [
            { texto: "Construir alianzas y fortalecer la comunidad.", area: "vinculacion" },
            { texto: "Diseñar contenido para redes sociales.", area: "comunicacion" },
            { texto: "Planificar un evento.", area: "proyectos" }
        ]
    },

    {
        id: 19,
        area: "vinculacion",
        tipo: "situacional",
        peso: 2,
        texto: "Cuando existe un conflicto entre personas, intento ayudar a encontrar una solución."
    },

    {
        id: 20,
        area: "vinculacion",
        tipo: "forced",
        peso: 3,
        texto: "¿Qué logro te haría sentir más satisfecho?",
        opciones: [
            { texto: "Crear una comunidad participativa.", area: "vinculacion" },
            { texto: "Lanzar una campaña exitosa.", area: "comunicacion" },
            { texto: "Organizar un evento impecable.", area: "proyectos" }
        ]
    },



    {
        id: 21,
        area: "proyectos",
        tipo: "likert",
        peso: 1,
        texto: "Me gusta organizar actividades siguiendo un plan claro."
    },

    {
        id: 22,
        area: "proyectos",
        tipo: "likert",
        peso: 1,
        texto: "Disfruto coordinar varias tareas al mismo tiempo."
    },

    {
        id: 23,
        area: "proyectos",
        tipo: "situacional",
        peso: 2,
        texto: "Si surge un problema durante un evento, mantengo la calma y busco una solución rápidamente."
    },

    {
        id: 24,
        area: "proyectos",
        tipo: "likert",
        peso: 1,
        texto: "Me siento satisfecho cuando un proyecto termina exactamente como fue planeado."
    },

    {
        id: 25,
        area: "proyectos",
        tipo: "situacional",
        peso: 2,
        texto: "Antes de iniciar una actividad importante, verifico que todos conozcan sus responsabilidades."
    },

    {
        id: 26,
        area: "proyectos",
        tipo: "inversa",
        peso: 2,
        inversa: true,
        texto: "Prefiero improvisar en lugar de planificar."
    },

    {
        id: 27,
        area: "proyectos",
        tipo: "likert",
        peso: 1,
        texto: "Me gusta administrar tiempos y recursos para cumplir objetivos."
    },

    {
        id: 28,
        area: "proyectos",
        tipo: "forced",
        peso: 3,
        texto: "Si mañana hubiera un evento nacional, ¿qué rol elegirías?",
        opciones: [
            { texto: "Coordinar toda la logística.", area: "proyectos" },
            { texto: "Dirigir la difusión del evento.", area: "comunicacion" },
            { texto: "Atender invitados y aliados.", area: "vinculacion" }
        ]
    },

    {
        id: 29,
        area: "proyectos",
        tipo: "situacional",
        peso: 2,
        texto: "Cuando un proyecto se retrasa, prefiero reorganizar el plan antes que improvisar."
    },

    {
        id: 30,
        area: "proyectos",
        tipo: "forced",
        peso: 3,
        texto: "¿Qué habilidad te gustaría desarrollar más?",
        opciones: [
            { texto: "Planeación y gestión de proyectos.", area: "proyectos" },
            { texto: "Diseño y comunicación.", area: "comunicacion" },
            { texto: "Liderazgo de personas y alianzas.", area: "vinculacion" }
        ]
    }

];

