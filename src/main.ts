// vue router
import router from '@/router/index';
// pinia 暂不使用
// import store from '@/store';
import 'element-plus/es/components/message/style/css';

import App from './App.vue';

// 全局样式
import '@/assets/styles/index.scss';

const app = createApp(App);

app.use(router).mount('#app');
