<template>
    <div class="login">
        登录状态:{{$store.state.isLogin}} <br/>
        <div>
            <input v-model="username" type="text" placeholder="用户名" ><br/>
            <input v-model="password" type="password" placeholder="密码" ><br/>
            <button @click="LoginHandle">登录</button>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:'Login',
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        
        ...mapActions([
            'changeLogin',
            'changeUsername',
            'changePassword'
        ]),
        LoginHandle(){
            if(!this.username || !this.password) return;
            // this.$store.commit('changeLogin',true) //修改登录状态
            // this.$store.commit('changeUsername',this.username) //修改用户名
            // this.$store.commit('changePassword',this.password) //修改登录密码
          
            //action 通过store.dispatch方法触发（调用）
            // this.$store.dispatch('changeLogin',true) //修改登录状态
            // this.$store.dispatch('changeUsername',this.username) //修改用户名
            // this.$store.dispatch('changePassword',this.password) //修改登录密码
            
            //添加mapActions后的写法
            this.changeLogin(true)
            this.changeUsername(this.username)
            this.changePassword(this.password)

            this.$router.push('/')
        }
    }
}
</script>
<style scoped>

</style>