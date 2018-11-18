export default {
    data:function(){
        return {
        }
    },
    methods:{
        goLogin(){
            window.location.href="./login.html";
        },
        go(){
            this.$router.go(1);
        }
    }
}