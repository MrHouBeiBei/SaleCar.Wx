import { getToken } from "@/api/storage";
import { HOST } from "@/api/config";

export const auth = function() {
  if (!getToken()) {
    console.log("未登录地址", window.location.hash.slice(2));
    let uri = window.location.hash.slice(2);
    window.location.href = `${HOST}/?uri=${uri}`;
  }

  //     // if(!getToken()) {

  //     // }
};
