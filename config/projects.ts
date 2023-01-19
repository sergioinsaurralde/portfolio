import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: '',
    slug: '',
    banner: '',
    website: '',
    description:
      '',
    shortDescription:
      '',
    repository: '',
    stack: [
      Stack.nats,
      Stack.go,
      Stack.typescript,
      Stack.react,
      Stack.python,
      Stack.kubernetes,
      Stack.docker,
    ],
    dimensions: [360, 640],
    screenshots: [
      ],
    deployment: {
      web: '',
    },
    subProjects: [],
  },
  {
    title: '',
    slug: '',
    banner: '',
    website: '',
    description: ``,
    shortDescription:
      '',
    repository: null,
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.node,
      Stack.graphql,
      Stack.aws,
      Stack.arangodb,
    ],
    screenshots: [],
    deployment: {
      web: '',
    },
    subProjects: [],
  },
  {
    title: '',
    slug: '',
    website: '',
    banner: '',
    description:
      '',
    repository: '',
    stack: [
      Stack.typescript,
      Stack.reactnative,
      Stack.node,
      Stack.graphql,
      Stack.postgres,
    ],
    screenshots: [
      ],
    deployment: {
      web: '',
      android:
        '',
      ios: '',
    },
    subProjects: [],
  },
  {
    title: '',
    slug: '',
    banner: '',
    website: '',
    description: ``,
    repository: null,
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.reactnative,
      Stack.graphql,
      Stack.gcp,
    ],
    screenshots: [
      ],
    deployment: {
      web: '',
      android: '',
    },
    subProjects: [],
  },
  {
    title: '',
    slug: '',
    website: '',
    repository: null,
    banner: '',
    description:
      '',
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.reactnative,
      Stack.graphql,
      Stack.gcp,
    ],
    screenshots: [
      ],
    deployment: {
      web: '',
      android:
        '',
      ios: '',
    },
    subProjects: [
      {
        title: '',
        repository: null,
        description:
          '',
        deployment: {
          android:
            '',
        },
      },
      {
        title: '',
        repository: null,
        description:
          '',
        deployment: {
          web: '',
        },
      },
      {
        title: '',
        repository: null,
        description:
          "",
        deployment: {},
      },
    ],
  },
  {
    title: '',
    slug: '',
    website: '',
    banner: '',
    description:
      '',
    repository: null,
    stack: [Stack.react, Stack.reactnative, Stack.django, Stack.aws],
    dimensions: [450, 270],
    screenshots: [
      ],
    deployment: {
      web: '',
      android:
        '',
      ios: '',
    },
    subProjects: [],
  },
  {
    title: '',
    slug: '',
    banner: '',
    description:
      '',
    repository: '',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongodb],
    dimensions: [450, 270],
    screenshots: [
      ],
    deployment: {
      web: '',
      android: '',
      ios: '',
    },
    website: '',
    subProjects: [],
  },
];
