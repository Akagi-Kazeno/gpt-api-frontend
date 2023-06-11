<script setup lang="ts">
import { ref } from "vue";
import instance from "../../interceptor/httpInterceptor.ts";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const quit = instance.post("/user/quit");
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-avatar src="{{userAvatar}}"></el-avatar>
      </template>
      <el-menu-item class="center" index="/user/info">个人中心</el-menu-item>
      <el-menu-item class="center" @click="quit">
        <el-text type="danger">退出登录</el-text>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}

.center {
  text-align: center;
}
</style>
