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
      console.log(localStorage.getItem("token"))
      if(localStorage.getItem("token")) {
        // console.log(1)
        // var urlSearch = window.location.search
        var uri;
        // if (urlSearch.indexOf('?') >= 0) {
        //     uri = urlSearch.split("?")[1].split("=")[1];
        //     this.$router.push(`/${uri}`)
        // } else {
          uri = 'register'
          this.$router.push(`/${uri}`)
        // }
      } else {
        this.login()
      }
    },
    methods: {
      login() {
        var urlSearch = window.location.search
        var uri;
        if (urlSearch.indexOf('?') >= 0) {
          if (urlSearch.indexOf('&') > 0) {
            let uri_token = urlSearch.split("?")[1];
            uri = uri_token.split('&')[0].split('=')[1];
            let token = uri_token.split('&')[1].split('=')[1];
            // this.$store.commit('TOKEN', token)
            localStorage.setItem("token", token) 
            this.$router.push(`/${uri}`)
            // window.location.href = `${HOST}${uri}`
            // window.location.href = `http://localhost:8080/#/${uri}`
            // console.log(`http://localhost:8080/#/${uri}`)
          } else {
            uri = urlSearch.split("?")[1].split("=")[1];
            let url = `${LOGIN}?uri=${uri}`;
            window.location.href = url;
          }
        } else {
          uri = 'register'
          let url = `${LOGIN}?uri=${uri}`
          window.location.href = url;
        }

      },

      getCode() {
        let data = {}
        data.mobileNo = '18235445477'
        http('get', GET_CODE, data)
          .then(rt => {
            console.log(rt)
          })
      }

    }
  }

</script>

