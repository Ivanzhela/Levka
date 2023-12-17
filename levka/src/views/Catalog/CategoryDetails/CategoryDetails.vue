<script>
import Product from "../../../components/Product.vue";
import { getAllProducts } from "../../../dataProviders/products";

export default {
  components: { Product },
  data() {
    return {
      products: null,
    };
  },
  async created() {
    const category = this.$route.params.category;
    await getAllProducts(category).then((prod) => (this.products = prod));
  },
};
</script>

<template>
  <section class="categoryDetails">
    <div class="categoryDetailsContent">
      <h1>Стекове</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, sint
        iusto. Nobis neque aut, repellendus quam recusandae architecto
        laboriosam suscipit ducimus quos assumenda, aperiam aliquam reiciendis
        pariatur impedit incidunt consequuntur? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Autem earum esse dolor quo dolorum
        doloremque quidem vero neque quis rem!
      </p>

      <img src="src/assets/img/meatCuts.png" alt="" />
    </div>
    <div class="products">
      <Product content v-for="prod of products" :key="prod._id" :product="prod" />
    </div>
  </section>
</template>

<style lang="css" scoped>
.categoryDetails {
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 140px;
  position: relative;
  background-color: #101010;
  color: #f4f4f4;
  position: relative;
  justify-content: flex-end;
}

.categoryDetailsContent {
  width: 40%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 140px;
  background-color: #101010;
}
.categoryDetailsContent h1 {
  font-size: 52px;
  margin-bottom: 20px;
}

.categoryDetailsContent p {
  font-size: 20px;
}

.categoryDetailsContent img {
  position: absolute;
  top: 40px;
  left: 10%;
  opacity: 0.1;
}
.categoryDetails .products {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 100px;
}
</style>
