const STORAGE_TOKEN = 'wx.baozhenche.com/token'


export function setToken(data) {
    localStorage.setItem("STORAGE_TOKEN", data);
}

export function getToken() {
    return localStorage.getItem("STORAGE_TOKEN")
}