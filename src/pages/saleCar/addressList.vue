<template>

<div class="box">
    <div class="header">
      <top-header returnUrl="concessionCarList" title="收货地址" :isShare='false'></top-header>
    </div>
    <main>
        <ul>
            <li>
                <div class="address-item">
                    <div class="left">
                        <div>
                            <span class="name">古力娜扎</span>
                            <span class="phone">12312341234</span>
                        </div>
                        <div>
                            <span class="address">地址地址地址地址地址地址地址地址地址地址地址地址</span>
                        </div>
                    </div>
                    <div class="right">
                        <i @click="editorAddress()"></i>
                    </div>
                </div>
            </li>
        </ul>

        <div class="addBtn">
            <button @click="addAddress">+ 新建收货地址</button>
        </div>
    </main>
</div>

</template>


<style lang="less" scoped>
.box{
    height: 100%;
    background-color: #F0F3F5;
    padding-top: 1rem;
}
.address-item{
    display: flex;
    padding: 15/20rem 20/20rem;
    background-color: #FFF;
    margin-bottom: 0.5rem;
    div.left{
        flex: 2.8;
        border-right: 1px solid rgb(182, 181, 181);
        .name{
            font-size: 17/20rem;
            color: #000;
            font-weight: 600;
        }
        .phone{
            font-size: 14/20rem;
            color: #000;
        }
        .address{
            font-size: 13/20rem;
            color: rgb(51, 51, 51)
        }
    }
    div.right{
        flex: 1;
        text-align: right;
        i{
            display: inline-block;
            width: 17/20rem;
            height: 17/20rem;
            background: url('../../assets/editor.png') no-repeat;
            background-size: 100% 100%;
            margin-top: 1rem;
            margin-right: 0.7rem;
        }
    }
}


.addBtn{
    width: 85%;
    margin: 0 auto;
    margin-top: 5rem;
    button{
        width: 100%;
        background-color: #E7393A;
        border: none;
        outline: none;
        padding: 0.5rem;
        color: rgba(255, 255, 255, 0.8);
        font-size: 16/20rem;
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
        editorAddress(value) {
            this.$router.push('/addAddress/6')
        },
        addAddress() {
            this.$router.push('/addAddress/6')
        }
    }
  }

</script>

