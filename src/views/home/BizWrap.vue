<!--
 * @Author: 曲良恩
 * @Email：quliangen@hualala.com
 * @Date: 2023-01-07 16:55:17
 * @Description: 页面/组件/功能的描述
 * @FilePath: /vue3-vite4-dashboard/src/views/home/Bizwrap.vue
-->
<script setup lang="ts">
// 示例为了方便使用 自定义hooks，业务可封装成组件。
import { useBar, useRose } from './hooks/useChart';
import { useMap } from './hooks/useMap';

useBar();
useRose();
useMap();
</script>

<template>
  <div class="biz-wrap">
    <div class="biz-wrap-left">
      <div id="bar"></div>
    </div>
    <div class="biz-wrap-center">
      <div id="map"></div>
    </div>
    <div class="biz-wrap-right">
      <div id="rose"></div>
      <div>博客二维码</div>
      <QrCodeImg src="https://quliangen.github.io/blog/" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.biz-wrap {
  display: flex;
  padding: 10px 0 25px 0;
  &-left {
    flex: 0 0 300px;
    padding: 10px;
    #bar {
      height: 400px;
    }
  }
  &-center {
    flex: 2 0 auto;
    position: relative;
    #id {
      width: 100%;
      height: 100%;
    }
  }
  &-right {
    flex: 0 0 300px;
    padding: 10px;

    #rose {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
