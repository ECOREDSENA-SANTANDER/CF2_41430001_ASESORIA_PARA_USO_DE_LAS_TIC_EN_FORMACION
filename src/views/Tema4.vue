<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas tecnológicas para orientar procesos formativos
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque2.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Para ampliar la comprensión de este tema, es fundamental reconocer que las herramientas tecnológicas no deben utilizarse por tendencia o novedad, sino en función de su aporte real al aprendizaje, pues toda actividad mediada por TIC debe estructurarse de manera coherente a partir de cuatro elementos clave:
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg12.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/2.svg' alt='AvatarTop')
          h4.mb-4.text-center Propósito
          p.mb-0 Define el aprendizaje que se espera alcanzar, orientando el sentido de la actividad.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg12.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/3.svg' alt='AvatarTop')
          h4.mb-4.text-center Actividad
          p.mb-0 Describe las acciones que el estudiante debe realizar para lograr el propósito planteado.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg12.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/4.svg' alt='AvatarTop')
          h4.mb-4.text-center Evidencia
          p.mb-0 Corresponde al producto o desempeño mediante el cual el estudiante demuestra lo aprendido.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg12.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/5.svg' alt='AvatarTop')
          h4.mb-4.text-center Retroalimentación
          p.mb-0 Brinda orientaciones que permiten reconocer aciertos, identificar aspectos por mejorar y fortalecer el proceso de aprendizaje.

    p.mb-0 A partir de estos elementos, se pueden utilizar diferentes herramientas tecnológicas, cada una con un propósito específico:
    
    .row.justify-content-center.align-items-center.fondo2.p-lg-5.p-4.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-3.d-none.d-lg-block
            img.img-t(src="@/assets/curso/tema4/6.png", alt="alt")
          .col-lg-9
            SlyderF(columnas="col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
                .row.justify-content-center.align-items-center.mb-4.mt-lg-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/7.svg' alt='AvatarTop')
                .bg44.p-1.mb-4
                  h4.text-center.text-white.mb-0.ps-2.pe-2 Wikis
                p.mb-0.text-center Son espacios de construcción colaborativa. Permiten que varios estudiantes trabajen juntos en la creación de contenidos como manuales, glosarios o proyectos. Favorecen el trabajo en equipo, la organización de ideas y la mejora continua de los productos. 
              .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
                .row.justify-content-center.align-items-center.mb-4.mt-lg-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/8.svg' alt='AvatarTop')
                .bg44.p-1.mb-4
                  h4.text-center.text-white.mb-0.ps-2.pe-2 Blogs
                p.mb-0.text-center Funcionan como portafolios de aprendizaje. En ellos, el estudiante puede publicar sus avances, reflexiones y evidencias. Ayudan a desarrollar la capacidad de análisis, autoevaluación y comunicación de ideas. 
              .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
                .row.justify-content-center.align-items-center.mb-4.mt-lg-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/9.svg' alt='AvatarTop')
                .bg44.p-1.mb-4
                  h4.text-center.text-white.mb-0.ps-2.pe-2 Redes sociales
                p.mb-0.text-center Facilitan la interacción, el intercambio de ideas y la construcción de comunidad. Su uso debe ser orientado por normas claras, con el fin de promover la participación respetuosa y el aprendizaje colaborativo. 
              .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
                .row.justify-content-center.align-items-center.mb-4.mt-lg-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/10.svg' alt='AvatarTop')
                .bg44.p-1.mb-4
                  h4.text-center.text-white.mb-0.ps-2.pe-2 #[em Software] educativo
                p.mb-0.text-center Incluye simuladores, plataformas de práctica y aplicaciones interactivas. Permite aprender haciendo, practicar habilidades y recibir retroalimentación inmediata, especialmente en actividades que requieren repetición o precisión. 
              .tarjeta.tarjeta--slyder.b2.p-2.p-lg-3.p-md-3
                .row.justify-content-center.align-items-center.mb-4.mt-lg-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema4/11.svg' alt='AvatarTop')
                .bg44.p-1.mb-4
                  h4.text-center.text-white.mb-0.ps-2.pe-2 #[em Mass media] y TV web
                p.mb-0.text-center Son recursos como videos, programas o contenidos digitales que apoyan la explicación de temas. Su valor aumenta cuando se acompañan de actividades que permitan aplicar lo aprendido y evitar un aprendizaje pasivo. 

    .cajon.color-secundario.p-lg-5.p-4.mb-0(data-aos="fade-left")
      p.mb-0 Estas herramientas no son un fin en sí mismas, sino medios que, bien utilizados, fortalecen la comprensión, la práctica y la construcción del conocimiento. Lo más importante es que siempre estén alineadas con el propósito de aprendizaje y las evidencias que se esperan lograr.


    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Ruta de diseño para orientar una experiencia mediada

    p.mb-5 Para asesorar procesos de formación mediados por TIC, es fundamental contar con una ruta de diseño que articule el diagnóstico, la estrategia didáctica y la evidencia de aprendizaje, evitando la improvisación. 

    .row.justify-content-center.align-items-center.fondo3.p-lg-5.p-4.mb-4(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-stretch.mb-0
          .col-lg-4
            .bgw.p-lg-5.p-4.h-100
              .row.justify-content-center.align-items-center.mt-lg-2
                .col-12
                  img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema4/13.svg' alt='AvatarTop')
                  p.mb-0 El modelo ADDIE (Analizar – Diseñar – Desarrollar – Implementar – Evaluar)
          .col-lg-4
            img(src='@/assets/curso/tema4/12.png' alt='AvatarTop')
          .col-lg-4
            .bgw.p-lg-5.p-4.h-100
              .row.justify-content-center.align-items-center.mt-lg-2
                .col-12
                  img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema4/13.svg' alt='AvatarTop')
                  p.mb-0 Ofrece una estructura clara y funcional para planear, ejecutar y mejorar experiencias formativas en ciclos continuos.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Análisis")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Se examina el contexto, considerando el perfil de los estudiantes, sus necesidades, los recursos disponibles y las condiciones del entorno. 
          .tarjeta.color-a.p-4(titulo="Diseño")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Se estructura la secuencia didáctica, definiendo actividades, evidencias y criterios de evaluación alineados con los resultados de aprendizaje. 
          .tarjeta.color-a.p-4(titulo="Desarrollo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Se elaboran o seleccionan los recursos y materiales necesarios para apoyar el proceso formativo. 
          .tarjeta.color-a.p-4(titulo="Implementación")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Se ejecuta la propuesta formativa, garantizando acompañamiento y seguimiento al estudiante. 
          .tarjeta.color-a.p-4(titulo="Evaluación")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Se valoran el proceso y los resultados, con el fin de identificar mejoras y realizar los ajustes necesarios. 

    .cajon.color-primario.p-lg-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Desde esta perspectiva, el modelo ADDIE permite que la selección de herramientas tecnológicas no sea aislada ni basada en preferencias, sino en su función dentro del diseño pedagógico (colaborar, practicar, evidenciar o retroalimentar). De esta manera, la asesoría en TIC se consolida como una práctica profesional fundamentada en decisiones pedagógicas coherentes y orientadas al logro de los aprendizajes.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Ruta de diseño ADDIE aplicada a experiencias mediadas por TIC
        .tabla-a.tab4
          table
            thead
              tr
                th Fase
                th ¿Qué se hace?
                th Enfoque pedagógico
                th Ejemplo en TIC
            tbody
              tr
                td Analizar
                td Se identifican necesidades, perfil del estudiante, contexto y recursos disponibles.
                td Comprender a quién va dirigido el proceso formativo.
                td Diagnóstico de conectividad, nivel digital y conocimientos previos.
              tr
                td Diseñar
                td Se planifican actividades, evidencias y criterios de evaluación.
                td Alinear propósito, actividad y evaluación.
                td Definir foros, tareas, rúbricas y secuencia didáctica.
              tr
                td Desarrollar
                td Se crean o seleccionan recursos y materiales de apoyo.
                td Facilitar el acceso a contenidos y actividades significativas.
                td Elaboración de guías, videos, simuladores o recursos digitales.
              tr
                td Implementar
                td Se ejecuta la propuesta formativa con acompañamiento al estudiante.
                td Promover interacción, seguimiento y participación activa.
                td Uso de plataformas virtuales, tutorías y espacios colaborativos.
              tr
                td Evaluar
                td Se valoran los resultados y se identifican mejoras.
                td Retroalimentar y ajustar el proceso formativo.
                td Análisis de evidencias, retroalimentación y ajustes al curso.


</template>

<script>
export default {
  name: 'Tema4',
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
