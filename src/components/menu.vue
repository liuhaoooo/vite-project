<script setup>
import { reactive, computed } from "vue";

const state = reactive({
  menuList: [
    { label: "首页", icon: "Help", route: "menu_1" },
    { label: "查看", icon: "Postcard", route: "menu_2" },
    { label: "设置", icon: "Orange", route: "menu_3" },
  ],
});
</script>

<template>
  <div id="container">
    <ul id="menu">
      <li>
        <a>系统状态</a>
        <ul>
          <li><a>Lorem ipsum dolor</a></li>
          <li><a>Maecenas lacinia sem</a></li>
          <li><a>Suspendisse fringilla</a></li>
        </ul>
      </li>
      <li>
        <a>网络配置</a>
        <ul>
          <li><a>Lorem ipsum dolor</a></li>
          <li><a>Suspendisse fringilla</a></li>
          <li><a>Lorem ipsum dolor</a></li>
          <li><a>Maecenas lacinia sem</a></li>
          <li><a>Suspendisse fringilla</a></li>
        </ul>
      </li>
      <li>
        <a>WiFi配置</a>
        <ul>
          <li><a>Lorem ipsum dolor</a></li>
          <li><a>Maecenas lacinia sem</a></li>
          <li><a>Suspendisse fringilla</a></li>
        </ul>
      </li>
      <li>
        <a>设备配置</a>
        <ul>
          <li><a>Lorem ipsum dolor</a></li>
          <li><a>Maecenas dignissim fermentum luctus</a></li>
          <li><a>Suspendisse fringilla</a></li>
        </ul>
      </li>
      <li>
        <a>系统设置</a>
        <ul>
          <li><a>Lorem ipsum dolor</a></li>
          <li><a>Maecenas dignissim fermentum luctus</a></li>
          <li><a>Suspendisse fringilla</a></li>
        </ul>
      </li>
      <li>
        <a>系统设置</a>
        <ul>
          <li><a>Lorem ipsum dolor</a></li>
          <li><a>Maecenas dignissim fermentum luctus</a></li>
          <li><a>Suspendisse fringilla</a></li>
        </ul>
      </li>
      <li>
        <a>系统设置</a>
        <ul>
          <li><a>Lorem ipsum dolor</a></li>
          <li><a>Maecenas dignissim fermentum luctus</a></li>
          <li><a>Suspendisse fringilla</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
#container {
  position: relative;
  width: 940px;
}

#container:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
}

#menu {
  margin: 0;
  position: relative;
  float: left;
  width: 100%;
  padding: 0;
  border-radius: 3px;
}

#menu,
#menu ul {
  list-style: none;
}

#menu > li {
  background: #F3F7FF;
  float: left;
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.25);
  perspective: 1000px;
  margin-right: 10px;
}

#menu > li:first-child {
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: -1px 0 0 rgba(0, 0, 0, 0.1), 1px 0 0 rgba(255, 255, 255, 0.25);
}

#menu a {
  display: block;
  position: relative;
  z-index: 10;
  padding: 13px 20px 13px 20px;
  text-decoration: none;
  color: rgba(75, 75, 75, 1);
  line-height: 1;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.05em;
  background: transparent;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.9);
  transition: all 0.25s ease-in-out;
}

#menu > li:hover > a {
  background: #fff;
  color: #16cdab;
  text-shadow: none;
  cursor: pointer;
}

#menu li ul {
  position: absolute;
  left: 0;
  z-index: 1;
  width: 200px;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: transparent;
  overflow: hidden;
  transform-origin: 50% 0%;
}

#menu li:hover ul {
  padding: 15px 0;
  background: #fff;
  opacity: 1;
  visibility: visible;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
  animation-name: swingdown;
  animation-duration: 1s;
  animation-timing-function: ease;
}

@keyframes swingdown {
  0% {
    opacity: 0.99999;
    transform: rotateX(90deg);
  }

  30% {
    transform: rotateX(-20deg) rotateY(5deg);
    animation-timing-function: ease-in-out;
  }

  65% {
    transform: rotateX(20deg) rotateY(-3deg);
    animation-timing-function: ease-in-out;
  }

  100% {
    transform: rotateX(0);
    animation-timing-function: ease-in-out;
  }
}

#menu li li a {
  font-weight: 400;
  color: #666;
  text-shadow: none;
  border-top: dotted 1px transparent;
  border-bottom: dotted 1px transparent;
  transition: all 0.15s linear;
  text-align: left;
  cursor: pointer;
}

#menu li li a:hover {
  color: #16cdab;
  border-top: dotted 1px rgba(255, 255, 255, 0.15);
  border-bottom: dotted 1px rgba(255, 255, 255, 0.15);
  background: rgba(0, 223, 252, 0.02);
}
</style>