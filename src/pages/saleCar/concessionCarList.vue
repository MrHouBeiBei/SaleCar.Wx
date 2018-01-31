<template>
  <div class="box">
    <header>
      <div class="search">
        <i></i>
        <input type="text" placeholder="搜索汽车相关">
        <input type="button" value="搜索">
      </div>
    </header>
    <main>
      <ul>
        <li class="car-item" @click="goDetail">
          <div class="itemBox">
            <div class="img">
              <img src="@/assets/logo.png" alt="">
            </div>
            <div class="content">
              <!-- 标题 -->
              <h4>
                <span>【特价车】</span>特价车信息介绍特价车信息介绍特价车信息介绍特价车信息介绍
              </h4>
              <div class="tag">
                <span>￥5.20万</span>
                <span>超值</span>
                <span>急售</span>
                <span>0过户</span>
              </div>
              <!-- 倒计时 -->
              <div class="time">
                <i></i><span>72</span>:<span>15</span>:<span>10</span>
                <i @click.stop="goC" :class="type==1 ? 'collection' : 'unCollection' "></i>
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
      height: 27/20rem;
      line-height: 27/20rem;
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
      height: 27/20rem;
      width: 54/20rem;
      border-radius: 0.4rem;
      font-size: 13/20rem;
      color: #FEF5F5;
    }
  }

  .car-item {
    border-bottom: 2px dashed rgb(206, 206, 206)
  }

  .itemBox {
    padding: 7/20rem 15/20rem;
    display: flex;
    .img {
      flex: 0.9;
      img {
        width: 93/20rem;
        height: 93/20rem;
      }
    }

    .content {
      flex: 2;

      h4 {
        span{
          color: #D25960;
        }
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 15/20rem;
        letter-spacing: 1px;
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
          width: 0.9rem;
          height: 0.9rem;
          background-color: #010101;
          color: #FFF;
          font-size: 13/20rem
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
  export default {
    data() {
      return {
        type: 1
      }
    },
    methods: {
      goDetail() {
        this.$router.push(`/carDetail/6`)
      },
      goC() {
        this.type = this.type==1 ? '0' : '1'
      }
    }
  }

</script>

