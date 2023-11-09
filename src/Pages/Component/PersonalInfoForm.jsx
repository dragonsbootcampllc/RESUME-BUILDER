// Yasmen
import { useUserName, useUserJob, useUserAge, useUserPhone, useUserEmail, useUserAbout, useUserImageUrl } from "../Data/PersonalInformationData";
import { useState } from "react";

const PersonalInfoForm = () => {
  /* 
  We can replace this useState with type char with one with type boolean
  const [buttonState,setButtonState]=useState('-');
  */
  const [buttonState, setButtonState] = useState(false);
  const { setUserName } = useUserName();
  const { setUserJob } = useUserJob();
  const { setUserAge } = useUserAge();
  const { setUserPhone } = useUserPhone();
  const { setUserEmail } = useUserEmail();
  const { setUserImageUrl } = useUserImageUrl();
  const { setUserAbout } = useUserAbout();

  const nameHandler = (value) => {
    if (value === "") setUserName("Your Name");
    else setUserName(value);
  };

  const jobHandler = (value) => {
    if (value === "") setUserJob("Job title");
    else setUserJob(value);
  };

  const ageHandler = (value) => {
    if (value === "") setUserAge("--");
    else setUserAge(value);
  };

  const phoneHandler = (value) => {
    if (value === "") setUserPhone("+201023456789");
    else setUserPhone(value);
  };

  const emailHandler = (value) => {
    if (value === "") setUserEmail("Your_Mail@Example.com");
    else setUserEmail(value);
  };

  const aboutHandler = (value) => {
    if (value === "") setUserAbout("Tell something about you...");
    else setUserAbout(value);
  };


  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUserImageUrl(imageUrl);
  };

  /*
  We can do this with more clean code
  const formAppearance = () =>{
    if(buttonState === '+')
    {
      document.getElementById("form-container").style.display="block";
      return setButtonState("-")
    }
    else{
      document.getElementById("form-container").style.display="none";
      return setButtonState("+")
    }
  }
  */

  return (
    <div className="py-3 border-b border-primary-800 w-full">
      <div className='flex justify-between px-6'>
        <h1 className="text-base leading-8 font-semibold" >Personal Information</h1>
        <button className='text-2xl pl-4' onClick={() => setButtonState(!buttonState)}>{(buttonState ? '–' : '+')}</button>
      </div>
      <form className={`${(!buttonState && 'hidden')} mt-6 overflow-hidden flex flex-col gap-2 px-8`}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="bg-transparent w-full border border-primary-700 p-2 placeholder-primary-400 focus:outline-none rounded-md"
          onChange={(e) => {
            nameHandler(e.target.value);
          }}
        />

        {/* Job */}
        <input
          type="text"
          name="job-title"
          placeholder="Job title"
          className="bg-transparent w-full border border-primary-700 p-2 placeholder-primary-400 focus:outline-none rounded-md"
          onChange={(e) => {
            jobHandler(e.target.value);
          }}
        />

        {/* Age */}
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          className="bg-transparent w-full border border-primary-700 p-2 placeholder-primary-400 focus:outline-none rounded-md"
          onChange={(e) => {
            ageHandler(e.target.value);
          }}
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="bg-transparent w-full border border-primary-700 p-2 placeholder-primary-400 focus:outline-none rounded-md"
          onChange={(e) => {
            phoneHandler(e.target.value);
          }}
        />

        {/* Email */}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="bg-transparent w-full border border-primary-700 p-2 placeholder-primary-400 focus:outline-none rounded-md"
          onChange={(e) => {
            emailHandler(e.target.value);
          }}
        />

        {/* About */}
        <textarea
          name="about"
          rows={3}
          placeholder="Write a few sentences about yourself"
          className="bg-transparent w-full border border-primary-700 p-2 placeholder-primary-400 focus:outline-none rounded-md"
          defaultValue={''}
          onChange={(e) => {
            aboutHandler(e.target.value);
          }}
        />

        {/* Image */}
        <div className="text-center w-full rounded-lg border-dashed p-16 border border-primary-700 text-primary-300 transition-all hover:text-primary-100 hover:border-primary-200 focus:outline-none" onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>
          <label
            htmlFor="image-upload"
            className="cursor-pointer font-semibold"
          >
            <span>Upload image</span>
            <input id="image-upload" name="file-upload" type="file" accept="image/*" className="sr-only"
              onChange={() => { handleDrop(event) }}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
