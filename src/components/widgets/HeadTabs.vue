<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import router from "../../router/routers.ts";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  router.push(tab.paneName.toString());
};
</script>

<template>
  <div class="head-tabs">
    <el-tabs v-model="activeName" class="head" @tab-click="handleClick">
      <el-tab-pane label="首页" name="/home"></el-tab-pane>
      <el-tab-pane label="作文批改" name="/article"></el-tab-pane>
      <el-tab-pane label="我的作文" name="/my_article"></el-tab-pane>
      <el-tab-pane label="学习资料" name="/learn"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss"></style>