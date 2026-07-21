const preguntasComunicacion = [

    {
        id: 1,
        area: "comunicacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Disfruto crear contenido que motive a otras personas a participar en actividades o proyectos."
    },

    {
        id: 2,
        area: "comunicacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Cuando veo un diseño poco atractivo inmediatamente pienso cómo mejorarlo."
    },

    {
        id: 3,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me gusta expresar ideas mediante imágenes, videos o presentaciones."
    },

    {
        id: 4,
        area: "comunicacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me interesa aprender nuevas herramientas de diseño gráfico o edición."
    },

    {
        id: 5,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Creo que una buena comunicación puede hacer que un proyecto tenga mucho mayor impacto."
    },

    {
        id: 6,
        area: "comunicacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Disfruto escribir publicaciones para redes sociales."
    },

    {
        id: 7,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me gusta tomar fotografías durante eventos importantes."
    },

    {
        id: 8,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me interesa aprender sobre marketing digital."
    },

    {
        id: 9,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me gusta investigar tendencias de redes sociales."
    },

    {
        id: 10,
        area: "comunicacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Disfruto pensar en campañas creativas para atraer personas."
    },

    {
        id: 11,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Suelo cuidar mucho la ortografía y la redacción."
    },

    {
        id: 12,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me gusta explicar información de forma sencilla y clara."
    },

    {
        id: 13,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me emociona que una publicación tenga mucho alcance."
    },

    {
        id: 14,
        area: "comunicacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Prefiero actividades donde pueda desarrollar mi creatividad."
    },

    {
        id: 15,
        area: "comunicacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me gustaría administrar las redes sociales de una organización."
    },

    {
        id: 16,
        area: "comunicacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Si un evento tiene muy pocos registrados, mi primera idea sería mejorar la difusión."
    },

    {
        id: 17,
        area: "comunicacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Cuando alguien no entiende un mensaje, busco otra forma más visual de explicarlo."
    },

    {
        id: 18,
        area: "comunicacion",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Antes de publicar algo, reviso varias veces que el contenido sea correcto."
    },

    {
        id: 19,
        area: "comunicacion",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Me gusta revisar estadísticas para saber qué publicaciones funcionan mejor."
    },

    {
        id: 20,
        area: "comunicacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Si pudiera elegir una responsabilidad dentro de un evento, preferiría encargarme de la difusión."
    },

    {
        id: 21,
        area: "comunicacion",
        tipo: "inversa",
        peso: 3,
        inversa: true,
        texto: "Diseñar publicaciones o materiales gráficos me parece aburrido."
    },

    {
        id: 22,
        area: "comunicacion",
        tipo: "inversa",
        peso: 2,
        inversa: true,
        texto: "No me interesa aprender herramientas de edición."
    },

    {
        id: 23,
        area: "comunicacion",
        tipo: "inversa",
        peso: 2,
        inversa: true,
        texto: "Las redes sociales no son importantes para que una organización crezca."
    },

    {
        id: 24,
        area: "comunicacion",
        tipo: "inversa",
        peso: 3,
        inversa: true,
        texto: "Prefiero evitar cualquier actividad relacionada con comunicación."
    },

    {
        id: 25,
        area: "comunicacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "Si tuvieras que elegir una tarea para un evento, ¿cuál preferirías?",
        opciones: [
            {
                texto: "Diseñar toda la campaña de difusión.",
                area: "comunicacion"
            },
            {
                texto: "Organizar la logística del evento.",
                area: "proyectos"
            },
            {
                texto: "Conseguir aliados y patrocinadores.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 26,
        area: "comunicacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué actividad disfrutarías más?",
        opciones: [
            {
                texto: "Editar un video promocional.",
                area: "comunicacion"
            },
            {
                texto: "Coordinar al equipo del evento.",
                area: "proyectos"
            },
            {
                texto: "Hablar con empresas para crear alianzas.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 27,
        area: "comunicacion",
        tipo: "forced",
        peso: 2,
        inversa: false,
        texto: "¿Qué actividad elegirías primero?",
        opciones: [
            {
                texto: "Crear publicaciones para Instagram.",
                area: "comunicacion"
            },
            {
                texto: "Hacer un cronograma.",
                area: "proyectos"
            },
            {
                texto: "Dar la bienvenida a nuevos voluntarios.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 28,
        area: "comunicacion",
        tipo: "forced",
        peso: 2,
        inversa: false,
        texto: "¿Qué logro te haría sentir más orgulloso?",
        opciones: [
            {
                texto: "Una campaña con miles de personas alcanzadas.",
                area: "comunicacion"
            },
            {
                texto: "Un evento perfectamente organizado.",
                area: "proyectos"
            },
            {
                texto: "Conseguir nuevos aliados estratégicos.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 29,
        area: "comunicacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "Si solo pudieras aprender una habilidad nueva, elegirías...",
        opciones: [
            {
                texto: "Diseño y marketing digital.",
                area: "comunicacion"
            },
            {
                texto: "Gestión de proyectos.",
                area: "proyectos"
            },
            {
                texto: "Negociación y relaciones públicas.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 30,
        area: "comunicacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué rol te imaginas desempeñando con mayor satisfacción dentro de JA Alumni?",
        opciones: [
            {
                texto: "Liderar la comunicación y promoción.",
                area: "comunicacion"
            },
            {
                texto: "Planear eventos nacionales.",
                area: "proyectos"
            },
            {
                texto: "Fortalecer la comunidad y las alianzas.",
                area: "vinculacion"
            }
        ]
    }

];

const preguntasVinculacion = [

    {
        id: 31,
        area: "vinculacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Disfruto conocer personas nuevas y crear relaciones de confianza."
    },

    {
        id: 32,
        area: "vinculacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me gusta ayudar a que otras personas se sientan bienvenidas e integradas en un equipo."
    },

    {
        id: 33,
        area: "vinculacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Cuando alguien tiene un problema, suelo escuchar antes de dar una opinión."
    },

    {
        id: 34,
        area: "vinculacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Disfruto trabajar en actividades donde el objetivo principal es apoyar a otras personas."
    },

    {
        id: 35,
        area: "vinculacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me interesa fortalecer el sentido de comunidad dentro de una organización."
    },

    {
        id: 36,
        area: "vinculacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me siento cómodo representando a una organización frente a otras personas."
    },

    {
        id: 37,
        area: "vinculacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Disfruto organizar actividades para integrar equipos de trabajo."
    },

    {
        id: 38,
        area: "vinculacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me gusta motivar a las personas para que participen en proyectos."
    },

    {
        id: 39,
        area: "vinculacion",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Creo que mantener buenas relaciones humanas es tan importante como cumplir objetivos."
    },

    {
        id: 40,
        area: "vinculacion",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me interesa aprender técnicas de liderazgo y desarrollo de personas."
    },

    {
        id: 41,
        area: "vinculacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Si un nuevo integrante llega a la organización, procuraría ayudarle a integrarse rápidamente."
    },

    {
        id: 42,
        area: "vinculacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Cuando dos personas tienen un conflicto, intento encontrar un punto de acuerdo antes de tomar partido."
    },

    {
        id: 43,
        area: "vinculacion",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Si noto que alguien ha dejado de participar, buscaría conversar con esa persona para conocer la razón."
    },

    {
        id: 44,
        area: "vinculacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Si una empresa muestra interés en colaborar, me gustaría participar en la reunión para construir la relación."
    },

    {
        id: 45,
        area: "vinculacion",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Me gusta reconocer el esfuerzo de las personas y agradecer su participación."
    },

    {
        id: 46,
        area: "vinculacion",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Disfruto organizar dinámicas para mejorar el trabajo en equipo."
    },

    {
        id: 47,
        area: "vinculacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Cuando un voluntario necesita apoyo, procuro acompañarlo hasta que encuentre una solución."
    },

    {
        id: 48,
        area: "vinculacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Si una alianza con otra organización puede beneficiar al equipo, me entusiasma participar en su desarrollo."
    },

    {
        id: 49,
        area: "vinculacion",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Me interesa conocer las fortalezas de cada integrante para ayudar a ubicarlo donde pueda aportar más."
    },

    {
        id: 50,
        area: "vinculacion",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Considero que escuchar activamente es una habilidad esencial para cualquier líder."
    },

    {
        id: 51,
        area: "vinculacion",
        tipo: "inversa",
        peso: 3,
        inversa: true,
        texto: "Prefiero trabajar completamente solo y evitar colaborar con otras personas."
    },

    {
        id: 52,
        area: "vinculacion",
        tipo: "inversa",
        peso: 3,
        inversa: true,
        texto: "No me interesa conocer personas nuevas dentro de una organización."
    },

    {
        id: 53,
        area: "vinculacion",
        tipo: "inversa",
        peso: 2,
        inversa: true,
        texto: "Evito participar en actividades donde tenga que interactuar con mucha gente."
    },

    {
        id: 54,
        area: "vinculacion",
        tipo: "inversa",
        peso: 3,
        inversa: true,
        texto: "Resolver conflictos entre personas me parece una pérdida de tiempo."
    },

    {
        id: 55,
        area: "vinculacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué actividad elegirías con mayor entusiasmo?",
        opciones: [
            { texto: "Dar la bienvenida y acompañar a nuevos voluntarios.", area: "vinculacion" },
            { texto: "Diseñar la imagen del evento.", area: "comunicacion" },
            { texto: "Coordinar la logística del evento.", area: "proyectos" }
        ]
    },

    {
        id: 56,
        area: "vinculacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué logro te haría sentir más satisfecho?",
        opciones: [
            { texto: "Crear una comunidad unida y participativa.", area: "vinculacion" },
            { texto: "Lanzar una campaña muy exitosa.", area: "comunicacion" },
            { texto: "Organizar un evento sin errores.", area: "proyectos" }
        ]
    },

    {
        id: 57,
        area: "vinculacion",
        tipo: "forced",
        peso: 2,
        inversa: false,
        texto: "Si sólo pudieras aprender una habilidad nueva, elegirías...",
        opciones: [
            { texto: "Negociación y relaciones institucionales.", area: "vinculacion" },
            { texto: "Marketing digital.", area: "comunicacion" },
            { texto: "Administración de proyectos.", area: "proyectos" }
        ]
    },

    {
        id: 58,
        area: "vinculacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "En una reunión importante, preferirías...",
        opciones: [
            { texto: "Presentar la organización a posibles aliados.", area: "vinculacion" },
            { texto: "Mostrar la campaña de difusión.", area: "comunicacion" },
            { texto: "Explicar el plan operativo.", area: "proyectos" }
        ]
    },

    {
        id: 59,
        area: "vinculacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué actividad disfrutas más?",
        opciones: [
            { texto: "Escuchar las ideas de las personas y ayudarlas a desarrollarlas.", area: "vinculacion" },
            { texto: "Crear contenido creativo.", area: "comunicacion" },
            { texto: "Organizar tareas y tiempos.", area: "proyectos" }
        ]
    },

    {
        id: 60,
        area: "vinculacion",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué rol te imaginas desempeñando dentro de JA Alumni?",
        opciones: [
            { texto: "Fortalecer la comunidad y construir alianzas.", area: "vinculacion" },
            { texto: "Dirigir la comunicación institucional.", area: "comunicacion" },
            { texto: "Liderar la organización de eventos.", area: "proyectos" }
        ]
    }

];

const preguntasProyectos = [

    {
        id: 61,
        area: "proyectos",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Disfruto organizar actividades siguiendo un plan bien definido."
    },

    {
        id: 62,
        area: "proyectos",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me gusta elaborar cronogramas para asegurar que todo ocurra a tiempo."
    },

    {
        id: 63,
        area: "proyectos",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me siento cómodo coordinando varias tareas al mismo tiempo."
    },

    {
        id: 64,
        area: "proyectos",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Prefiero trabajar con procesos claros antes que improvisar."
    },

    {
        id: 65,
        area: "proyectos",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Disfruto encontrar soluciones cuando surge un problema inesperado."
    },

    {
        id: 66,
        area: "proyectos",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me gusta administrar recursos para aprovecharlos de la mejor manera."
    },

    {
        id: 67,
        area: "proyectos",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me motiva coordinar equipos para alcanzar una meta en común."
    },

    {
        id: 68,
        area: "proyectos",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Me gusta llevar listas de pendientes y dar seguimiento hasta concluirlas."
    },

    {
        id: 69,
        area: "proyectos",
        tipo: "likert",
        peso: 2,
        inversa: false,
        texto: "Disfruto revisar que cada detalle esté listo antes de iniciar una actividad."
    },

    {
        id: 70,
        area: "proyectos",
        tipo: "likert",
        peso: 3,
        inversa: false,
        texto: "Me siento satisfecho cuando un proyecto termina exitosamente gracias a una buena organización."
    },

    {
        id: 71,
        area: "proyectos",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Si un proveedor cancela de último momento, buscaría rápidamente una alternativa para que el evento continúe."
    },

    {
        id: 72,
        area: "proyectos",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Si un equipo tiene muchas tareas pendientes, propondría reorganizar responsabilidades para cumplir los objetivos."
    },

    {
        id: 73,
        area: "proyectos",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Antes de comenzar una actividad importante, verifico que todos tengan claro qué deben hacer."
    },

    {
        id: 74,
        area: "proyectos",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Cuando aparecen varios problemas al mismo tiempo, mantengo la calma y establezco prioridades."
    },

    {
        id: 75,
        area: "proyectos",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Después de terminar un proyecto, me gusta analizar qué funcionó y qué puede mejorar."
    },

    {
        id: 76,
        area: "proyectos",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Si organizara un evento nacional, disfrutaría coordinar todas las áreas para que trabajen de forma sincronizada."
    },

    {
        id: 77,
        area: "proyectos",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Me gusta preparar planes alternativos por si algo sale diferente a lo esperado."
    },

    {
        id: 78,
        area: "proyectos",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Cuando hay poco tiempo para terminar una tarea, organizo el trabajo antes de comenzar."
    },

    {
        id: 79,
        area: "proyectos",
        tipo: "situacional",
        peso: 2,
        inversa: false,
        texto: "Me interesa aprender metodologías para mejorar la gestión de proyectos."
    },

    {
        id: 80,
        area: "proyectos",
        tipo: "situacional",
        peso: 3,
        inversa: false,
        texto: "Disfruto asumir la responsabilidad de coordinar actividades importantes."
    },

    {
        id: 81,
        area: "proyectos",
        tipo: "inversa",
        peso: 3,
        inversa: true,
        texto: "No me gusta planificar actividades con anticipación."
    },

    {
        id: 82,
        area: "proyectos",
        tipo: "inversa",
        peso: 3,
        inversa: true,
        texto: "Prefiero improvisar en lugar de seguir un plan."
    },

    {
        id: 83,
        area: "proyectos",
        tipo: "inversa",
        peso: 2,
        inversa: true,
        texto: "Me desespera organizar tareas o coordinar personas."
    },

    {
        id: 84,
        area: "proyectos",
        tipo: "inversa",
        peso: 3,
        inversa: true,
        texto: "No disfruto asumir responsabilidades de organización."
    },

    {
        id: 85,
        area: "proyectos",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "Si mañana hubiera un evento nacional, ¿qué actividad elegirías?",
        opciones: [
            {
                texto: "Coordinar toda la logística y el cronograma.",
                area: "proyectos"
            },
            {
                texto: "Diseñar la campaña de difusión.",
                area: "comunicacion"
            },
            {
                texto: "Recibir invitados y fortalecer alianzas.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 86,
        area: "proyectos",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué logro te haría sentir más orgulloso?",
        opciones: [
            {
                texto: "Que el evento se desarrollara sin ningún contratiempo.",
                area: "proyectos"
            },
            {
                texto: "Que la campaña llegara a miles de personas.",
                area: "comunicacion"
            },
            {
                texto: "Conseguir nuevos aliados para la organización.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 87,
        area: "proyectos",
        tipo: "forced",
        peso: 2,
        inversa: false,
        texto: "¿Qué habilidad te gustaría desarrollar primero?",
        opciones: [
            {
                texto: "Gestión de proyectos y metodologías ágiles.",
                area: "proyectos"
            },
            {
                texto: "Diseño gráfico y comunicación digital.",
                area: "comunicacion"
            },
            {
                texto: "Liderazgo y relaciones institucionales.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 88,
        area: "proyectos",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "Durante una actividad importante, ¿qué rol preferirías asumir?",
        opciones: [
            {
                texto: "Coordinar que todas las tareas se realicen a tiempo.",
                area: "proyectos"
            },
            {
                texto: "Documentar el evento y crear contenido.",
                area: "comunicacion"
            },
            {
                texto: "Atender a invitados, aliados y voluntarios.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 89,
        area: "proyectos",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué tipo de reto disfrutas más?",
        opciones: [
            {
                texto: "Resolver problemas de organización y logística.",
                area: "proyectos"
            },
            {
                texto: "Crear ideas innovadoras para comunicar un mensaje.",
                area: "comunicacion"
            },
            {
                texto: "Construir relaciones entre personas y organizaciones.",
                area: "vinculacion"
            }
        ]
    },

    {
        id: 90,
        area: "proyectos",
        tipo: "forced",
        peso: 3,
        inversa: false,
        texto: "¿Qué rol imaginas desempeñando dentro de JA Alumni México?",
        opciones: [
            {
                texto: "Coordinar proyectos, eventos y procesos.",
                area: "proyectos"
            },
            {
                texto: "Liderar la estrategia de comunicación.",
                area: "comunicacion"
            },
            {
                texto: "Fortalecer la comunidad y las alianzas institucionales.",
                area: "vinculacion"
            }
        ]
    }

];


const QUESTION_BANK = [

    ...preguntasComunicacion,

    ...preguntasVinculacion,

    ...preguntasProyectos

];