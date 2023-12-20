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
        method: 'POST',
        headers: {
          'x-authorization': JSON.parse(sessionStorage.getItem('user')).token
        }
      }
      const res = await fetch(`${BASE_PRODUCT_URL}/${id}`, options);
      return res;
    }
    catch (e) {
      console.log('Error', e);
      return e;
    }
  }

  export function deleteProductCart(id) {
    try {
      const options = {
        method: 'PUT',
        headers: {
          'x-authorization': JSON.parse(sessionStorage.getItem('user')).token
        }
      }
      const res = fetch(`${BASE_PRODUCT_URL}/${id}`, options).then(r => r.json());
      return res;
    }
    catch (e) {
      console.log('Error', e);
      return e;
    }
  }