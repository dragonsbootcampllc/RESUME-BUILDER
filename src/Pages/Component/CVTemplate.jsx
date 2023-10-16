function CVTemplate() {
  return (
    <section className='bg-red-200 w-[21cm] xd:block p-[50px]'>
      <div className=' flex  gap-20 xd:block'>
        <img src='https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg' className=' rounded-full grayscale-[100%] w-[150px] mb-[15px]' />
        <div>
          <p className=' font-bold text-[40px] '>ythe name</p>
          <p className='text-[20px] '>the job title</p>
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
            <p className=' text-slate-600 '>phone</p>
            <p className=' text-slate-600 '>01234567890</p>
          </div>
        </div>

        <div>
          <p className=' font-bold pb-[20px] border-b-[1px] border-sky-600 mb-[15px] text-[30px]' > profile </p>

          <p className=' text-[20px] mb-[30px]'> for more sales leads customer lorem lorem for more sales leads customer lorem lorem for more sales leads customer lorem lorem </p>

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
