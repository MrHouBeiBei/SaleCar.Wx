<template>
  <div class="box">

    <!-- 正在登陆... -->
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
  import { setToken, getToken} from "@/api/storage";
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
      // 有token已登陆
      // if(getToken()) {
      //   var urlSearch = window.location.search
      //   if(!urlSearch) urlSearch = '?'
      //   var uri;
      //   uri = urlSearch.split("?")[1].split("=")[1];
      //   // if (urlSearch.indexOf('?') >= 0) {
      //   if (uri) {
      //       uri = urlSearch.split("?")[1].split("=")[1];
      //       // this.getBinState(uri);
      //       console.log('有token有默认地址', uri)
      //       window.location.href = `${HOST}/#/${uri}`
      //   } else {
      //     uri = 'concessionCarList'
      //     console.log('有token无默认地址')
      //     // this.getBinState(uri);
      //     window.location.href = `${HOST}/#/${uri}`
      //   }
      // } else {
      //   this.login()
      // }
       this.login()
    },
    methods: {
      login() {
        var urlSearch = window.location.search;
        var uri;
        // 如果打开的地址有?url
        if (urlSearch.indexOf('?') >= 0) {
          //已登陆有token
          if (urlSearch.indexOf('&') > 0) {
            let uri_token = urlSearch.split("?")[1];
            uri = uri_token.split('&')[0].split('=')[1];
            // uri = window.location.href;
            // console.log(`${HOST}/#/${uri}`)
            let token = uri_token.split('&')[1].split('=')[1];
            console.log('登陆拿到的token', token);
            setToken(token);
            // this.getBinState(uri);
            window.location.href = `${HOST}/#/${uri}`
          } else {
            //未登录没有token
            uri = urlSearch.split("?")[1].split("=")[1];
            let url = `${LOGIN}?uri=${uri}`;
            console.log('指定地址', url)
            window.location.href = url;
          }
          //没有指定进入页面
        } else {
          uri = 'concessionCarList';
          let url = `${LOGIN}?uri=${uri}`;
          console.log('默认页面地址',url)
          window.location.href = url;
        }
      },


      //通过getInfo判断token是否有效
      getInfo() {
        http('get', API_ISLOGIN)
        .then( rt => {
          console.log(rt)
          var state;
          if( rt.code == 200 ) {
            state = true
          } else if ( rt.code == 500 ) {
            state = false
          }
          return state
        })
      },

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

