// window.BASE_URL = "http://wx.baozhenche.com";

export const HOST = `http://${window.location.host}`

export const BASE_URL = "http://wx.baozhenche.com";
// export const BASE_URL = "http://192.168.0.8:8080";

//登陆
export const LOGIN = `${BASE_URL}/wechatLogin`;

//判断是否登陆
export const API_ISLOGIN = `${BASE_URL}/isLogin`;

//发送验证码
export const GET_CODE = `${BASE_URL}/sendMsgCode`;

export const API_BIND = `${BASE_URL}/bind`;

export const API_USER_INFO= `${BASE_URL}/myInfo`;

//优惠汽车列表
export const API_CAR_LIST = `${BASE_URL}/tCarCampaign/select`;

//获取jssdk config
export const API_WX_CONFIG = `${BASE_URL}/getWechatJsSdkConfig`;