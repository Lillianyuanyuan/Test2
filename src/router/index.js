import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: (resolve) => {require(['@/view/HelloWorld'], resolve)}
    },
    {
      path: '/aplayer',
      name: 'aplayer',
      component: (resolve) => {require(['@/view/aplayer'], resolve)}
    },
    {
      path: '/swiper1',
      name: 'swiper1',
      component: (resolve) => {require(['@/view/swiper1'], resolve)}
    },
    {
      path: '/swiper2',
      name: 'swiper2',
      component: (resolve) => {require(['@/view/swiper2'], resolve)}
    },
    {
      path: '/swiper3',
      name: 'swiper3',
      component: (resolve) => {require(['@/view/swiper3'], resolve)}
    },
    {
      path: '/treetable',
      name: 'treetable',
      component: (resolve) => {require(['@/view/treetable'], resolve)}
    }

  ]
})
