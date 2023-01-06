<template>
  <el-image style="width: 8.5vw; height: 8.5vw; border-radius: 4px" :src="imgUrl" fit="fill" />
</template>

<script setup lang="ts">
import QRCode from 'qrcode';

const opts = {
  width: 200,
  errorCorrectionLevel: 'L',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 1.4,
};

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
});

const imgUrl = ref('');

watchEffect(() => {
  try {
    if (!props.src) throw new Error('QrCodeImg: 未获取到url');
    QRCode.toDataURL(props.src, opts, (err: object, url: string) => {
      if (err) throw err;
      imgUrl.value = url;
    });
  } catch (error) {
    console.error(error);
  }
});
</script>
