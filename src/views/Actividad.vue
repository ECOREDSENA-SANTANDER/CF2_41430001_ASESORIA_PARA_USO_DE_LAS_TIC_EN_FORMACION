<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Ejecución y evaluación del plan de formación.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con la mediación TIC, modalidades formativas, rol del tutor y uso pertinente de herramientas tecnológicas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué significa que las TIC sean mediadoras del proceso enseñanza-aprendizaje?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que reemplazan completamente al tutor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que transmiten información sin interacción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que configuran la forma en que el aprendiz interactúa con contenido, tutor y compañeros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que funcionan únicamente como repositorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia reconocimiento de las TIC posibilitando interacciones significativas en el aprendizaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado sobre TIC como mediadoras del proceso formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es un elemento clave de la mediación didáctica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar muchas herramientas digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diseñar una ruta coherente entre propósito, actividad y evidencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Publicar materiales sin seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar solo al final del curso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la importancia de la coherencia pedagógica en la mediación TIC',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el concepto de mediación didáctica y su relación con propósito y evidencia.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el rasgo principal de la formación combinada (blended learning)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La integración planificada de actividades presenciales y virtuales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El uso exclusivo de clases virtuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de la presencialidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uso ocasional de redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con blended learning, el cual combina de forma intencional lo presencial y lo virtual para lograr el aprendizaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo sobre formación combinada.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es uno de los roles del tutor en entornos mediados por TIC?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser únicamente transmisor de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delegar la orientación en la plataforma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitarse a calificar evidencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Actuar como mediador pedagógico, social, técnico y de gestión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados en el carácter integral del tutor en entornos digitales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el rol del tutor dentro del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una buena práctica en retroalimentación mediada por TIC?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrecer sugerencias claras y accionables basadas en criterios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calificar sin explicar criterios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dar comentarios generales sin orientación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esperar al final del curso para retroalimentar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la retroalimentación formativa como herramienta de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con acompañamiento y retroalimentación mediada.',
        },
        {
          id: 6,
          texto: '¿Qué función pedagógica cumple una wiki en formación?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicar tareas individuales sin revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Construir conocimiento colaborativo mediante edición conjunta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenar archivos sin interacción.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Sustituir la evaluación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el valor colaborativo de las wikis.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con herramientas tecnológicas.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un criterio clave para seleccionar software educativo?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Que esté de moda.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Que tenga muchos efectos visuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que apoye directamente el resultado de aprendizaje.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Que sea difícil de usar.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la pertinencia pedagógica prioritaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los criterios de selección de software educativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué modelo orienta la ruta de diseño instruccional en ciclos de mejora continua?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'SAMR.', esCorrecta: false },
            { id: 'b', texto: 'TPACK.', esCorrecta: false },
            { id: 'c', texto: 'TPR.', esCorrecta: false },
            { id: 'd', texto: 'ADDIE.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el modelo ADDIE como ruta de diseño y evaluación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la ruta de diseño para orientar una experiencia mediada.',
        },
        {
          id: 9,
          texto:
            '¿Por qué es importante considerar la accesibilidad en asesoría TIC?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para reducir la exigencia académica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para garantizar que todos los aprendices puedan participar y demostrar aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para limitar el uso de herramientas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Para evitar evaluación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la inclusión como criterio de calidad formativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con accesibilidad e inclusión.',
        },
        {
          id: 10,
          texto:
            '¿Qué promueve el uso adecuado de Recursos Educativos Abiertos (REA)?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El respeto por licencias y la reutilización responsable de materiales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El uso indiscriminado de cualquier contenido.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'La copia sin citación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La eliminación de referencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la importancia del respeto por derechos de autor y licencias.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con derechos de autor y REA.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito principal de la interacción aprendiz–contenido en la mediación TIC?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permitir que el tutor evalúe más rápido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el uso de recursos educativos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el trabajo colaborativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitar la comprensión y práctica mediante recursos y actividades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia reconocimiento de las TIC posibilitando interacciones significativas en el aprendizaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado sobre TIC como mediadoras del proceso formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de presencia evita que la virtualidad se perciba como un proceso frío o aislado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Presencia administrativa.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Presencia cognitiva, docente y social.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Presencia tecnológica.', esCorrecta: false },
            { id: 'd', texto: 'Presencia institucional.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las tres presencias necesarias para sostener comunidades de aprendizaje en entornos virtuales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los conceptos clave para comprender la mediación TIC.',
        },
        {
          id: 13,
          texto: '¿Qué característica distingue al aprendizaje asincrónico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se desarrolla únicamente en clases presenciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se realiza en tiempo real mediante videoconferencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite participar en diferentes momentos según disponibilidad del aprendiz.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina el uso de plataformas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el aprendizaje asincrónico como interacción que no ocurre en tiempo real.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con educación en entornos digitales.',
        },
        {
          id: 14,
          texto:
            '¿Para qué se utilizan principalmente los blogs en procesos formativos mediados por TIC?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como repositorios de archivos sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como portafolios de evidencias y reflexión sobre el aprendizaje.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Para sustituir la tutoría.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Para eliminar las evaluaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de los conceptos relacionados en el uso del blog como herramienta para documentar procesos de aprendizaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el uso del blog como herramienta educativa.',
        },
        {
          id: 15,
          texto:
            'En formación combinada, ¿qué modelo organiza el aprendizaje dejando la teoría para el trabajo autónomo en línea y la práctica para los encuentros presenciales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aula invertida.', esCorrecta: true },
            { id: 'b', texto: 'Rotación por estaciones.', esCorrecta: false },
            { id: 'c', texto: 'Proyecto integrador.', esCorrecta: false },
            { id: 'd', texto: 'Aprendizaje pasivo.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado conocimiento del modelo que prioriza el estudio autónomo en línea y aprovecha la presencialidad para aplicar y profundizar.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con formación combinada.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es una función del rol de gestión del tutor en entornos mediados por TIC?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la evaluación del aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar cronogramas, actividades y seguimiento del proceso formativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir al aprendiz en la realización de actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la participación del grupo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el rol organizador del tutor en el proceso formativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los roles del tutor.',
        },
        {
          id: 17,
          texto:
            '¿Qué elemento fortalece la retroalimentación formativa en entornos digitales?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comentarios generales sin criterios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calificación automática sin explicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Retroalimentación específica basada en criterios de evaluación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evaluación únicamente final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la importancia de criterios claros para mejorar el desempeño.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con acompañamiento y retroalimentación mediada.',
        },
        {
          id: 18,
          texto:
            '¿Qué ventaja pedagógica ofrecen los simuladores en software educativo?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituyen completamente la formación práctica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminan la necesidad de evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impiden la repetición de ejercicios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permiten practicar procedimientos en entornos controlados y seguros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el valor de la simulación para el aprendizaje práctico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con software educativo.',
        },
        {
          id: 19,
          texto:
            '¿Por qué es importante proteger los datos personales en entornos formativos digitales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para evitar el uso de plataformas educativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para garantizar seguridad y confianza en el proceso formativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para eliminar el uso de redes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para impedir la interacción entre aprendices.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la importancia de la seguridad digital y protección de datos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con seguridad digital y protección de datos.',
        },
        {
          id: 20,
          texto:
            '¿Qué principio orienta la selección de herramientas tecnológicas en asesoría TIC?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Seleccionar herramientas según el propósito pedagógico del aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elegir la herramienta más popular.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar la mayor cantidad de herramientas posibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de tecnología.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la importancia de alinear herramientas tecnológicas con objetivos pedagógicos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con herramientas tecnológicas para orientar procesos formativos.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la ejecución y evaluación de procesos formativos mediados por TIC.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
