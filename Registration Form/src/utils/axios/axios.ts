import $axios from 'axios';

export const axios = $axios.create();

axios.defaults.baseURL =
  'https://registration-form-bd9a1-default-rtdb.firebaseio.com';
