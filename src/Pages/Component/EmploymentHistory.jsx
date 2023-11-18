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
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          type="text"
              placeholder='Job title'
              onChange={(e) => handleJobTitle(e.target.value, idx)}
            />

            <input
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          type="text"
              placeholder='Company name'
              onChange={(e) => handleCompanyName(e.target.value, idx)}
            />

            <div className="rounded-md overflow-hidden flex gap-2 text-xs  ">
              <input
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          type="date"
                placeholder='Start Date'
                onChange={(e) => handleStartDate(e.target.value, idx)}
              />
              <input
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          type="date"
                placeholder='end Date'
                onChange={(e) => handleEndDate(e.target.value, idx)}
              />
            </div>

            <div className="containstyle rounded-md">
              {/* <Liststyletext /> */}
              <textarea
                placeholder="Some details..."
                onChange={(e) => handleDetails(e.target.value, idx)}
                className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
                
                ></textarea>
            </div>
          </div>
        ))}
        <button className="focus:outline-none text-blue-100 w-full text-start" onClick={() => setEmploymentHistory([...employmentHistory, { startDate: '--', endDate: '--', companyName: 'Company Name', jobTitle: 'Job Title', details: 'Detials' }])}>+ Add One More</button>
      </div>
    </div >
  )
}
export default EmploymentHistory;