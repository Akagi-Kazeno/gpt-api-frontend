import axios from "axios";
import router from "../router/routers.ts";
import { ElMessage } from "element-plus";
import { clearAllCookies } from "../service/userService.ts";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {},
});
instance.interceptors.response.use(function (response) {
  const data = response.data;
  if (data.code === 200) {
    return data.data;
  } else if (data.code === 401) {
    localStorage.clear();
    clearAllCookies().then(() => router.replace("/login"));
    ElMessage({
      showClose: false,
      message: "访问该资源需要登录,请先登录",
      type: "error",
    });
  } else {
    ElMessage({ showClose: false, message: response.data, type: "error" });
  }
  return response;
});
export default instance;
