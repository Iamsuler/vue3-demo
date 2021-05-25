import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import Router from './router/index';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

app
  .use(Router)
  .use(ElementPlus)
  .mount('#app');
