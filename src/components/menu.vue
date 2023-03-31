<script setup>
import { ref, computed, reactive } from 'vue'
import { useMenuStore } from '@/store/menu'
const menuStore = useMenuStore()
const { menu_level_1_2, menu_level_3 } = menuStore
const activeIndex = ref('systemStatus')
const handleSelect = (key, keyPath) => {
  console.log(key)
}
</script>

<template>
  <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
    <el-sub-menu :index="items.name" v-for="items in menu_level_1_2" :key="items.name">
      <template #title>{{ $t(items.title) }}</template>
      <template v-for="item in items.children" :key="item.name">
        <el-sub-menu :index="item.name" v-if="menu_level_3[item.name]">
          <template #title>{{ $t(item.title) }}</template>
          <el-menu-item :index="i.name" v-for="i in menu_level_3[item.name]" :key="i.name">{{ $t(i.title) }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item :index="item.name" v-else>{{ $t(item.title) }}</el-menu-item>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss">
.el-sub-menu {
  background: #fff !important;
  margin-right: 20px !important;
}
</style>
