import {create} from 'zustand';

export const useEmploymentHistory = create((set) => ({
  employmentHistory: [{
    startDate: '--', 
    endDate: '--', 
    companyName: 'Company Name', 
    jobTitle: 'Job Title', 
    details: 'Detials' 
  }],
  setEmploymentHistory: (history) => set({employmentHistory: history})
}));
