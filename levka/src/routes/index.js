import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Catalog from "../views/Catalog/Catalog.vue";
import CategoryDetails from "../views/Catalog/CategoryDetails/CategoryDetails.vue";
import Details from "../views/Details/Details.vue";
import Cart from "../views/Cart/Cart.vue";
import Auth from "../views/Auth/Auth.vue";
import NotFound from "../views/404/404.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/catalog", component: Catalog },
  { path: "/catalog/:category", component: CategoryDetails },
  { path: "/details/:id", component: Details },
  { path: "/cart", component: Cart, meta: { authUser: true } },
  { path: "/auth", component: Auth, meta: { user: true } },
  { path: "/:pathMatch(.*)*", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const isAuthenticated = sessionStorage.getItem("user");
  if (to.matched.some((route) => route.meta.authUser) && !isAuthenticated) {
    next("/auth");
  } else if (to.matched.some((route) => route.meta.user) && isAuthenticated) {
    next("/");
  } else {
    next();
  }
  next();
});

export default router;
