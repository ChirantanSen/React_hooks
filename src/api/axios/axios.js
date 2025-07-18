import axios from "axios";
const adminUrl = `https://wtsacademy.dedicateddevelopers.us/api`;

export const baseURL = adminUrl;

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
// image path
export const product_list = (media) => {
  return `https://wtsacademy.dedicateddevelopers.us/uploads/product/${media}`;
};

// jwt Authentication
axiosInstance.interceptors.request.use(
  async function (config) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
