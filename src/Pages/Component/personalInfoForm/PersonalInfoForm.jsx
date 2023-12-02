import React from 'react';
import NameInput from './inputs/NameInput';
import JobTitleInput from './inputs/JobTitleInput';
import PhoneInput from './inputs/PhoneInput';
import EmailInput from './inputs/EmailInput';
import AboutInput from './inputs/AboutInput';

const PersonalInfoForm = ({
  formikProps,
  handlers_nameHandler,
  handlers_jobHandler,
  handlers_phoneHandler,
  handlers_emailHandler,
  handlers_aboutHandler,


  showImage,
  handleShowImage,
  handleDrop,
}) => {
  const buttonState = true; // Add your logic for buttonState

  return (
    <div className='py-3 border-b border-primary-800 w-full'>
      <div
        onClick={() => {} /* Handle click logic */}
        style={{
          transition: `all 0.2s ease-in-out`,
          transform: buttonState ? `translateY(-5px)` : 'none',
        }}
      >
        <div className='flex justify-between px-6'>
          <h1 className='text-base leading-8 font-semibold'>
            Personal Information
          </h1>
          <button className='text-2xl pl-4 rounded-full'>
            {buttonState ? '-' : '+'}
          </button>
        </div>
      </div>
      <form
        className={`${
          !buttonState && 'hidden'
        } mt-6 overflow-hidden flex flex-col gap-2 px-8`}
      >
        {/* Name */}
        <NameInput
         formikProps={formikProps}
         nameHandler={handlers_nameHandler}
        />
        {/* Job Title */}
        <JobTitleInput
         formikProps={formikProps}
          jobHandler={handlers_jobHandler}
/>
        {/* Phone */}
        <PhoneInput
         formikProps={formikProps}
          phoneHandler={handlers_phoneHandler}
/>
        {/* Email */}
        <EmailInput
          formikProps={formikProps}
          
          emailHandler={handlers_emailHandler}
        />
        {/* About */}
        <AboutInput
          formikProps={formikProps}
          aboutHandler={handlers_aboutHandler}
 
/>
        {/* Image */}
        <div className='flex items-center gap-2'>
          <input
            name='displayImage'
            type='checkbox'
            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
            checked={showImage}
            onChange={handleShowImage}
          />
          <label htmlFor='displayImage' className='font-medium text-primary-300'>
            Display Photo?
          </label>
        </div>
        {showImage && (
          <div
            className='text-center w-full rounded-lg border-dashed p-16 border border-gray-700 bg-gray-700/40 text-primary-300 transition-all hover:text-primary-100 hover:border-primary-200 focus:outline-none'
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            <label htmlFor='image-upload' className='cursor-pointer font-semibold'>
              <div className='grid place-items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='35px'
                  fill='gray'
                  viewBox='0 0 24 24'
                  width='35px'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M21.02 5H19V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98V5h-2.01c-.54 0-.98.44-.99.98v.03c0 .55.44.99.99.99H17v2.01c0 .54.44.99.99.98h.03c.54 0 .98-.44.98-.98V7h2.02c.54 0 .98-.44.98-.98v-.04c0-.54-.44-.98-.98-.98zM16 9.01V8h-1.01c-.53 0-1.03-.21-1.41-.58-.37-.38-.58-.88-.58-1.44 0-.36.1-.69.27-.98H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.28c-.3.17-.64.28-1.02.28-1.09-.01-1.98-.9-1.98-1.99zM15.96 19H6c-.41 0-.65-.47-.4-.8l1.98-2.63c.21-.28.62-.26.82.02L10 18l2.61-3.48c.2-.26.59-.27.79-.01l2.95 3.68c.26.33.03.81-.39.81z' />
                </svg>

                <span className='text-white'>Upload image</span>
              </div>

              <input
                id='image-upload'
                name='file-upload'
                type='file'
                accept='image/*'
                className='sr-only'
                onChange={handleDrop}
              />
            </label>
          </div>
        )}
      </form>
    </div>
  );
};

export default PersonalInfoForm;
