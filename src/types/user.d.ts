declare namespace User {
  interface UserVO {
    user_id?: string;
    user_name?: string;
    avatar?: string;
    role?: string;
    create_time?: Date;
    update_time?: Date | null;
    last_login_time?: Date | null;
    last_login_ip?: string;
  }

  interface UserLoginRequest {
    user_name: string;
    password: string;
  }

  interface UserRegisterRequest {
    user_name: string;
    password: string;
    check_password: string;
  }
}
