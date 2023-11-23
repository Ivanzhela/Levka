<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './views/Home/Home.vue';
import Catalog from './views/Catalog/Catalog.vue';
import CategoryDetails from './views/Catalog/CategoryDetails/CategoryDetails.vue';
import Details from './views/Details/Details.vue';
import Cart from './views/Cart/Cart.vue';
import Auth from './views/Auth/Auth.vue';

export default {
  components: {
    Header,
    Footer,
    Home,
    Catalog,
    CategoryDetails,
    Details,
    Cart,
    Auth
},
};
</script>

<template>
  <Header />
  <router-view></router-view>
  <!-- <Home/> -->
  <!-- <Catalog/> -->
  <!-- <CategoryDetails/> -->
  <!-- <Details/> -->
  <!-- <Cart/> -->
  <!-- <Auth /> -->
  <Footer/>
</template>
