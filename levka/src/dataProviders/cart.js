import axios from 'axios';
const BASE_PRODUCT_URL = 'https://dull-ruby-alligator-suit.cyclic.app/shop/cart';

// export async function getProductsCart() {
//   try {
//     const res = await axios.get(BASE_PRODUCT_URL);
//     return res.data;
//   }
//   catch (e) {
//     console.log('Error', e);
//     return e;
//   }
// }

export async function setProductCart(id) {
    try {
      const options = {
        headers: {
          'x-authorization': JSON.parse(sessionStorage.getItem('user')).token
        }
      }
      const res = await axios.post(`${BASE_PRODUCT_URL}${id}`, options);
      return res.data;
    }
    catch (e) {
      console.log('Error', e);
      return e;
    }
  }

  export async function deleteProductCart(id) {
    try {
      const res = await axios.delete(BASE_PRODUCT_URL, {id});
      return res.data;
    }
    catch (e) {
      console.log('Error', e);
      return e;
    }
  }