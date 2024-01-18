import * as Yup from "yup";

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "*Password must be at least 6 characters")
    .required("*Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "*Passwords must match")
    .required("*Confirm Password is required"),
});
export default passwordSchema;
