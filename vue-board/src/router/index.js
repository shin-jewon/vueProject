import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/Read'
import Create from '@/components/Create'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      path: '/create/:contentId?', //?를 붙이면 contentId가 있든 없든 create 컴포넌트 보여줌
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    }
  ]
})
