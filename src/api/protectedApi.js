// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coinp2ptrader.com/api/',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('auth_token');
  if (token) config.headers['Authorization'] = "Bearer "+token;
  return config;
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) localStorage.removeItem('auth_token');
    return Promise.reject(err);
  }
);

export const getData = (url, params) => api.get(url, { params });
export const postData = (url, data) => api.post(url, data);

export default api;
