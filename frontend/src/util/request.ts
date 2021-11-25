import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import history from "./history";
import { getAuthData } from "./storage";

export const BASE_URL = process.env.REACT_APP_BACkEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData : LoginData) =>{

    // Dados de Headers no Postman que utilizamos para requisição no login de use, usando (Key and Value).
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    // Dados de Body no Postman que utilizamos para requisição no login de user usando (Key and Value).
    //E esse valor tem que ser convertido para urlencoded usando o qs.stringify que gera urlencode
    // equivalente de objecto abaixo usando o sprédoperatorpor ex ...logindata,.
    const data = qs.stringify ({
        ...loginData,
        grant_type : 'password'
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers});
}

export const requestBackend = (config: AxiosRequestConfig) => {
    
    const headers = config.withCredentials 
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
    } 
    : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('INTERCEPTOR ANTES DA REQUISIÇÂO');
    return config;
  }, function (error) {
    // Do something with request error
    console.log('INTERCEPTOR ERRO NA REQUISIÇÂO');
    return Promise.reject(error);
  });

  
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('INTERCEPTOR RESPOSTA COM SUCESSO');
    return response;
  }, function (error) {
      if(error.response.status === 401 || error.response.status === 403){
          history.push('/admin/auth');
      }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('INTERCEPTOR RESPOSTA COM ERRO');
    return Promise.reject(error);
  });

 