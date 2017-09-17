import Vue from 'vue'
import Router from 'vue-router'
import Request from '@/components/Request'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Request',
      component: Request
    },
    {
      path: '/pedidos',
      name: 'Request',
      component: Request
    }
  ]
})
