import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import left from '@/components/left'
import right from '@/components/right'
import params from '@/components/params'
import alias from '@/components/alias'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:left,
        right:right
      }
    }, {
      path:"/hi",
      name:"hi",
      components:{
        default:hi,
        left:right,
        right:left
      },
      children:[
        {path:'/hi1',name:'hi1',component:hi1},
        {path:'/hi2',name:'hi2',component:hi2},
      ]
    }, {
      path:'/params/:newsID/:mewsTitle',
      name:'params',
      component:params,
    
    }, {
      path:'/gohome',
      redirect:'/'
    }, {
      path:'/alias',
      name:'alias',
      component:alias,
      alias:'/supeng'
    }, {
      path:'*',
      component:Error
    }
  ]
})
