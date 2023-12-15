import axios from 'axios';

export async function loginUser(userData) {
  try {
    const res = await axios.post('https://dull-ruby-alligator-suit.cyclic.app/user-auth/login', userData);
    return res.data;
  }
  catch (e) {
    console.log('Error', e);
    return e;
  }
}

export async function registerUser(userData) {
  try {
    const res = await axios.post('https://dull-ruby-alligator-suit.cyclic.app/user-auth/register', userData);
    return res.data;
  }
  catch (e) {
    console.log('Error', e);
    return e;
  }
}