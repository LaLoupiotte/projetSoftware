export interface Skill {
  id: string;
  name: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'candidate' | 'recruiter';
  avatar?: string;
}

export interface CandidateProfile extends User {
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  bio: string;
}