<template>
  <div>
    <header class="header">会员绑定公众号</header>
    <main>
      <input class="phone" type="text" v-model="phone" placeholder="请输入您的手机号">
      <div class="code">
        <input type="text" v-model="code" placeholder="请输入手机号"><input type="button" value="发送验证码">
      </div>
      <div class="bin-phone">
        <div class="agreement">
          <input type="checkbox" id="agreement">
          <label @click="read">{{Agreement}}</label>
        </div>
        <input type="button" value="绑定" @click="binPhone">
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
  }

  input[type=text]::-webkit-input-placeholder {
    font-size: 18/20rem;
    color: rgb(204, 204, 204);
    padding-left: 0.5rem;
  }

  input[type=button] {
    font-size: 17/20rem;
  }

  main {
    .phone {
      width: 85%;
      margin-left: 5%;
    }

    .code {
      width: 85%;
      margin-left: 5%;
      margin-top: 19/20rem;
      // display: flex;

      input:nth-child(1) {
        width: 65%;
      }
      input:nth-child(2) {
        width: 35%;
        color: #818588
      }
    }

    .bin-phone{
      width: 85%;
      margin-left: 5%;
      margin-top: 70/20rem;

      .agreement{
        label{
          font-size: 14/20rem;
          color: rgb(0, 0, 0)
        }
        input[type=checkbox]{
          vertical-align: middle;
        }
      }

      input[type=button]{
        width: 100%;
        // background-color: rgba(255, 255, 255, 0.8)
        background-color: #E33B40;
        color: rgba(255, 255, 255, 0.8)
      }
    }
  }

</style>


<script>
  export default {
    data() {
      return {
        phone: '',
        code: '',
        Agreement: '<<用户协议>>'
      }
    },
    methods: {
      binPhone() {
        this.$router.push('/concessionCarList')
      },
      read() {
        this.$router.push('./userProtocol')
      }
    }
  }

</script>

