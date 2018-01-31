<template>
  <div class="box">
    登陆
    <input type="button" value="登陆" @click="login">
    <!-- <input type="button" value="获取验证码" @click="getCode"> -->
  </div>
</template>

<style lang="less" scoped>
  .box {
    text-align: center;
  }

</style>

<script>
  import api from "@/api/api";
  import http from "@/api/ajax";
  import { setToken, getToken} from "@/api/storage";
  import {
    LOGIN,
    HOST,
    GET_CODE
  } from "@/api/config";
  export default {
    data() {
      return {}
    },
    created() {
      if(getToken()) {
        var urlSearch = window.location.search
        console.log(urlSearch)
        var uri;
        if (urlSearch.indexOf('?') >= 0) {
            uri = urlSearch.split("?")[1].split("=")[1];
            // this.$router.push(`/${uri}`)
            window.location.href = `${HOST}${uri}`
        } else {
          uri = 'register'
          // this.$router.push(`/${uri}`)
          window.location.href = `${HOST}${uri}`
        }
      } else {
        this.login()
      }
    },
    methods: {
      login() {
        var urlSearch = window.location.search
        var uri;
        // 如果打开的地址有?url
        if (urlSearch.indexOf('?') >= 0) {
          //登陆redirect地址
          if (urlSearch.indexOf('&') > 0) {
            let uri_token = urlSearch.split("?")[1];
            uri = uri_token.split('&')[0].split('=')[1];
            let token = uri_token.split('&')[1].split('=')[1];
            // localStorage.setItem("token", token) 
            setToken(token)
            window.location.href = `${HOST}${uri}`
            // this.$store.commit('TOKEN', token)
          } else {
            uri = urlSearch.split("?")[1].split("=")[1];
            let url = `${LOGIN}?uri=${uri}`;
            window.location.href = url;
          }
        } else {
          uri = 'register';
          let url = `${LOGIN}?uri=${uri}`;
          window.location.href = url;
        }
      },

    }
  }

</script>

