<script setup lang="ts">
import { ElMessage } from 'element-plus';

const el = ref<HTMLElement | null>(null);
const { isSupported, isFullscreen, toggle } = useFullscreen(el);
provide('isFullscreen', isFullscreen);

const handleEnter = () => {
  toggle();
};

onMounted(() => {
  if (!isSupported) {
    ElMessage.warning('您的浏览器不支持全屏！');
  }
});
</script>

<template>
  <div ref="el" class="screen-adapter" @click="handleEnter">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.screen-adapter {
  box-sizing: border-box;
  // 根据设计搞设置即可
  width: 1600px;
  height: 900px;
  color: #fff;
  text-align: center;
  // [background-color] [background-image] [background-repeat] [background-attachment] [background-position] / [background-size] [background-origin] [background-clip]
  background: url('../assets/img/dashboard/left-top-bg.svg') no-repeat left 31px top 31px / 25px 25px,
    url('../assets/img/dashboard/right-top-bg.svg') no-repeat right 31px top 31px / 25px 25px,
    url('../assets/img/dashboard/left-bottom-bg.svg') no-repeat left 31px bottom 31px / 25px 25px,
    url('../assets/img/dashboard/right-bottom-bg.svg') no-repeat right 31px bottom 31px / 25px 25px,
    url('@/assets/img/dashboard/top_bg.svg') no-repeat top center / 1600px 72px,
    url('../assets/img/dashboard/bottom_bg.svg') no-repeat center bottom / 100%,
    url('../assets/img/dashboard/left_bg.svg') no-repeat top 73px left / 106px 718px,
    url('../assets/img/dashboard/right_bg.svg') no-repeat top 73px right / 106px 718px,
    url('../assets/img/dashboard/main_bg.svg') no-repeat center / cover;
}
</style>
