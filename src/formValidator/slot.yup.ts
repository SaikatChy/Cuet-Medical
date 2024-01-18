import * as yup from "yup";
const slotValidator = yup.object().shape({
  startTime: yup.string().required(),
  endTime: yup.string().required(),
  bookingStartTime: yup.string().required(),
  bookingEndTime: yup.string().required(),
  capacity: yup.number().required().min(5).max(250),
  visitingFee: yup.number().required().min(100).max(2000),
});
export default slotValidator;
