import {create} from 'zustand';

export const useUserName = create((set) => ({
  userName: "Your Name",
  setUserName: (name) => set({userName: name})
}));

export const useUserJob = create((set) => ({
  userJob: "Job title",
  setUserJob: (job) => set({userJob: job})
}));

export const useUserAge = create((set) => ({ 
  userAge: "--",
  setUserName: (age) => set({userAge: age})
}));

export const useUserPhone = create((set) => ({
  userPhone: "+201023456789",
  setUserPhone: (phone) => set({userPhone: phone})
}));

export const useUserEmail = create((set) => ({
  userEmail: "Your_Mail@Example.com",
  setUserEmail: (email) => set({userEmail: email})
}));

export const useUserAbout = create((set) => ({
  userAbout: "Tell something about you...",
  setUserAbout: (about) => set({userAbout: about})
}));

export const useUserImageUrl = create((set) => ({
  userImageUrl: '',
  showImage: false,
  setUserImageUrl: (imageUrl) => set({userImageUrl: imageUrl}),
  setShowImage: (newState) => set({showImage: newState})
}));