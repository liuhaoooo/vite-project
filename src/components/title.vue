<script setup>
defineProps({
  title: {
    default: "",
    type: String,
  },
});
</script>
<template>
  <div id="title">
    <div>{{ title }}</div>
  </div>
</template>
<style lang="scss">
#title {
  padding-left: 10px;
  margin-top: 10px;
  width: 265px;
  height: 46px;
  line-height: 46px;
  text-align: left;
  background-image: url(../assets/images/background/title_bg.png);
  background-size: cover;
  background-position: center;
}
</style>