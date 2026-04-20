<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modalidades de formación que utilizan TIC
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Las modalidades de formación mediadas por TIC se diferencian principalmente por el grado de presencialidad y virtualidad, el tipo de interacción predominante (sincrónica o asincrónica), la flexibilidad en los tiempos y el nivel de autonomía que se espera del aprendiz. Elegir una modalidad implica una decisión pedagógica y logística, ya que requiere considerar si la competencia demanda práctica supervisada, si los estudiantes cuentan con condiciones de conectividad adecuadas, si existe acompañamiento tutorial suficiente y si es posible sostener un ritmo de trabajo constante. 
            br
            br
            p.mb-0 En este sentido, no existe una modalidad superior de manera absoluta; su pertinencia depende de la coherencia entre los resultados de aprendizaje, el contexto y las condiciones reales del grupo, así como de la claridad en la definición de actividades, evidencias, seguimiento y retroalimentación.
    
    
    separador 
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Concepto de educación en entornos digitales
    
    p.mb-5(data-aos="fade-left") La formación en entornos digitales se desarrolla principalmente a través de plataformas de aprendizaje, repositorios de contenido y herramientas de comunicación en línea. Puede integrar momentos sincrónicos, como clases o tutorías en tiempo real, y momentos asincrónicos, como lecturas, foros y actividades prácticas, que permiten al aprendiz avanzar a su propio ritmo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.svg' alt='AvatarTop')
      .col-lg-8
        .bg5.p-lg-5.p-4
          p.mb-4 Su principal fortaleza radica en la flexibilidad de tiempo y lugar, así como en la posibilidad de ampliar el acceso a la educación. Sin embargo, su efectividad depende en gran medida de una adecuada mediación pedagógica, que garantice acompañamiento, orientaciones claras, criterios de evaluación visibles y retroalimentación constante.
          p.mb-0 En este marco, la educación mediada por TIC no se limita al uso de herramientas digitales, sino que implica el diseño intencionado de estrategias didácticas que favorezcan la interacción, la construcción de conocimiento y el desarrollo de competencias, donde la tecnología actúa como un medio para potenciar el aprendizaje.
    
    .row.justify-content-center.align-items-center.fondo1.p-4.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-evenly.align-items-center.mt-lg-5.mb-lg-5.py-lg-5
          .col-lg-8
            .row.justify-content-between.mb-0
              .col-lg-3.col-md-4.mb-lg-0.mb-4
                img.img-t.img-a.mb-4(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
                .bg9.p-2
                  h5.mb-0.text-center Flexibilidad
              .col-lg-3.col-md-4.mb-lg-0.mb-4
                img.img-t.img-a.mb-4(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
                .bg9.p-2
                  h5.mb-0.text-center Escalabilidad
              .col-lg-3.col-md-4.mb-lg-0.mb-4
                img.img-t.img-a.mb-4(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
                .bg9.p-2
                  h5.mb-0.text-center Mediación efectiva


    separador 
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Formación combinada

    p.mb-5(data-aos="fade-right") La formación combinada integra de manera intencional actividades presenciales con experiencias en línea que se complementan y potencian mutuamente. No consiste en añadir una plataforma como una tarea adicional, sino en diseñar una secuencia didáctica en la que lo virtual cumple un propósito claro dentro del proceso de aprendizaje.

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los entornos digitales pueden cumplir diversas funciones: preparar al aprendiz mediante la activación de saberes previos, extender el aprendizaje a través de prácticas adicionales y recursos complementarios, profundizar mediante el análisis de casos y la coevaluación, y evidenciar los resultados mediante portafolios, rúbricas y entregables.
        br
        br
        p.mb-0 El verdadero potencial de esta modalidad se logra cuando la articulación entre lo presencial y lo virtual se planifica de manera coherente, con roles claramente definidos para el tutor y el aprendiz, y con una relación explícita entre las actividades, las evidencias y la evaluación.

    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 En contextos de formación complementaria, esta modalidad es especialmente pertinente cuando los espacios presenciales se destinan a la práctica guiada, mientras que los entornos virtuales se utilizan para la documentación del proceso, la reflexión, la simulación y el desarrollo de actividades colaborativas.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Secuencia didáctica integrada
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-a.tab1
          table
            thead
              tr
                th Fase
                th Propósito
                th Ejemplo de actividad
            tbody
              tr
                td Preparar
                td Activar conocimientos previos.
                td Video introductorio, lectura guiada.
              tr
                td Extender
                td Ampliar y practicar lo aprendido.
                td Ejercicios, recursos interactivos.
              tr
                td Profundizar
                td Analizar y reflexionar.
                td Estudio de caso, foro, coevaluación.
              tr
                td Evidenciar
                td Demostrar el aprendizaje.
                td Portafolio, informe, entrega evaluativa.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/7.png' alt='AvatarTop')

    p.mb-5 Estrategias de diseño en la formación combinada:
    
    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/8.svg')
          h3.mb-4.text-center.text-white Aula invertida
          p.mb-0.text-white El aprendiz aborda los contenidos fundamentales en entornos virtuales mediante microvideos, lecturas guiadas o cuestionarios diagnósticos. El tiempo presencial se destina a la práctica, la resolución de problemas y la retroalimentación. Este patrón resulta especialmente pertinente cuando se busca aprovechar la presencialidad para actividades de mayor complejidad, acompañamiento o aplicación del conocimiento.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/9.svg')
          h3.mb-4.text-center Rotación por estaciones
          p.mb-0 Los aprendices transitan de manera organizada entre diferentes espacios de aprendizaje, como la práctica presencial, el uso de simuladores o #[em software] educativo y el trabajo colaborativo en línea. Este enfoque permite atender diversos ritmos de aprendizaje, diversificar las experiencias formativas y optimizar el uso de los recursos disponibles.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-0
        .bg8.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/10.svg')
          h3.mb-4.text-center.text-white Proyecto integrador
          p.mb-0.text-white La presencialidad se orienta al desarrollo práctico del proyecto, incluyendo la construcción, demostración y ajuste del producto. Por su parte, el entorno virtual se utiliza para documentar avances, analizar decisiones, construir evidencias y realizar procesos de coevaluación. Este patrón favorece la autonomía, la gestión del tiempo y la consolidación de portafolios de aprendizaje.


    separador 
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Wikis, blogs, redes sociales, #[em software] educativo y medios

    p.mb-5 Más que constituir modalidades independientes, estas herramientas actúan como componentes que fortalecen los procesos formativos en entornos virtuales o combinados, ya que permiten responder a necesidades específicas del aprendizaje.

    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema2/11.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/12.svg', alt='')
            p.mb-0 Por ejemplo, un blog puede utilizarse como portafolio digital para evidenciar avances y promover la reflexión, haciendo visible el aprendizaje. Una wiki facilita la construcción colectiva del conocimiento, al funcionar como repositorio de contenidos o manual de procedimientos en constante actualización. Por su parte, las redes sociales pueden convertirse en espacios de interacción, divulgación y aprendizaje informal, siempre que su uso esté orientado por un propósito pedagógico claro, normas de participación definidas y criterios de seguimiento.

    .cajon.color-acento-botones.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-4 En cuanto al #[em software] educativo, como simuladores o plataformas de práctica guiada, este permite desarrollar habilidades mediante la experimentación y la retroalimentación inmediata. Asimismo, los medios de comunicación, como la TV web o los contenidos digitales de amplio alcance, apoyan procesos de demostración, sensibilización y difusión del conocimiento.
      p.mb-0 El valor pedagógico de estas herramientas no radica únicamente en su uso, sino en la manera en que se integran dentro de una secuencia didáctica. Su potencial se maximiza cuando se articulan con actividades de aplicación, espacios de discusión y procesos de retroalimentación que orienten y consoliden el aprendizaje.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
