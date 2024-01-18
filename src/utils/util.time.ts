const convertToAMPMFormat = (time24hr: string): string => {
  const [hours, minutes] = time24hr.split(":");
  let ampm = "AM";
  let hour = parseInt(hours, 10);

  if (hour >= 12) {
    ampm = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  }

  return `${hour.toString().padStart(2, "0")}:${minutes} ${ampm}`;
};
export default convertToAMPMFormat;
