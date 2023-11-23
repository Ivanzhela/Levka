<template>
  <div class="framedImg">
    <div class="frame"></div>
    <img src="src/assets/img/meal2.jpg" alt="" />
    <div v-if="content" class="content">
      <p>Шол-парче</p>
      <p>25лв / кг</p>
      <button class="catalogBtn">Поръчай</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Boolean
  }
};
</script>

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
