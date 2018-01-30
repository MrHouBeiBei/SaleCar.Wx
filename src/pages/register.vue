<template>
<div>
    <header class="header">会员绑定公众号</header>
    <main>
        <input type="text" v-model="phone" placeholder="请输入您的手机号">
        <div>
            <input type="text" v-model="code" placeholder="请输入手机号">
            <input type="button" value="发送验证码">
        </div>
        <input type="button" value="绑定" @click="binPhone">
    </main>
</div>
</template>

<style scoped>
.header{
    text-align: center
}
</style>

<script>
export default {
    data() {
        return {
            phone: '',
            code: ''
        }
    },
    methods: {
        binPhone() {
            this.$router.push('/concessionCarList')
        }
    }
}
</script>


