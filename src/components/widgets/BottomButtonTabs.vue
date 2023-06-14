<script setup lang="ts"></script>

<template>
  <div class="bottom-button-tabs">
    <el-row>
      <el-col :span="12"> </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <div class="buttons-tab">
          <el-button type="primary">上传图片</el-button>
          <el-button type="primary">上传文件</el-button>
          <el-button type="info"
            >提交
            <el-icon>
              <Check />
            </el-icon>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss"></style>
