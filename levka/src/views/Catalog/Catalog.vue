<script>
import CategoryItem from "./CategoryItem/CategoryItem.vue";

export default {
  data() {
    return {
      categoryNames: ["Стекове", "Дреболии", "Колбаси", "Други"],
    };
  },
  components: { CategoryItem },
};
</script>

<template>
  <section class="catalog">
    <div class="catalogContent">
      <h3>КАТАЛОГ</h3>
      <h1>Продукти</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero harum
        similique quibusdam laboriosam voluptatibus id minima provident iure
        adipisci commodi, illo sint voluptates atque explicabo officia? Deserunt
        velit delectus eius!
      </p>
    </div>
    <div class="products">
      <div class="frame"></div>
      <CategoryItem
        v-for="category of categoryNames"
        :key="category"
        :categoryName="category"
      />
    </div>
  </section>
</template>

<style lang="css" scoped>
.catalog {
  background-color: #101010;
  color: #f4f4f4;
  padding: 40px 140px;
}
.catalogContent {
  text-align: center;
  margin-bottom: 72px;
}
.catalogContent h1 {
  padding: 8px 0;
  font-size: 72px;
}
.catalogContent h3 {
  color: #d9a273;
  font-weight: 900;
  letter-spacing: 0.1em;
  font-size: 24px;
  margin: 0;
}
.catalogContent p {
  font-size: 20px;
}

.products {
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
}

.products .frame {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #d9a273;
  transform: translate(24px, -24px);
}
</style>
