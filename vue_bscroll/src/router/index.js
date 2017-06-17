import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Body from '@/components/Body'
import Girl from '@/components/Girl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Body',
      name : 'Body',
      component:Body
    },
    {
      path: '/Girl',
      name: 'Girl',
      component:Girl
    }
  ]
})
