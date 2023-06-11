import { reactive } from "vue";
import instance from "../interceptor/httpInterceptor.ts";
import { ElMessage } from "element-plus";

const UserVO = reactive<User.UserVO>({
  user_id: "",
  user_name: "",
  avatar: "",
  role: "",
  create_time: new Date(),
  update_time: null,
  last_login_time: null,
  last_login_ip: "",
});

export async function UserLogin(params: User.UserLoginRequest) {
  return await instance.post("/user/login").then((successResponse) => {
    if (successResponse.data.code === 200) {
      ElMessage({ showClose: false, message: "登录成功", type: "success" });
    }
  });
}

export async function UserRegister(params: User.UserRegisterRequest) {
  return await instance.post("/user/register").then((successResponse) => {
    if (successResponse.data.code === 200) {
      ElMessage({ showClose: false, message: "注册成功", type: "success" });
    }
  });
}
