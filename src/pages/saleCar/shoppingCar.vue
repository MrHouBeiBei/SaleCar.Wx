<template>
<div class="box">
    <header>
        <top-header returnUrl="concessionCarList" title="购物车" :isShare='false' @toShare="toShare"></top-header>
    </header>
    <main>
        <ul>
            <li>
                <div class="car-item">
                    <div>
                        <input type="radio" :checked="selectState" @click="choice()">
                    </div>
                    <div class="left">
                        <img src="@/assets/test.jpg" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                            <span>【特价车】</span>
                            <span>汽车主题，最多两行；汽车主题，最多两行汽车主题，最多两行汽车主题，最多两行汽车主题，最多两行</span>
                        </div>
                        <div class="price-number">
                            <div class="price">
                                定金：¥9999元
                            </div>
                            <div class="number">
                                <div><span @click="reduce()">-</span><span>{{buyNumber}}</span><span @click="add()">+</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </main>
</div>
  
</template>

<style lang="less" scoped>
  .box {
    padding-top: 1rem;
  }

  .car-item {
    display: flex;
    padding: 0.6rem 0.75rem;
    border-bottom: 1px dashed #cecece;

    div:nth-child(1) {
      flex: 0.2;
      line-height: 1;
      position: relative;
      input[type=radio] {
        position: relative;
        top: 24/20rem;
      }
    }
    div.left {
      flex: 1;
      height: 75/20rem;
      img {
        width: 4.65rem;
        height: 100%
      }
    }
    div.right {
      flex: 2;
      div.title {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 15/20rem;
        letter-spacing: 1px;
        color: #303133;
        line-height: 1.2
      }
      div.price-number {
        display: flex;
        .price {
          flex: 1.2;
          font-size: 0.7rem;
          color: #FF5555;
          text-align: left;
          padding-top: 0.7rem;
        }
        .number {
          flex: 1;
          position: relative;
          >div {
            position: absolute;
            right: 0.2rem;
            top: 0.5rem;
            display: inline-block;
            border: 1px solid #AFAAAA;
            height: 1rem;
            box-sizing: border-box;
            span:nth-child(1),
            span:nth-child(3),
            span:nth-child(2) {
              display: inline-block;
              padding: 0 0.3rem;
              font-size: 15/20rem;
              height: 100%;
              float: left;
              line-height: 1rem;
              :after {
                content: '';
                height: 0;
                line-height: 0;
                display: block;
                visibility: hidden;
                clear: both;
              }
            }
            span:nth-child(1) {
              border-right: 1px solid rgb(202, 200, 200)
            }
            span:nth-child(2) {

              border-right: 1px solid rgb(202, 200, 200);
            }
          }

        }
      }
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
        buyNumber: 1,
        selectState: true
      }
  },
  created() {
      this.init()
  },
  methods: {
      init(){

      },
      toShare() {
          console.log('分享')
      },
      add(data) {
        this.buyNumber = this.buyNumber + 1
      },
      reduce(data) {
        this.buyNumber =this.buyNumber - 1
      },
      choice(data) {
        this.selectState = !this.selectState
      }
  }
}
</script>



