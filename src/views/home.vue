<script setup>
import Menu from "@/components/menu.vue"
import Head from "@/components/head.vue"
</script>
<template>
  <div id="home">
    <Head/>
    <div class="home-body">
      <Menu/>
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">
#home {
  margin: 0;
  background: url(../assets/images/background/home_bg.png) no-repeat;
  background-size: cover;
  background-position: center;
  @include my-flex(flex-start);
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 480px) {
    padding: 0.8em;
  }
  >.home-body{
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
  }
}
</style>
