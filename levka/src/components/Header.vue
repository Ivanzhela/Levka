<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useUserStore } from "../store/userStore";
export default {
  computed: {
    ...mapState(useUserStore, ["isAuthenticated", "user"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
};
</script>

<template>
  <header>
    <router-link to="/" class="logo">
      <img src="/src/assets/img/logo9.png" alt="logo" />
    </router-link>
    <nav>
      <router-link to="/catalog"
        ><i style="font-size: 24px" class="fa">&#xf002;</i></router-link
      >
      <router-link to="/catalog"
        ><i class="material-icons">&#xe8d1;</i></router-link
      >
      <template v-if="isAuthenticated">
        <router-link to="/cart"
          class="cartContainer"><i style="font-size: 24px" class="fa">&#xf07a;</i>
          <p class="cart">{{ user.cart.length }}</p>
        </router-link>
        <router-link to="/" @click="logout"
          ><i style="font-size: 24px" class="fa">&#xf08b;</i></router-link
        >
      </template>
      <template v-else="!isAuthenticated">
        <router-link to="/auth"
          ><i style="font-size: 24px" class="fa">&#xf07a;</i></router-link
        >
        <router-link to="/auth"
          ><i style="font-size: 24px" class="fa">&#xf2be;</i></router-link
        >
      </template>
    </nav>
  </header>
</template>

<style lang="css" scoped>
header {
  width: 100%;
  height: 100px;
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
}
header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.0789449568890056) 13%,
    rgba(0, 0, 0, 0.21900097929796913) 25%,
    rgba(0, 0, 0, 0.32264243588060226) 37%,
    rgba(0, 0, 0, 0.42068165156687676) 47%,
    rgba(0, 0, 0, 0.5215219877013305) 58%,
    rgba(0, 0, 0, 0.6419701669730392) 68%,
    rgba(0, 0, 0, 0.7260037804184174) 77%,
    rgba(0, 0, 0, 0.8464519596901261) 91%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: -1;
}
header img {
  width: 180px;
}
header nav {
  display: flex;
  gap: 40px;
}
header nav a {
  width: 14px;
  height: 14px;
  text-decoration: none;
  color: #f4f4f4;
}
header nav a i {
  display: block;
  width: 20px;
  height: 20px;
}

.cartContainer {
  display: flex;
  width: fit-content;
}
.cart {
  border-radius: 100%;
  background-color: #bf0413;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
}
</style>
