<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <div class="head-tabs">
    <el-tabs v-model="activeName" class="head" @tab-click="handleClick">
      <el-tab-pane label="Home" name="home">首页</el-tab-pane>
      <el-tab-pane label="Article" name="article">作文批改</el-tab-pane>
      <el-tab-pane label="MyArticle" name="my_article">我的作文</el-tab-pane>
      <el-tab-pane label="Learn" name="learn">学习资料</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
