<template>
  <div id="app">
    <!-- <h2>App.vue</h2> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style lang="less" scoped>
  /* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

  // #app {
    // height: 100%;
  // }

</style>

<script>
  import {
    setInitialHref
  } from '@/api/storage'
  import { getLocalStorageList } from '@/share/currency.service'

  export default {

    data() {
      return {

      }
    },
    created() {
      // console.log(window.location)
      setInitialHref(window.location.href)
      // getLocalStorageList()
    },
    methods: {

    },
  }

</script>

