import {createApp} from 'vue';
import './style.scss';
import App from './App.vue';
import {createPinia} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import router from "./router/routers.ts";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(router).use(ElementPlus).mount('#app')
