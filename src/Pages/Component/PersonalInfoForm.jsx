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
    <div className={`${(buttonState ? 'pb-6' : 'pb-0')} border-b border-gray-300 h-full`}>
      <div className='flex justify-between py-4 px-6'>
        <h1 className="text-xl font-semibold" >Personal Information</h1>
        <button className='bg-white-500 inline-block text-3xl pl-4' onClick={() => setButtonState(!buttonState)}>{(buttonState ? '-' : '+')}</button>
      </div>
      <form className={`${(buttonState ? 'h-auto' : 'h-0')} transition-all overflow-hidden flex flex-col gap-2 px-8`}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full border border-gray-300 p-2 placeholder-gray-500 focus:outline-none rounded-md"
          onChange={(e) => {
            nameHandler(e.target.value);
          }}
        />

        {/* Job */}
        <input
          type="text"
          name="job-title"
          placeholder="Job title"
          className="w-full border border-gray-300 p-2 placeholder-gray-500 focus:outline-none rounded-md"
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
          className="w-full border border-gray-300 p-2 placeholder-gray-500 focus:outline-none rounded-md"
          onChange={(e) => {
            ageHandler(e.target.value);
          }}
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full border border-gray-300 p-2 placeholder-gray-500 focus:outline-none rounded-md"
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
          className="w-full border border-gray-300 p-2 placeholder-gray-500 focus:outline-none rounded-md"
          onChange={(e) => {
            emailHandler(e.target.value);
          }}
        />

        {/* Streat */}
        {/* <div className="ms-12 mt-2">
          <input
            type="text"
            name="street-address"
            placeholder="Stree address"
            className="w-5/6 border border-gray-300 p-2 placeholder-gray-500 focus:outline-none"
            onChange={(e) => {
              streetHandler(e.target.value);
            }}
          />
        </div> */}

        {/* City */}
        {/* <div className="ms-12 mt-2">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-5/6 border border-gray-300 p-2 placeholder-gray-500 focus:outline-none"
            onChange={(e) => {
              cityHandler(e.target.value);
            }}
          />
        </div> */}

        {/* Country */}
        {/* <div className="ms-12 mt-2">
          <select
            name="country"
            className="w-5/6 border border-gray-300 p-2 placeholder-gray-500 focus:outline-none"
            onChange={(e) => {
              countryHandler(e.target.value);
            }}
          >
            <option>Egypt</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div> */}

        {/* About */}
        <textarea
          name="about"
          rows={3}
          placeholder="Write a few sentences about yourself"
          className="w-full border border-gray-300 p-2 placeholder-gray-500 focus:outline-none rounded-md"
          defaultValue={''}
          onChange={(e) => {
            aboutHandler(e.target.value);
          }}
        />

        {/* Image */}
        <div className="text-center w-full rounded-lg border-dashed p-16 border border-gray-300 placeholder-gray-500 focus:outline-none" onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>
          <label
            htmlFor="image-upload"
            className="cursor-pointer font-semibold text-indigo-600"
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
