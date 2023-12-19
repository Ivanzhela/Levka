import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from "./routes/index";
import './styles/reset.css';
import App from './App.vue';
import { useUserStore } from './store/userStore';
import { useProductsStore } from './store/productsStore';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

const userStore = useUserStore();
userStore.setSessionUser();
const productStore = useProductsStore();
productStore.setProducts();
app.mount('#app');
