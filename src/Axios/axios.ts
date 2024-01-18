import axios from "axios";
const customAxios = () => {
  const token = localStorage.getItem("token") || "";
  console.log("token===", token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  return axios;
};

export default customAxios;
