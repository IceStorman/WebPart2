import {AboutMe, Education, Hobby, Job, Language, Reference, Skill} from '../dtos/dtos';

export const aboutMe: AboutMe = {
  firstPart: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  highlightedPart: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  lastPart: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
};

export let educations: Education[] = [
  {
    school: "Stanford University",
    years: "2011 - 2013",
    title: "MASTER DEGREE GRADUATE",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    school: "Chicago University",
    years: "2007 - 2010",
    title: "BACHELOR DEGREE",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  }
]

export let jobs: Job[] = [
  {
    job: "Creative Agency",
    city: "Chicago",
    years: "2020-Present",
    title: "SENIOR WEB DESIGNER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    job: "Creative Market",
    city: "United Kingdom",
    years: "2015-2020",
    title: "SENIOR WEB DESIGNER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    job: "Marketing Agency",
    city: "United Kingdom",
    years: "2013-2015",
    title: "MARKETING MANAGER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  }
]

export let references: Reference[] = [
  {
    name: "DARWIN B. MAGANA",
    description: "2813 Shobe Lane Mancos, CO.",
    phoneNumber: "+1-970-533-3393",
    email: "www.yourwebsite.com"
  },
  {
    name: "ROBERT J. BELVIN",
    description: "2119 Fairfax Drive Newark, NJ.",
    phoneNumber: "+1-908-987-5103",
    email: "www.yourwebsite.com"
  }
]

export const skills: Skill[] = [
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'Adobe Illustrator', level: 70 },
  { name: 'Microsoft Word', level: 85 },
  { name: 'Microsoft Powerpoint', level: 75 },
  { name: 'HTML-S/CSS-3', level: 80 }
];

export const languages: Language[] = [
  { name: 'ENGLISH', percent: 95 },
  { name: 'GERMAN', percent: 60 },
  { name: 'SPANISH', percent: 45 }
];

export const hobbies: Hobby[] = [
  { name: 'Book Reading', level: 90 },
  { name: 'Travelling', level: 70 },
  { name: 'Playing Chess', level: 85 },
  { name: 'Painting', level: 75 },
  { name: 'Graphic Design', level: 80 }
]
