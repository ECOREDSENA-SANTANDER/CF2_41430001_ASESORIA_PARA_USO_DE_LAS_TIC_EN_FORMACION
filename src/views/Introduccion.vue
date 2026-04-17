<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la formación integral, las Tecnologías de la Información y la Comunicación (TIC) trascienden su función instrumental para convertirse en mediadoras clave del proceso educativo, pues no solo se limitan al intercambio de información, sino que posibilitan nuevas formas de enseñar, aprender y construir conocimiento de manera colaborativa.
        br
        br
        p.mb-0 En este curso complementario, el aprendiz desarrollará criterios pedagógicos y técnicos que le permitirán asesorar y orientar procesos formativos mediados por TIC; para ello, debe reconocer las características, ventajas y limitaciones de distintas modalidades de formación ya sea virtual, presencial o hibrida, así mismo, aprenderá a seleccionar herramientas tecnológicas pertinentes para el diseño de actividades, evidencias y estrategias de evaluación en entornos digitales.
    
    p.mb-5(data-aos="fade-right") Al finalizar el curso, el aprendiz estará en capacidad de analizar críticamente las modalidades formativas mediadas por TIC, identificando sus condiciones de éxito en diferentes contextos; y utilizar herramientas tecnológicas como wikis, blogs, redes sociales, software educativo y medios digitales para orientar procesos formativos con propósito, seguimiento y retroalimentación efectiva.

    .cajon.color-secundario.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Los contenidos se desarrollan desde un enfoque aplicado, articulando cada concepto con decisiones reales del rol tutorial: qué enseñar, a quién, cómo hacerlo y con qué herramientas. A lo largo del curso, se proponen ejemplos, preguntas orientadoras y actividades prácticas que favorecen el aprendizaje autónomo, el desarrollo del criterio profesional y la transferencia del conocimiento a diversos contextos de formación.

    .row.justify-content-center.align-items-center(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
