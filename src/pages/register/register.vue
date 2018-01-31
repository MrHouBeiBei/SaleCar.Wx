<template>
  <div>
    <header class="header">会员绑定公众号</header>
    <main>
      <input class="phone" type="text" v-model="phone" placeholder="请输入您的手机号" @onchange="verifyValue">
      <div class="code">
        <input type="text" v-model="code" placeholder="请输入四位验证码" @onchange="verifyValue"><input type="button" :disabled='buttonDisable' :value="verifyCodeTime" @click="getCode" :class="{'canClick': !buttonDisable, 'dontClick': buttonDisable}">
      </div>
      <div class="bin-phone">
        <div class="agreement">
          <input type="checkbox" id="agreement" checked v-model="check" @change="changeCheck">
          <label @click="read">{{Agreement}}</label>
        </div>
        <input :class="{'canClick': !binButtonDisable, 'dontClick': binButtonDisable}" :disabled='binButtonDisable' type="button" value="绑定" @click="binPhone">
        <!-- <input type="button" value="清除tooken" @click="clear"> -->
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
  .header {
    text-align: center;
    padding: 2rem 0 1.5rem 0;
    font-size: 1rem;
    font-weight: 600
  }

  input {
    background-color: #EFF2F7;
    border: none;
    height: 36/20rem;
    outline: none;
    font-size: 15/20rem
  }

  input[type=text]{
    padding-left: 0.5rem;
    box-sizing: border-box
  }

  input[type=text]::-webkit-input-placeholder {
    font-size: 15/20rem;
    color: rgb(204, 204, 204);
    padding-left: 0.5rem;
  }

  input[type=button] {
    font-size: 15/20rem;
  }

  main {
    .phone {
      width: 85%;
      margin-left: 7.5%;
    }

    .code {
      width: 85%;
      margin-left: 7.5%;
      margin-top: 19/20rem; // display: flex;
      input:nth-child(1) {
        width: 65%;
        height: 36/20rem;
        vertical-align: middle;
      }
      input:nth-child(2) {
        width: 35%;
        // color: #818588;
        height: 36/20rem;
        vertical-align: middle; // border-left:1 #818588
      }
      .canClick{
        background-color: #E33B40;
        color: rgba(255, 255, 255, 0.8)
      }
      .dontClick{
        background-color: #EFF2F7;
        color: #818588;
      }
    }

    .bin-phone {
      width: 85%;
      margin-left: 7.5%;
      margin-top: 70/20rem;

      .agreement {
        label {
          font-size: 14/20rem;
          color: rgb(0, 0, 0)
        }
        input[type=checkbox] {
          vertical-align: middle;
        }
      }

      input[type=button] {
        width: 100%; // background-color: rgba(255, 255, 255, 0.8)
        // background-color: #E33B40;
        // color: rgba(255, 255, 255, 0.8)
      }
      .canClick{
        background-color: #E33B40;
        color: rgba(255, 255, 255, 0.8)
      }
      .dontClick{
        background-color: #EFF2F7;
        color: #818588;
      }
    }
  }

</style>


<script>
  import http from "@/api/ajax";
  import {
    Toast
  } from 'mint-ui';
  import {
    GET_CODE, API_BIND
  } from "@/api/config";
  export default {
    data() {
      return {
        phone: '',
        code: '',
        Agreement: '<<用户协议>>',
        check: 'true',
        verifyCodeTime: '发送验证码',
        buttonDisable: false,
        binButtonDisable: true
      }
    },
    created() {},
    methods: {
      getCode() {
        var regMobile = /^1[34578]\d{9}$/;
        if (!regMobile.test(this.phone)) {
          Toast({
            message: '验证码错误',
            position: 'bottom',
            duration: 3000
          });
          return false;
        } else {
          let data = {}
          data.mobileNo = this.phone
          http('get', GET_CODE, data)
            .then(rt => {
              console.log(rt)
              if (rt.code == 200) {
                Toast({
                  message: '验证码已发送！',
                  position: 'bottom',
                  duration: 3000
                });
                this.countDown();
              }
            })
        }
      },
      binPhone() {
        if (!this.check) {
          Toast({
            message: '请先同意用户协议再进行绑定',
            position: 'bottom',
            duration: 3000
          });
          return false;
        } 
        let data = {};
        data.mobileNo = this.phone;
        data.mobileCode = this.code;
        http('get', API_BIND, data)
        .then( rt => {
          console.log(rt)
        })
        // this.$router.push('/concessionCarList')
      },
      read() {
        this.$router.push('./userProtocol')
      },
      changeCheck() {
        console.log(this.check)
      },
      countDown() {
        var that = this;
        var c = 60;
        var intervalId = setInterval(function () {
          c = c - 1;
          that.verifyCodeTime = c + 's后重发',
            that.buttonDisable = true
          if (c == 0) {
            clearInterval(intervalId);
            that.verifyCodeTime = '获取验证码',
              that.buttonDisable = false
          }
        }, 1000)
      },
      verifyValue: function () {
        var mobile = this.phone;
        var regMobile = /^1[34578]\d{9}$/;
        if ((this.code >= 1000) && regMobile.test(mobile)) {
          this.binButtonDisable = false
        } else {
          this.binButtonDisable = true
        }
      },
      clear() {
        localStorage.setItem("token", '') 
      }
    },
     watch: {
      phone: function () {
        this.verifyValue();
      },
      code: function () {
        this.verifyValue();
      }
    },
  }

</script>

