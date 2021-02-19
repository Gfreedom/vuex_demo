import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from '@/components/Home'
import Login from '@/components/login'
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      meta:{auth:true} //路由需要验证
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      meta:{auth:true}
    }
  ]
})


// 路由拦截：检查是否登录，未登录跳转到登录页面
router.beforeEach((to,_,next)=>{

  if(to.matched.some(m=>m.meta.auth)){
    if(to.name=='login'){
      next()
    }else{
      if(store.state.isLogin==true){
        next()
      }else{
        next('/login')
      }
    }
  }else{
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


