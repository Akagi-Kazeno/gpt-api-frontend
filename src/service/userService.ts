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
  last_login_ip: null,
});

export async function UserLogin(params: User.UserLoginRequest) {
  return await instance.post("/user/login", params).then((successResponse) => {
    if (successResponse.data.code === 200) {
      ElMessage({ showClose: false, message: "登录成功", type: "success" });
    }
  });
}

export async function UserRegister(params: User.UserRegisterRequest) {
  return await instance
    .post("/user/register", params)
    .then((successResponse) => {
      if (successResponse.data.code === 200) {
        ElMessage({ showClose: false, message: "注册成功", type: "success" });
      }
    });
}

export async function getUserInfo() {
  await instance.get("/user/info").then((res) => {
    if (res.data.code === 200) {
      const user = res.data.data;
      UserVO.user_id = user.user_id;
      UserVO.user_name = user.user_name;
      UserVO.avatar = user.avatar;
      UserVO.role = user.role;
      UserVO.create_time = user.create_time;
      UserVO.update_time = user.update_time;
      UserVO.last_login_time = user.last_login_time;
      UserVO.last_login_ip = user.last_login_ip;
    }
  });
  return UserVO;
}

export async function UserLogout() {
  await clearAllCookies();
  return ElMessage({ showClose: false, message: "已退出登录", type: "info" });
}

export async function clearAllCookies() {
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = keys.length; i--; ) {
      document.cookie =
        keys[i] + "=0;path=/;expires=" + new Date(0).toUTCString();
    }
  }
}
