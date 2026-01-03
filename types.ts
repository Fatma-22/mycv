
export interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
  location: string;
  details?: string[];
  url?: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  location: string;
  details?: string[];
}

export interface PublicationEntry {
  authors: string;
  title: string;
  journal: string;
  year: string;
  details: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Activity {
  role: string;
  organization: string;
}

export interface PersonalData {
  name: string;
  address: string;
  phone: string;
  mobile: string;
  email: string;
  profile: string;
  objective: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  publications: PublicationEntry[];
  skills: {
    technical: string[];
    interpersonal: string[];
    languages: string[];
  };
  activities: Activity[];
  dob: string;
  researchGate: string;
  mostaql: string;
}
