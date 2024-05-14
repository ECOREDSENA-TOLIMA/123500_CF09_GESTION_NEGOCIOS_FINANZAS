export default {
  global: {
    componenteFormativo:
      'Análisis de la información y elaboración de informes técnicos',
    descripcionCurso:
      'El manejo de datos requiere de técnicas de análisis, <em>software</em> especializado y, en algunas ocasiones, <em>hardware</em> de gran alcance debido al procesamiento de las variables. Las personas encargadas de estas actividades deben manejar herramientas ofimáticas, establecimiento de procesos comunicativos asertivos, habilidades investigativas, aprendizaje continuo, creatividad e innovación, adaptabilidad al cambio, toma de decisiones y aplicar el principio de transparencia y confidencialidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Bases de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Representación de la información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Talento humano',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Informe técnico',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Bases de datos',
      referencia:
        'Dawn, H., y Otero-Piñeiro, D. (2018). <em>Big Data: una breve introducción.</em> Antoni Bosch Editor.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB122682',
    },
    {
      tema: '1.3 Representación de la información',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (Icontec). (2014). <em>Tecnología de la información: técnicas de seguridad. Gestión de incidentes de seguridad de la información. Icontec.</em>',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000075887',
    },
    {
      tema: '1.2 Bases de datos',
      referencia:
        'Spain BS. (2015). Webinar <em>big data</em> para dummies. [Video]. YouTube. https://www.youtube.com/watch?v=fZhpLdZx5Qg&ab_channel=SpainBS',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fZhpLdZx5Qg&ab_channel=SpainBS',
    },
    {
      tema: '1.4 Talento humano',
      referencia:
        'RSG Consultoría Gerencial. (2018). Mantenimiento básico y respaldo de las bases de datos SQL y HANA. [Vídeo]. YouTube. https://www.youtube.com/watch?v=VHCGFSrAAio',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VHCGFSrAAio',
    },
    {
      tema: '1.5 Informes técnicos',
      referencia:
        'ESNAP Instituto Interamericano. (2018). Curso gratis de redacción de informes técnicos. [Vídeo]. YouTube. https://www.youtube.com/watch?v=s8QzYpP4QyA',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=s8QzYpP4QyA',
    },
  ],
  glosario: [
    {
      termino: 'Confidencialidad',
      significado:
        'estado de la información donde se asegura que esta no puede ser compartida, distribuida o revelada a terceros sin expresa autorización de su propietario.',
    },
    {
      termino: 'Datos',
      significado:
        'cualquier objeto que pueda entregar información o significado para el lector. El dato puede ser manipulable en forma manuscrita o por medio de un computador. Puede ser un carácter capturado desde un teclado, extraída de algún espacio de memoria en disco, o almacenado en la memoria central, etc.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'elementos físicos conformados por microprocesadores, microcontroladores y demás dispositivos microelectrónicos que, en conjunto, forman una equipo funcional, ejemplo: computador, tarjetas de gráficos, etc.',
    },
    {
      termino: 'Propietario',
      significado:
        'dueño de la información. Es el único que puede otorgar permisos para poder compartir los datos con terceros y definir el ciclo de vida de esta.',
    },
    {
      termino: 'Seguridad de la Información SI',
      significado:
        'encargada de proteger los datos contra robo de información, acceso no autorizado, obstaculización al sistema informático, manipulación y/o eliminación de datos. Cuando se habla de procesos empresariales impulsados en la transformación digital con tecnología de punta, se entiende que están expuestos a diferentes vulnerabilidades, amenazas y ataques informáticos dirigidos a la seguridad y la privacidad de la información. Mediante la norma ISO 27001, la implementación del SGSI sigue el modelo PHVA para la mejora continua de procesos.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'programas instalados o configurados en el <em>hardware</em> que logran el funcionamiento eficiente de todos los periféricos y puertos de los equipos, ejemplo: sistemas operativos, antivirus, <em>firewall</em>, aplicaciones, etc',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación - AGN. (2018). Fundamentos digital preservación plazo. AGN',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/6.%20preservacion/DOCUMENTOS%20TECNICOS/FUNDAMENTOS%20PRESERVACION%20DIGITAL%20LARGO%20PLAZO.pdf',
    },
    {
      referencia:
        '<em>Consulting</em> informático. (2016). Seguridad de la información y ciberseguridad ¿es lo mismo?',
      link:
        'https://www.cic.es/seguridad-de-la-informacion-y-ciberseguridad-es-lo-mismo/',
    },
    {
      referencia:
        'DNP. (2020). Guía normativa aplicable a la explotación de datos. DNP.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Desarrollo%20Digital/Documentos/Modelo%20Explotacion%20de%20datos/2.3%20Gu%C3%ADa%20normativa%20explotaci%C3%B3n%20de%20datos_VF.pdf',
    },
    {
      referencia:
        'Escuela Europea de Postgrado. (2022). ¿Por qué estudiar <em>Big Data</em>? EUDE.',
      link: 'https://www.eude.es/blog/por-que-estudiar-big-data/',
    },
    {
      referencia:
        'Estrada, V., M. E. (2016). Gestión de la información versus gestión del conocimiento; términos que maneja a diario el profesional de la información. Infotecarios.',
      link:
        'https://www.infotecarios.com/gestion-la-informacion-versus-gestion-del-conocimiento-terminos-maneja-diario-profesional-la-informacion/#.YmMRbtrMLrc',
    },
    {
      referencia:
        'Gobierno de España. (2021). Las herramientas de análisis de datos más populares. Gobierno de España',
      link:
        'https://datos.gob.es/es/blog/las-herramientas-de-analisis-de-datos-mas-populares',
    },
    {
      referencia: 'Google Sites. (2022). Dato - Sección Informática.',
      link: 'https://www.glosarioit.com/Dato',
    },
    {
      referencia: 'IBM. (2020). Análisis exploratorio de datos. IBM.',
      link: 'https://www.ibm.com/co-es/cloud/learn/exploratory-data-analysis',
    },
    {
      referencia:
        'Peña, O. (2020). Analítica de datos, ¿Para qué sirve y qué es? Poliverso.',
      link: 'https://www.poli.edu.co/blog/poliverso/analitica-de-datos',
    },
    {
      referencia:
        'Securizando. (2017). Tipos de <em>firewall.</em> Securizando.',
      link: 'https://securizando.com/tipos-de-firewall/',
    },
    {
      referencia:
        'Xataka Basics. (2017). Qué es un <em>proxy</em> y cómo puedes utilizarlo para navegar de forma más anónima. Xataka.',
      link:
        'https://www.xataka.com/basics/que-es-un-proxy-y-como-puedes-utilizarlo-para-navegar-de-forma-mas-anonima',
    },
    {
      referencia:
        'Glosario it.com. (2022). Herramientas de respaldo y recuperación de archivos.',
      link: 'https://www.glosarioit.com/Dato',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Abel Fernando Becerra Carrillo',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la empresa y los servicios- Región Norte de Santander',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseño Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesoría Metodológica y Evaluación Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción Audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción Audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseño Web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación de Recursos Educativos Digitales',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
