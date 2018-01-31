<template>
  <div class="box">
    登陆
    <input type="button" value="登陆" @click="login">
    <input type="button" value="获取验证码" @click="getCode">
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
  import {LOGIN, HOST, GET_CODE} from "@/api/config";
  export default {
    data() {
      return {}
    },
    created() {
    },
    methods: {
      async login() {
        let url = `${LOGIN}?url=${HOST}register`
        console.log(url)
        window.location.href = url;
        // location=LOGIN;
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

