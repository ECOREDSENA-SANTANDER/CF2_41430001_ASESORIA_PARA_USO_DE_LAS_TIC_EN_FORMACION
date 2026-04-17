<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 Se orienta la puesta en práctica de la planeación pedagógica, asegurando que las TIC medien experiencias de aprendizaje coherentes, acompañadas y evaluables. Integra conceptos clave como mediación didáctica, interacción y presencia, junto con modalidades virtuales y combinadas según el contexto.
    p.mb-5 Se enfatiza el rol del tutor como mediador integral y prácticas esenciales como la planificación, la comunicación clara, la retroalimentación y el acompañamiento. Además, promueve el uso pedagógico de herramientas bajo el criterio propósito – actividad – evidencia – retroalimentación y la mejora continua mediante ADDIE, incorporando aspectos transversales como la ética digital, la accesibilidad y la protección de datos.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
