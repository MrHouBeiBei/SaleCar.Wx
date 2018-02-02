<template>
  <div class="box">
    <header>
      <div class="search">
        <i></i>
        <input type="text" placeholder="搜索汽车相关" v-model="searchName">
        <input type="button" value="搜索" @click="search">
      </div>
<!-- <mt-search v-model="searchName" cancel-text="取消" placeholder="搜索">
</mt-search> -->

    </header>
    <main>
      <ul>
        <li class="car-item" @click="goDetail(item.id)" v-for="(item, index) in carList" :key="index">
          <div class="itemBox">
            <div class="img">
              <!-- <img src="@/assets/logo.png" alt=""> -->
              <img :src="item.imgUrl11" alt="">
            </div>
            <div class="content">
              <!-- 标题 -->
              <span class="h4">
                <!-- <span>【特价车】</span>特价车信息介绍特价车信息介绍特价车信息介绍特价车信息介绍 -->
                <span>【{{item.carType | carType}}】</span>{{item.topic}}
              </span>
              <div class="tag">
                <span>￥{{item.nowCar1Price | price}}</span>
                <!-- <span>超值</span>
                <span>急售</span>
                <span>0过户</span> -->
              </div>
              <!-- 倒计时 -->
              <div class="time">
                <i></i><span>{{item.timeArry[0]}}</span>:<span>{{item.timeArry[1]}}</span>:<span>{{item.timeArry[2]}}</span>
                <!-- <i @click.stop="goC" :class="type==1 ? 'collection' : 'unCollection' "></i> -->
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="less" scoped>
  // .box{
  // padding: 15/20rem;
  // }
  .search {
    padding: 15/20rem;
    position: relative;

    i {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background: url(../../assets/search.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 1.1rem;
      left: 1rem;
    }

    input[type=text] {
      width: 277/20rem;
      height: 35/20rem;
      line-height: 35/20rem;
      padding-top: 5/20rem;
      padding-bottom: 5/20rem;
      border: 1px solid #E8E8E8;
      border-radius: 0.2rem;
      padding-left: 30/20rem;
      box-sizing: border-box;
      font-size: 13/20rem;
    }
    input[type=text]::-webkit-input-placeholder {
      font-size: 13/20rem;
    }
    input[type=button] {
      // width: 277/20rem
      background-color: #F93A45;
      border: none;
      height: 35/20rem;
      width: 54/20rem;
      border-radius: 0.4rem;
      font-size: 13/20rem;
      color: #FEF5F5;
      -webkit-appearance: none;
    }
  }

  .car-item {
    border-bottom: 1px dashed #cecece;
  }

  .itemBox {
    padding: 15/20rem 15/20rem;
    display: flex;
    .img {
      flex: 1;
      img {
        width: 93/20rem;
        height: 93/20rem;
      }
    }

    .content {
      flex: 2;

      span.h4 {
        span{
          color: #d25960;
        }
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 15/20rem;
        letter-spacing: 1px;
        color: #303133;
      }

      .tag{
        span:nth-child(1){
          color: rgb(228, 57, 60);
          font-size: 15/20rem;
          font-weight: 600;
        }
        span:nth-child(2), span:nth-child(3), span:nth-child(4){
          border: 1px solid;
          font-size: 13/20rem;
          padding: 0 0.1rem;
        }
        span:nth-child(2){
          color: rgb(63, 168, 112)
        }
        span:nth-child(3){
          color: rgb(228, 57, 60);
        }
        span:nth-child(4){
          color: rgb(0, 150, 225)
        }
      }

      .time{
        padding-top: 0.2rem;
        position: relative;
        i:nth-of-type(1){
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          background: url(../../assets/clock.png) no-repeat;
          background-size: 100% 100%;
          vertical-align: middle;
          margin-right: 0.15rem;
        }
        span{
          display: inline-block;
          // width: 0.9rem;
          // height: 0.9rem;
          // line-height: 0.9rem;
          // text-align: center;
          padding: 0.1rem 0.1rem;
          background-color: #010101;
          color: #FFF;
          font-size: 13/20rem;
          border-radius: 0.2rem;
        }
        i:nth-of-type(2){
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          // background: url(../../assets/collection.png) no-repeat;
          background-size: 100% 100%;
          vertical-align: middle;
          margin-right: 0.15rem;
          position: absolute;
          right: 0;
          top: 0.15rem;
        }
        .collection{
          background: url(../../assets/collection.png) no-repeat;
        }
        .unCollection{
          background: url(../../assets/unCollection.png) no-repeat;
        }
      }
    }
  }

</style>


<script>
import http from "@/api/ajax";
import { countDown } from "@/components/app";
import { API_CAR_LIST, HOST, BASE_URL} from "@/api/config";

  export default {
    data() {
      return {
        type: 1,
        carList: [],
        searchName: '',
        setI: ''
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.getList();
        this.timing();
      },
      timing(value) {
        return countDown(value);
      },
      getList() {
        let data = {}
        data.pageNum = 1;
        data.pageSize = 1000;
        if(this.searchName){
          data.fullTextSearchValue = `%25${this.searchName}%25`
          console.log(data.fullTextSearchValue)
        } 
        http('get', API_CAR_LIST, data)
        .then( rt => {
          // console.log(rt)
          if( rt.code == 200) {
            this.carList = rt.body.list
            this.carList.forEach(item => {
              item.timeArry = []
              item.imgUrl11 = `${BASE_URL}/file_server?uri=${item.imgUrl1}`
            });
            this.setTimeArry ()
            this.setI = setInterval( () => {
              this.setTimeArry ()
            }, 1000)
          }
        })
      },
      setTimeArry () {
        this.carList.forEach(item => {
          item.timeArry = this.cuntDown(item.endDate)
        });
        this.$forceUpdate()
        // console.log(this.carList)
      },
      cuntDown(value) {
        // console.log(this.carItem.endDate)
        this.remainTimeArry = [];
        let times = value - new Date().getTime();
          let remainingHour = Math.floor( times / (1000 * 60 * 60));

        if (remainingHour < 0) {
          this.remainTimeArry = [0, 0, 0]
        } else {

          this.remainTimeArry.push(remainingHour)

          let remainingMinute = Math.floor((times - remainingHour * (60 * 60 * 1000)) / (1000 * 60));
          this.remainTimeArry.push(remainingMinute)

          let remainingSecond = Math.floor((times - remainingHour * (60 * 60 * 1000) - remainingMinute * (60 * 1000)) / (1000));
          this.remainTimeArry.push(remainingSecond)
        }
        return this.remainTimeArry
        // console.log(this.remainTimeArry)
      },
      search() {
        this.getList()
      },
      goDetail(id) {
        this.$router.push(`/carDetail/${id}`)
      },
      goC() {
        this.type = this.type==1 ? '0' : '1'
      }
    },
    destroyed() {
      console.log(12)
      clearInterval(this.setI)
    },
    filters: {
      price: function (value) {
        let price = value/1000000 + '万'
        return price
      },
      carType: function (value) {
        let type;
        switch(value) {
          case 1 :
            type = '平行进口'
            break;
          case 2 :  
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

