import React from 'react';

const JobTitleInput = ({ formikProps, jobHandler }) => {
  const handleBlur = (event) => {
    if (formikProps && formikProps.handleBlur) {
      formikProps.handleBlur(event);
    }
  };
  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Value:", value); // Log the value being passed to nameHandler

    jobHandler(value); // Call nameHandler with the value

    formikProps.handleChange(event);
  };

  return (
    <label htmlFor='job-title' className='font-semibold'>
      Job Title
      <input
        type='text'
        name='jobTitle'
        id='jobTitle-length'
        placeholder='Job Title'
        className={
          'bg-transparent w-full border border-gray-600 p-2 placeholder-gray-400 focus:outline-none rounded-md '
        }
        maxLength={30}
        onChange={handleChange}
        onBlur={handleBlur}
        value={formikProps.values.jobTitle}
      />
      {formikProps.touched.jobTitle && formikProps.errors.jobTitle ? (
        <div className='text-red-500 bg-red-900/20 my-2 border-[1px]  border-red-600/20 p-2 rounded-md'>
          {formikProps.errors.jobTitle}
        </div>
      ) : null}
    </label>
  );
};

export default JobTitleInput;
