<script>
import { mapState, mapActions } from "pinia";
import { useUserStore } from "../../store/userStore";
import { useProductsStore } from "../../store/productsStore.js";
import Product from "../../components/Product.vue";
import { setProductCart } from "../../dataProviders/cart.js";

export default {
  components: { Product },
  data() {
    return {
      productId: null,
      currProduct: null,
    };
  },
  created() {
    this.productId = this.$route.params.id;
  },
  computed: {
    ...mapState(useProductsStore, ["products"]),
    findProduct() {
      if (this.products) {
        const prod = this.products.find((p) => p._id === this.productId);
        this.currProduct = prod;
        return prod;
      }
    },
  },
  methods: {
    ...mapActions(useUserStore, ["setUser"]),
    setCart() {
      setProductCart(this.productId).then((r) => {
        const currUser = JSON.parse(sessionStorage.getItem("user"));
        this.setUser({ ...currUser, cart: r.cart });
      });
    },
  },
};
</script>

<template>
  <section class="detailsProduct" v-if="findProduct">
    <Product :product="currProduct" />
    <div class="aboutContent">
      <div class="meatCuts">
        <img src="/src/assets/img/meatCuts.png" alt="" />
        <img id="meatCut" src="/src/assets/img/meatCutCotlet.png" alt="" />
        <img src="/src/assets/img/dottedLine.png" alt="" />
      </div>
      <h2>{{ currProduct.category }}</h2>
      <h1>{{ currProduct.name }}</h1>
      <h3>{{ currProduct.price }}лв / кг</h3>
      <p>{{ currProduct.description }}</p>
      <div class="aboutContentInformation">
        <div class="information">
          <i style="font-size: 24px" class="fa">&#xf05d;</i>
          <p>Една опаковка е със средно тегло 500гр.</p>
        </div>
        <div class="information">
          <i style="font-size: 24px" class="fa">&#xf05d;</i>
          <p>Поръчката е за минимум 1кг.</p>
        </div>
      </div>
      <button class="catalogBtn" @click="setCart">ДОБАВИ В КОЛИЧКА</button>
    </div>
  </section>
</template>

<style lang="css" scoped>
.detailsProduct {
  display: flex;
  justify-content: space-between;
  background-color: #101010;
  padding: 180px 160px;
  padding-bottom: 120px;
  color: #f4f4f4;
}

.detailsProduct .aboutContent {
  width: 50%;
}
.detailsProduct .aboutContent h2 {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #d9a273;
  margin-bottom: 18px;
}
.detailsProduct .aboutContent h1 {
  width: 40px;
  font-size: 62px;
  line-height: 62px;
}
.detailsProduct .aboutContent h3 {
  font-size: 42px;
  line-height: 82px;
  color: #d9a273;
}
.detailsProduct .aboutContent > p {
  font-size: 18px;
  letter-spacing: 0.1em;
  margin-top: 20px;
  font-weight: 150;
}
.detailsProduct .meatCuts {
  position: absolute;
  top: 80px;
  right: 40px;
  width: 600px;
}

.meatCuts img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
}

.meatCuts img:nth-child(2) {
  top: 90px;
  left: 155px;
  opacity: 1;
  position: relative;
}
.meatCuts img:nth-child(3) {
  top: 90px;
  left: 0px;
  width: 160px;
  opacity: 0;
  animation: showLine 4s linear forwards;
}

@keyframes showLine {
  100% {
    opacity: 1;
  }
}
.detailsProduct .aboutContentInformation {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin-top: 20px;
}
.aboutContentInformation .information {
  display: flex;
  gap: 6px;
}
.aboutContentInformation .information i {
  color: #bf0413;
  margin-right: 8px;
}
.detailsProduct .aboutContentInformation p {
  font-weight: 700;
  font-size: 18px;
}
</style>
