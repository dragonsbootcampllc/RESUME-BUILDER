// Menna =================
import { useState } from 'react';

const Sociallinks = () => {

  const [showInputs, setShowInputs] = useState(false);

  const [websiteURL, setWebsiteURL] = useState('');

  const [facebookURL, setFacebookURL] = useState('');

  const [twitterURL, setTwitterURL] = useState('');

  const [linkedinURL, setLinkedinURL] = useState('');


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
    setLinkedinURL(event.target.value);
  };
  return (
    <div className="mt-4 ms-2 border-b w-[20rem]">
      <div className="flex justify-between mb-2">
        <h2 className="mr-2 font-bold text-gray-600">Website & Social Links</h2>
        <button
          className="px-2 py-1 text-white bg-blue-500 rounded-md"
          onClick={handleToggleInputs}
        >
          {showInputs ? '–' : '+'}
        </button>
      </div>

      {showInputs && (
        <div>
          <label className="block mb-2 text-gray-600">Website URL:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            value={websiteURL}
            onChange={handleWebsiteURLChange}
          />

          <label className="block mt-4 mb-2 text-gray-600">Facebook URL:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            value={facebookURL}
            onChange={handleFacebookURLChange}
          />

          <label className="block mt-4 mb-2 text-gray-600">Twitter URL:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            value={twitterURL}
            onChange={handleTwitterURLChange}
          />

          <label className="block mt-4 mb-2 text-gray-600">LinkedIn URL:</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            value={linkedinURL}
            onChange={handleLinkedinURLChange}
          />
        </div>
      )}
    </div>
  );

};

export default Sociallinks;
