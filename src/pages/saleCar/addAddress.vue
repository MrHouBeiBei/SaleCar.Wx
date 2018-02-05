<template>
  <div class="box">
    <div class="header">
      <top-header returnUrl="/addressList" title="收货地址编辑" :isShare='false'></top-header>
    </div>
    <main>
      <div class="content-box">
        <div class="name">
          <div><label for="name">姓名：</label></div>
          <div><input type="text" id="name"></div>
        </div>
        <div class="phone">
            <div><label for="phone">电话：</label></div>
            <div><input type="phone"></div>
        </div>
        <div>
          <div><label for="tel">地址：</label></div>
          <div><textarea name="" id="tel" cols="20" rows="7"></textarea></div>
        </div>

      </div>
       <div class="btn">
           <span>保存</span>
        </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
  .box {
    padding-top: 1rem;
  }

  .content-box {
    padding: 2rem 2rem 0 2rem;
    >div{
        display: flex;
        margin-bottom: 1rem;
        div:nth-child(1){
            flex: 0.5;
            label{
                font-size: 14/20rem;
            }
        }
        div:nth-child(2){
            flex: 2;
            input{
                box-sizing: border-box;
                width: 100%;
                font-size: 14/20rem;
                padding: 0.4rem;
                width: 100%;
                background-color: rgb(239, 243, 246);
                border: none;
            }
            textarea{
                width: 100%;
                box-sizing: border-box;
                resize:none;
                padding: 0.4rem;
                font-size: 14/20rem;
                background-color: rgb(239, 243, 246);
                border: none;
            }
        }
    }

  }


  .btn{
        text-align: center;
        margin-top: 2rem;
        span{
            display: inline-block;
            width: 50%;
            background-color: #E33B40;
            color: #FFF;
            padding: 0.5rem 0;
            font-size: 14/20rem;
        }
    }

</style>

<script>
  import topHeader from '../../components/header'
  export default {
    components: {
      'top-header': topHeader
    },
    data() {
      return {}
    },
    created() {

    },
    methods: {

    }
  }

</script>

