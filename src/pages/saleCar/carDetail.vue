<template>
  <div class="box">
    <header class="header">
      <i @click="goBack"></i> 
      <span>商品详情</span>
      <i class="share" @click="toShare"></i> 
    </header>
    <div class="top">
      <div class="car-pic" v-if="carItem">
        <mt-swipe class="swipe" :auto="4000">
          <mt-swipe-item v-if="carItem.imgUrl1">
            <!-- <img src="@/assets/test.jpg" alt=""> -->
            <img :src="carItem.imgUrl11" alt="">
          </mt-swipe-item>
          <mt-swipe-item v-if="carItem.imgUrl2">
            <img :src="carItem.imgUrl22" alt="">
          </mt-swipe-item>
          <mt-swipe-item v-if="carItem.imgUrl3">
            <img :src="carItem.imgUrl33" alt="">
          </mt-swipe-item>
          <mt-swipe-item v-if="carItem.imgUrl4">
            <img :src="carItem.imgUrl44" alt="">
          </mt-swipe-item>
          <mt-swipe-item v-if="carItem.imgUrl5">
            <img :src="carItem.imgUrl55" alt="">
          </mt-swipe-item>
          <mt-swipe-item v-if="carItem.imgUrl6">
            <img :src="carItem.imgUrl66" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="title">
        <!-- <span>【特价车】这个是特价车主题，BMW X1 付定金松行车纪律仪，定金99元，到店取车或者物流上门</span> -->
        <span>【{{carItem.carType | carType}}】{{carItem.topic}}</span>
      </div>
      <div class="time">
        <span>
          促销时间
          <i></i>
        </span>
        <span class="t">{{remainTimeArry[0]}}</span>:<span class="t">{{remainTimeArry[1]}}</span>:<span class="t">{{remainTimeArry[2]}}</span>
        <span>库存{{carItem.carCount}}件</span>
      </div>
    </div>

    <div class="detail">
      <div class="price">
        <div>
          <i></i>
          整车价格
        </div>
        <div class="p">
          <!-- <span>￥{{carItem.nowCar1Price | price}}</span> -->
          <span>¥{{carItem.nowCar1Price/1000000}}万</span>
          <br>
          <span>{{carItem.nowCar1BeginCount}}-{{carItem.nowCar1EndCount}}台</span>
        </div>
        <div class="p">
          <span>¥{{carItem.nowCar2Price/1000000}}万</span>
          <br>
          <span>{{carItem.nowCar2BeginCount}}-{{carItem.nowCar2EndCount}}台</span>
        </div>
        <div class="p">
          <span>¥{{carItem.nowCar3Price/1000000}}万</span>
          <br>
          <span>{{carItem.nowCar3BeginCount}}-{{carItem.nowCar3EndCount}}台</span>
        </div>
      </div>
      <!-- 定金 -->
      <div class="deposit">
        <div>
          <i></i> 定金
        </div>
        <div>
          <!-- <span>￥{{carItem.nowCar3Price/100 * carItem.payPercent/100}}元</span> -->
          <span>¥{{deposit}}元</span>
          <span>定金比例{{carItem.payPercent}}%</span>
        </div>
      </div>
    </div>
    <!-- <input type="button" @click="clearToken" value="清除token"> -->
    

    <div class="content">
      <div v-html="carItem.html">
        {{carItem.html}}
      </div>
    </div>


    <!-- 底部导航栏 -->
    <footer>
      <div class="bottom-box">
        <div>
          <a :href="phone">
            <i></i>
            <p>电话咨询</p>
          </a>
        </div>
        <div @click="goShoppingCar">
          <i></i>
          <p>购物车</p>
        </div>
        <div>
          <i></i>
          <p>我的订单</p>
        </div>
        <div>
          <input type="button" value="加入购物车" @click="toastTip">
        </div>
      </div>
    </footer>

  </div>
</template>

<style lang="less" scoped>


