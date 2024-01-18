import * as yup from "yup";

const academicQualificationsSchema = yup.array().of(
  yup.object().shape({
    degree: yup.string().required("Degree is required"),
    institute: yup.string().required("Institute is required"),
    startTime: yup
      .string()
      .matches(
        /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        "Start time must be in 24-hour format (HH:mm)"
      )
      .required("Start time is required"),
    endTime: yup
      .string()
      .matches(
        /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        "End time must be in 24-hour format (HH:mm)"
      )
      .required("End time is required"),
  })
);

const doctorSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  designation: yup.string().required("Designation is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  aboutMe: yup.string().required("About Me is required"),
  academicQualifications: academicQualificationsSchema,
});

export default doctorSchema;
