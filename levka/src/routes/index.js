import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Catalog from "../views/Catalog/Catalog.vue";
import Details from "../views/Details/Details.vue";
import Cart from "../views/Cart/Cart.vue";
import Auth from "../views/Auth/Auth.vue";
import NotFound from "../views/404/404.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/catalog", component: Catalog },
  { path: "/details", component: Details },
  { path: "/Cart", component: Cart },
  { path: "/Auth", component: Auth },
  { path: '/:pathMatch(.*)*', component: NotFound },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
