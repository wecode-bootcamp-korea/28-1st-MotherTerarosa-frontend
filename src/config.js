const BASE_URL = 'http://10.58.6.238:8000';
const MOCK_URL = 'http://localhost:3000/data';

export const api = {
  categories: MOCK_URL + '/categories.json',
  products: BASE_URL + '/products.json',
  detail: BASE_URL + '/products/productdetail',
};
