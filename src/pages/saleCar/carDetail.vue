<template>
  <div class="box">
    <div class="top">
      <div class="car-pic">
        <mt-swipe class="swipe" :auto="4000">
          <mt-swipe-item>
            <img src="@/assets/test.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/assets/logo.png" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="title">
        <span>【特价车】这个是特价车主题，BMW X1 付定金松行车纪律仪，定金99元，到店取车或者物流上门</span>
      </div>
      <div class="time">
        <span>
          促销时间
          <i></i>
        </span>
        <span class="t">72</span>:
        <span class="t">15</span>:
        <span class="t">10</span>
        <span>库存1711件</span>
      </div>
    </div>

    <div class="detail">
      <div class="price">
        <div>
          <i></i>
          整车价格
        </div>
        <div class="p">
          <span>￥88888.00</span>
          <br>
          <span>1-5台</span>
        </div>
        <div class="p">
          <span>￥88888.00</span>
          <br>
          <span>6-10台</span>
        </div>
        <div class="p">
          <span>￥88888.00</span>
          <br>
          <span>>=10台</span>
        </div>
      </div>
      <!-- 定金 -->
      <div class="deposit">
        <div>
          <i></i> 定金
        </div>
        <div>
          <span>￥99</span>
          <span>定金比例5%</span>
        </div>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <footer>
      <div class="bottom-box">
        <div>
          <a href="tel:0147-88469258">
            <i></i>
            <p>电话咨询</p>
          </a>
        </div>
        <div @click="toastTip">
          <i></i>
          <p>购物车</p>
        </div>
        <!-- <div>
          <i></i>
          <p>我的订单</p>
        </div> -->
        <div>
          <input type="button" value="加入购物车" @click="toastTip">
        </div>
      </div>
    </footer>

  </div>
</template>

<style lang="less" scoped>
  .box {
    background-color: #EEF2F5;
    height: 100%;
  }

  .top {
    background-color: #FFF;
    padding-bottom: 0.5rem;
    .car-pic {
      height: 200/20rem;
      width: 100%;

      img {
        width: 100%; // height: 100%;
        height: 200/20rem;
      }
    }

    .title {
      padding: 11/20rem 15/20rem;
      font-size: 15/20rem;
      font-weight: 600;
      text-align: justify;
      color: rgb(0, 0, 0)
    }
    .time {
      padding: 0 15/20rem;
      text-align: right;
      span:nth-of-type(1) {
        font-size: 14/20rem;
        color: pink;

        i:nth-of-type(1) {
          display: inline-block;
          width: 0.7rem;
          height: 0.7rem;
          background: url(../../assets/clock.png) no-repeat;
          background-size: 100% 100%;
          vertical-align: middle;
          margin-right: 0.15rem;
        }
      }
      span:last-child {
        font-size: 14/20rem;
        color: rgb(153, 153, 153)
      }
      span.t {
        text-align: center;
        display: inline-block;
        width: 0.9rem;
        height: 0.9rem;
        background-color: #010101;
        color: #FFF;
        font-size: 13/20rem
      }
    }
  }

  .detail {
    margin-top: 0.5rem;
    background-color: #FFF;
    .price {
      padding: 12/20rem 16/20rem;
      border-bottom: 1px dashed rgb(206, 206, 206);
      display: flex;

      div.p {
        flex: 1;
        span:nth-child(1) {
          font-size: 15/20rem;
        }
        span:nth-of-type(2) {
          font-size: 14/20rem;
        }
      }
      div:nth-child(1) {
        flex: 1.1;
        font-size: 15/20rem;
        padding-top: 0.2rem;
        i {
          display: inline-block;
          height: 0.8rem;
          width: 0.8rem;
          background: url(../../assets/mony.png) no-repeat;
          background-size: 100% 100%;
          vertical-align: middle;
          margin-top: -0.2rem;

        }
      }
    }
    .deposit {
      display: flex;
      padding: 12/20rem 16/20rem;
      div:nth-child(1) {
        flex: 1.1;
        font-size: 15/20rem;
        padding-top: 0.2rem;
        i {
          display: inline-block;
          height: 0.8rem;
          width: 0.8rem;
          background: url(../../assets/mony.png) no-repeat;
          background-size: 100% 100%;
          vertical-align: middle;
          margin-top: -0.2rem;

        }
      }
      div:nth-child(2) {
        flex: 3;
        span:nth-child(1) {
          font-size: 16/20rem;
          color: #FF5555;
        }
        span:nth-child(2) {
          font-size: 15/20rem;
          color: rgb(153, 153, 153)
        }
      }
    }
  }

  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #FFF;

    .bottom-box {
      display: flex;

      div {
        flex: 1;
      }
      div:nth-child(1),
      div:nth-child(2), // div:nth-child(3) 
        {
        text-align: center;
        font-size: 15/20rem;
        padding: 0.2rem 0;
        i {
          display: inline-block;
          width: 1rem;
          height: 1rem;
        }
      }

      div:nth-child(1) {
        a{
          text-decoration:none;
        }
         p {
          color: #E54344;
        }
        i {
          background: url(../../assets/phone.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      div:nth-child(2) {
        i {
          background: url(../../assets/unShopCart.png) no-repeat;
          background-size: 100% 100%;
        }
      } //  div:nth-child(3){
      //   i{
      //     background: url(../../assets/noOrder.png) no-repeat;
      //     background-size: 100% 100%;          
      //   }
      // }
      div:last-child {
        input {
          border: none;
          width: 100%;
          height: 100%;
          font-size: 16/20rem;
          color: rgb(255, 255, 255);
          background-color: #E43B40;
        }
      }
    }
  }

</style>

<script>
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {

      }
    },
    methods: {
      toastTip() {
        Toast({
          message: '该功能暂时还未上线，请联系客服！',
          position: 'bottom',
          duration: 3000
        });
      }
    }
  }

</script>

