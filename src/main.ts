import '@/commons/styles/icons.scss';
import '@/commons/styles/tailwind.scss';
import '@/commons/styles/main.scss';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

import.meta.env.VITE_APPNAME && (document.title = import.meta.env.VITE_APPNAME);