<template>
  <div class="box">
    <header>
      <top-header returnUrl="/shoppingCar" title="填写订单" :isShare='false'></top-header>
    </header>

    <div class="ahipping-method">
      <div class="method">
        <div>
          配送方式
        </div>
        <div>
          <label for="store">
            <input id="store" type="radio" name="type"> 店铺取车</label>
          <br>
          <label for="ex">
            <input id="ex" type="radio" name="type"> 物流快送</label>
        </div>
      </div>
      <div class="tip">
        <i></i>
        <span>店铺取车，可以在约定时间去附近门店提车</span>
        <br>
        <span>物流快送，发物流到制定地址，物流费用由购车人出。</span>
      </div>
    </div>

    <div class="select-address">
      <div class="title">选择发货地</div>
      <div class="address">
        <div></div>
        <div>
          <label for="t">
            <input id="t" type="radio" name="address"> 天津</label>
          <label for="b">
            <input id="b" type="radio" name="address"> 北京</label>
        </div>
      </div>
    </div>
    <div class="receive-address">
      <div>物流地址</div>
      <div @click="goSelectAddress">
        <div>
          <span class="name">古力娜扎</span>
          <span class="phone">12312341234</span>
        </div>
        <div>
          <i></i>
          <span class="address">北京市朝阳区大郊亭中街15号</span>
        </div>
      </div>
      <div>></div>
    </div>

    <div class="buy-car-list">
      <div class="list">
        <div>
          <div>
            <img src="../../assets/logo.png" alt="">
          </div>
          <div>
            <img src="../../assets/test.jpg" alt="">
          </div>
        </div>
        <div>
          <span>共2件 ></span>
        </div>
      </div>
      <div class="remarks">
        <div>备注信息</div>
        <div>
          <textarea name="" id="" cols="30" rows="2" placeholder="请输入备注（最多支持50字）"></textarea>
        </div>
      </div>
    </div>

    <div class="price">
      <div class="total">
        <div>在线定金合计</div>
        <div>¥99.00</div>
      </div>
      <div class="reduce">
        <div>优惠减免</div>
        <div>¥00.00</div>
      </div>
    </div>

    <footer class="footer-box">
        <div>
            <span>实际支付：</span><span>¥99.00</span>
        </div>
        <div>
            <span>提交订单</span>
        </div>
    </footer>

  </div>
</template>

<style lang="less" scoped>
  @box-padding: 17/20rem 14/20rem;
  #item-tite {
    font-size: 15/20rem;
    font-weight: 600;
    color: #000;
  }

  .box {
    padding-top: 1rem;
    height: 100%;
    background-color: rgb(240, 243, 245);
  }

  .ahipping-method {
    background-color: #FFF;
    margin-top: 0.5rem;
    padding: 17/20rem 14/20rem;
    div.method {
      display: flex;
      div:nth-child(1) {
        flex: 1;
        font-size: 15/20rem;
        font-weight: 600;
        color: #000;
      }
      div:nth-child(2) {
        flex: 3;
        font-size: 14/20rem;
        input {
          vertical-align: middle;
          margin-top: -0.15rem;
        }
        label:nth-of-type(2) {
          display: inline-block;
          margin-top: 0.3rem;
        }
      }
    }
    div.tip {
      position: relative;
      i {
        display: inline-block;
        width: 0.7rem;
        height: 0.7rem;
        background: url(../../assets/explain.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
      }
      margin-top: 1rem;
      font-size: 12/20rem;
      color: rgb(200, 200, 200);
      padding-left: 1rem;
      line-height: 1.4
    }
  }

  .select-address {
    background-color: #FFF;
    margin-top: 0.5rem;
    padding: 17/20rem 14/20rem;
    border-bottom: 1px solid rgb(204, 204, 204);
    .title {
      font-size: 15/20rem;
      font-weight: 600;
      color: #000;
    }
    .address {
      display: flex;
      div:nth-child(1) {
        flex: 1;
      }
      div:nth-child(2) {
        flex: 3;
        font-size: 14/20rem;
        input {
          vertical-align: middle;
          margin-top: -0.2rem;
        }
        label {
          margin-right: 1.5rem;
        }
      }

    }
  }

  .receive-address {
    display: flex;
    background-color: #FFF;
    padding: 17/20rem 14/20rem;
    div:nth-child(1) {
      flex: 1;
      font-size: 15/20rem;
      font-weight: 600;
      color: #000;
    }
    div:nth-child(2) {
      flex: 3;
      i {
        display: inline-block;
        width: 0.5rem;
        height: 0.7rem;
        background: url('../../assets/address.png') no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
      }
      .name {
        font-size: 17/20rem;
        color: #000;
        font-weight: 600;
      }
      .phone {
        font-size: 14/20rem;
        color: #000;
      }
      .address {
        font-size: 13/20rem;
        color: rgb(51, 51, 51)
      }
    }
    div:nth-child(3) {
      flex: 0.4;
      padding-top: 0.4rem;
    }
  }

  .buy-car-list {
    background-color: #FFF;
    margin-top: 0.5rem;
    .list {
      border-bottom: 1px solid rgb(204, 204, 204);
      padding: 1rem 33/20rem;
      display: flex;
      div:nth-child(1) {
        flex: 2.9;
        >div {
          display: inline-block;
          width: 95/20rem;
          height: 56/20rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      div:nth-child(2) {
        flex: 1;
        font-size: 14/20rem;
        text-align: right;
        span {
          display: inline-block;
          padding-top: 1rem;
          padding-right: 0.2rem;
          color: rgb(102, 102, 102)
        }
      }
    }
    .remarks {
      padding: @box-padding;
      div:nth-child(1) {
        #item-tite;
      }
      div:nth-child(2) {
        textarea {
          resize: none;
          box-sizing: border-box;
          width: 100%;
          padding: 0.3rem 0.4rem;
          border: none;
          font-size: 14/20rem;
        }
      }

    }
  }

  .price {
    background-color: #FFF;
    padding: @box-padding;
    margin-top: 0.5rem;
    margin-bottom: 4rem;
    >div {
      display: flex;
      >div:nth-child(1) {
        flex: 1;
        color: rgb(102, 102, 102);
        font-size: 13/20rem;
      }
      >div:nth-child(2) {
        flex: 1;
        text-align: right;
        color: rgb(228, 57, 60);
        font-size: 15/20rem;
        margin-top: 0.2rem;
      }
    } //   .total{
    //   }
    //   .reduce{
    //   }
  }

  .footer-box{
      position: fixed;
      width: 100%;
      bottom: 0;
      display: flex;
      background-color: #FFF;
      box-shadow: 0px -1px #d6d4d4;
      div:nth-child(1){
          flex: 2.2;
          text-align: right;
          padding: 0.5rem 0;
          padding-right: 0.4rem;
          color: rgb(228, 59, 64);
          font-size: 16/20rem;
          span:nth-child(2){
              font-size: 18/20rem;
          }
      }
      div:nth-child(2){
          flex: 1;
          text-align: center;
          color: rgb(219, 219, 219);
          background-color: #E43B40;
          padding-top: 0.4rem;
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
      return {

      }
    },
    created() {

    },
    methods: {
      goSelectAddress() {
        this.$router.push('/addressList')
      }
    }
  }

</script>

