import axios from 'axios';
const BASE_PRODUCT_URL = 'https://dull-ruby-alligator-suit.cyclic.app/shop/cart';

export function setProductCart(id) {
    try {
      const options = {
        method: 'POST',
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

  export function clearCart() {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'x-authorization': JSON.parse(sessionStorage.getItem('user')).token
        }
      }
      const res = fetch(`${BASE_PRODUCT_URL}`, options).then(r => r.json());
      return res;
    }
    catch (e) {
      console.log('Error', e);
      return e;
    }
  }