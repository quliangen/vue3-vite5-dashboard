<template>
  <ScreenAdapter>
    <div class="title">宽度自适应大屏-曲董</div>
    <BizWrap class="content" />
  </ScreenAdapter>
</template>

<script setup lang="ts">
import BizWrap from './BizWrap.vue';
</script>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<style lang="scss" scoped>
.title {
  flex: 0 0 72px;
  line-height: 72px;
  font-size: 28px;
}
.content {
  flex: 1;
}
</style>
