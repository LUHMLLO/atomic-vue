import '@styles/icons.scss';
import '@styles/tailwind.scss';
import '@styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';

const app = createApp(App);
app.use(router);
app.mount('#app');

import.meta.env.VITE_APPNAME && (document.title = import.meta.env.VITE_APPNAME);
