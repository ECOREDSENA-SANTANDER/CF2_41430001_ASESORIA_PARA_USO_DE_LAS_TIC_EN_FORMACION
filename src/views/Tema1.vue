<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 TIC como mediadoras del proceso de enseñanza y aprendizaje
    
    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/2.svg', alt='')
            p.mb-0 Las Tecnologías de la Información y la Comunicación (TIC) se entienden como un conjunto de herramientas que no solo “transmiten” información, sino que también configuran la manera en que el aprendiz se aproxima al conocimiento, lo practica, lo representa y lo comparte. En este sentido, actúan como mediadoras cuando facilitan interacciones clave: 
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/3.svg' alt='AvatarTop')
          h4.mb-4.text-center Aprendiz y contenido
          p.mb-0.text-center A través de simuladores, recursos multimedia y guías interactivas.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/4.svg' alt='AvatarTop')
          h4.mb-4.text-center Aprendiz y tutor
          p.mb-0.text-center Mediante orientaciones, retroalimentación y seguimiento.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg2.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
          h4.mb-4.text-center Aprendiz y aprendiz
          p.mb-0.text-center Por medio de la colaboración, la coevaluación y la construcción conjunta del conocimiento.
          
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Así, herramientas como plataformas virtuales, wikis o TV web no “enseñan” por sí mismas; su valor radica en la posibilidad de potenciar experiencias didácticas, dependiendo de cómo se diseñen las actividades, los criterios de evaluación y las evidencias de aprendizaje, así como del contexto en el que se implementan (conectividad, disponibilidad de tiempo y diversidad del grupo).
            br
            br
            p.mb-0 Por esta razón, la asesoría en TIC exige un sólido criterio pedagógico y es por ello por lo que, se hace fundamental seleccionar tecnologías que respondan a necesidades formativas concretas como: 
    
    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg3.p-4.h-100.cen
          p.mb-0.text-center La baja práctica. 
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg3.p-4.h-100.cen
          p.mb-0.text-center La limitada autonomía del aprendiz. 
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg3.p-4.h-100.cen
          p.mb-0.text-center La necesidad de colaboración o de acceso flexible. 
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg3.p-4.h-100.cen
          p.mb-0.text-center La promoción de aprendizajes verificables.
    
    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Una mediación bien diseñada contribuye a reducir la incertidumbre del aprendiz mediante instrucciones claras, rutas de aprendizaje estructuradas y recursos organizados; asimismo, mejora el desempeño a través de la práctica guiada, la retroalimentación oportuna, y fortalece la motivación al generar sentido, comunidad y acompañamiento.
    
    p.mb-5(data-aos="fade-left") En contraste, cuando las TIC se utilizan únicamente como repositorios de información o canales de mensajería sin una estrategia pedagógica definida, su potencial mediador se debilita: aumenta la desorientación, disminuye la participación y el aprendizaje tiende a ser superficial.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Figura 1.
          | Esquema de mediación pedagógica con TIC y sus interacciones clave en el aprendizaje
        .row.justify-content-center.align-items-stretch.mb-0
          .col-lg-6
            img.h-100(src='@/assets/curso/tema1/7.svg', alt='Representa un modelo de mediación pedagógica con TIC donde el aprendizaje se construye a partir de interacciones bidireccionales entre el aprendiz, las tecnologías y el tutor. Estas relaciones se articulan con el contenido como eje orientador y se proyectan hacia la comunidad, evidenciando un proceso formativo conectado, dinámico y contextualizado.')
          .col-lg-6.d-none.d-lg-block
            img.h-100(src='@/assets/curso/tema1/8.png', alt='Representa un modelo de mediación pedagógica con TIC donde el aprendizaje se construye a partir de interacciones bidireccionales entre el aprendiz, las tecnologías y el tutor. Estas relaciones se articulan con el contenido como eje orientador y se proyectan hacia la comunidad, evidenciando un proceso formativo conectado, dinámico y contextualizado.')

    .titulo.mb-5(data-aos="fade-left")
      .titulo__icono
      .titulo__texto
        img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Las TIC como mediadoras del aprendizaje
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/9.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg4.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-4(
                texto="Pódcast:"
                :audio="require('@/assets/actividad/audio/Podcast_CF2_41430001_Guion_Las_TIC_como_mediadoras_del_aprendizaje.mp3')"
            ).mb-4
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 A continuación, se presenta un pódcast que amplía la temática sobre las TIC como mediadoras del aprendizaje en ambientes virtuales, y su impacto en la calidad de los procesos formativos, la interacción educativa y el acompañamiento pedagógico.
    

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Conceptos clave para comprender la mediación TIC
    
    p.mb-5(data-aos="fade-right") Para comprender la mediación de las TIC en un proceso formativo, es necesario partir de tres conceptos fundamentales que funcionan como referentes para la toma de decisiones pedagógicas: la mediación didáctica, la interacción y la presencia.

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Mediación didáctica")
            .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
              img(src='@/assets/curso/tema1/10.png')
            .col-lg-6.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
              p.mb-0 Se refiere al conjunto de decisiones intencionales que el tutor diseña para favorecer el aprendizaje. Esto implica seleccionar recursos pertinentes (videos, guías, simuladores, foros), definir actividades significativas (análisis de casos, ejercicios prácticos, elaboración de productos), establecer formas de interacción (sincrónica o asincrónica) y determinar estrategias de evaluación (rúbricas, listas de chequeo, coevaluación). En este sentido, no se trata únicamente de incorporar tecnología, sino de estructurar una experiencia de aprendizaje coherente, donde exista una relación clara entre el propósito formativo, las actividades propuestas y las evidencias esperadas, permitiendo al aprendiz comprender qué hacer, con qué herramientas y cómo demostrar sus logros.
          .row.justify-content-center.align-items-center(titulo="Interacción")
            .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
              img(src='@/assets/curso/tema1/11.png')
            .col-lg-6.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
              p.mb-0 Constituye el eje dinamizador del aprendizaje en entornos mediados por TIC. Se manifiesta en tres niveles: la interacción aprendiz–contenido, que ocurre cuando el aprendiz accede, comprende y practica mediante recursos educativos; la interacción aprendiz–tutor, que se evidencia en la orientación, el seguimiento y la retroalimentación oportuna; y la interacción aprendiz–aprendiz, que potencia el trabajo colaborativo, el pensamiento crítico y la construcción colectiva de conocimiento a través de espacios como foros, wikis o actividades de coevaluación.
          .row.justify-content-center.align-items-center(titulo="Presencia")
            .col-lg-5.col-md-8.col-10.order-lg-1.order-md-2.order-2
              img(src='@/assets/curso/tema1/12.png')
            .col-lg-6.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
              p.mb-0 Es el elemento que humaniza los entornos virtuales y evita la sensación de aislamiento. La presencia cognitiva se refleja en la capacidad del aprendiz para analizar, argumentar y resolver problemas; la presencia docente se evidencia en la claridad de las orientaciones, la definición de criterios y el acompañamiento constante; y la presencia social se construye mediante la interacción respetuosa, la confianza y la participación activa, favoreciendo la consolidación de una verdadera comunidad de aprendizaje.
    
    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 En conjunto, estos tres conceptos permiten comprender que la mediación TIC no depende de la herramienta en sí misma, sino de cómo se diseña, se orienta y se vive la experiencia formativa.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Figura 2.
          | Conceptos clave para comprender la mediación TIC
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6
            img(src='@/assets/curso/tema1/13.svg', alt='Organiza la mediación TIC como un eje central del proceso formativo, estructurado en tres componentes: mediación didáctica, interacción y presencia. Cada uno integra elementos clave como el diseño pedagógico, las relaciones entre actores del aprendizaje y las condiciones de acompañamiento, evidenciando un enfoque articulado para favorecer la construcción del conocimiento.')
          .col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/tema1/14.png', alt='Texto que describa la imagen')
    
    
    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Principios pedagógicos para integrar TIC con sentido

    p.mb-5(data-aos="fade-right") La integración de las TIC en los procesos formativos es efectiva cuando se basa en tres principios clave:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12.offset-lg-0
        .row.justify-content-center.align-items-end
          .col-lg-9.ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/15.svg", alt="alt")
                .col
                  p.mb-0 Primero, debe existir un propósito formativo claro: definir qué se espera que el estudiante aprenda y cómo lo va a demostrar.
            .crd.crd--avatarHorizontal.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/16.svg", alt="alt")
                .col
                  p.mb-0 Segundo, es necesario organizar una secuencia didáctica coherente, que incluya momentos de inicio (activación de saberes previos), desarrollo (comprensión y práctica), aplicación (uso en situaciones concretas) y cierre (reflexión y consolidación).
            .crd.crd--avatarHorizontal.crd--last.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/tema1/17.svg", alt="alt")
                .col
                  p.mb-0 Tercero, la evaluación debe estar alineada con lo anterior, valorando el desempeño del estudiante según los objetivos planteados.
          .col-lg-4.sob1.d-none.d-lg-block
            img.img-t(src="@/assets/curso/tema1/18.svg", alt="alt")

    .cajon.color-acento-contenido.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-0 Además, es importante equilibrar tres aspectos: lo pedagógico (cómo enseñar), lo disciplinar (qué enseñar) y lo tecnológico (con qué herramientas). La tecnología puede utilizarse de distintas maneras, desde apoyar tareas ya existentes hasta transformar completamente la forma en que se aprende. Por ello, no se trata solo de usar herramientas digitales, sino de emplearlas con sentido pedagógico para mejorar realmente el aprendizaje.


</template>

<script>
export default {
  name: 'Tema1',
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
