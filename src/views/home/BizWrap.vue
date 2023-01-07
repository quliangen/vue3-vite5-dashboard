<script setup lang="ts">
import { useBar, useRose } from './hooks/useChart';

useBar();
useRose();
</script>

<template>
  <div class="biz-wrap">
    <div class="biz-wrap-left">
      <div>左</div>
      <div id="bar"></div>
    </div>
    <div class="biz-wrap-center">
      <div>中</div>
      <div>TODO: 地图</div>
    </div>
    <div class="biz-wrap-right">
      <div>右</div>
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
    flex: 1;
    padding: 10px;
    #bar {
      height: 400px;
    }
  }
  &-center {
    flex: 2 0 auto;
    padding: 10px;
  }
  &-right {
    flex: 1;
    padding: 10px;

    #rose {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
