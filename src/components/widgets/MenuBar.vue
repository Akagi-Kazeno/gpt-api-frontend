<script setup lang="ts">
import { ref } from "vue";
import { getUserInfo, UserLogout } from "../../service/userService.ts";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const quit = UserLogout;
const user = await getUserInfo().then((res) => {
  const userAvatar = res.avatar;
  return {
    userAvatar,
  };
});
</script>

<template>
  <div class="menu-bar">
    <el-menu
      :default-active="activeIndex"
      class="menu"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-avatar src="{{user.userAvatar}}"></el-avatar>
        </template>
        <el-menu-item class="center" index="/user/info">个人中心</el-menu-item>
        <el-menu-item class="center" @click="quit">
          <el-text type="danger">退出登录</el-text>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}

.center {
  text-align: center;
}
</style>
