import { conceptTable, regionalTable, reviewTable } from "./blogContent";

export interface PostTable {
  headers: string[];
  rows: string[][];
}

export interface PostInfographic {
  title?: string;
  steps: string[];
}

export interface PostDimensions {
  title?: string;
  items: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  content: string[];
  infographic?: PostInfographic;
  dimensions?: PostDimensions;
  table?: PostTable;
}

const AUTHOR = "Katrwin Dayana Morales y Diana Paola Escalante";

export const blogs: BlogPost[] = [
  {
    slug: "que-es-la-educacion-intercultural",
    title: "¿Qué es la Educación Intercultural?",
    excerpt:
      "Un enfoque pedagógico que reconoce y valora la diversidad cultural como una riqueza para el aprendizaje, la convivencia y la transformación social.",
    date: "2026-06-15",
    author: AUTHOR,
    tags: ["interculturalidad", "pedagogía"],
    content: [
      "La educación intercultural es un enfoque pedagógico que reconoce, valora y promueve la diversidad cultural como una riqueza para el aprendizaje, la convivencia y la transformación social. Más que propiciar la coexistencia entre diferentes grupos culturales, busca generar relaciones basadas en el diálogo, el respeto mutuo, la participación, la inclusión y la justicia social (UNESCO, 2021; Walsh, 2009).",
      "Este enfoque encuentra sustento en la teoría sociocultural de Lev Vygotsky (1978), según la cual el aprendizaje se construye a través de la interacción con otras personas y del contexto. La teoría de la autoeficacia de Albert Bandura (1997) complementa esta mirada al sostener que las experiencias de logro fortalecen la confianza para afrontar nuevos desafíos.",
      "Así, la interculturalidad trasciende la enseñanza de contenidos sobre la diversidad: se convierte en una forma de comprender la educación como un espacio de encuentro, reconocimiento del otro y construcción colectiva de una ciudadanía comprometida con la equidad y la transformación social.",
    ],
    infographic: {
      title: "Rutas de la educación intercultural",
      steps: [
        "Diversidad",
        "Diálogo",
        "Respeto",
        "Inclusión",
        "Participación",
        "Justicia cognitiva",
        "Ciudadanía",
      ],
    },
    table: conceptTable,
  },
  {
    slug: "america-latina-y-la-diversidad-cultural",
    title: "América Latina y la Diversidad Cultural",
    excerpt:
      "Una región de enorme diversidad cultural donde la interculturalidad es a la vez una oportunidad y uno de los principales desafíos educativos.",
    date: "2026-06-24",
    author: AUTHOR,
    tags: ["América Latina", "diversidad"],
    content: [
      "América Latina es una de las regiones con mayor diversidad cultural del mundo. En ella convergen pueblos indígenas, comunidades afrodescendientes, población campesina, migrantes y una amplia variedad de tradiciones, lenguas y cosmovisiones. Esta riqueza es una oportunidad para los procesos educativos, pero también plantea desafíos de equidad, inclusión y reconocimiento de los saberes (CEPAL, 2022; UNESCO, 2021).",
      "Diversos países han impulsado políticas orientadas a fortalecer la educación intercultural mediante iniciativas como la educación intercultural bilingüe, la etnoeducación y currículos que valoran la diversidad. Aún así, persisten desigualdades que limitan el acceso, la permanencia y el éxito escolar de numerosos estudiantes.",
      "La educación intercultural en la región ha evolucionado desde enfoques centrados en grupos étnicos hacia un paradigma que reconoce la diversidad como elemento esencial para el aprendizaje y la construcción de sociedades más justas.",
    ],
    table: regionalTable,
  },
  {
    slug: "laboratorio-de-liderazgo-el-lider-en-mi",
    title: "El Laboratorio de Liderazgo «Líder en Mí»",
    excerpt:
      "Una experiencia pedagógica que integra liderazgo femenino, desarrollo socioemocional y participación familiar como camino hacia la interculturalidad.",
    date: "2026-07-02",
    author: AUTHOR,
    tags: ["liderazgo", "Líder en Mí"],
    content: [
      "El Laboratorio de Liderazgo promueve experiencias pedagógicas centradas en el liderazgo, el desarrollo socioemocional y la participación familiar. Aunque no fue diseñado formalmente como un programa de educación intercultural, incorpora sus principios al reconocer la diversidad de las estudiantes y promover el trabajo colaborativo.",
      "La revisión documental evidencia una convergencia entre las propuestas contemporáneas de educación intercultural y los fundamentos pedagógicos del Laboratorio, especialmente en los retos familiares, las experiencias colaborativas y las actividades orientadas al proyecto de vida.",
      "De esta manera, el hogar y la comunidad se convierten en escenarios de aprendizaje, favoreciendo la construcción colectiva del conocimiento y la formación de ciudadanas críticas y empáticas.",
    ],
    table: reviewTable,
  },
  {
    slug: "liderazgo-femenino",
    title: "Liderazgo Femenino",
    excerpt:
      "Los siete hábitos de Stephen Covey como eje metodológico para formar el carácter, la autoeficacia y una convivencia basada en principios.",
    date: "2026-07-10",
    author: AUTHOR,
    tags: ["liderazgo femenino", "Covey"],
    content: [
      "Los siete hábitos propuestos por Stephen Covey constituyen el eje metodológico del Laboratorio. Hábitos como Ser Proactiva, Pensar Ganar-Ganar, Primero Comprender y Luego Ser Comprendida y Sinergizar fortalecen competencias esenciales para la convivencia intercultural: empatía, cooperación, resolución pacífica de conflictos y respeto por diferentes perspectivas.",
      "Siguiendo a Bandura (1997), las estudiantes fortalecen su autoeficacia al participar en experiencias exitosas y asumir pequeños retos de liderazgo y servicio, desarrollando seguridad, autonomía y una identidad personal positiva.",
      "Más que habilidades individuales, el proyecto fomenta relaciones basadas en principios éticos, el trabajo colaborativo y el servicio a la comunidad, elementos que favorecen una cultura escolar inclusiva.",
    ],
    dimensions: {
      title: "Dimensiones que desarrolla el Laboratorio",
      items: [
        "Liderazgo",
        "Empatía",
        "Trabajo colaborativo",
        "Autoeficacia",
        "Ciudadanía",
        "Proyecto de vida",
        "Servicio",
        "Participación familiar",
      ],
    },
  },
  {
    slug: "familia-y-comunidad",
    title: "Familia y Comunidad",
    excerpt:
      "El reconocimiento de las experiencias familiares y comunitarias como parte del proceso educativo y de la justicia cognitiva.",
    date: "2026-07-16",
    author: AUTHOR,
    tags: ["familia", "comunidad"],
    content: [
      "La interculturalidad crítica, propuesta por Catherine Walsh (2009), plantea que las escuelas deben generar espacios de diálogo donde todas las formas de conocimiento tengan valor y contribuyan a la construcción colectiva del aprendizaje.",
      "El Laboratorio reconoce las experiencias familiares y comunitarias como parte del proceso educativo. Las estudiantes no solo aprenden de las docentes, sino también de sus familias, vecinos y comunidades, favoreciendo el intercambio de saberes y el reconocimiento de diferentes formas de vivir, aprender y participar.",
      "Esta perspectiva se relaciona con la justicia cognitiva: la transformación educativa comienza cuando la escuela se abre al diálogo con los actores que hacen parte de la vida de sus estudiantes.",
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
