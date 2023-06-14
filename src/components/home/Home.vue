<script setup lang="ts">
import MenuBar from "../widgets/MenuBar.vue";
import HeadTabs from "../widgets/HeadTabs.vue";
import ButtonTabs from "../widgets/ButtonTabs.vue";
import BottomButtonTabs from "../widgets/BottomButtonTabs.vue";
</script>

<template>
  <el-container>
    <el-header>
      <div class="menu">
        <menu-bar />
      </div>
    </el-header>
    <el-main>
      <div class="head">
        <head-tabs />
      </div>
      <div class="head-button">
        <button-tabs />
      </div>
      <div class="bottom-button">
        <bottom-button-tabs />
      </div>
    </el-main>
  </el-container>
</template>

<style scoped></style>
