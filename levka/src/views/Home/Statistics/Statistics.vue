<template>
  <section class="quality">
    <img src="src/assets/img/qualityImg.jpg" alt="" />
    <div class="quality-item">
      <p>100+</p>
      <h4>Пасищно отглеждани животни</h4>
    </div>
    <div class="quality-item">
      <p>100%</p>
      <h4>Качество на предлаганите от нас продукти</h4>
    </div>
    <div class="quality-item">
      <p>100%</p>
      <h4>Здравословна храна</h4>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
/* quality */

.quality {
  position: relative;
  padding: 80px 140px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #f4f4f4;
}

.quality img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.quality::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.393);
  z-index: -1;
}
.quality-item {
  width: 300px;
}
.quality p {
  font-size: 40px;
  font-weight: 900;
}

.quality h4 {
  font-size: 22px;
}
</style>
