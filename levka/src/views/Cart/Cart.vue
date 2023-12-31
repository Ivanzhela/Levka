<script>
import { mapState, mapActions } from "pinia";
import { useUserStore } from "../../store/userStore";
import { useProductsStore } from "../../store/productsStore";
import {
  deleteProductCart,
  setProductCart,
  clearCart,
} from "../../dataProviders/cart.js";
import { ref } from "vue";

ref();

export default {
  data() {
    return {
      finalPrice: 0,
      isPaid: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapState(useProductsStore, ["products"]),
    cartProducts() {
      if (this.user && this.products) {
        const allProducts = this.products;
        const cartItems = this.user.cart;

        const resultObject = cartItems.reduce((obj, item) => {
          obj[item] = (obj[item] || 0) + 1;
          return obj;
        }, {});

        const res = Object.entries(resultObject).map((product) => {
          const id = product[0];
          const prod = allProducts.find((p) => p._id == id);
          return { ...prod, count: product[1] };
        });

        this.finalPrice = res
          .map((p) => p.price * p.count)
          .reduce((pv, cv) => pv + cv, 0);
        return res;
      }
    },
  },
  methods: {
    ...mapActions(useUserStore, ["setUser"]),
    onDeleteProductCart(id) {
      deleteProductCart(id).then((r) => {
        const currUser = JSON.parse(sessionStorage.getItem("user"));
        this.setUser({ ...currUser, cart: r.cart });
      });
    },
    onAddProductCart(id) {
      setProductCart(id).then((r) => {
        const currUser = JSON.parse(sessionStorage.getItem("user"));
        this.setUser({ ...currUser, cart: r.cart });
      });
    },
    onPayment() {
      clearCart().then((r) => {
        const currUser = JSON.parse(sessionStorage.getItem("user"));
        this.setUser({ ...currUser, cart: r.cart });
        this.isPaid = true;
      });
      setTimeout(() => {
        this.isPaid = false;
      }, 3000);
    },
  },
};
</script>

<template>
  <section class="cartItems">
    <div class="items">
      <div class="itemsContent">
        <h3>Продукти</h3>
        <h3>Количество</h3>
        <h3>Цена</h3>
      </div>
      <div class="itemsProducts" :v-if="products">
        <div v-for="p of cartProducts" class="item" :key="p._id">
          <div class="itemContent">
            <img :src="p.img" alt="" />
            <p>{{ p.name }}</p>
          </div>
          <div class="quantity">
            <p @click="onDeleteProductCart(p._id)">-</p>
            <p>{{ p.count }}</p>
            <p @click="onAddProductCart(p._id)">+</p>
          </div>
          <p>{{ p.count * p.price }}</p>
        </div>
      </div>
      <div v-if="user.cart.length === 0" class="emptyCart">
        <p>Нямате продукти в количката!</p>
        <router-link to="/catalog" class="catalogBtn">ПРОДУКТИ</router-link>
      </div>
    </div>
    <div class="payment">
      <h3>Обща сума на количката</h3>
      <div class="paymentDetail">
        <h5>Общо продукти</h5>
        <p>{{ finalPrice.toFixed(2) }}лв.</p>
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
        <p>{{ (finalPrice + 6.2 + 4).toFixed(2) }}лв.</p>
      </div>
      <button class="catalogBtn" @click="onPayment">ПЛАТИ</button>
    </div>
    <div v-if="isPaid" class="paid">
      <p>Благодарим за поръчката!</p>
    </div>
  </section>
</template>

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

.paid {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #10101089;
}

.paid p {
  padding: 30px;
  border: 2px solid #bf04146f;
  background-color: #400101;
  font-size: 48px;
}

.emptyCart {
  margin: 20px 0;
  font-size: 52px;
}
</style>
