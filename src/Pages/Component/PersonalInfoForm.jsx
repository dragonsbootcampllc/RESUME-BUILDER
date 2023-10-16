import { useState } from "react";
import Info from "./info";

const PersonalInfoForm = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [about, setAbout] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const nameHandler = (value) => {
    setName(value);
  };

  const jobHandler = (value) => {
    setJob(value);
  };

  const ageHandler = (value) => {
    setAge(value);
  };

  const phoneHandler = (value) => {
    setPhone(value);
  };

  const emailHandler = (value) => {
    setEmail(value);
  };

  const streetHandler = (value) => {
    setStreet(value);
  };

  const cityHandler = (value) => {
    setCity(value);
  };

  const countryHandler = (value) => {
    setCountry(value);
  };

  const aboutHandler = (value) => {
    setAbout(value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageUrl = reader.result;
      setImageUrl(imageUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <>
      <form className="">
        {/* unuseful */}
        <div className="bg-zinc-800">
          {/* unuseful */}
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-7 text-gray-100 ms-64 pt-10">
              Personal Information
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-5 ms-64">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 p-2.5 text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-100  focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    onChange={(e) => {
                      nameHandler(e.target.value);
                    }}
                  />
                </div>
              </div>
              
              <div className="col-span-5 ms-64">
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Job Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="job-title"
                    id="job-title"
                    className="block w-full rounded-md border-0 p-2.5  text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      jobHandler(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-span-5 ms-64">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Age
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    className="block w-full rounded-md border-0 p-2.5  text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      ageHandler(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-span-5 ms-64">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-md border-0 p-2.5  text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      phoneHandler(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-span-5 ms-64">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 p-2.5  text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      emailHandler(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-span-5 ms-64">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    className="block w-full rounded-md border-0 p-2.5  text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      streetHandler(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-span-5 sm:col-start-1 ms-64">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full rounded-md border-0 p-2.5  text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      cityHandler(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-span-5 ms-64">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Country
                </label>
                <div className="mt-2 w-full">
                  <select
                    id="country"
                    name="country"
                    className="block w-full rounded-md border-0 p-2.5  text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      countryHandler(e.target.value);
                    }}
                  >
                    <option>Egypt</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-5 ms-64">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 p-2.5 text-gray-100 bg-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    onChange={(e) => {
                      aboutHandler(e.target.value);
                    }}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-100">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="col-span-5 ms-64">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  IMG
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-100">
                      <label
                        htmlFor="image-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload image</span>
                        <input
                          id="image-upload"
                          name="file-upload"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Info
        name={name}
        job={job}
        age={age}
        phone={phone}
        email={email}
        street={street}
        city={city}
        country={country}
        about={about}
        imageUrl={imageUrl}
      />
    </>
  );
};

export default PersonalInfoForm;
