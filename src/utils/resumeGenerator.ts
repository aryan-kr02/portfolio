import { personalInfo } from '../data/portfolioData';

export const RESUME_URL = "https://drive.google.com/file/d/13bM31HcKvG3TMUCH34wlXfivq0fGzcbp/view?usp=sharing";

export const downloadCV = () => {
  const url = personalInfo.resumeUrl || RESUME_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
};
