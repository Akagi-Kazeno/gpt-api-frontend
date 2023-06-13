<script setup lang="ts"></script>

<template>
  <div id="app">
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </div>
</template>

<style scoped lang="scss">
#main-view {
  display: flex;
  grid-area: main;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;

  &.main-page {
    background-color: transparent;
  }
}
</style>
