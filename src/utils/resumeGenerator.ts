import { personalInfo } from '../data/portfolioData';

export const RESUME_URL = "https://drive.google.com/file/d/1djM_5yoe9g8UwD67mh_T_7t5S0Iz9QBO/view?usp=sharing";

export const downloadCV = () => {
  const url = personalInfo.resumeUrl || RESUME_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
};
