<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Con el uso de tecnologías de la información para la sistematización, tratamiento y análisis de los datos se logra interpretar la información, estructurar un mapa y elaborar informes de novedades de riesgos, así como administrar <em>software</em> y <em>hardware</em> que facilite el procesamiento de grandes volúmenes de datos. Todo ello implica, de una manera indirecta, usar gráficos y visualizaciones que permitan explorar, analizar, explicar, limpiar o simplemente comprender mejor un conjunto o subconjunto de datos.
    p.mb-5 A continuación, se invita a conocer este tema con más profundidad en el siguiente video introductorio: 
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8BettKA1AgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
