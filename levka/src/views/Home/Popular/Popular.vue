<template>
  <section class="popularProducts">
    <div class="content">
      <h2>ПРОДУКТИ</h2>
      <h3>Най-продавани</h3>
    </div>
    <div class="catalog">
      <Product v-for="prod of slicedProducts" :key="prod._id" content :product="prod"/>
    </div>
  </section>
</template>

<script>
import Product from "../../../components/Product.vue";
import { mapState } from 'pinia';
import { useProductsStore } from '../../../store/productsStore.js'
export default {
  components: {
    Product,
  },
  computed: {
    ...mapState(useProductsStore, ['products']),
    slicedProducts() {
      if(this.products)
      return this.products.slice(0, 4)
    }
  },
};
</script>

<style lang="css" scoped>
/* popularProducts */

.popularProducts {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 100px 140px;
  background-color: #101010;
  color: #f4f4f4;
}

.popularProducts .content h2 {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #d9a273;
  margin-bottom: 18px;
}
.popularProducts .content h3 {
  font-size: 72px;
  line-height: 72px;
}

.popularProducts .catalog {
  display: flex;
  gap: 40px;
  text-align: center;
}

.popularProducts .framedImg .frame {
  height: 400px;
  border: 2px solid #d9a273;
  transform: translate(20px, -20px);
}

.popularProducts .framedImg img {
  height: 400px;
}

.popularProducts .framedImg .content p:first-child {
  font-size: 28px;
  font-weight: 800;
  margin-top: 12px;
}

.popularProducts .framedImg .content p:nth-child(2) {
  color: #d9a273;
  font-size: 24px;
  font-weight: 600;
}

.popularProducts .framedImg .content button {
  margin-top: 12px;
}
</style>
