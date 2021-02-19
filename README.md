npm i 
<br/>
npm run serve 运行项目

MapState<br/>
  当一个组件需要获取多个状态时，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，可以使用mapState辅助函数帮助生成计算属性。<br/>

MapGetters<br/>
  mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性<br/>

Mutation<br/>
  Mutation是同步函数<br/>
  Vuex的store中的状态是响应式的，当我们变更状态时，监视状态的Vue组件也会自动更新。这也意味着Vuex中的mutation页需要与使用Vue一样遵守一些注意事项<br/>
    1、最好提前在你的store中初始化好所需属性<br/>
    2、当需要在对象上添加新属性时，应该<br/>
       (1) 使用Vue.set(obj, 'newProp', 123)，或者<br/>
       (2) 以新对象替换老对象。例如:state.obj = { ...state.obj, newProp: 123 }<br/>
  在组件中提交Mutation （简单说就是调用mutation里的方法）<br/>
  在组件中使用this.$store.commit('xxx')提交mutation<br/>

MapActions<br/>
  Action类似于Mutation，不同在于<br/>
  Action提交的是mutation，而不是直接变更状态<br/>
  Action可以包含任意异步操作<br/>
  Action接受一个与store实例具有相同方法和属性的context对象 【context.state/context.getters  ===  store.state/store.getters】<br/>

调用时必须加上对象展开运算符[...]<br/>
computed计算属性中调用: mapState 、mapGetters     <br/>
method方法中调用: mapActions,mapMutations  <br/>

