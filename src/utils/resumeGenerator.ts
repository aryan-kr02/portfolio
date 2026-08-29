import { personalInfo } from '../data/portfolioData';

export const RESUME_URL = "https://drive.google.com/file/d/1MV3mLjwbF7SNiJ1NIGGt6QtbVWi-82QO/view?usp=sharing";

export const downloadCV = () => {
  const url = personalInfo.resumeUrl || RESUME_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
};
