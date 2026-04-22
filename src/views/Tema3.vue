<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Características del tutor en entornos mediados por TIC

    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/2.svg', alt='')
            p.mb-0 En entornos mediados por TIC, el tutor no se limita a “resolver dudas”: diseña rutas, acompaña procesos, genera comunidad, administra tiempos y promueve autonomía. La labor combina decisiones pedagógicas y acciones de acompañamiento que mantienen el rumbo del aprendizaje.

    .titulo.mb-5(data-aos="fade-right")
      .titulo__icono
      .titulo__texto
        img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Roles del tutor en entornos mediados por TIC 
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bg1.p-lg-5.p-4.d-none.d-md-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              img.img-t.img-a(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
            .tarjeta.color-acento-botones.p-4(x="19%" y="15%" numero="1")
              .h5.mb-2 Rol pedagógico
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Diseña experiencias
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Orienta
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Modela estrategias
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Acompaña comprensión
            .tarjeta.color-acento-botones.p-4(x="81%" y="15%" numero="2")
              .h5.mb-2 Rol social
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Genera presencia
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Fomenta confianza
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Promueve netiqueta
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Fortalece cohesión
            .tarjeta.color-acento-botones.p-4(x="10%" y="94.5%" numero="3")
              .h5.mb-2 Rol de gestión
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Organiza tiempos
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Define rutas
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Establece criterios
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Gestiona evidencias
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Realiza seguimiento
            .tarjeta.color-acento-botones.p-4(x="90%" y="94.5%" numero="4")
              .h5.mb-2 Rol técnico
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Apoya plataformas
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Orienta recursos
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Resuelve incidencias básicas
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Facilita herramientas

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bg1.p-lg-5.p-4.d-block.d-md-none
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              img.img-t.img-a(src='@/assets/curso/tema3/4.svg', alt='Texto que describa la imagen')
            .tarjeta.color-acento-botones.p-4(x="5%" y="35%" numero="1")
              .h5.mb-2 Rol pedagógico
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Diseña experiencias
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Orienta
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Modela estrategias
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Acompaña comprensión
            .tarjeta.color-acento-botones.p-4(x="94%" y="35%" numero="2")
              .h5.mb-2 Rol social
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Genera presencia
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Fomenta confianza
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Promueve netiqueta
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Fortalece cohesión
            .tarjeta.color-acento-botones.p-4(x="20%" y="88%" numero="3")
              .h5.mb-2 Rol de gestión
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Organiza tiempos
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Define rutas
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Establece criterios
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Gestiona evidencias
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Realiza seguimiento
            .tarjeta.color-acento-botones.p-4(x="79%" y="88%" numero="4")
              .h5.mb-2 Rol técnico
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Apoya plataformas
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Orienta recursos
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Resuelve incidencias básicas
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Facilita herramientas


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Roles del tutor

    p.mb-4(data-aos="fade-left") En entornos mediados por TIC, el tutor asume un rol más amplio que resolver dudas: se convierte en mediador del aprendizaje, responsable de diseñar experiencias, sostener la interacción y asegurar que el proceso avance con claridad y sentido. Esto se logra mediante cuatro roles complementarios:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Caracterización de los roles del tutor en la mediación pedagógica con TIC
        .tabla-a.tab2
          table
            thead
              tr
                th Rol del tutor
                th Propósito principal
                th Funciones clave
                th Cómo se evidencia en la práctica
                th Aporte al aprendizaje
            tbody
              tr
                td Pedagógico
                td Orientar el aprendizaje y convertir los resultados de aprendizaje en actividades concretas.
                td Diseña experiencias, selecciona recursos pertinentes, organiza la secuencia didáctica, modela estrategias y brinda retroalimentación formativa.
                td Plantea preguntas orientadoras, propone ejemplos y contraejemplos, explica cómo construir evidencias, aclara criterios de calidad y orienta mejoras a partir de la rúbrica.
                td Favorece la comprensión, aplicación y mejora continua de los productos del aprendiz.
              tr
                td Social
                td Generar acompañamiento y fortalecer la participación.
                td Da la bienvenida, promueve el respeto, establece normas de convivencia digital, modera conflictos, incentiva la participación y fomenta el trabajo colaborativo.
                td Reconoce avances, motiva a quienes participan menos, organiza debates, coevaluaciones o wikis y mantiene un tono cercano y profesional.
                td Disminuye el aislamiento, fortalece la motivación y consolida comunidades de aprendizaje.
              tr
                td De gestión
                td Organizar y dar claridad al proceso formativo.
                td Define cronograma, entregas, instrucciones, canales oficiales, seguimiento, recordatorios y criterios de evaluación.
                td Publica orientaciones claras, hace seguimiento al avance, entrega retroalimentación oportuna y usa listas de chequeo o rúbricas coherentes con la actividad.
                td Reduce la incertidumbre, mejora la organización del estudiante y eleva la calidad de las evidencias entregadas.
              tr
                td Técnico
                td Evitar que la tecnología se convierta en barrera para aprender.
                td Orienta el uso de la plataforma, explica cómo entregar evidencias, participar en foros y acceder a recursos; ofrece apoyo básico ante dificultades frecuentes.
                td Explica formatos de entrega, rutas de acceso, navegación, nombres de archivos, buenas prácticas de conectividad y alternativas ante limitaciones tecnológicas.
                td Garantiza continuidad, accesibilidad y equidad en el desarrollo de las actividades.

    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 En conjunto, estos cuatro roles garantizan que las TIC actúen verdaderamente como mediadoras del aprendizaje: no se limitan a transmitir contenidos, sino que posibilitan experiencias formativas intencionadas, con interacción significativa, acompañamiento permanente y evidencias claras del logro de los aprendizajes. Por tanto, en la siguiente tabla se presenta un resumen funcional de estos roles:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Resumen funcional de los roles del tutor
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-8
        .tabla-a.tab3
          table
            thead
              tr
                th Rol
                th Pregunta guía
                th Idea central
            tbody
              tr
                td Pedagógico
                td ¿Cómo aprende?
                td Orienta y retroalimenta.
              tr
                td Social
                td ¿Cómo se acompaña?
                td Promueve interacción.
              tr
                td De gestión
                td ¿Cómo se organiza?
                td Ordena y hace seguimiento.
              tr
                td Técnico
                td ¿Cómo se accede?
                td Facilita el uso tecnológico.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/5.png' alt='AvatarTop')


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Competencias del tutor y buenas prácticas en entornos mediados por TIC
    
    p.mb-5(data-aos="fade-right") En entornos virtuales o combinados, las competencias del tutor se concretan en prácticas que sostienen el aprendizaje y contribuyen a reducir la deserción. Tres ejes resultan fundamentales: claridad en la ruta formativa, acompañamiento constante y retroalimentación que impulsa la mejora del desempeño.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema3/6.svg' alt='AvatarTop')
          p.mb-0 La planificación constituye el punto de partida. El tutor define con precisión el propósito de aprendizaje (qué se espera lograr), los tiempos (ritmo de trabajo), las evidencias (productos o desempeños verificables) y los criterios de evaluación (cómo se valorará la calidad). Esta planificación se traduce en una ruta clara para el aprendiz, compuesta por actividades secuenciadas, recursos pertinentes y un calendario realista.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema3/7.svg' alt='AvatarTop')
          p.mb-0 A partir de ello, la comunicación se convierte en una competencia clave. Instrucciones claras, pasos organizados, ejemplos de productos esperados y criterios visibles desde el inicio reducen la incertidumbre y evitan interpretaciones erróneas. De este modo, el estudiante comprende qué hacer, cómo hacerlo y bajo qué estándares será evaluado.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema3/8.svg' alt='AvatarTop')
          p.mb-0 Otra práctica esencial es la retroalimentación oportuna y focalizada. Más que emitir juicios generales, el tutor reconoce avances y orienta mejoras priorizando pocos aspectos de alto impacto. Esto evita la sobrecarga de información y favorece la motivación.

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De manera complementaria, la presencia activa del tutor sostiene el proceso formativo. Acciones como mensajes de seguimiento, recordatorios, tutorías breves y espacios de interacción fortalecen el compromiso y el sentido de pertenencia. En cursos de corta duración, resulta especialmente efectivo implementar intervenciones breves pero frecuentes (inicio, seguimiento y cierre).
        br
        br
        p.mb-0 Asimismo, el tutor debe integrar criterios de inclusión y accesibilidad, garantizando materiales comprensibles, estructuras claras y alternativas de acceso (transcripciones, subtítulos, versiones en texto), así como rutas flexibles que respondan a distintos ritmos y condiciones de conectividad.

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-0 La competencia ética atraviesa todo el proceso: implica el cuidado de los datos, el respeto por los derechos de autor y la promoción de una convivencia digital basada en el respeto y la responsabilidad. Esto permite construir un entorno confiable donde el aprendizaje se desarrolle de manera segura.


    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Acompañamiento y retroalimentación mediada

    p.mb-5(data-aos="fade-right") La retroalimentación mediada por TIC es un componente central del aprendizaje, no una acción posterior ni aislada; puede presentarse en distintos formatos (comentarios escritos en plataformas, anotaciones en documentos, audios, videos o rúbricas). Su valor radica en su carácter formativo: #[b debe ser clara, específica, basada en criterios y orientada a la mejora.]
    
    p.mb-5(data-aos="fade-right") Una retroalimentación efectiva responde a las siguientes preguntas clave:

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg31.p-4.h-100.cen
          p.mb-0.text-center ¿Qué logró?
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg31.p-4.h-100.cen
          p.mb-0.text-center ¿Qué aspectos debe mejorar?
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg31.p-4.h-100.cen
          p.mb-0.text-center ¿Cómo puede hacerlo?
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg31.p-4.h-100.cen
          p.mb-0.text-center ¿Qué debería aplicar en futuras actividades?
    
    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/10.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            p.mb-4 Cuando el tutor vincula sus comentarios con criterios explícitos, como por ejemplo claridad del procedimiento, calidad de la argumentación o cumplimiento de normas técnicas, el estudiante comprende con mayor precisión cómo mejorar su desempeño.
            p.mb-0 En procesos de formación complementaria, donde el tiempo es limitado, se recomienda el uso de rúbricas simples (entre tres y cinco criterios) acompañadas de comentarios breves que prioricen una o dos mejoras clave. Esta estrategia permite enfocar el esfuerzo del aprendiz en aspectos realmente significativos.

    .tit.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-3 Ejemplo de realimentación clara y efectiva

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema3/11.png', alt='')

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg10.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4.my-3(src='@/assets/curso/tema3/12.svg')
          p.mb-lg-4.mb-0.text-white Su evidencia presenta un procedimiento organizado y cumple con lo solicitado (fortaleza). 
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg11.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4.my-3(src='@/assets/curso/tema3/13.svg')
          p.mb-lg-4.mb-0 Para mejorar, incorpore una justificación del material utilizado y una evidencia de la verificación final del proceso (aspectos a fortalecer).
          
    .cajon.color-acento-contenido.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-0 Así, la retroalimentación no solo cierra una actividad, sino que impulsa nuevos aprendizajes, fortalece la autonomía y promueve la mejora a partir de los propios productos del estudiante.
          

</template>

<script>
export default {
  name: 'Tema3',
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
