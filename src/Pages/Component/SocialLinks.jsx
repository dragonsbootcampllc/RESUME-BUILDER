// Menna =================
import { useState } from 'react';
import { useWebsiteURL, useFacebookURL, useTwitterURL, useLinkedInURL } from '../Data/SocialLinksData';

const SocialLinks = () => {

  const [showInputs, setShowInputs] = useState(false);

  const { setWebsiteURL } = useWebsiteURL();

  const { setFacebookURL } = useFacebookURL();

  const { setTwitterURL } = useTwitterURL();

  const { setLinkedInURL } = useLinkedInURL();


  const handleToggleInputs = () => {
    setShowInputs(!showInputs);
  };


  const handleWebsiteURLChange = (event) => {
    setWebsiteURL(event.target.value);
  };


  const handleFacebookURLChange = (event) => {
    setFacebookURL(event.target.value);
  };


  const handleTwitterURLChange = (event) => {
    setTwitterURL(event.target.value);
  };

  const handleLinkedinURLChange = (event) => {
    setLinkedInURL(event.target.value);
  };

  return (
    <div className="py-3 border-b border-gray-300 w-full">
      <div className="flex justify-between px-6">
        <h2 className="font-semibold leading-8 text-base">Website & Social Links</h2>
        <button
          className="pl-4 text-2xl"
          onClick={handleToggleInputs}
        >
          {showInputs ? '–' : '+'}
        </button>
      </div>

      <div className={`mt-6 flex flex-col gap-2 px-8 ${!showInputs && 'hidden'}`}>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder='Website URL'
          onChange={handleWebsiteURLChange}
        />

        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder='Facebook URL'
          onChange={handleFacebookURLChange}
        />


        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder='Twitter URL'
          onChange={handleTwitterURLChange}
        />


        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder='LinkedIn URL'
          onChange={handleLinkedinURLChange}
        />
      </div>
    </div>

  );
};

export default SocialLinks;
