// PersonalInfoFormContainer.jsx
import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import validationSchema from './validationSchema'; // Import the validationSchema
import {
  useUserName,
  useUserJob,
  useUserAge,
  useUserPhone,
  useUserEmail,
  useUserAbout,
  useUserImageUrl,
} from "../../Data/PersonalInformation.data";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonalInfoFormContainer = () => {
    const [buttonState, setButtonState] = useState(false);
    const { setUserName } = useUserName();
    const { setUserJob } = useUserJob();
    const { setUserAge } = useUserAge();
    const { setUserPhone } = useUserPhone();
    const { setUserEmail } = useUserEmail();
    const { showImage, setShowImage, setUserImageUrl } = useUserImageUrl();
    const { setUserAbout } = useUserAbout();
  


  const formik = useFormik({
    initialValues: {
      name: '',
      jobTitle: '',
      phone: '',
      email: '',
      about: '',
    },
    validationSchema: validationSchema, 
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form submitted with values:', values);
    },
  });

  const delayedHandlerCall = (handler, value) => {
    setTimeout(() => {
      handler(value);
    }, 200);
  };




  const handleChange = (event, handler) => {
    formik.handleChange(event);

    if (formik.isValid) {
      delayedHandlerCall(handler, event.target.value);
    }
  };

  const nameHandler = (value) => {
    if (typeof value !== "string") {
      console.error("Invalid value passed to nameHandler");
      return true;
    }

    if (value === "") {
      setUserName("Your Name");
    } else {
      if (value.length <= 70) {

        console.log("Value: final", value);  // Log the value
        delayedHandlerCall(setUserName, value);
      } else {
        return false;
      }
    }
  };

  const jobHandler = (value) => {
    if (typeof value !== "string") {
      console.error("Invalid value passed to jobHandler");
      return true;
    }

    if (value === "") {
      setUserJob("Your Job Title");
    } else {
      if (value.length <= 30) {
        delayedHandlerCall(setUserJob, value);
      } else {
        return false;
      }
    }
  };

  const phoneHandler = (value) => {
    if (typeof value !== "string") {
      console.error("Invalid value passed to phoneHandler");
      return true;
    }

    if (value === "") {
      setUserPhone("Your Phone Number");
    } else {
      const regex = /^(\+)?([0-9]{11,12})$/;
      if (regex.test(value)) {
        delayedHandlerCall(setUserPhone, value);
      } else {
        return false;
      }
    }
  };

  const emailHandler = (value) => {
    if (typeof value !== "string") {
      console.error("Invalid value passed to emailHandler");
      return true;
    }

    if (value === "") {
      setUserEmail("Your Email");
    } else {
      if (value.length <= 50) {
        delayedHandlerCall(setUserEmail, value);
      } else {
        return false;
      }
    }
  };

  const aboutHandler = (value) => {
    if (typeof value !== "string") {
      console.error("Invalid value passed to aboutHandler");
      return true;
    }

    if (value === "") {
      setUserAbout("Your About");
    } else {
      if (value.length <= 300) {
        delayedHandlerCall(setUserAbout, value);
      } else {
        return false;
      }
    }
  };

  const handleShowImage = () => {
    setShowImage(!showImage);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const imageUrl = URL.createObjectURL(file);
    // Replace with your image handling logic
    console.log('Image dropped:', imageUrl);
  };

  return (
    <PersonalInfoForm
    formikProps={formik}  // Make sure formikProps is defined and has the expected structure
    handlers_nameHandler={nameHandler}
    handlers_jobHandler={jobHandler}
    handlers_phoneHandler={phoneHandler}
    handlers_emailHandler={emailHandler}
    handlers_aboutHandler={aboutHandler}
    buttonState={buttonState}
    showImage={showImage}
    handleShowImage={handleShowImage}
    handleDrop={handleDrop}
  />
  );
};

export default PersonalInfoFormContainer;
