import { useState } from "react";
import { useEducation } from "../Data/Education.data";

function Education() {
  const [displayContent, setDisplayContent] = useState(false);
  const { education, setEducation } = useEducation();

  const handleStartDate = (value, index) => {
    var newHistory = education;
    if (value != '') newHistory[index].startDate = value;
    else newHistory[index].startDate = '--/--/----';
    setEducation(newHistory);
  }

  const handleEndDate = (value, index) => {
    var newHistory = education;
    if (value != '') newHistory[index].endDate = value;
    else newHistory[index].endDate = '--/--/----';
    setEducation(newHistory);
  }

  const handleCertification = (value, index) => {
    var newHistory = education;
    if (value != '') newHistory[index].degreeName = value;
    else newHistory[index].degreeName = 'Degree';
    setEducation(newHistory);
  }

  const handleUnivercityName = (value, index) => {
    var newHistory = education;
    if (value != '') newHistory[index].univercityName = value;
    else newHistory[index].univercityName = 'Univercity Name';
    setEducation(newHistory);
  }

  return (
    <div className="py-3 border-b border-primary-800 w-full">
      <div className="flex justify-between px-6">
        <h2 className="font-semibold leading-8 text-base">Education</h2>
        <button
          className="pl-4 text-2xl"
          onClick={() => setDisplayContent(!displayContent)}
        >
          {displayContent ? '–' : '+'}
        </button>
      </div>

      <div className={`mt-6 flex flex-col gap-4 px-8 ${!displayContent && 'hidden'}`}>
        {education.map((ele, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-primary-300">Education {idx + 1}</h1>
              {(idx > 0 && <button onClick={() => setEducation(education.filter((ele, CIdx) => { return CIdx != idx }))} className="text-2xl leading-4 text-red-500 font-semibold">–</button>)}
            </div>
            <input
              className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
              type="text"
              placeholder='Degree Name'
              onChange={(e) => handleCertification(e.target.value, idx)}
            />

            <input
              className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
              type="text"
              placeholder='Univercity Name'
              onChange={(e) => handleUnivercityName(e.target.value, idx)}
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
          </div>
        ))}
        <button className="focus:outline-none text-blue-100 w-full text-start" onClick={() => setEducation([...education, { startDate: '--', endDate: '--', degreeName: 'Degree', univercityName: 'Univercity name' }])}>+ Add One More</button>
      </div>
    </div >
  )
}
export default Education;