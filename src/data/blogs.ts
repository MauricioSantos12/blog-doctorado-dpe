export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  tags: string[]
  content: string[]
}

export const blogs: BlogPost[] = [
  {
    slug: 'bienvenida-al-doctorado',
    title: 'Bienvenida al blog del doctorado',
    excerpt:
      'Un primer recorrido por los motivos, las preguntas y las expectativas que dan inicio a esta investigación doctoral.',
    date: '2026-02-10',
    author: 'Diana Escalante',
    tags: ['doctorado', 'introducción'],
    content: [
      'Este espacio nace como bitácora personal y académica del proceso doctoral. Aquí iré documentando avances, lecturas, dudas y hallazgos a lo largo del camino.',
      'La idea es sencilla: compartir el proceso tal como ocurre, sin pulirlo en exceso, para que sirva de referencia tanto a quienes atraviesan un camino similar como a mí misma en el futuro, cuando necesite recordar por qué tomé ciertas decisiones metodológicas.',
      'En los próximos posts hablaré sobre el planteamiento del problema, el estado del arte que he ido construyendo y los primeros acercamientos al marco teórico.',
    ],
  },
  {
    slug: 'metodologia-y-primeros-pasos',
    title: 'Metodología y primeros pasos de la investigación',
    excerpt:
      'Cómo fui definiendo el enfoque metodológico del proyecto y los aprendizajes de las primeras semanas de trabajo.',
    date: '2026-03-05',
    author: 'Diana Escalante',
    tags: ['metodología', 'investigación'],
    content: [
      'Elegir una metodología no es un trámite: es una declaración de cómo entiendo el problema que quiero estudiar. En este post explico el razonamiento detrás del enfoque elegido.',
      'Durante las primeras semanas, gran parte del trabajo consistió en delimitar el objeto de estudio y revisar antecedentes que permitieran justificar la relevancia del proyecto.',
      'También comparto algunas herramientas y hábitos de organización que me han ayudado a sostener el ritmo de lectura y escritura que exige un doctorado.',
    ],
  },
  {
    slug: 'reflexiones-sobre-el-estado-del-arte',
    title: 'Reflexiones sobre el estado del arte',
    excerpt:
      'Notas y aprendizajes tras varias semanas de revisión bibliográfica intensiva sobre el tema de investigación.',
    date: '2026-04-18',
    author: 'Diana Escalante',
    tags: ['lecturas', 'estado del arte'],
    content: [
      'Revisar el estado del arte es, en el fondo, un ejercicio de humildad: descubrir cuánto se ha escrito ya sobre las preguntas que uno cree originales.',
      'En este post resumo los principales enfoques teóricos que he encontrado, las tensiones entre ellos y los vacíos que mi investigación busca atender.',
      'Cierro con una reflexión sobre cómo organizar la revisión bibliográfica de forma que siga siendo útil conforme el proyecto avanza.',
    ],
  },
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug)
}
