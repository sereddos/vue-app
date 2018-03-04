import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import table from '@/components/table'
import userAdd from '@/components/user_add'
import userEdit from '@/components/user_edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      component: table
    },
    {
      path: '/user/add',
      component: userAdd
    },
    {
      path: '/user/:id',
      component: userEdit,
      props: true
    }
  ]
})
