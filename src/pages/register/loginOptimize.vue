<template>
  <div class="box">

    优化登陆...
    <!-- <input type="button" value="登陆" @click="login"> -->
    <!-- <input type="button" value="获取验证码" @click="getCode"> -->
  </div>
</template>

<style lang="less" scoped>
  .box {
    text-align: center;
    padding-top: 2rem;
    font-size: 15/20rem;
  }

</style>

<script>
  import api from "@/api/api";
  import http from "@/api/ajax";
  import { setToken, getToken , setLoginState} from "@/api/storage";
  import {
    LOGIN,
    HOST,
    GET_CODE,
    API_USER_INFO,
    API_ISLOGIN
  } from "@/api/config";
  export default {
    data() {
      return {}
    },
    created() {
       
      // 判断是否登陆
      //  this.getLoginState().then(rt => {
      //    console.log(rt)
      //    if(rt == 200 ) {
      //      this.isLogin()
      //    } else {
      //      this.login()
      //    }
      //  })

       this.login()

    },
    methods: {

      //未登录时调用
      login() {
        var urlSearch = window.location.search;
        var uri;
        // 如果打开的地址有?url
        if (urlSearch.indexOf('?') >= 0) {
          //已访问微信登陆url登陆，地址中有token
          if (urlSearch.indexOf('&') > 0) {
            let uri_token = urlSearch.split("?")[1];
            uri = uri_token.split('&')[0].split('=')[1];
         
            let token = uri_token.split('&')[1].split('=')[1];
            console.log('登陆拿到的uri', uri);
            uri = decodeURIComponent(uri)
            console.log('登陆拿到的解码', uri);

            let orignHost = uri.split('#')[0]  
            // let orignHost = `http://www.baozhenche.com/`
            console.log('原始host',orignHost)
            let newHost = `http://${window.location.host}/`
            console.log('登陆时跳转的host', newHost)
            if( orignHost != newHost ) {
              let loginUrl = window.location.href;
              let jumpUrl = loginUrl.replace(newHost, orignHost)
              console.log('替换后的host', jumpUrl)
              window.location.href = jumpUrl;
              return;
            }
            
            console.log('登陆拿到的token', token);
            //存储登陆状态
            setLoginState(true)
            //存储token
            setToken(token);
            window.location.href = uri
          } else {  
            //未访问微信登陆地址，地址中没有token

            uri = HOST + '/#/' + urlSearch.split("?")[1].split("=")[1];
            //微信登陆地址
            let url = `${LOGIN}?uri=${uri}`;
            console.log('指定地址未编码url', url)
            url = this.decode(uri)
            console.log('指定地址编码后url', url)
            window.location.href = url;
          }
          //没有指定进入页面
        } else {
          uri = HOST + '/#/concessionCarList';
          console.log('默认页面地址编码前', uri)
          //编码后微信登陆地址
          let url = this.decode(uri);
          console.log('默认页面地址编码后',url)
          window.location.href = url;
        }
      },

      //编码需要跳转的地址
      decode(uri) {
        uri = encodeURIComponent(uri)
        return `${LOGIN}?uri=${uri}`;
      },

       //已登陆时调用
      isLogin() {
        var urlSearch = window.location.search
        if(!urlSearch) urlSearch = '?'
        var uri;
        uri = urlSearch.split("?")[1].split("=")[1];
        // if (urlSearch.indexOf('?') >= 0) {
        if (uri) {
            uri = urlSearch.split("?")[1].split("=")[1];
            // this.getBinState(uri);
            console.log('有token有默认地址', uri);
            // window.location.href = `${HOST}/#/${uri}`
            window.location.href = uri;
        } else {
          // uri = 'concessionCarList'
          uri = `http://${HOST}/#/concessionCarList` 
          // 'concessionCarList'
          console.log('有token无默认地址');
          // this.getBinState(uri);
          // window.location.href = `${HOST}/#/${uri}`
          window.location.href = uri;
        }
      },

      //调用接口判断是否登陆
      getLoginState() {
        return http('get', API_ISLOGIN)
        .then( rt => {
          return rt.code
        })
      },

      //判断当前host是否与微信登陆域名一致
      redirectHost () {

      },

      //判断用户有没有绑定手机号
      getBinState(uri) {
        console.log(getToken())
        http('get', API_USER_INFO)
        .then( rt => {
          console.log(rt)
          if( rt.code == 200 ) {
            var phoneN = rt.body.phoneNumber;
            // 已绑定
            if(phoneN) {
              console.log('已绑定')
                window.location.href = `${HOST}/#/${uri}`
            } else {
              console.log('未绑定')
              // console.log(`${HOST}/?${uri}/#/${register}`)
              window.location.href = `${HOST}/?${uri}/#/register`;
                // window.location.href = `${HOST}/#/${register}`
            }
          }
        })
      }

    }
  }

</script>

