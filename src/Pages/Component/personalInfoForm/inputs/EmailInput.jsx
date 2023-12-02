// EmailInput.jsx
import React from 'react';

const EmailInput = ({ formikProps, emailHandler }) => {
  const handleBlur = (event) => {
    if (formikProps && formikProps.handleBlur) {
      formikProps.handleBlur(event);
    }
  };


  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Value:", value); // Log the value being passed to nameHandler

    emailHandler(value); // Call nameHandler with the value

    formikProps.handleChange(event);
  };


  return (
    <label htmlFor='email' className='block'>
      Email
      <input
        id='email-length'
        name='email'
        type='email'
        placeholder='example@example.com'
        className='bg-transparent w-full border border-gray-600 p-2 placeholder-gray-400 focus:outline-none rounded-md'
        onChange={handleChange}
        onBlur={handleBlur}
        value={formikProps.values.email}
      />
      {formikProps.touched.email && formikProps.errors.email ? (
        <div className='text-red-500 bg-red-900/20 my-2 border-[1px]  border-red-600/20 p-2 rounded-md'>
          {formikProps.errors.email}
        </div>
      ) : null}
    </label>
  );
};

export default EmailInput;
