<template>
<div>
    <header>
        <div>
            <input type="text" placeholder="搜索汽车相关">
            <input type="button" value="搜索">
        </div>
    </header>
    <main>
        <ul>
            <li>
                <div class="itemBox">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                    <div class="content">
                        <h4><span>【特价车】特价车信息介绍</span></h4>
                    </div>
                </div>
            </li>
        </ul>
    </main>
</div>
</template>

<style scoped>
.itemBox{
    display: flex;
}
.itemBox .img{
    flex: 1;
}
.itemBox .content{
    flex: 2
}
</style>

<script>
export default {
  data() {
      return{

      }
  },
  methods: {

  }
}
</script>

