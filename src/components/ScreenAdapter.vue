<script setup lang="ts">
import { ElMessage } from 'element-plus';

const el = ref<HTMLElement | null>(null);
const { isSupported, isFullscreen, toggle } = useFullscreen(el);
provide('isFullscreen', isFullscreen);

onMounted(() => {
  if (!isSupported) {
    ElMessage.warning('您的浏览器不支持全屏！');
    return;
  }
  useEventListener(document, 'keydown', (e) => {
    if (e.key === 'Enter') toggle();
  });
});
</script>

<template>
  <div ref="el" class="screen-adapter">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.screen-adapter {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  box-sizing: border-box;
  // 根据设计搞设置即可
  width: 1600px;
  height: 900px;
  color: #fff;
  text-align: center;
  // [background-color] [background-image] [background-repeat] [background-attachment] [background-position] / [background-size] [background-origin] [background-clip]
  background: url('@/assets/img/dashboard/top_bg.svg') no-repeat top center / 1600px 72px,
    url('../assets/img/dashboard/bottom_bg.svg') no-repeat center bottom / 100%;
  background-color: #131124;
}
</style>
