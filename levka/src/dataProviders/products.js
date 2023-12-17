import axios from 'axios';
const BASE_PRODUCT_URL = 'https://dull-ruby-alligator-suit.cyclic.app/shop';

export async function getAllProducts(category) {
  try {
    const res = await axios.get(`${BASE_PRODUCT_URL}?category=${category}`);
    return res.data;
  }
  catch (e) {
    console.log('Error', e);
    return e;
  }
}

export async function getProduct(id) {
    try {
      const res = await axios.post(`${BASE_PRODUCT_URL}/${id}`);
      return res.data;
    }
    catch (e) {
      console.log('Error', e);
      return e;
    }
  }