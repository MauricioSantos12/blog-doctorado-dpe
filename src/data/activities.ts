export interface Activity {
  src: string
  alt: string
}

const files = [
  'Actividad1.jpeg',
  'Actividad2.jpeg',
  'Actividad3.jpeg',
  'Actividad4.jpeg',
  'Actividad5.jpeg',
  'Actividad6.jpeg',
  'Actividad7.jpeg',
  'Actividad8.jpeg',
]

export const activities: Activity[] = files.map((file, i) => ({
  src: `/images/laboratory_activities/${file}`,
  alt: `Actividad ${i + 1} del Laboratorio de Liderazgo`,
}))
