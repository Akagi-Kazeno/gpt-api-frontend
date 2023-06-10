import {createApp} from 'vue';
import './style.scss';
import App from './App.vue';
import {createPinia} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(ElementPlus).mount('#app')
