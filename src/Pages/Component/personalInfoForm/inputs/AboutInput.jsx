// AboutInput.jsx
import React from 'react';

const AboutInput = ({ formikProps, aboutHandler }) => {
  const handleBlur = (event) => {
    if (formikProps && formikProps.handleBlur) {
      formikProps.handleBlur(event);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Value:", value); // Log the value being passed to nameHandler

    aboutHandler(value); // Call nameHandler with the value

    formikProps.handleChange(event);
  };
  return (
    <div>
      <label htmlFor='about' className='font-semibold'>
        About
        <textarea
          name='about'
          rows={3}
          placeholder='Write a few sentences about yourself'
          className='bg-transparent w-full border border-gray-600  p-2 placeholder-gray-400 focus:outline-none rounded-md'
          defaultValue={''}
          onChange={handleChange}
          onBlur={handleBlur}
          value={formikProps.values.about}
        />
      {formikProps.touched.about && formikProps.errors.about ? (
        <div className='text-red-500 bg-red-900/20 my-2 border-[1px]  border-red-600/20 p-2 rounded-md'>
          {formikProps.errors.about}
        </div>
      ) : null}
      </label>
    </div>
  );
};

export default AboutInput;
