<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Consideraciones transversales para la asesoría TIC

    separador
    #t_5_1.titulo-segundo.mb-5
      h2 5.1 Derechos de autor y Recursos Educativos Abiertos (REA)

    separador
    #t_5_2.titulo-segundo.mb-5
      h2 5.2 Seguridad digital y protección de datos
    separador
    #t_5_3.titulo-segundo.mb-5
      h2 5.3 Accesibilidad e inclusión


</template>

<script>
export default {
  name: 'Tema5',
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
