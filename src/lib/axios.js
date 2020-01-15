import axios from 'axios';

import { API_BASE_URL } from '../../config.json';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: 10000,
});

const request = (config = {}) => {
  const promise = axiosInstance(config);

  return promise;
};

axiosInstance.request = request;

const GET_METHODS = ['get', 'delete', 'head', 'options'];

const POST_METHODS = ['post', 'put', 'patch'];

export const configureHttpMethods = () => {
  GET_METHODS.forEach(method => {
    axiosInstance[method] = (url, config = {}) =>
      request({
        ...config,
        method: method.toUpperCase(),
        url,
      });
  });

  POST_METHODS.forEach(method => {
    axiosInstance[method] = (url, data = {}, config = {}) =>
      request({
        ...config,
        method: method.toUpperCase(),
        url,
        data,
      });
  });
};

export default axiosInstance;
