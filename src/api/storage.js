const STORAGE_TOKEN = 'wx.baozhenche.com/token'
const STORAGE_USER_INFO = 'wx.baozhenche.com/user_info'

// import {BASE_URL} from './confit'


export function setToken(data) {
    // localStorage.setItem("STORAGE_TOKEN", data);
    localStorage.token = data;
}

export function getToken() {
    // return localStorage.getItem("STORAGE_TOKEN");
    // if(!localStorage.token) {

    // }
    return localStorage.token;
}

export function setUserInfo(data) {
    localStorage.setItem("STORAGE_USER_INFO", data);
}

export function getUserInfo() {
    return localStorage.getItem("STORAGE_USER_INFO")
}