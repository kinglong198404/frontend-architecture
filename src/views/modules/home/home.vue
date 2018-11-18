<template >
    <div id="home">
        <div>这里是首页</div>
        <a href="./login.html">登录</a>
        <!--推荐使用下面这种，这样只要名称对象，路径发生了变化也不影响-->
        <router-link :to="{name:'ht'}">ht页面</router-link>
        <!--dd是星期几-->
        <div>{{createTime|moment("YYYY-MM-DD")}}</div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                createTime:new Date()
            }
        },created(){

        },mounted(){
            console.log(this.$cookies.get("userId"));
            console.log(this.$cookies.get("userName"));
        }
    }
</script>
<style scoped>
    #home{
        padding-top:12px;
    }
</style>