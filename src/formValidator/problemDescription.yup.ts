import * as Yup from "yup";

const problemDescriptionSchema = Yup.object().shape({
  problemDescription: Yup.string().required("required"),
});

export default problemDescriptionSchema;
