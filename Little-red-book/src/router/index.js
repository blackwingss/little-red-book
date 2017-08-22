import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/Home.vue'], resolve)
    },
    {
      path: '/detail/:item',
      component: resolve => require(['@/components/Detail.vue'], resolve)
    },
    {
      path: '/find',
      component: resolve => require(['@/pages/Find.vue'], resolve)
    },
    {
      path: '/buy',
      component: resolve => require(['@/pages/Buy.vue'], resolve)
    },
    {
      path: '/msg',
      component: resolve => require(['@/pages/Msg.vue'], resolve)
    },
    {
      path: '/me',
      component: resolve => require(['@/pages/Me.vue'], resolve)
    }    
  ]
})
