<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Los datos y su tratamiento son vitales para la gestión de un negocio exitoso y para poder transformarlos en conversiones, estos datos y métricas requieren de técnicas de análisis, <em>software</em> especializado y ciertas competencias que permiten que las bases de datos se mantengan con información fiable y se actualicen; a continuación, se presenta un esquema general de ello en la siguiente síntesis.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-6.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .row.aling.my-2 
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
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
