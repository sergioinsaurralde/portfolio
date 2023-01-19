export type CourseContent = {
  name: string;
  slug?: string;
  description?: string;
  content?: CourseContent[];
};

export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
  content: CourseContent[];
}

export const courseSlugMap = {
  go: 'Learn Go',
  'system-design': 'System Design',
};

export const courses: Course[] = [
  
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/go/banner.png',
    description:
      'Domina los fundamentos y las características avanzadas del lenguaje de programación Go',
    content: [
      {
        name: 'Introducción',
        content: [
          {
            name: 'Bienvenido al curso',
            slug: 'bienvenido-al-curso',
          },
          {
            name: 'Qué es Go?',
            slug: 'qué-es-go',
          },
          {
            name: 'Por qué aprender Go?',
            slug: 'por-qué-aprender-go',
          },
          {
            name: 'Instalación y configuración',
            slug: 'instalación-y-configuración',
          },
        ],
      },
      {
        name: 'Capítulo I',
        content: [
          { name: 'Hola Mundo', slug: 'hola mundo' },
          {
            name: 'Variables y tipos de datos',
            slug: 'variables-y-tipos-de-datos',
          },
          { name: 'Formato de strings', slug: 'formato-de-strings' },
          { name: 'Control del flujo', slug: 'control-del-flujo' },
          { name: 'Funciones', slug: 'funciones' },
          { name: 'Módulos', slug: 'módulos' },
          { name: 'Paquetes', slug: 'paquetes' },
          { name: 'Espacio de trabajo', slug: 'espacio-de-trabajo' },
          { name: 'Comandos útiles', slug: 'Comandos-útiles' },
          { name: 'Build', slug: 'build' },
        ],
      },
      {
        name: 'Capítulo II',
        content: [
          { name: 'Pointers', slug: 'pointers' },
          { name: 'Structs', slug: 'structs' },
          { name: 'Methods', slug: 'methods' },
          { name: 'Arrays y Slices', slug: 'arrays-y-slices' },
          { name: 'Maps', slug: 'maps' },
        ],
      },
      {
        name: 'Capítulo III',
        content: [
          { name: 'Interfaces', slug: 'interfaces' },
          { name: 'Errors', slug: 'errors' },
          { name: 'Panic y Recover', slug: 'panic-y-recover' },
          { name: 'Testing', slug: 'testing' },
          { name: 'Generics', slug: 'generics' },
        ],
      },
      {
        name: 'Capítulo IV',
        content: [
          { name: 'Concurrency', slug: 'concurrency' },
          { name: 'Goroutines', slug: 'goroutines' },
          { name: 'Channels', slug: 'channels' },
          { name: 'Select', slug: 'select' },
          { name: 'Sync Package', slug: 'sync-package' },
          {
            name: 'Patrones de concurrencia avanzados',
            slug: 'patrones-de-concurrencia-avanzados',
          },
          { name: 'Context', slug: 'context' },
        ],
      },
      {
        name: 'Complemento',
        content: [
          { name: 'Próximos pasos', slug: 'próximos-pasos' },
          { name: 'Referencias', slug: 'referencias' },
        ],
      },
    ],
  },
];
