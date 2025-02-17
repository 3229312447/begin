<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Plus } from '@element-plus/icons-vue'
</script>

<template>
  <header>
    <el-button type="primary" :icon="Plus" circle />
  </header>
  <div>内容</div>
  <footer>尾部</footer>

  <!-- <RouterView /> -->
</template>

<style scoped>
</style>
