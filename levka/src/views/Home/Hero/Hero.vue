<template>
  <section class="heroContainer">
    <div class="hero">
      <img src="/src/assets/img/AdobeStock_413182512-scaled.webp" alt="" />
    </div>
    <div class="container">
      <img
        v-for="index in 4"
        src="/src/assets/img/Rock-Salts(1).png"
        :class="'image' + index"
      />
      <img src="/src/assets/img/pepper.png" class="image5" />
    </div>
    <div class="content">
      <img src="/src/assets/img/logo9.png" alt="logo" />
      <h2>СЕМЕЙНА ФЕРМА</h2>
      <p>Свежо, младо телешко месо, директно от транжорната!</p>
      <router-link to="/catalog" class="catalogBtn">НАШИТЕ ПРОДУКТИ</router-link>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
export default {};
</script>

<style lang="css" scoped>
.heroContainer {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.heroContainer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.393);
}
.hero {
  width: 100%;
  height: 100%;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.heroContainer .content {
  position: absolute;
  color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.catalogBtn:hover {
  background-color: #400101;
}
.heroContainer .content img {
  width: 500px;
}

.heroContainer .content h2 {
  font-size: 52px;
  font-weight: 300;
  letter-spacing: 0.1em;
}
.heroContainer .content p {
  font-size: 20px;
  letter-spacing: 0.2em;
  margin-top: 0px;
  color: #d9a273;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
}

.container img {
  position: absolute;
  width: 20px;
  height: 20px;
  color: #f4f4f4;
}
.image2 {
  top: 30%;
  right: 30%;
}

.image3 {
  top: 50%;
  right: 20%;
}

.image1 {
  top: 20%;
  right: 20%;
}

.image4 {
  top: 60%;
  right: 40%;
}
.image5 {
  top: 65%;
  right: 30%;
}
</style>
