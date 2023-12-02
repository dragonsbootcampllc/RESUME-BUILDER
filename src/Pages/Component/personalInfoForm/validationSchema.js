// validationSchema.js
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Full Name is required")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Full Name should only contain letters and spaces"
    )
    .min(2, "Name should be at least 2 characters")
    .test(
      "name-length",
      "Each name should not exceed 10 characters",
      (value) => {
        if (value) {
          const names = value.split(" ");
          return names.every((name) => name.length <= 14);
        }
        return true;
      }
    ),
  jobTitle: Yup.string()
    .max(30, "Job Title should not exceed 30 characters")
    .required("Job Title is required")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Job Title should only contain letters and spaces"
    )
    .min(2, "Job Title should be at least 2 characters")
    .test(
      "jobTitle-length",
      "Job Title should not exceed 30 characters",
      (value) => {
        if (value) {
          const names = value.split(" ");
          return names.every((name) => name.length <= 30);
        }
        return true;
      }
    ),
  phone: Yup.string()
    .max(14, "Phone number should not exceed 14 characters")
    .test("phone-length", "Phone number should not exceed 14 characters", (value) => {
      if (value) {
        const names = value.split(" ");
        return names.every((name) => name.length <= 14);
      }
      return true;
    }),
  email: Yup.string()
    .max(50, "Email should not exceed 50 characters")
    .email()
    .required("Email is required")
    .test("email-length", "Email should not exceed 50 characters", (value) => {
      if (value) {
        const names = value.split(" ");
        return names.every((name) => name.length <= 50);
      }
      return true;
    }),
  about: Yup.string().max(300, "About should not exceed 300 characters"),
});

export default validationSchema;
