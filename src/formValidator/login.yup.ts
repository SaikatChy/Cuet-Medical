import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  phoneNo: Yup.string()
    .matches(/^\d{11}$/, "*Phone number must be 11 digits")
    .required("*Phone number is required"),
  password: Yup.string()
    .min(6, "*Password must be at least 6 characters")
    .required("*Password is required"),
});

export default loginSchema;
