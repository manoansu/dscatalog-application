import axios from "axios";
import qs from "qs";

type LoginResponse ={
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export const BASE_URL = process.env.REACT_APP_BACkEND_URL ?? 'http://localhost:8080';

const tokenKey = 'authData';

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


export const saveAuthData = (obj: LoginResponse) =>{
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? "{}";
    return JSON.parse(str) as LoginResponse;
}