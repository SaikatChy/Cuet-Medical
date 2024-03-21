import axios from "axios";
import axiosInstance from "./axiosInstance";

export default fetchData = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return {
        statusCode: response.status,
        success: false,
        message: "*Unexpected status code",
      };
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      return {
        statusCode: 400,
        success: false,
        message: "*Request is cancelled",
      };
    } else if (error.response) {
      const { status } = error.response;
      if (status === 401 || status === 400) {
        return {
          statusCode: status,
          success: false,
          message: error?.message || "Unauthorized",
          errorMessages: error.response.data?.errorMessages,
        };
      } else if (status === 404) {
        return {
          statusCode: status,
          success: false,
          message: "Route not found",
        };
      } else if (status === 500) {
        return {
          statusCode: status,
          success: false,
          message: "*Internal Server Error",
        };
      } else {
        return {
          statusCode: status,
          success: false,
          message: "*Other Server Error",
        };
      }
    } else if (error.request) {
      if (error.code === "ECONNABORTED") {
        return {
          statusCode: 408,
          success: false,
          message: "*Request time out",
        };
      } else {
        return {
          statusCode: 404,
          success: false,
          message: "*Network Error",
        };
      }
    } else {
      return {
        statusCode: 400,
        success: false,
        message: error?.message,
      };
    }
  }
};