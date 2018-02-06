<template>
  <div class="box">
      <header class="header">
      <i @click="goBack"></i> 
      <span>{{title}}</span>
      <i class="share" @click="toShare" v-if="isShare"></i> 
    </header>
  </div>
</template>


<style lang="less" scoped>
.header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    height: 40/20rem;
    line-height: 40/20rem;
    background: url(../assets/nav-bg.png) no-repeat;
    background-size: 100% 100%;
    i{
      display: inline-block;
      width: 0.5rem;
      height: 0.8rem;
      // padding: 0 0.4rem;
      background: url(../assets/goBack.png) no-repeat;
      background-size: 100% 100%;
      vertical-align: middle;
      margin-top: -0.2rem;
      margin-left: 0.5rem;
    }
    i.share{
      width: 0.8rem;
      background: url(../assets/share.png) no-repeat;
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
</style>


<script>
export default {
  props: {
    isShare: Boolean,
    title: String,
    returnUrl: String
  },
  data() {
      return{

      }
  },
  created() {

  },
  methods:{
      goBack() {
          this.$router.push(this.returnUrl)
      },
      toShare() {
          this.$emit('toShare')
      }
  }
}
</script>




