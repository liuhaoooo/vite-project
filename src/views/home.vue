<script setup>
import { reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useToggle } from '@vueuse/shared'
import { useDark } from "@vueuse/core";
const isDark = useDark({
  storageKey: 'useDarkKEY',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggle = useToggle(isDark);

const router = useRouter();
const route = useRoute();
const state = reactive({
  menuList: [
    { label: "首页", icon: "Help", route: "menu_1" },
    { label: "查看", icon: "Postcard", route: "menu_2" },
    { label: "设置", icon: "Orange", route: "menu_3" },
  ],
  tabList: [
    { label: "IP过滤", route: "ipFiltering" },
    { label: "MAC过滤", route: "macFiltering" },
    { label: "端口过滤", route: "portFiltering" },
  ],
  themeValue: false
})
state.routeName = computed(() => route.name)
const tabChange = (e) => {
  router.push({ name: e.route})
};
const menuChange = (e) => {
  router.push({ name: e.route})
};
</script>
<template>
  <div id="home">
    <div class="app">
      <div class="header">
        <div class="menu-circle"></div>
        <div class="header-profile">
          <el-switch
            v-model="state.themeValue"
            @change="toggle"
            inline-prompt
            active-text="Dark"
            inactive-text="Light"
          />
        </div>
      </div>
      <div class="wrapper">
        <div class="left-side">
          <div class="side-wrapper">
            <div class="side-menu">
              <div @click="menuChange(item)" class="side-menu-item" v-for="item in state.menuList" :key="item.route" :class="{'side-menu-selected':item.route=='menu_1'}">
                <el-icon :size="28"><component style="margin-right: 10px" :is="item.icon"/></el-icon>{{item.label}}
              </div>
            </div>
          </div>
        </div>
        <div class="main-container">
            <div class="main-menu">
                <a @click="tabChange(item)" href="javascript:void(0);" class="menu-link" v-for="item in state.tabList" :key="item.route" :class="{'is-active':item.route==state.routeName}">
                    {{item.label}}
                </a>
            </div>
            <div class="main-body">
              <router-view></router-view>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .app {
    background-color: var(--theme-bg-color);
    max-width: 1250px;
    max-height: 860px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 14px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;
  }

  .header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 58px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    padding: 0 30px;
    white-space: nowrap;
    @media screen and (max-width: 480px) {
      padding: 0 16px;
    }
    .header-profile {
      display: flex;
      align-items: center;
      padding: 0 16px 0 40px;
      margin-left: auto;
      flex-shrink: 0;
    }
  }

  .menu-circle {
    width: 15px;
    height: 15px;
    background-color: #f96057;
    border-radius: 50%;
    box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
    margin-right: 195px;
    flex-shrink: 0;
    @media screen and (max-width: 945px) {
      display: none;
    }
  }

  .wrapper {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
  }

  .left-side {
    flex-basis: 240px;
    border-right: 1px solid var(--border-color);
    padding: 26px;
    overflow: auto;
    flex-shrink: 0;
    @media screen and (max-width: 945px) {
      display: none;
    }
  }

  .side-wrapper + .side-wrapper {
    margin-top: 20px;
  }

  .side-menu {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    .side-menu-selected {
      background-color: var(--hover-menu-bg);
    }
    .side-menu-item {
      cursor: pointer;
      text-decoration: none;
      color: var(--theme-color);
      display: flex;
      align-items: center;
      font-weight: 400;
      padding: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 16px;
      border-radius: 6px;
      transition: 0.3s;
      &:hover {
        background-color: var(--hover-menu-bg);
      }
    }
  }

  .main-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .main-menu {
      display: flex;
      align-items: center;
      a {
        padding: 10px 20px;
        text-decoration: none;
        color: var(--inactive-color);
        border-bottom: 2px solid transparent;
        transition: 0.3s;
        &.is-active,
        &:hover {
          color: var(--theme-color);
          border-bottom: 2px solid var(--theme-color);
        }
      }
    }
    .main-body{
      padding: 10px;
    }
  }
}
</style>
