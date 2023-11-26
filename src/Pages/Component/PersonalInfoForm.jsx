import { useUserName, useUserJob, useUserAge, useUserPhone, useUserEmail, useUserAbout, useUserImageUrl } from "../Data/PersonalInformationData";
import { useState } from "react";

const PersonalInfoForm = () => {
  const [buttonState, setButtonState] = useState(false);
  const { setUserName } = useUserName();
  const { setUserJob } = useUserJob();
  const { setUserAge } = useUserAge();
  const { setUserPhone } = useUserPhone();
  const { setUserEmail } = useUserEmail();
  const { showImage, setShowImage, setUserImageUrl } = useUserImageUrl();
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
    if (value === "") {
      setUserAge("--");
    } else {
      const birthdate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthdate.getFullYear();
  
      if (
        (today.getMonth() < birthdate.getMonth()) ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
      ) {
        setUserAge(age - 1);
      } else {
        setUserAge(age);
      }
  
      if (age < 16) {
        setUserAge("--");
      }
    }
    console.log(age);
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

  const handleShowImage = () => {
    setShowImage(!showImage);
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUserImageUrl(imageUrl);
  };

  return (
    <div className="py-3 border-b border-primary-800 w-full">
      <div onClick={() => setButtonState(!buttonState)} style={{
        transition: `all 0.2s ease-in-out`,
        transform: buttonState ? `translateY(-5px)` : 'none'
      }}>
        <div className="flex justify-between px-6">
          <h1 className="text-base leading-8 font-semibold">Personal Information</h1>
          <button className="text-2xl pl-4  rounded-full">
            {(buttonState ? "-" : "+")}
          </button>
        </div>
      </div>
      <form className={`${(!buttonState && 'hidden')} mt-6 overflow-hidden  flex flex-col gap-2 px-8`}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          onChange={(e) => {
            nameHandler(e.target.value);
          }}
        />

        {/* Job */}
        <input
          type="text"
          name="job-title"
          placeholder="Job Title"
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          onChange={(e) => {
            jobHandler(e.target.value);
          }}
        />

        {/* Age */}
        {/* <input
          type="date"
          name="age"
          id="age"
          placeholder="Age"
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          onChange={(e) => {
            ageHandler(e.target.value);
          }}
        /> */}

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
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
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          onChange={(e) => {
            emailHandler(e.target.value);
          }}
        />

        {/* About */}
        <textarea
          name="about"
          rows={3}
          placeholder="Write a few sentences about yourself"
          className="bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md"
          defaultValue={''}
          onChange={(e) => {
            aboutHandler(e.target.value);
          }}
        />

        {/* Image */}
        <div className='flex items-center gap-2'>
          <input
            name="displayImage"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            value={showImage}
            onClick={handleShowImage}
          />
          <label htmlFor="displayImage" className="font-medium text-primary-300">
            Display Photo?
          </label>
        </div>
        {(showImage &&
          <div className="text-center w-full rounded-lg border-dashed p-16 border border-gray-700 bg-gray-700/40 text-primary-300 transition-all hover:text-primary-100 hover:border-primary-200 focus:outline-none" onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>
            <label
              htmlFor="image-upload"
              className="cursor-pointer font-semibold"
            >

              <div className="grid  place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="35px" fill="gray" viewBox="0 0 24 24" width="35px" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21.02 5H19V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98V5h-2.01c-.54 0-.98.44-.99.98v.03c0 .55.44.99.99.99H17v2.01c0 .54.44.99.99.98h.03c.54 0 .98-.44.98-.98V7h2.02c.54 0 .98-.44.98-.98v-.04c0-.54-.44-.98-.98-.98zM16 9.01V8h-1.01c-.53 0-1.03-.21-1.41-.58-.37-.38-.58-.88-.58-1.44 0-.36.1-.69.27-.98H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.28c-.3.17-.64.28-1.02.28-1.09-.01-1.98-.9-1.98-1.99zM15.96 19H6c-.41 0-.65-.47-.4-.8l1.98-2.63c.21-.28.62-.26.82.02L10 18l2.61-3.48c.2-.26.59-.27.79-.01l2.95 3.68c.26.33.03.81-.39.81z" /></svg>

                <span className="text-white">Upload image</span>
              </div>

              <input id="image-upload" name="file-upload" type="file" accept="image/*" className="sr-only"
                onChange={() => { handleDrop(event) }}
              />
            </label>
          </div>
        )}
      </form>
    </div>
  );
};

export default PersonalInfoForm;