.content{
  overflow: hidden;
  background-color: #FFF;
  padding: 0 1rem;
  box-sizing: border-box;
  font-size: 17/20rem;
  color: #3b3a3a;
  margin-top: 0.5rem;

  // img{
  //   width: 100%;
  // }
 
  // h4{
  //   display: inline-block;
  //   margin-left: 1rem;
  // }

  // div>p>img{
  //   width: 10px !important;
  // }
}

  .box {
    background-color: #F3F3F3;
    height: 100%;
    padding-top: 40/20rem;
    padding-bottom: 200/20rem;
  }

  .header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    height: 40/20rem;
    line-height: 40/20rem;
    background: url(../../assets/nav-bg.png) no-repeat;
    background-size: 100% 100%;
    i{
      display: inline-block;
      width: 0.5rem;
      height: 0.8rem;
      // padding: 0 0.4rem;
      background: url(../../assets/goBack.png) no-repeat;
      background-size: 100% 100%;
      vertical-align: middle;
      margin-top: -0.2rem;
      margin-left: 0.5rem;
    }
    i.share{
      width: 0.8rem;
      background: url(../../assets/share.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      right: 1rem;
      top: 0.75rem;
    }
    span{
      font-size: 0.85rem;
      color: #FFF;
      letter-spacing: 0.1rem;
      margin-left: 0.2rem;
    }
  }

  .top {
    background-color: #FFF;
    padding-bottom: 0.5rem;
    .car-pic {
      height: 250/20rem;
      // height: 100%;
      width: 100%;

      img {
        width: 100%; 
        height: 100%;
        // height: 200/20rem;
      }
    }

    .title {
      padding: 11/20rem 15/20rem;
      font-size: 15/20rem;
      font-weight: 600;
      text-align: justify;
      color: #303133;
    }
    .time {
      padding: 0 15/20rem;
      text-align: right;
      span:nth-of-type(1) {
        font-size: 14/20rem;
        color: #FF5555;

        i:nth-of-type(1) {
          display: inline-block;
          width: 0.7rem;
          height: 0.7rem;
          background: url(../../assets/clock-pink.png) no-repeat;
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
        // width: 0.9rem;
        // height: 0.9rem;
        // line-height: 0.9rem;
        // text-align: center;
        // padding: 0.1rem 0.2rem;
        padding: 0 2px;
        background-color: #010101;
        color: #FFF;
        font-size: 13/20rem;
        border-radius: 0.2rem;
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
          font-size: 16/20rem;
          color: #FF5555;
        }
        span:nth-of-type(2) {
          font-size: 13/20rem;
          color: #999999
        }
      }
      div:nth-child(1) {
        flex: 1.1;
        font-size: 15/20rem;
        padding-top: 0.7rem;
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
        font-size: 16/20rem;
        padding-top: 0.1rem;
        i {
          display: inline-block;
          height: 0.8rem;
          width: 0.8rem;
          background: url(../../assets/confirm.png) no-repeat;
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
          font-size: 13/20rem;
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
      // box-sizing: border-box;
      // box-shadow: v-shadow 2px 2px pink;
      box-shadow: 0px -1px #d6d4d4;

      div {
        flex: 1;
      }
      div:nth-child(1),
      div:nth-child(2), div:nth-child(3) 
        {
        text-align: center;
        font-size: 15/20rem;
        padding-top: 4px;
        
        // padding: 0.2rem 0;
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
        color: rgb(161, 159, 159);
      } 
       div:nth-child(3){
        i{
          background: url(../../assets/noOrder.png) no-repeat;
          background-size: 100% 100%;          
        }
        color: rgb(161, 159, 159);
      }
      div:last-child {
        position: relative;
        input {
          // display: inline-block;
          border: none;
          // width: 100%;
          // height: 48/20rem;
          font-size: 16/20rem;
          color: rgb(255, 255, 255);
          background-color: #E43B40;
          -webkit-appearance: none;
          position: absolute;
          width:100%;height:100%;border-top:0px;border-left:0px;border-right:0px;border-bottom:0px;
          border-radius: 0;
        }
      }
    }
  }

</style>

<script>
  import http from "@/api/ajax";
  import { getInitialHref } from "@/api/storage";
  import { auth } from "@/components/auth";
  import { getJssdkConfig } from '@/share/jssdk.service'
  import { getPlatform } from '@/share/currency.service'
  import {
    API_CAR_LIST,
    HOST,
    BASE_URL
  } from "@/api/config";
  import {
    Toast
  } from 'mint-ui';
import concessionCarListVue from './concessionCarList.vue';
  export default {
    data() {
      return {
        ID: this.$route.params.id,
        carItem: '',
        remainTimeArry: [],
        setI: '',
        // phone: `tel:${this.carItem.salesman_phone}`
        phone: '',
        deposit: '',
      }
    },
    beforeCreate() {
      // auth()
    },
    created() {
      window.scrollTo(0, 0)
      this.init()
    },
    methods: {
      clearToken() {
        localStorage.token = ''
      },
      async init() {
        await this.getDetail();
        this.phone = `tel:${this.carItem.salesmanPhone}`
        this.cuntDown();
        this.setI = setInterval(() => {
          this.cuntDown()
        }, 1000)
      },
      getDetail() {
        return new Promise((resolve, reject) => {
          let data = {}
          data.id = this.ID;
          http('get', API_CAR_LIST, data)
            .then(rt => {
              console.log(rt)
              if (rt.code == 200) {
                this.carItem = rt.body;
                this.carItem.imgUrl11 = `${BASE_URL}/file_server?uri=${this.carItem.imgUrl1}`
                this.carItem.imgUrl22 = `${BASE_URL}/file_server?uri=${this.carItem.imgUrl2}`
                this.carItem.imgUrl33 = `${BASE_URL}/file_server?uri=${this.carItem.imgUrl3}`
                this.carItem.imgUrl44 = `${BASE_URL}/file_server?uri=${this.carItem.imgUrl4}`
                this.carItem.imgUrl55 = `${BASE_URL}/file_server?uri=${this.carItem.imgUrl5}`
                this.carItem.imgUrl66 = `${BASE_URL}/file_server?uri=${this.carItem.imgUrl6}`

                var str = this.carItem.nowCar3Price/100 * this.carItem.payPercent/100+''
              
                this.deposit = str.split("").reverse().join("").replace(/([0-9]{3})/g,"$1,").split("").reverse().join("");

                console.log(this.deposit)
                resolve()
              } else if (rt.code == 501) {
                auth()
              }
            })
        })
      },
      
      cuntDown() {
        // console.log(this.carItem.endDate)
        this.remainTimeArry = [];
        let times = this.carItem.endDate - new Date().getTime();
        let remainingHour = Math.floor(times / (1000 * 60 * 60));

        if (remainingHour < 0) {
          this.remainTimeArry = [0, 0, 0]
        } else {

          this.remainTimeArry.push(remainingHour)

          let remainingMinute = Math.floor((times - remainingHour * (60 * 60 * 1000)) / (1000 * 60));
          this.remainTimeArry.push(remainingMinute)

          let remainingSecond = Math.floor((times - remainingHour * (60 * 60 * 1000) - remainingMinute * (60 * 1000)) /
            (1000));
          this.remainTimeArry.push(remainingSecond)
        }
        // console.log(this.remainTimeArry)
      },

      goShoppingCar() {
        this.$router.push('/shoppingCar')
      },
      
      toastTip() {
        Toast({
          message: '支付业务审核中，请先电话咨询和购买。',
          position: 'bottom',
          duration: 3000
        });
      },
      goBack() {
        this.$router.push('/concessionCarList')
      },
      toShare() {
        let data = {};
        data.url = `http://${window.location.host}`
        getJssdkConfig(data)
        .then( rt => {
          // console.log(rt)
          if(rt.code == 200) {
            this.configJSSDK(rt.body)
          }
        })
      },
      configJSSDK(rt) {
        var shareLink;
        if(getPlatform() == 'ios'){
          shareLink = getInitialHref();
        } else {
          shareLink = window.location.href
        }

        wx.config({
          debug: true, 
          appId: rt.appId, // 必填，公众号的唯一标识
          timestamp: rt.timestamp, // 必填，生成签名的时间戳
          nonceStr: rt.noncestr, // 必填，生成签名的随机串
          signature: rt.signature,// 必填，签名，见附录1
          jsApiList: ['scanQRCode', 'onMenuShareAppMessage', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })

        wx.ready( () => {
          console.log('分享链接', shareLink)

          //分享给朋友圈
          wx.onMenuShareAppMessage({
            title: this.carItem.topic, // 分享标题
            desc: '测试', // 分享描述
            link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: this.carItem.imgUrl1, // 分享图标
           // type: '', // 分享类型,music、video或link，不填默认为link
            // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
              // 用户确认分享后执行的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
              console.log('分享取消')
            }
         });


          wx.onMenuShareTimeline({
           title: this.carItem.topic, // 分享标题
           link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
           imgUrl: this.carItem.imgUrl1, // 分享图标
           success: function () {
             console.lg('成功')
           // 用户确认分享后执行的回调函数
           },
          })

        });

        
       
      }
    },
    destroyed() {
      console.log(12)
      clearInterval(this.setI)
    },
    filters: {
      price: function (value) {
        let price = value / 100000 + '万'
        return price
      },
      carType: function (value) {
        let type;
        switch (value) {
          case 1:
            type = '平行进口'
            break;
          case 2:
            type = '中规车'
            break;
          default:
            type = '优惠车'
        }
        return type;
      }
    }
  }

</script>



