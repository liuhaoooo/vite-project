<script setup>
const changeTheme = () => {
  document.body.classList.toggle("light-mode");
};
</script>
<template>
  <div id="home">
    <div class="app">
      <div class="header">
        <div class="menu-circle"></div>
        <div class="header-menu">
          <a class="menu-link is-active" href="#">Apps</a>
          <a class="menu-link" href="#">Your work</a>
          <a class="menu-link" href="#">Discover</a>
          <a class="menu-link" href="#">Market</a>
          <a class="menu-link" href="#">Market</a>
          <a class="menu-link" href="#">Market</a>
        </div>
        <div class="header-profile">
          <div class="dark-light" @click="changeTheme">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="left-side">
          <div class="side-wrapper">
            <div class="side-menu">
              <a href="#">
                <el-icon :size="20">
                  <Orange />
                </el-icon>Stock
              </a>
              <a href="#">
                <el-icon :size="20">
                  <Orange />
                </el-icon>Stock
              </a>
              <a href="#">
                <el-icon :size="20">
                  <Orange />
                </el-icon>Stock
              </a>
              <a href="#">
                <el-icon :size="20">
                  <Orange />
                </el-icon>Stock
              </a>
            </div>
          </div>
        </div>
        <div class="main-container"></div>
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
    &-menu {
      display: flex;
      align-items: center;
      a {
        padding: 20px 30px;
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
    .header-profile {
      display: flex;
      align-items: center;
      padding: 0 16px 0 40px;
      margin-left: auto;
      flex-shrink: 0;
      .dark-light {
        background-color: var(--dropdown-bg);
        box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
        padding: 8px;
        border-radius: 100%;
        z-index: 3;
        cursor: pointer;
        width: 40px;
        height: 40px;
        svg {
          width: 24px;
          flex-shrink: 0;
          fill: #ffce45;
          stroke: #ffce45;
          transition: 0.5s;
        }
      }
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
    a {
      text-decoration: none;
      color: var(--theme-color);
      display: flex;
      align-items: center;
      font-weight: 400;
      padding: 10px;
      font-size: 14px;
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
  }
}
</style>
