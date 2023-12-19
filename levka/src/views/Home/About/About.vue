<template>
  <section class="about">
    <Product :content="false" :product="{}"/>
    <div class="aboutContent">
      <h2>ЛЕВКА</h2>
      <h3>Винаги Свежо Месо</h3>
      <p>
        Семейна ферма "Левка" предлага свежо, младо телешко месо, директно от
        транжорната. Ние отглеждаме нашите телета в екологично чистия район на
        Южен Сакар. Не използваме антибиотици, хормони и други препарати или
        химикали при отглеждането им!
      </p>
      <div class="aboutContentInformation">
        <div class="information">
          <i style="font-size: 24px" class="fa">&#xf05d;</i>
          <p>БЕЗ</p>
          <p>антибиотици</p>
        </div>
        <div class="information">
          <i style="font-size: 24px" class="fa">&#xf05d;</i>
          <p>БЕЗ</p>
          <p>хормони</p>
        </div>
        <div class="information">
          <i style="font-size: 24px" class="fa">&#xf05d;</i>
          <p>БЕЗ</p>
          <p>химикали</p>
        </div>
      </div>
      <button class="catalogBtn">ПРОДУКТИ</button>
    </div>
  </section>
</template>

<script>
import Product from '../../../components/Product.vue';

export default { components: { Product } };
</script>

<style lang="css" scoped>
.about {
  display: flex;
  justify-content: space-between;
  background-color: #101010;
  padding: 140px;
  color: #f4f4f4;
}
.about .aboutContent {
  width: 50%;
}
.about .aboutContent h2 {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #d9a273;
  margin-bottom: 18px;
}
.about .aboutContent h3 {
  font-size: 72px;
  line-height: 72px;
}

.about .aboutContent > p {
  font-size: 18px;
  letter-spacing: 0.1em;
  margin-top: 20px;
  font-weight: 150;
}

.about .aboutContentInformation {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin-top: 20px;
}
.aboutContentInformation .information {
  display: flex;
  align-items: center;
  gap: 6px;
}
.aboutContentInformation .information i {
  color: #bf0413;
  margin-right: 8px;
}
.about .aboutContentInformation p {
  margin-top: 0;
  font-size: 28px;
}
.about .aboutContentInformation p:nth-child(2) {
  font-weight: 900;
}
</style>
