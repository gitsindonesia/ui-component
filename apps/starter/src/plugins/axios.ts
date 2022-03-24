import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = String(import.meta.env.VITE_API_BASE_URL);

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};
