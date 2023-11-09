// Abanoub ===========
import { useState } from "react";
import { useEmploymentHistory } from "../Data/EmpoymentHistoryData";
// import Liststyletext from "./Liststyletext";

function EmploymentHistory() {
  const [displayContent, setDisplayContent] = useState(false);
  const { employmentHistory, setEmploymentHistory } = useEmploymentHistory();

  const handleStartDate = (value, index) => {
    var newHistory = employmentHistory;
    if (value != '') newHistory[index].startDate = value;
    else newHistory[index].startDate = '--/--/----';
    setEmploymentHistory(newHistory);
  }

  const handleEndDate = (value, index) => {
    var newHistory = employmentHistory;
    if (value != '') newHistory[index].endDate = value;
    else newHistory[index].endDate = '--/--/----';
    setEmploymentHistory(newHistory);
  }

  const handleCompanyName = (value, index) => {
    var newHistory = employmentHistory;
    if (value != '') newHistory[index].companyName = value;
    else newHistory[index].companyName = 'Company Name';
    setEmploymentHistory(newHistory);
  }

  const handleJobTitle = (value, index) => {
    var newHistory = employmentHistory;
    if (value != '') newHistory[index].jobTitle = value;
    else newHistory[index].jobTitle = 'Job Title';
    setEmploymentHistory(newHistory);
  }

  const handleDetails = (value, index) => {
    var newHistory = employmentHistory;
    if (value != '') newHistory[index].details = value;
    else newHistory[index].details = 'Details...';
    setEmploymentHistory(newHistory);
  }

  return (
    <div className="py-3 border-b border-primary-800 w-full">
      <div className="flex justify-between px-6">
        <h2 className="font-semibold leading-8 text-base">Employment history</h2>
        <button
          className="pl-4 text-2xl"
          onClick={() => setDisplayContent(!displayContent)}
        >
          {displayContent ? '–' : '+'}
        </button>
      </div>

      <div className={`mt-6 flex flex-col gap-4 px-8 ${!displayContent && 'hidden'}`}>
        {employmentHistory.map((ele, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-primary-300">Employment {idx+1}</h1>
              {(idx > 0 && <button onClick={() => setEmploymentHistory(employmentHistory.filter((ele, CIdx)=>{return CIdx != idx}))} className="text-2xl leading-4 text-red-500 font-semibold">–</button>)}
            </div>
            <input
              className="bg-transparent w-full px-3 py-2 border border-primary-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-primary-400"
              type="text"
              placeholder='Job title'
              onChange={(e) => handleJobTitle(e.target.value, idx)}
            />

            <input
              className="bg-transparent w-full px-3 py-2 border border-primary-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-primary-400"
              type="text"
              placeholder='Company name'
              onChange={(e) => handleCompanyName(e.target.value, idx)}
            />

            <div className="rounded-md overflow-hidden flex border border-primary-700 ">
              <input
                className="w-full px-3 py-2 focus:outline-none text-sm placeholder-primary-400 bg-transparent"
                type="date"
                placeholder='Start Date'
                onChange={(e) => handleStartDate(e.target.value, idx)}
              />
              <input
                className="w-full px-3 py-2 border-l border-primary-700 focus:outline-none text-sm placeholder-primary-400 bg-transparent"
                type="date"
                placeholder='end Date'
                onChange={(e) => handleEndDate(e.target.value, idx)}
              />
            </div>

            <div className="containstyle border border-primary-700 rounded-md">
              {/* <Liststyletext /> */}
              <textarea
                placeholder="Some details..."
                onChange={(e) => handleDetails(e.target.value, idx)}
                className="w-full p-1 bg-transparent" ></textarea>
            </div>
          </div>
        ))}
        <button className="focus:outline-none text-blue-100 w-full text-start" onClick={() => setEmploymentHistory([...employmentHistory, { startDate: '--', endDate: '--', companyName: 'Company Name', jobTitle: 'Job Title', details: 'Detials' }])}>+ Add One More</button>
      </div>
    </div >
  )
}
export default EmploymentHistory;