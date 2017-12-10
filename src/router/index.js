import Vue from 'vue'
import Router from 'vue-router'
import Home from  '../pages/home.vue'
import History from '../pages/history.vue'
import Mine from '../pages/mine.vue'
import Place from '../pages/place.vue'
import Hot from '../place-pages/hot.vue'
import Nei from '../place-pages/nei.vue'
import Wai from '../place-pages/wai.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/history',
      component:History
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/place',
      component:Place,
      children:[
        {
          path: '/place',
          component:Hot
        },
        {
          path: '/place/hot',
          component:Hot
        },
        {
          path: '/place/nei',
          component:Nei
        },
        {
          path: '/place/wai',
          component:Wai
        },
      ]
    },
  ]
})
