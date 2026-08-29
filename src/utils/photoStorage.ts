// Utility to manage user profile photo with localStorage persistence and live synchronization

const STORAGE_KEY = 'aryan_portfolio_custom_profile_photo';

export const getStoredProfilePhoto = (defaultPhoto: string): string => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.trim().length > 0) {
      return saved;
    }
  } catch {
    // LocalStorage fallback
  }
  return defaultPhoto;
};

export const saveProfilePhoto = (photoDataUrl: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY, photoDataUrl);
    window.dispatchEvent(new Event('portfolio-photo-updated'));
  } catch (err) {
    console.error('Failed to save profile photo to localStorage', err);
  }
};

export const resetProfilePhoto = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('portfolio-photo-updated'));
  } catch {
    // Fallback
  }
};
