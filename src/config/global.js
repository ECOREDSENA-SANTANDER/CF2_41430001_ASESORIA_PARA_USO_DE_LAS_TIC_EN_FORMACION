export default {
  global: {
    Name: 'Ejecución y evaluación del plan de formación',
    Description:
      'El componente orienta la ejecución y evaluación de planes de formación mediados por TIC, articulando diversas modalidades formativas, el acompañamiento tutorial y la aplicación de herramientas pedagógicas. Asimismo, integra criterios transversales que permiten garantizar aprendizajes significativos, medibles y verificables en los diferentes contextos de formación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'TIC como mediadoras del proceso de enseñanza y aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos clave para comprender la mediación TIC',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios pedagógicos para integrar TIC con sentido',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modalidades de formación que utilizan TIC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de educación en entornos digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Formación combinada',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Wikis, blogs, redes sociales, software educativo y medios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Características del tutor en entornos mediados por TIC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Roles del tutor',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Competencias del tutor y buenas prácticas en entornos mediados por TIC',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Acompañamiento y retroalimentación mediada',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas tecnológicas para orientar procesos formativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ruta de diseño para orientar una experiencia mediada',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Consideraciones transversales para la asesoría TIC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Derechos de autor y Recursos Educativos Abiertos (REA)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Seguridad digital y protección de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Accesibilidad e inclusión',
            hash: 't_5_3',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'condición que permite que todas las personas usen recursos y actividades formativas, incluyendo quienes tienen limitaciones o baja conectividad.',
    },
    {
      termino: 'ADDIE',
      significado:
        'modelo de diseño instruccional que organiza la formación en cinco fases: analizar, diseñar, desarrollar, implementar y evaluar.',
    },
    {
      termino: 'Acompañamiento (tutorial)',
      significado:
        'acciones del tutor para orientar al aprendiz, hacer seguimiento, resolver dudas y mantener el ritmo de estudio.',
    },
    {
      termino: 'Aprendizaje asincrónico',
      significado:
        'interacción que ocurre en diferentes momentos, permitiendo al aprendiz avanzar a su propio ritmo.',
    },
    {
      termino: 'Aprendizaje sincrónico',
      significado:
        'interacción en tiempo real entre tutor y aprendices para orientar y resolver dudas de forma inmediata.',
    },
    {
      termino: 'Blog',
      significado:
        'herramienta de publicación que funciona como portafolio, diario reflexivo o espacio para evidenciar aprendizajes.',
    },
    {
      termino: '<em>Blended learning</em> (formación combinada)',
      significado:
        'modalidad que integra de manera planificada actividades presenciales y virtuales.',
    },
    {
      termino: 'Coevaluación',
      significado:
        'evaluación entre pares basada en criterios definidos para mejorar productos y desempeño.',
    },
    {
      termino: 'Comunidad de aprendizaje',
      significado:
        'grupo que aprende colaborativamente con normas de participación y apoyo mutuo.',
    },
    {
      termino: '<em>Feedback</em> (retroalimentación)',
      significado:
        'información que orienta la mejora del desempeño mediante criterios claros y acciones concretas.',
    },
    {
      termino: 'Formación virtual',
      significado:
        'modalidad desarrollada en entornos digitales que combina actividades sincrónicas y asincrónicas.',
    },
    {
      termino: 'Inclusión',
      significado:
        'principio que garantiza la participación de todos considerando diversidad de condiciones y necesidades.',
    },
    {
      termino: 'LMS (Learning Management System)',
      significado:
        'plataforma digital para gestionar contenidos, actividades, seguimiento y evaluación.',
    },
    {
      termino: '<em>Mass media</em>',
      significado:
        'medios de comunicación masivos que apoyan el aprendizaje cuando se integran con fines pedagógicos.',
    },
    {
      termino: 'Mediación didáctica',
      significado:
        'decisiones pedagógicas sobre recursos, actividades, interacción y evaluación que orientan el aprendizaje.',
    },
    {
      termino: 'Netiqueta',
      significado: 'normas de comunicación respetuosa en entornos digitales.',
    },
    {
      termino: 'REA (Recursos Educativos Abiertos)',
      significado:
        'materiales con licencias abiertas que permiten usar, adaptar y compartir contenidos educativos.',
    },
    {
      termino: 'Rúbrica',
      significado:
        'instrumento con criterios y niveles de logro para evaluar evidencias de aprendizaje.',
    },
    {
      termino: 'SAMR',
      significado:
        'modelo que clasifica el uso de la tecnología según su nivel de transformación en el aprendizaje.',
    },
  ],
  referencias: [
    {
      referencia:
        'Berge, Z. L. (1995). Facilitating computer conferencing: Recommendations from the field. Educational Technology, 35(1), 22–30.',
      link: '',
    },
    {
      referencia:
        'Garrison, D. R., & Kanuka, H. (2004). Blended learning: Uncovering its transformative potential in higher education. The Internet and Higher Education, 7(2), 95–105.',
      link: '',
    },
    {
      referencia:
        'Graham, C. R. (2006). Blended learning systems: Definition, current trends, and future directions. En C. J. Bonk & C. R. Graham (Eds.), The handbook of blended learning: Global perspectives, local designs (pp. 3–21). Pfeiffer.',
      link: '',
    },
    {
      referencia:
        'Greenhow, C., & Lewin, C. (2016). Social media and education: Reconceptualizing the boundaries of formal and informal learning. Learning, Media and Technology, 41(1), 6–30.',
      link: '',
    },
    {
      referencia:
        'Guo, P. J., Kim, J., & Rubin, R. (2014). How video production affects student engagement: An empirical study of MOOC videos. En Proceedings of the first ACM conference on Learning @ Scale (pp. 41–50).',
      link: '',
    },
    {
      referencia:
        'Hrastinski, S. (2008). Asynchronous and synchronous e-learning. EDUCAUSE Quarterly, 31(4), 51–55.',
      link: '',
    },
    {
      referencia:
        'Kay, R. (2012). Exploring the use of video podcasts in education: A comprehensive review of the literature. Computers in Human Behavior, 28(3), 820–831. https://doi.org/10.1016/j.chb.2012.01.011',
      link: '',
    },
    {
      referencia:
        'Koehler, M. J., & Mishra, P. (2009). What is technological pedagogical content knowledge (TPACK). Contemporary Issues in Technology and Teacher Education, 9(1), 60–70.',
      link: '',
    },
    {
      referencia:
        'Mayer, R. E. (2009). Multimedia learning (2nd ed.). Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Puentedura, R. R. (s. f.). SAMR: A model for educational technology integration.',
      link: '',
    },
    {
      referencia:
        'Tess, P. A. (2013). The role of social media in higher education classes (real and virtual): A literature review. Computers in Human Behavior, 29(5), A60–A68.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2011). Media and information literacy curriculum for teachers. UNESCO.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2019). Recommendation on Open Educational Resources (OER). UNESCO.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
