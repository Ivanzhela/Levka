<template>
  <div class="productCategory">
    <h2>{{ categoryName }}</h2>
    <img src="src/assets/img/meal2.jpg" alt="products" />
    <p>+</p>
  </div>
</template>

<script>
export default {
    props: {
        categoryName: String,
    }
};
</script>

<style lang="css" scoped>
.productCategory {
  width: 290px;
  height: 380px;
  position: relative;
  border: 1px solid #d9a273;
}
.productCategory::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.393);
}
.productCategory h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.productCategory img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.productCategory p {
  display: none;
  width: 60px;
  height: 60px;
  padding: 0 10px;
  line-height: 60px;
  font-size: 72px;
  border-radius: 100%;
  background-color: #bf0413;
  color: #f4f4f4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.productCategory:hover p {
  display: block;
  z-index: 1;
}

.productCategory:hover img,
.productCategory:hover h2 {
  filter: blur(5px);
}

.productCategory:hover {
  transform: translate(0px, -24px);
  transition: transform 0.5s ease-out;
}
</style>
