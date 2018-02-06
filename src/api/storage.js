const STORAGE_TOKEN = 'wx.baozhenche.com/token'
const STORAGE_USER_INFO = 'wx.baozhenche.com/user_info'
const STORAGE_LOGIN_STATE = 'wx.baozhenche.com/user_info'
const STORAGE_INITIAL_HREF = 'wx.baozhenche.com/initial_href'

// import {BASE_URL} from './confit'

//token
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

//初始地址
export function setInitialHref(data) {
    localStorage.setItem(STORAGE_INITIAL_HREF, data);
}
export function getInitialHref(data) {
    return localStorage.getItem(STORAGE_INITIAL_HREF);
}

//用户登陆状态
export function setLoginState(data) {
    localStorage.setItem(STORAGE_LOGIN_STATE, data);
}
export function getLoginState() {
    localStorage.getItem(STORAGE_LOGIN_STATE);
}

//用户信息
export function setUserInfo(data) {
    localStorage.setItem(STORAGE_USER_INFO, data);
}
export function getUserInfo() {
    return localStorage.getItem(STORAGE_USER_INFO)
}