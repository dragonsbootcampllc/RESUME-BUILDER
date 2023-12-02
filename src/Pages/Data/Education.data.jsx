import {create} from 'zustand';

export const useEducation = create((set) => ({
  education: [{
    startDate: '--', 
    endDate: '--', 
    univercityName: 'Univercity Name', 
    degreeName: 'Degree Name', 
  }],
  setEducation: (history) => set({education: history})
}));
