<script>
export default {
  props: {
    content: Boolean,
    product: {
      type: Object
    },
  },
};
</script>

<template>
  <div class="framedImg">
    <div class="frame"></div>
    <img :src="product.img" alt="" />
    <div v-if="content" class="content">
      <p>{{ product.name }}</p>
      <p>{{ product.price }} / кг</p>
      <button class="catalogBtn">Поръчай</button>
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

.framedImg .content button {
  margin-top: 12px;
}
</style>
