import {create} from 'zustand';

export const useWebsiteURL = create((set) => ({
  websiteURL: '',
  setWebsiteURL: (url) => set({websiteURL: url})
}));

export const useFacebookURL = create((set) => ({
  facebookURL: '',
  setFacebookURL: (url) => set({facebookURL: url})
}));

export const useTwitterURL = create((set) => ({
  twitterURL: '',
  setTwitterURL: (url) => set({twitterURL: url})
}));

export const useLinkedInURL = create((set) => ({
  linkedInURL: '',
  setLinkedInURL: (url) => set({linkedInURL: url})
}));
