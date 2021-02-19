import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
      isLogin:false,
      username:'',
      password:'',
      list:[
          {name:'张三',checked:true},
          {name:'李四',checked:false},
          {name:'哪吒',checked:true},
          {name:'敖丙',checked:false},
          {name:'申公豹',checked:false},
          {name:'太乙真人',checked:true},
      ],
      songs:[
          {name:'黑色毛衣',singer:'周杰伦'},
          {name:'烟花易冷',singer:'周杰伦'},
          {name:'爱笑的眼镜',singer:'林俊杰'},
          {name:'美人鱼',singer:'林俊杰'},
          {name:'不能说的秘密',singer:'周杰伦'},
          {name:'一千年以后',singer:'林俊杰'},
          {name:'七里香',singer:'周杰伦'},
          {name:'修炼爱情',singer:'林俊杰'},
      ],
      count:0,
    },
    getters:{
        //通过computed直接获取数据
        // showChecked:state=>{
        //     return state.list.filter(item => item.checked)
        // }
        //通过传递参数来返回结果
        showChecked:(state)=>(checked)=>{
            return state.list.filter(item => item.checked === checked)
        },
        // showChecked:state=>{
        //     return state.list.filter(item => item.checked)
        // },
        showSongs:state=>{
            return state.songs.filter(item => item.singer==='周杰伦')
        }
    },
    mutations:{ //修改状态
      changeLogin(state,data){
        state.isLogin=data
      },
      changeUsername(state,data){
        state.username=data
      },
      changePassword(state,data){
        state.password=data
      },
      // addCount(state,n){
      //     state.count += n
      // },
      // resetCount(state,data){
      //     state.count = data
      // }
      //使用对象形式载荷
      addCount(state,payload){
        state.count += payload.n
      },
      resetCount(state,payload){
        state.count = payload.data
      }
    },
    actions:{
      //context对象与store实例具有相同方法与属性 
      //context.state/context.getters  ===  store.state/store.getters
      // changeLogin(context){
      //   context.commit('changeLogin')
      // },
      // changeUsername(context){
      //   context.commit('changeUsername')
      // },
      // changePassword(context){
      //   context.commit('changePassword')
      // },
      changePassword(context,data){
        setTimeout(()=>{
          context.commit('changePassword',data)
        },1000)
      },

      //参数结构简化代码写法 传递参数
      changeLogin({commit},data){
        commit('changeLogin',data)
      },
      changeUsername({commit},data){
        commit('changeUsername',data)
      },
      // changePassword({commit},data){
      //  commit('changePassword',data)
      // },
      
    }
  })
export default store