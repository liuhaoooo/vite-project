<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-sub-menu index="1">
      <template #title>一级菜单</template>
      <el-sub-menu index="1-1">
        <template #title>二级菜单</template>
        <el-menu-item index="1-1-1">三级菜单</el-menu-item>
        <el-menu-item index="1-1-2">三级菜单</el-menu-item>
        <el-menu-item index="1-1-3">三级菜单</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>一级菜单</template>
      <el-sub-menu index="2-1">
        <template #title>二级菜单</template>
        <el-menu-item index="2-1-1">三级菜单</el-menu-item>
        <el-menu-item index="2-1-2">三级菜单</el-menu-item>
        <el-menu-item index="2-1-3">三级菜单</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>一级菜单</template>
      <el-sub-menu index="3-1">
        <template #title>二级菜单</template>
        <el-menu-item index="3-1-1">三级菜单</el-menu-item>
        <el-menu-item index="3-1-2">三级菜单</el-menu-item>
        <el-menu-item index="3-1-3">三级菜单</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>
<style lang="scss">
.el-sub-menu{
  background: #f3f7ff !important;
  margin-right: 20px !important;
}
</style>
