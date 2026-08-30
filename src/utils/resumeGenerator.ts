import { personalInfo } from '../data/portfolioData';

export const RESUME_URL = "https://drive.google.com/file/d/1OxN9BZx5QxL3HQHOn1hD2VF69DthWHzf/view?usp=sharing";

export const downloadCV = () => {
  const url = personalInfo.resumeUrl || RESUME_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
};
