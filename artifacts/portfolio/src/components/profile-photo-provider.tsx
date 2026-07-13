import React, { createContext, useContext, useState } from "react";

const DEFAULT_PHOTO = "/hero-portrait.jpg";
const STORAGE_KEY = "portfolio-profile-image";

interface ProfilePhotoContextType {
  photo: string;
  setPhoto: (photo: string) => void;
  resetPhoto: () => void;
}

const ProfilePhotoContext = createContext<ProfilePhotoContextType>({
  photo: DEFAULT_PHOTO,
  setPhoto: () => {},
  resetPhoto: () => {},
});

export function ProfilePhotoProvider({ children }: { children: React.ReactNode }) {
  const [photo, setPhotoState] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_PHOTO;
  });

  const setPhoto = (value: string) => {
    setPhotoState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      console.warn("الصورة كبيرة جداً للحفظ في التخزين المحلي، سيتم استخدامها في الجلسة الحالية فقط.");
    }
  };

  const resetPhoto = () => {
    setPhotoState(DEFAULT_PHOTO);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ProfilePhotoContext.Provider value={{ photo, setPhoto, resetPhoto }}>
      {children}
    </ProfilePhotoContext.Provider>
  );
}

export const useProfilePhoto = () => useContext(ProfilePhotoContext);
