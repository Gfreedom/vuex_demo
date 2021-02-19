<template>
    <div class="home">
        <!-- 登录状态:{{$store.state.isLogin}}<br>
        {{$store.state.username}},你好！<br>
        首页 -->
        登录状态:{{isLogin}}<hr>
        用户名:{{username}}<br>
        密码:{{password}}<br>
        <hr>
        a+b={{sum}}<br>
        <hr>
        已签到人员:<br>
        <ul>
            <li v-for="(item,index) in checkList" :key="index">
                {{item.name}}
            </li>
        </ul>
        <hr>
        周杰伦的歌:<br>
        <ul>
            <li v-for="(item,index) in showSongs" :key="index">
                {{item.name}} - {{item.singer}}
            </li>
        </ul>
        <hr>
        <h3>mutation载荷</h3>
        <span>{{count}}</span> | <button @click="add">+1</button>  <button @click="reset">重置</button>  
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    name:'Home',
    data(){
        return{
            a:10,
            b:30,
            checkList:[]
        }
    },
    computed:{
        sum(){
            return this.a + this.b
        },
        // showChecked(){
        //     return this.$store.getters.showChecked
        // },
        ...mapGetters([
            // 'showChecked',
            'showSongs'
        ]),
        ...mapState({ //计算登录状态 用户名
            isLogin:state => state.isLogin,
            username:state=>state.username,
            password:state=>state.password,
            count:state=>state.count
        })
    },
    created (){
        this.getChecked(true)
    },
    methods: {
        getChecked (checked) {
            // console.log(this.$store.getters.showChecked(checked))
            this.checkList = this.$store.getters.showChecked(checked);
        },
        ...mapMutations(['addCount','resetCount']), //不带参数直接调用写法
        add(){
            // this.$store.commit('addCount',1)
            // this.$store.commit('addCount',{n:1}) //对象形式载荷
            // this.$store.commit({ //对象风格的mutation
            //     type:'addCount',
            //     n:1
            // })
            this.addCount({n:1}) //带参数写法
        },
        reset(){
            // this.$store.commit('resetCount',0)
            // this.$store.commit('resetCount',{data:0})//对象形式载荷
            // this.$store.commit({
            //     type:'resetCount',
            //     data:0
            // })
            this.resetCount({data:0})
        },
        
    }
    
}
</script>
<style scoped>

</style>