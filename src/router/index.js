import Vue from 'vue'
import Router from 'vue-router'
import Orders from '@/components/Orders'
import OrderDetail from '@/components/OrderDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/pedidos',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/pedidos/:id',
      name: 'OrderDetail',
      component: OrderDetail
    }
  ]
})
