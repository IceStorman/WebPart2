export interface AboutMe {
  firstPart: string,
  highlightedPart: string,
  lastPart: string,
}

export interface Education {
  school: string,
  years: string,
  title: string,
  description: string
}

export interface Job {
    job: string,
    city: string,
    years: string,
    title: string,
    description: string,
}

export interface Reference {
  name: string;
  description: string;
  phoneNumber: string;
  email: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Language {
  name: string;
  percent: number;
}

export interface Hobby {
  name: string;
  level: number;
}
