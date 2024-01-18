import * as  yup from 'yup';

// Define the schema for the interface
const timeSchema=  yup.object().shape({
  startTime: yup.string().matches(
    /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    'Start time must be in the format HH:mm (24-hour)'
  ),
  endTime: yup.string().matches(
    /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    'End time must be in the format HH:mm (24-hour)'
  ),
});
export default timeSchema