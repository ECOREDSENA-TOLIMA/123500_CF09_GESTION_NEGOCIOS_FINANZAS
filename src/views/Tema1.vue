<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Información

    p.mb-5 La información es el resultado del análisis inteligente de los datos capturados y procesados en un momento determinado. Para obtener información de calidad se hace necesario establecer una metodología eficiente en la recolección y almacenamiento de datos, para implementar un instrumento con las preguntas adecuadas aplicando el análisis pertinente con la finalidad de obtener conclusiones significativas para el tema que se desea abordar (glosario it.com, 2022).

    .row.aling.my-5   
      .col-lg-10(data-aos="zoom-in-down")
        .cajon.color-custom-5.p-4.mb-4.p-4
          .row.justify-content-around.align-items-center
            .col-lg-12
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 La información permite aumentar el conocimiento del usuario aportando a la toma decisiones, probabilidades para la elección y suministrar una serie de reglas de evaluación y decisión para fines de control. Además, la información debe estar disponible para cualquier receptor autorizado y cumplir a cabalidad el criterio de transparencia de la información.

    .titulo-quinto.color-primario(data-aos="fade-down")
      h4.color-primario(style="color:#0C5E46") La gestión de la información se puede resumir en cinco pasos, a saber:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Gestión de la información</em>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig_2a.svg', alt='Gráfico que relaciona los cinco aspectos presentes en la gestión de la información, los cuales son: 1. Recolectar datos. 2. Procesar datos. 3. Informar. 4. Distribuir. 5. Analizar tomar decisiones.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig_2b.svg', alt='Gráfico que relaciona los cinco aspectos presentes en la gestión de la información, los cuales son: 1. Recolectar datos. 2. Procesar datos. 3. Informar. 4. Distribuir. 5. Analizar tomar decisiones.') 

    //- #t_1_1.row.mb-3.ps-2(data-aos="zoom-in-down")
    //-   .h4.mb-0.mx-3 1.1 Análisis
    //-   .col-lg-4.bg-color-1.px-4.py-3

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Análisis

    p.mb-5 Los datos se logran clasificar de acuerdo a su tipo y estructura; dependiendo del tipo y la estructura se pueden manipular mediante operaciones aritméticas o lógicas que darán como resultado la información que se quiere entregar. Para investigar y analizar este conjunto de datos y clasificar sus características se utiliza el Análisis Exploratorio de Datos (EDA, por sus siglas en inglés). 

    .titulo-quinto.color-primario(data-aos="fade-down")
      h4.color-primario(style="color:#0C5E46") A continuación, se explica cómo se deben analizar datos, de acuerdo con el proceso - EDA.

    .tarjeta.tarjeta--azul.mb-5(data-aos="zoom-in-up")
      .p-4.p-lg-5
        SlyderA.bn(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Definición
              p.mb-0 El análisis exploratorio de datos (EDA, por sus siglas en inglés) es un proceso de investigación en el que se usan estadísticas de resumen y herramientas gráficas para llegar a conocer los datos y comprender lo que se puede averiguar de ellos.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/img-1.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Función
              p.mb-0 Se puede utilizar un EDA para tener la certeza de que los resultados o las conclusiones producidas sean confiables, válidas, aplicables e irrefutables con los objetivos y/o resultados deseados, del mismo modo, apoya a los interesados del proyecto o <em>stakeholders</em> a confirmar que se hacen las preguntas correctas a la base de datos (DB).
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/img-2.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Importancia del EDA en el análisis de datos
              p.mb-0 El EDA responde requerimientos de intervalos de confianza, variables categóricas o desviación estándar. Una vez se complete el EDA y se extraigan los <em>insights</em> (claves), estos se utilizan para un análisis más complejo o modelado de datos más sofisticado, que incluye el uso de <em>machine learning</em> (dota a los ordenadores de la capacidad de identificar patrones en datos masivos y elaborar predicciones).
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/img-3.png", style="width: 450px" ,alt='').m-auto

          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Técnicas estadísticas asociadas al EDA
              p.mb-4 Existen ciertas técnicas estadísticas que se pueden realizar con herramientas de EDA que incluyen:
              .col-lg-12
                ul.lista-ul.mb-3
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | Técnicas de asociación en clúster y disminución de dimensiones que ayudan a crear  observaciones gráficas en los datos de alta dimensión multivariables.
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | Observaciones univariante de registro de un conjunto de datos sin formato, con estadísticas de resumen (ER).
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | Observaciones multivariantes, bivariantes y ER que dan la posibilidad de evaluar la correlación entre variables independientes y dependientes.
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | Agrupación con aprendizaje no supervisado.
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | Uso de modelos predictivos estadísticos (regresión lineal simple y múltiple).

            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/img-4.png", style="width: 450px" ,alt='').m-auto
              
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-5 Clasificación de los EDA
              .col-lg-12
                ul.lista-ul.mb-3
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | No gráfico univariante.
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | Gráfico univariante.
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | No gráfico multivariante: se obtienen datos multivariantes de más de una variable.
                  li.mb-0
                    i.fas.fa-check(style="color:#635994")
                    | Gráfico multivariante: los datos multivariantes utilizan gráficos para mostrar relaciones entre dos o más conjuntos de datos.

            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema1/img-5.png", style="width: 450px" ,alt='').m-auto
          
    p.mb-5 También, se exponen los tipos de EDA, así:   
    
    .row.justify-content-center.mt-5
      .col-lg-6.col-md-10.col-12 
        ImagenInfografica.color-acento-botones.mb-4.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/fig_3a.svg', alt='')

          .tarjeta.color-acento-contenido.p-3(x="29%" y="50%" numero="A")
            p Su objetivo es describir los datos identificando características o patrones existentes entre ellos.

          .tarjeta.color-acento-contenido.p-3(x="50%" y="26.5%" numero="B")
            p Describe los datos en busca de un patrón de comportamiento o características especiales. Encontrando:
            .col-lg-12
              ul.lista-ul.mb-3
                li.mb-0
                  i.fas.fa-check(style="color:#635994")
                  | Diagrama de tallo y hojas.
                li.mb-0
                  i.fas.fa-check(style="color:#635994")
                  | Histograma.
                li.mb-0
                  i.fas.fa-check(style="color:#635994")
                  | Diagrama de caja.
                        
          .tarjeta.color-acento-contenido.p-3(x="71.8%" y="49.5%" numero="C")
            p Las técnicas de EDA se usan en los datos de más de una variable y, por lo general, enseñan la relación entre dos o más variables a través de métodos estadísticos.
              
          .tarjeta.color-acento-contenido.p-3(x="50%" y="73.3%" numero="D")
            p Es el relacionamiento entre dos o más variables o conjuntos de datos, diagramas de barras, donde en un eje se representa una de las variables y en el otro los niveles de la variable. Encontrando:
            .col-lg-12
              ul.lista-ul.mb-3
                li.mb-0
                  i.fas.fa-check(style="color:#635994")
                  | Diagrama de dispersión.
                li.mb-0
                  i.fas.fa-check(style="color:#635994")
                  | Gráfico multivariable.
                li.mb-0
                  i.fas.fa-check(style="color:#635994")
                  | Diagrama de comportamiento.
                li.mb-0
                  i.fas.fa-check(style="color:#635994")
                  | Gráfico de burbujas.
                li.mb-0
                  i.fas.fa-check(style="color:#635994")
                  | Mapa de calor.

    .row.justify-content-center.mb-5
      .col-12
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/fig_3b.svg', alt='')

    //- #t_1_2.row.mb-3.ps-2(data-aos="zoom-in-down")
    //-   .h4.mb-0.mx-3 1.2 Bases de datos
    //-   .col-lg-4.bg-color-2.px-4.py-3
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Bases de datos

    p.mb-5 Las Bases de Datos (DB, por sus siglas en inglés) son un conjunto de datos estructurado donde se almacenan estos de forma organizada y relacionada, para que se pueda acceder a los registros rápidamente mediante comandos, con la ayuda del lenguaje de programación y un equipo de cómputo. Del mismo modo, las DB se usan para el desarrollo de análisis, depuración y estructuración, a fin de generar informes de datos complejos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Existen diferentes tipos de DB, entre ellas están: DB relacional (SQL); DB no relacional (NoSQL); DB distribuida; DB orientada a objetos y DB gráficas. La existencia de diversas DB es debido a la gran diversidad de formas de trabajo entre ellas.
          br
          br
          | Cada herramienta aborda desde distintos ángulos el estudio, así hay unas de licencia <em>free</em> (sin costo) y otras <em>premium</em> (por lo general licencia a un año), existen unas que se conectan con <em>software</em> comúnmente usado como Excel o Power BI y hay otras que son completamente cerradas a un único fabricante.

    p.mb-5 A través del siguiente video se exponen algunos <em>software</em> de procesamiento de datos:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    //- #t_1_3.row.mb-3.ps-2(data-aos="zoom-in-down")
    //-   .h4.mb-0.mx-3 1.3 Representación de la información
    //-   .col-lg-4.bg-color-3.px-4.py-3
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Representación de la información

    p.mb-5 El marco jurídico aplicable en Colombia para el aprovechamiento y recolección de datos está regido por:

    LineaTiempoE.color-acento-contenido
      .row(titulo="1991" subtitulo="Constitución Política de Colombia 1991, artículo 15.")
        .col-lg-6.mb-4.mb-lg-0
          p Mediante el cual se establece el derecho que tienen las personas a conocer, actualizar y ratificar la información personal.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema1/img-7.png', alt='Texto que describa la imagen')

      .row(titulo="2008" subtitulo="Ley 1266 de 2008.")
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/img-8.png', alt='Texto que describa la imagen')
        .col-lg-6
          p Por medio de la cual se dictan las disposiciones generales de habeas data.

      .row(titulo="2009" subtitulo="Ley 1273 de 2009.")
        .col-lg-6.mb-4.mb-lg-0
          p Modifica el Código Penal y crea como bien jurídico tutelado la protección de la información y de los datos.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema1/img-9.png', alt='Texto que describa la imagen')
      
      .row(titulo="2012" subtitulo="Ley 1581 de 2012.")
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/img-10.png', alt='Texto que describa la imagen')
        .col-lg-6
          p Principios y disposiciones que definen los derechos sobre los datos personales. Art 9. Exigencia de consentimiento previo del uso de datos personales.
      
      .row(titulo="2012" subtitulo="Decreto 1377 de 2012.")
        .col-lg-6.mb-4.mb-lg-0
          p Reglamenta los aspectos relacionados con la titularidad del uso de la información para el tratamiento de sus datos personales.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema1/img-11.png', alt='Texto que describa la imagen')

    p.mt-4.mb-5 Deberes y prohibiciones de los ciudadanos.

    .titulo-quinto.color-primario(data-aos="fade-down")
      h4.color-primario(style="color:#0C5E46") Trabajo en sí

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-12(data-aos="fade-left") 
        img.mt-3.mb-3(src='@/assets/curso/temas/tema1/img-12.svg') 
      .col-lg-8.col-12(data-aos="fade-right") 
        ul.lista-ul
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Ningún usuario que se encuentre utilizando un equipo de cómputo conectado a la red interna, deberá tratar de modificar los datos de identificación del equipo asignado (por ejemplo: nombre en la red, grupo de trabajo o dominio, dirección IP, entre otros), esta labor es ejecutada por el personal autorizado de la oficina de sistemas e informática.
          li(data-aos="fade-right") 
            i.fas.fa-folder.ss
            p.mb-0 Se debe prohibir la instalación y/o uso de dispositivos como módem, cable módem, sistemas ADSL, celulares o similares en equipos de cómputo de la empresa que permitan conexión directa a internet, el acceso a internet debe realizarse a través de los medios provistos por la empresa.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Prohibir conectarse a redes inalámbricas personales o desconocidas desde el computador de trabajo.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Los puertos de transmisión y recepción de infrarrojo y <em>bluetooth</em> deben estar deshabilitados.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Restringir el uso de recursos compartidos configurados en equipos de usuario, se debe hacer uso del servidor de archivos (Unidad G o la asignada por el personal de oficina de sistemas e informática).
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Solo personal autorizado por la oficina de sistemas e informática puede realizar mantenimiento, soporte o reparaciones a equipos de cómputo.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Los usuarios no deben instalar o desinstalar <em>software</em> o equipos periféricos, este debe realizar la petición al encargado de la oficina de sistemas e informática.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 No se debe instalar ningún <em>software</em> de conexiones remotas, por ejemplo, TeamViewer, Real VNC Logmain, etc., debe utilizarse únicamente la VPN asignada por la oficina de sistemas e informática.

    .row.align-items-center.justify-content-center.mb-4
      .col-md-7(data-aos="fade-right") 
        ul.lista-ul
          li(data-aos="fade-right") 
            i.fas.fa-folder.ss
            p.mb-0 No instalar <em>software</em>, como juegos y/o utilitarios.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 El almacenamiento de información de negocio de cada una de las áreas debe reposar en el recurso compartido (unidad G o la asignada por el personal de oficina de sistemas e informática) dispuesto para cada proceso y no almacenados en el PC, ya que la información de negocio contenida en los equipos de cómputo puede dañarse y se perdería de esta forma la información allí contenida.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Se requiere el uso de elementos de seguridad física como guaya o candado para asegurar los portátiles a los puestos de trabajo, si viajan con ellos, deberán mantenerse como equipaje de mano.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Solo personal autorizado puede realizar conexión remota a los equipos de cómputo para actividades de administración y soporte.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 La eliminación de información clasificada o reservada debe realizarse de manera que quede irrecuperable, la impresa en pedazos muy pequeños.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 No se debe almacenar información ni accesos directos en el escritorio del equipo de cómputo (pantalla).
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Se debe bloquear la sesión del equipo asignado cuando el usuario se ausente del puesto de trabajo y finalizar sesión de las aplicaciones activas.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 El puesto de trabajo debe permanecer organizado y la información resguardada al finalizar la jornada laboral.

      .col-md-5(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/tema1/img-13.svg').mb-3

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-12(data-aos="fade-left") 
        img.mt-3.mb-3(src='@/assets/curso/temas/tema1/img-14.svg') 
      .col-lg-8.col-12(data-aos="fade-right") 
        ul.lista-ul
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Nunca deben quedar a la vista nombres de usuario, contraseñas, direcciones IP, directorios, contratos, números de cuenta, listados, datos de empleados, documentos no públicos, etc.
          li(data-aos="fade-right") 
            i.fas.fa-folder.ss
            p.mb-0 Sobre el escritorio únicamente deben permanecer los elementos necesarios para desarrollar la labor asignada.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Solo usuarios custodios o aquellos que por actividad relacionada directamente con cuartos que contienen <em>racks</em> de cableado o equipos de comunicaciones deben acceder a ellos.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Se prohíbe el ingreso de cámaras, equipos y/o celulares con funciones de video, almacenamiento, audio o similares, sin previa autorización, justificación y solo se aceptarán para una actividad laboral necesaria.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Los monitores de los PC deben quedar bloqueados y apagados al finalizar la jornada laboral.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Las llaves de los <em>racks</em> deben quedar almacenadas en un lugar seguro y los <em>racks</em> cerrados al finalizar la jornada laboral.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 El almacenamiento en la nube de la entidad es para uso estrictamente laboral y/o académico, almacenar información técnica o científica y, en general, almacenar únicamente información que sea de relevancia para la entidad.
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Si la información que va a ser almacenada es de carácter reservado o clasificado, se deben implementar técnicas de cifrado o protección con contraseña y asignar permiso de acceso únicamente a las personas autorizadas. 

    .titulo-quinto.color-primario(data-aos="fade-down")
      h4.color-primario(style="color:#0C5E46") Trabajo en casa

    .row.justify-content-center 
      .col-lg-12.col-12
        .tarjeta.p-4.mb-3(style="background-color: #E4FDFB")
          .row.justify-content-center.align-items-center 
            .col-lg-4.col-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/img-15.svg' alt='Imagen decorativa')
            .col-lg-8.col-12
              ul.lista-ul
                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Si los equipos son personales, el trabajador debe instalar el SO desde una fuente fiable.

                li(data-aos="fade-right") 
                  i.fas.fa-folder.ss
                  p.mb-0 Mantener el SO y las aplicaciones actualizadas.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Instalar un antivirus confiable y mantenerlo actualizado en su base de datos.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Utilizar el control de acceso definido por la entidad con sus correspondientes permisos.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Mantener configuración segura en todas las aplicaciones del ordenador, ejemplo: navegador, correo, carpetas en la nube, etc.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Parametrizar por inactividad mayor a 5 min bloqueo automático del equipo y en lo posible, utilizar un cifrado de disco, o almacenar la información en los recursos que la empresa disponga.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Se debe conectar únicamente a través de la VPN (red privada virtual) suministrada por la empresa.
    
    .row.justify-content-center 
      .col-lg-12.col-12
        .tarjeta.p-4.mb-3(style="background-color: #FEF5E5")
          .row.justify-content-center.align-items-center 
            .col-lg-8.col-8.mb-3
              ul.lista-ul
                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 El almacenamiento de información de negocio (información definitiva) de cada una de las áreas debe reposar en el recurso compartido (unidad G o la asignada por el personal de Oficina de Sistemas e Informática).

                li(data-aos="fade-right") 
                  i.fas.fa-folder.ss
                  p.mb-0 En el OneDrive y los recursos de colaboración, como SharePoint, se debe almacenar información en tránsito, temporal o que requiere ser compartida para ser actualizada por múltiples usuarios y no almacenarla en el PC, ya que la información de negocio contenida en los equipos de cómputo puede dañarse y perderse.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 No almacenar en los equipos asignados o personales información clasificada o reservada. Los equipos portátiles no deben dejarse desatendidos.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Utilizar guayas de seguridad para los equipos portátiles.

            .col-lg-4.col-8.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/img-16.svg' alt='Imagen decorativa')

    .row.justify-content-center 
      .col-lg-12.col-12
        .tarjeta.p-4.mb-3(style="background-color: #E4FDFB")
          .row.justify-content-center.align-items-center 
            .col-lg-4.col-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/img-17.svg' alt='Imagen decorativa')
            .col-lg-8.col-12
              ul.lista-ul
                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Para el transporte entre la oficina y el lugar o lugares en que se ejecuten las funciones de trabajo, se debe contar con un maletín resistente que proteja el equipo que se está trasladando.

                li(data-aos="fade-right") 
                  i.fas.fa-folder.ss
                  p.mb-0 Guardar el dispositivo mientras no se utiliza, bajo llave en el sitio o sitios en los que se ejecuten las funciones de trabajo en casa.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Establecer medidas de seguridad de la Información institucional contenido en el dispositivo con el objeto de evitar el acceso no autorizado a esta.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Configurar para el equipo de trabajo cuentas de usuario independientes con permisos especiales y de ser posible SO o máquinas virtuales separadas.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 No hacer uso de conexiones desconocidas (redes wifi abiertas, redes públicas, entre otras). Verificar que al navegar se cuenta con el “candado” o cifrado SSL.

    .row.justify-content-center 
      .col-lg-12.col-12
        .tarjeta.p-4.mb-5(style="background-color: #FEF5E5")
          .row.justify-content-center.align-items-center 
            .col-lg-8.col-8.mb-3
              ul.lista-ul
                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Utilizar contraseñas seguras obviando números consecutivos, fechas de cumpleaños o nombres de familiares y amigos.

                li(data-aos="fade-right") 
                  i.fas.fa-folder.ss
                  p.mb-0 Hacer borrado integral en el historial del navegador, incluyendo <em>cookies</em>, datos personales y contraseñas.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 No debe usar el cuadro de diálogo en el que se sugiere recordar contraseña.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Al culminar la jornada laboral, cerrar todas las páginas, conexiones, correos y trabajos que se estén ejecutando.
                
                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Asegurarse de retirar todos los dispositivos periféricos usados en la jornada, por ejemplo: USB, CD o DVD.

                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Llevar a cabo la destrucción de los documentos, para lo cual será necesario romperlo o triturarlo con el objeto de evitar que la pieza documental se arroje de manera completa al contenedor o papelera y sea reutilizada para labores domésticas que de alguna manera ponga en riesgo la información institucional.
                
                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 Revisar la bandeja de las impresoras, de tal manera que no se deje copias al alcance de terceros.
                
                li(data-aos="fade-right")
                  i.fas.fa-folder.ss
                  p.mb-0 No dejar los documentos en tránsito desentendidos en el lugar o lugares en los que se ejecutan las funciones de trabajo en casa.

            .col-lg-4.col-8.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/img-18.svg' alt='Imagen decorativa')

    //- #t_1_4.row.mb-3.ps-2(data-aos="zoom-in-down")
    //-   .h4.mb-0.mx-3 1.4 Talento humano
    //-   .col-lg-4.bg-color-2.px-4.py-3
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Talento humano

    p Los profesionales en Bases de Datos (DB) deben desarrollar, ejecutar y hacer mantenimiento con el uso de técnicas que van desde supervisar hasta optimizar el servidor que contiene la base de datos y así asegurar su disponibilidad y rendimiento. El mantenimiento de las bases de datos implica ejecutar tareas de actualización con técnicas estadísticas, supervisando el uso de la DB, servidores y espacio, planificando estrategias de copias de seguridad y recuperación de la información.
    p.mb-5 Por medio del siguiente video, se profundizará en algunos procesos del talento humano relacionados con las bases de datos.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pso94TwNc8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.aling.my-5   
      .col-lg-10(data-aos="zoom-in-down")
        .cajon.color-custom-5.p-4.mb-4.p-4
          .row.justify-content-around.align-items-center
            .col-lg-12
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para un mejor entendimiento de las técnicas para el mantenimiento de DB, puede apoyarse en el video: Mantenimiento básico y respaldo de las bases de datos SQL y HANA, el cual se encuentra en el material complementario. 
    
    //- #t_1_5.row.mb-3.ps-2(data-aos="zoom-in-down")
    //-   .h4.mb-0.mx-3 1.5 Informe técnico
    //-   .col-lg-4.bg-color-2.px-4.py-3
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Informe técnico

    p.mb-4 Es un documento que describe el progreso de una investigación o labor realizada. Está conformado por la presentación sistemática y cronológica con la información suficiente para que un lector con capacidad y conocimiento del tema tratado, pueda evaluar y proponer modificaciones a los resultados y conclusiones. Este informe se conforma de parte inicial, cuerpo, anexo y parte final, las cuales se explican un poco a continuación.

    .row.justify-content-center.mb-4
      .col-lg-5.col-12(data-aos="fade-left") 
        img.mt-3.mb-3(src='@/assets/curso/temas/tema1/img-19.svg')(data-aos="fade-right")
      .col-lg-5.col-12(data-aos="fade-right") 
        ul.lista-ul
          h4 Parte inicial
          p.mb-3 Contiene un orden establecido dividido en varias partes:
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Portada.

          li(data-aos="fade-right") 
            i.fas.fa-folder.ss
            p.mb-0 Resumen.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Índice.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Glosario de signos, símbolos, unidades, abreviaturas, términos técnicos.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Prefacio.

        ul.lista-ul
          h4 Cuerpo del informe
          p.mb-3 Está dividido en:
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Introducción.

          li(data-aos="fade-right") 
            i.fas.fa-folder.ss
            p.mb-0 Núcleo del informe con tablas, imágenes y demás material complementario.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Conclusiones y recomendaciones.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Agradecimientos.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 Listas de referencia.
          
    .row.mb-5
      .col-sm-6.col-lg-6.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-primario.p-4
          h4 Anexos
          p Los anexos se consideran separadamente de la parte final, porque, aunque en muchas ocasiones no se requiere, en otras forman parte esencial y complemento de información de algunos informes. Se usan para presentar material que complementa el texto, estos pueden ser:
          ul.lista-ul
            li(data-aos="fade-right")
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 Tablas.

            li(data-aos="fade-right") 
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 Imágenes.

            li(data-aos="fade-right")
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 Material especial.

            li(data-aos="fade-right")
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 Bibliografía.

            li(data-aos="fade-right")
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 Descripción de equipos.

            li(data-aos="fade-right")
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 <em style="color: #000">Software.</em>

      .col-sm-6.col-lg-6.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              figure
                img(src='@/assets/curso/temas/tema1/img-20.svg', alt='Texto que describa la imagen')

          h4 Parte final
          p Debe contener las siguientes partes en su orden:
          ul.lista-ul
            li(data-aos="fade-right")
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 Hojas de datos del documento.

            li(data-aos="fade-right")
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 Lista de distribución y disponibilidad.

            li(data-aos="fade-right")
              i.fas.fa-folder.ss(style="color: #3AE3FE")
              p.mb-0 Cubierta posterior, si se requiere.
      
    .row.aling.my-3   
      .col-lg-10(data-aos="zoom-in-down")
        .cajon.color-custom-6.p-4.mb-4.p-4
          .row.justify-content-around.align-items-center
            .col-lg-12
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para complementar sus conocimientos sobre cómo realizar un informe técnico, se puede referir al video Curso gratis de redacción de informes técnicos, el cual se encuentra en el material complementario. 

    .row.justify-content-center.mb-4
      .col-lg-5.col-12(data-aos="fade-left") 
        img.mt-0.mb-3(src='@/assets/curso/temas/tema1/img-21.svg')(data-aos="fade-right")
      .col-lg-5.col-12(data-aos="fade-right") 
        ul.lista-ul
          h4 Normas APA
          p.mb-3 Para la redacción de informes técnicos se recomienda el uso de las normas APA que tienen una particularidad en cuanto al tipo de letra, tamaño y márgenes:
          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 <strong>Tamaño del papel:</strong> carta.

          li(data-aos="fade-right") 
            i.fas.fa-folder.ss
            p.mb-0 <strong>Tipo de letra:</strong> Arial o Times News Roman.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 <strong>Tamaño letra:</strong> 12 puntos.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 <strong>Espaciado:</strong> interlineado 2.0, sin espacio entre párrafos.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 <strong>Alineado:</strong> izquierda, sin justificar.

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 <strong>Márgenes:</strong> 2,5 en cada lado (arriba, abajo, superior e inferior).

          li(data-aos="fade-right")
            i.fas.fa-folder.ss
            p.mb-0 <strong>Sangría:</strong> 5 espacios en la primera línea de cada párrafo.
            .row.aling.my-3   
    
    .row.aling   
      .col-lg-10(data-aos="zoom-in-down")
        .row.justify-content-around.align-items-center
          .col-lg-12
            .row.justify-content-between.align-items-center
              .col.mb-sm-0
                p.mb-3 Ahora bien, en cuanto al cuerpo y estructura del informe, el título debe ir centrado, en negrita y un máximo de 15 palabras. Para las referencias de las fuentes consultadas están aquellas parafraseadas (con palabras del redactor se expresa la idea del autor) y aquellas que se extraen de manera textual.

    .row.aling.my-3   
      .col-12(data-aos="zoom-in-down")
        //- .cajon.color-custom-5.p-4.mb-4.p-4
        //-   .row.justify-content-around.align-items-center
        //-     .col-lg-12
        //-       .row.justify-content-between.align-items-center
        //-         .col.mb-3.mb-sm-0
        //-           p.mb-0 Para ampliar la información y tener un conocimiento general de la normatividad, se puede referir al enlace Normas APA: cómo presentar trabajos escritos en #[a(href="https://normasapa.in/", target="_blank" style="color:blue") https://normasapa.in/]
        .tarjeta.color-secundario-c.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-1
              img(src="@/assets/componentes/ico-export-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1.text-white Para ampliar la información y tener un conocimiento general de la normatividad, se puede referir al enlace Normas APA: Cómo presentar trabajos escritos en:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://normasapa.in/" target="_blank")
                    span Enlace web
                    i.fas.fa-file-code




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
