// Rahma =======================
import { useUserName, useUserJob, useUserAge, useUserPhone, useUserEmail, useUserAbout, useUserImageUrl } from "../Data/PersonalInformationData";

function CVTemplate() {
  const { userName } = useUserName();
  const { userJob } = useUserJob();
  // const { userAge } = useUserAge();
  const { userPhone } = useUserPhone();
  const { userEmail } = useUserEmail();
  const { userImageUrl } = useUserImageUrl();
  const { userAbout } = useUserAbout();


  return (
    <section className='bg-white w-[21cm] h-[29.7cm] p-[50px]'>
      <div className=' flex  gap-20'>
        <div className="w-[150px] h-[150px] box-border rounded-full flex justify-center items-center overflow-hidden">
          <img src={userImageUrl} className="w-full" />
        </div>
        <div>
          <p className=' font-semibold text-6xl w-[220px]'>{userName}</p>
          <p className='text-2xl mt-5'>{userJob}</p>
        </div>
      </div>

      <div className=' flex gap-[15%] mt-[40px] xd:block '>
        <div className=' grid gap-[20px] w-[40%] xd:block'>
          <p className=' font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px]'>education</p>

          <div>
            <p >2014 - 2020</p>
            <p>degree name</p>
            <p>university name here</p>
          </div>

          <div>
            <p className=' text-slate-600 '>2014 - 2020</p>
            <p className=' text-slate-600 '>degree name</p>
            <p className=' text-slate-600 '>university name here</p>
          </div>

          <div>
            <p className=' text-slate-600 '>2014 - 2020</p>
            <p className=' text-slate-600 '>degree name</p>
            <p className=' text-slate-600 '>university name here</p>
          </div>

          <div>
            <p className='  font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px]'>contact</p>
            <p className=' text-slate-600 '>{userPhone}</p>
            <p className=' text-slate-600 '>{userEmail}</p>
          </div>
        </div>

        <div>
          <p className=' font-bold pb-[20px] border-b-[1px] border-sky-600 mb-[15px] text-[30px]' > profile </p>

          <p className=' text-[20px] mb-[30px]'> {userAbout} </p>

          <p className='  font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px] mb-[55px] ' >experience</p>

          <div className='flex gap-[40px]'>
            <div className='grid gap-[55px] xd:block'>
              <div>
                <p className=' text-slate-600 '>2020 - prsent</p>
                <p className=' text-slate-600 '>company name</p>
              </div>

              <div>
                <p className=' text-slate-600 '>2017 - 2019</p>
                <p className=' text-slate-600 '>company name</p>
              </div>

              <div>
                <p className=' text-slate-600 '>2015 - 2017</p>
                <p className=' text-slate-600 '>company name</p>
              </div>
            </div>

            <div className='grid xd:block '>
              <div>
                <p className=' font-bold text-[16px] '>senior ux desiner</p>
                <p className=' text-slate-600 '>lorem lorem lorem company</p>
              </div>

              <div>
                <p className=' font-bold text-[16px]'>junior ux desiner</p>
                <p className=' text-slate-600 '>lorem lorem lorem company</p>
              </div>

              <div>
                <p className=' font-bold text-[16px]'> ui desiner</p>
                <p className=' text-slate-600 '>lorem lorem lorem company</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CVTemplate;
