import Vue from 'vue';
import axios from 'axios';

class HttpRequest {
  constructor(url='/') {
    this.axiosInstance = axios.create({
      baseURL: url,
      timeout: 10000
    });

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };

    this.axiosInstance.interceptors.request.use(
      async (config) => {
        while (!Vue.prototype.$keycloak.ready) {
          await sleep(100);
        }

        const token = Vue.prototype.$keycloak.token;
        if (token) {
          config.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error.response));

    // Add a response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => {
        if (response.status === 200 || response.status === 201) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(response);
        }
      },
      (error) => Promise.reject(error.response));
  }

  get(url, data) {
    return this.axiosInstance.get(url, { 
      params: data 
    });
  }

  post(url, data) {
    return this.axiosInstance.post(url, data);
  }

  put(url, data) {
    return this.axiosInstance.put(url, data);
  }

  delete(url, param, data) {
    return this.axiosInstance.delete(url, {
      params: param,
      data: data
    });
  }

  request(type, url, data) {
    let promise = null;
    switch (type) {
      case 'GET': promise = this.axiosInstance.get(url, { params: data }); break
      case 'POST': promise = this.axiosInstance.post(url, data); break
      case 'PUT': promise = this.axiosInstance.put(url, data); break
      case 'DELETE': promise = this.axiosInstance.delete(url, data); break
      default : promise = this.axiosInstance.get(url, { params: data }); break
    };
    return promise;
  }
}

export default HttpRequest