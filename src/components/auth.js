import { getToken } from "@/api/storage";
import { HOST, API_ISLOGIN } from "@/api/config";
import http from "@/api/ajax";

export const auth = function() {
  console.log('判断登陆状态')

  //token失效或找不到token去登陆
  http("get", API_ISLOGIN).then(rt => {
    if ( rt.code != 200 || !getToken()) {
      console.log("未登录地址", window.location.hash.slice(2));
      let uri = window.location.hash.slice(2);
      window.location.href = `${HOST}/?uri=${uri}`;
    }
  });

  // if (!getToken()) {
  //   console.log("未登录地址", window.location.hash.slice(2));
  //   let uri = window.location.hash.slice(2);
  //   window.location.href = `${HOST}/?uri=${uri}`;
  // }

};

