// PhoneInput.jsx
import React from 'react';


const PhoneInput = ({ formikProps, phoneHandler }) => {
  const handleBlur = (event) => {
    if (formikProps && formikProps.handleBlur) {
      formikProps.handleBlur(event);
    }
  };
  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Value:", value); // Log the value being passed to nameHandler

    phoneHandler(value); // Call nameHandler with the value

    formikProps.handleChange(event);
  };
  

  return (
    <label htmlFor='phone' className='font-semibold'>
      Phone Number
      <input
        id='phone-length'
        type='tel'
        name='phone'
        maxLength={15}
        onChange={handleChange}
        placeholder='Phone Number'
        className={
          'bg-transparent w-full border  border-gray-600 p-2  placeholder-gray-400 focus:outline-none rounded-md '
        }
        
        pattern='^[0-9+]+$'

        onBlur={handleBlur}
        value={formikProps.values.phone}
      />
      {formikProps.touched.phone && formikProps.errors.phone ? (
        <div className='text-red-500 bg-red-900/20 my-2 border-[1px]  border-red-600/20 p-2 rounded-md'>
          {formikProps.errors.phone}
        </div>
      ) : null}
    </label>
  );
};

export default PhoneInput;
