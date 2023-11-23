<template>
  <section class="cartItems">
    <div class="items">
      <div class="itemsContent">
        <h3>Продукти</h3>
        <h3>Количество</h3>
        <h3>Цена</h3>
      </div>
      <div class="itemsProducts">
        <div class="item">
          <div class="itemContent">
            <img src="src/assets/img/meal2.jpg" alt="" />
            <p>Био телешка кайма с подправки</p>
          </div>
          <div class="quantity">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <p>12.50</p>
        </div>
        <div class="item">
          <div class="itemContent">
            <img src="src/assets/img/meal2.jpg" alt="" />
            <p>Био телешка кайма с подправки</p>
          </div>
          <div class="quantity">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <p>12.50</p>
        </div>
        <div class="item">
          <div class="itemContent">
            <img src="src/assets/img/meal2.jpg" alt="" />
            <p>Био телешка кайма с подправки</p>
          </div>
          <div class="quantity">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <p>12.50</p>
        </div>
      </div>
    </div>
    <div class="payment">
      <h3>Обща сума на количката</h3>
      <div class="paymentDetail">
        <h5>Общо продукти</h5>
        <p>12.50лв.</p>
      </div>
      <div class="paymentDetail">
        <h5>Доставка</h5>
        <p>6.20лв.</p>
      </div>
      <div class="paymentDetail">
        <h5>1 x Хладилна чанта със сух лед</h5>
        <p>4.00лв.</p>
      </div>
      <div class="paymentDetail">
        <h5>Общо</h5>
        <p>22.70лв.</p>
      </div>
      <button class="catalogBtn">ПЛАТИ</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.cartItems {
  display: flex;
  background-color: #101010;
  color: #f4f4f4;
  padding: 140px;
  gap: 80px;
}

.cartItems h3 {
  font-size: 22px;
}

.cartItems .items {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.cartItems .items .itemsContent {
  padding: 20px 0;
  border-bottom: 1px solid #d9a273;
}
.cartItems .items .itemsContent,
.cartItems .items .item {
  display: grid;
  grid-template-columns: 3fr 1fr 80px;
  margin-top: 20px;
  align-items: center;
  justify-content: flex-start;
}

.cartItems .items .item .itemContent img {
  width: 100px;
  object-fit: cover;
}
.cartItems .items .item .itemContent {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cartItems .items .item .itemContent p {
  font-size: 20px;
}

.cartItems .items .item .quantity {
  display: flex;
  align-items: center;
}
.cartItems .items .item .quantity p:nth-child(odd) {
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  background-color: #bf0413;
}

.cartItems .items .item .quantity p:nth-child(even) {
  background-color: #f4f4f4;
  color: #101010;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 40px;
  height: 30px;
}

.cartItems .items .item > p {
  font-size: 20px;
}

.cartItems .payment {
  width: 35%;
  border: 1px solid #d9a273;
  padding: 40px;
  color: #f4f4f4;
}

.cartItems .payment .paymentDetail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.cartItems .payment .paymentDetail input {
  border: none;
  border-bottom: 1px solid #d9a273;
  background-color: #101010;
}
.cartItems .payment div:last-child {
  color: red;
}
.cartItems .payment .paymentDetail h5 {
  font-size: 18px;
  width: 40%;
  margin: 0;
}
</style>
