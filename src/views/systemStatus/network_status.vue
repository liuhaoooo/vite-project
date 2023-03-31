<script setup>
import content_image_src from '@/assets/images/background/content_image.png'
</script>
<template>
  <div id="network_status">
    <div class="network_status-item left">
      <Title title="网络信息状态"/>
      <label for="">• 移动网络信息</label>
      <div class="left-item"></div>
      <div class="left-item"></div>
      <div class="left-item"></div>
      <div class="left-item"></div>
      <div class="end"></div>
    </div>
    <div class="network_status-item mid">
      <div class="content-image">
        <img :src="content_image_src" alt="">
      </div>
      <div class="end"></div>
    </div>
    <div class="network_status-item right">
      <label for="">• 运行状况统计</label>
      <div class="start"></div>
      <label for="">• 住APN信息</label>
      <div class="end"></div>
    </div>
  </div>
</template>
<style lang="scss">
  #network_status{
    height: calc(100vh - 158px);
    width: 100%;
    @include my-flex(space-between);
    >.network_status-item{
      @include my-flex(flex-start);
      align-items: flex-start;
      flex-direction: column;
      margin-top: 10px;
      height: 100%;
      >label{
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    >.mid{
      width: 40%;
      margin-left: 40px;
      margin-right: 40px;
      >.content-image{
        width: 100%;
        padding-left: 50px;
        padding-right: 50px;
        img {
          width: 100%;
          height: auto;
        }
      }
      >.end{
        width: 100%;
        flex: 1;
        border: 2px solid #7a97c3;
        background: #F3F7FF;
      }
    }
    >.left{
      flex: 1;
      >.left-item{
        width: 100%;
        height: 60px;
        border: 2px solid #7a97c3;
        background: #F3F7FF;
        margin-bottom: 10px;
      }
      >.end{
        width: 100%;
        flex: 1;
        border: 2px solid #7a97c3;
        background: #F3F7FF;
      }
    }
    >.right{
      flex: 1;
      >.start{
        width: 100%;
        height: 200px;
        border: 2px solid #7a97c3;
        background: #F3F7FF;
      }
      >.end{
        width: 100%;
        border: 2px solid #7a97c3;
        background: #F3F7FF;
        flex: 1;
      }
    }
  }
</style>