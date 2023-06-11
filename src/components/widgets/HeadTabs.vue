<script setup lang="ts">

</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Home" name="home">首页</el-tab-pane>
    <el-tab-pane label="Article" name="article">作文批改</el-tab-pane>
    <el-tab-pane label="MyArticle" name="my_article">我的作文</el-tab-pane>
    <el-tab-pane label="Learn" name="learn">学习资料</el-tab-pane>
  </el-tabs>
</template>

<style scoped>

</style>