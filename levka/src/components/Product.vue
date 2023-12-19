<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        content: Boolean,
        product: {
            type: Object
        },
    },
    components: { RouterLink },
    
};
</script>

<template>
  <div class="framedImg">
    <div class="frame"></div>
    <img :src="product.img ? product.img : '/src/assets/img/meal2.jpg'" alt="" />
    <div v-if="content" class="content">
      <p>{{ product.name }}</p>
      <p>{{ product.price }} / кг</p>
      <router-link :to="'/details/' + product._id" class="catalogBtn">Поръчай</router-link >
    </div>
  </div>
</template>

<style lang="css" scoped>
.framedImg {
  position: relative;
  width: 40%;
}
.framedImg .frame {
  position: absolute;
  width: 100%;
  height: 450px;
  border: 2px solid #d9a273;
  transform: translate(30px, -30px);
}
.framedImg img {
  position: relative;
  width: 100%;
  height: 450px;
  object-fit: cover;
}
.framedImg .content p:first-child {
  font-size: 28px;
  font-weight: 800;
  margin-top: 12px;
}

.framedImg .content p:nth-child(2) {
  color: #d9a273;
  font-size: 24px;
  font-weight: 600;
}

.framedImg .content a {
  display: inline-block;
  margin-top: 12px;
  text-decoration: none;
}
</style>
