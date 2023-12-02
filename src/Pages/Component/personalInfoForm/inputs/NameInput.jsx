import React from 'react';

const NameInput = ({ formikProps, nameHandler }) => {
  const handleBlur = (event) => {
    if (formikProps && formikProps.handleBlur) {
      formikProps.handleBlur(event);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Value:", value); // Log the value being passed to nameHandler

    nameHandler(value); // Call nameHandler with the value

    formikProps.handleChange(event);
  };

  return (
    <label htmlFor='name' className='font-semibold'>
      Full Name
      <input
        type='text'
        name='name'
        id='name-length'
        placeholder='Full Name'
        className={
          'bg-transparent w-full border border-gray-600 p-2 placeholder-gray-400 focus:outline-none rounded-md '
        }
        maxLength={70}
        onChange={handleChange} // Use the handleChange function
        onBlur={handleBlur}
        value={formikProps.values.name}
      />
      {formikProps.touched.name && formikProps.errors.name ? (
        <div className='text-red-500 bg-red-900/20 my-2 border-[1px]  border-red-600/20 p-2 rounded-md'>
          {formikProps.errors.name}
        </div>
      ) : null}
    </label>
  );
};

export default NameInput;
