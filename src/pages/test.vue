<template>
  <div>
    <h2>{{msg}}</h2>
    <p class="global">全局样式测试</p>
    <p class="lessTest">sass配置测试</p>
    <watch-test :oneString="boyA" @girlToBoy="receiveLove"></watch-test>
    
    <button @click="changboyA">改变父组件变量</button>
    <button @click="changstore">getters</button>
    <button @click="mutationsStore">mutations</button>
    <button @click="action">action</button>

    <input type="button" value="清除token" @click="clearnToken">

    <div class="css-test">css兼容分测试</div>
  </div>
</template>

<script>
import watchTest from '../components/watchTest.vue'
// import setToken from '@/api/storage'

export default {
  name:'test',
  components: {
    'watch-test': watchTest
  },
  data () {
    return {
      msg: '测试页面',
      boyA: 1
    }
  },
  created() {
    // console.log(this.$store.state.author)
    // console.log(this.$store.getters.changeAuthor)
  },
  methods: {
    changboyA() {
      this.boyA += 1
      console.log(this.boyA)
    },
    receiveLove(data) {
      console.log('父组件响应子组件事件', data)
    },
    changstore() {
      this.$store.state.author = '测试一下'
      console.log(this.$store.state.author)
    },
    mutationsStore() {
      // this.$store.commit('authorMutations', 'newValue')
      this.$store.commit('AUTHOR', 'newValue')
      console.log(this.$store.state.author)
    },
    action(){
      this.$store.dispatch('actionsTest')
      console.log(this.$store.state.author)
    },
    clearnToken() {
      localStorage.token = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.lessTest{
  font-size: 50/2px
}
.css-test{
  display: flex;
}
</style>

