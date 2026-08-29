export interface SemesterScore {
  term: string;
  score: string;
  type: string;
}

export interface EducationItem {
  id: string;
  level: string;
  institution: string;
  boardOrUniversity?: string;
  field?: string;
  duration?: string;
  score: string;
  scoreLabel?: string;
  scoreDetails?: {
    semesters?: SemesterScore[];
    overallCgpa?: string;
  };
  highlight?: boolean;
}

export interface PersonalInfo {
  name: string;
  role: string;
  badge: string;
  tagline: string;
  shortBio: string;
  fullBio: string;
  college: string;
  degree: string;
  branch: string;
  currentYear: string;
  gradYear: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl?: string;
  profilePhoto: string;
  careerGoal: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription?: string;
  problemSolved?: string;
  keyFeatures?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  image: string;
  statusText?: string;
  inProgress?: boolean;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
  isFuture?: boolean;
}

export interface BeyondCodeInterest {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}
