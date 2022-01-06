// const BASE_URL = 'http://10.58.6.238:8000';
const BASE_URL = 'http://10.58.3.33:8000';
const tmpURL = 'http://10.58.2.164:8000';

export const api = {
  signup: BASE_URL + '/users/signup',
  login: BASE_URL + '/users/login',
  main: BASE_URL + '/products/main',
  products: tmpURL + '/products',
  categories: BASE_URL + '/products/categories',
  detail: BASE_URL + '/products/productdetail',
  order: BASE_URL + '/orders/orderitem',
};
