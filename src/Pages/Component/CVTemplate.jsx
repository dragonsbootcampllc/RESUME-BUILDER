import { useUserName, useUserJob, useUserAge, useUserPhone, useUserEmail, useUserAbout, useUserImageUrl } from "../Data/PersonalInformationData";
import { useWebsiteURL, useFacebookURL, useTwitterURL, useLinkedInURL } from '../Data/SocialLinksData';
import { useEmploymentHistory } from "../Data/EmpoymentHistoryData";
import { useEducation } from "../Data/EducationData";
import { RiUserLine } from "react-icons/ri";

function CVTemplate() {
  // Personal information
  const { userName } = useUserName();
  const { userJob } = useUserJob();
  // const { userAge } = useUserAge();
  const { userPhone } = useUserPhone();
  const { userEmail } = useUserEmail();
  const { userImageUrl, showImage } = useUserImageUrl();
  const { userAbout } = useUserAbout();

  // Social Links
  const { websiteURL } = useWebsiteURL();
  const { facebookURL } = useFacebookURL();
  const { twitterURL } = useTwitterURL();
  const { linkedInURL } = useLinkedInURL();

  // Employment History
  const { employmentHistory } = useEmploymentHistory();

  // Education
  const { education } = useEducation();

  return (
      <section className='bg-white w-[21cm] h-[27.8cm] p-[50px]'>
        <div className='flex gap-20'>
          <div className="w-[150px] h-[150px] box-border rounded-full flex justify-center items-center overflow-hidden">
            {((showImage && userImageUrl != '') && <img src={userImageUrl} className="w-full" draggable="false" />)}<img src={userImageUrl} className="w-full" draggable="false" />
            {((showImage && userImageUrl == '') && <span className="min-w-full min-h-full text-white bg-gray-400/70 flex justify-center items-center text-8xl"><RiUserLine /></span>)}<img src={userImageUrl} className="w-full" draggable="false" />  
          </div>
          <div>
            <p className=' font-semibold text-6xl w-[220px]'>{userName}</p>
            <p className='mt-5 text-2xl'>{userJob}</p>
          </div>
        </div>
        <div className=' flex gap-[15%] mt-[40px]'>
          <div className=' grid gap-[20px] w-[40%] xd:block'>
            <p className=' font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px]'>Education</p>
            {education.map((ele, idx) => (
              <div key={idx}>
                <p>{ele.startDate} - {ele.endDate}</p>
                <p>{ele.degreeName}</p>
                <p>{ele.univercityName}</p>
              </div>
            ))}
            <div>
              <p className='font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px]'>Contact</p>
              <div className='flex flex-col gap-2 mt-2 text-lg'>
                <p className='font-semibold'>{userPhone}</p>
                <p className='font-semibold'>{userEmail}</p>
                {(facebookURL !== `` && <p className='font-semibold'>{facebookURL}</p>)}
                {(twitterURL !== `` && <p className='font-semibold'>{twitterURL}</p>)}
                {(linkedInURL !== `` && <p className='font-semibold'>{linkedInURL}</p>)}
                {(websiteURL !== `` && <p className='font-semibold'>{websiteURL}</p>)}
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <p className=' font-bold pb-[20px] border-b-[1px] border-sky-600 mb-[15px] text-[30px]' > Profile </p>

            <p className=' text-[20px] mb-[30px] word-wrap break-word overflow-wrap break-word whitespace-normal'> {userAbout} </p>

            <p className='  font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px] mb-[55px] ' >Experience</p>

            <div className='flex gap-[40px]'>
              <div className='grid gap-[55px] xd:block'>
                {employmentHistory.map((ele, idx) => (
                  <div key={idx} className="overflow-hidden">
                    <p className='whitespace-normal text-slate-600 word-wrap break-word overflow-wrap'>{ele.startDate} - {ele.endDate}</p>
                    <p className=' text-slate-600'>{ele.companyName}</p>
                  </div>
                ))}
              </div>

              <div className='grid xd:block '>
                {employmentHistory.map((ele, idx) => (
                  <div key={idx} className="overflow-hidden">
                    <p className=' font-bold text-[16px] word-wrap break-word overflow-wrap break-word whitespace-normal'>{ele.jobTitle}</p>
                    <p className='whitespace-normal text-slate-600 word-wrap break-word overflow-wrap'>{ele.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}

export default CVTemplate;
