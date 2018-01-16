import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home/home'
import about from '@/components/about/about'
import document from '@/components/document/document'
import notFound from '@/components/404/404'
import study from '@/components/about/views/study'
import work from '@/components/about/views/work'
import hobby from '@/components/about/views/hobby'
import slider from '@/components/document/slider'
import user from '@/components/user/user'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'selected',
  // 滚动行为
  scrollBehavior(to, from, savePosition) { // 点击浏览器前进后退的时候触发
    // console.log(to); // 要进入的目标路由对象
    // console.log(from); // 离开的路由对象
    // console.log(savePosition); // 浏览器滚动条的坐标 点击浏览器前进后腿按钮才会记录该值
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      meta: {
        index: 0
      },
      component: home
      // children: [
      //   {
      //     path: '',
      //     name: 'study',
      //     components: study
      //   },
      //   {
      //     path: 'work',
      //     name: 'work',
      //     components: work
      //   },
      //   {
      //     path: 'hobby',
      //     name: 'hobby',
      //     components: hobby
      //   }
      // ]
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        index: 0
      },
      component: home
      // children: [
      //   {
      //     path: '',
      //     name: 'study',
      //     components: study
      //   },
      //   {
      //     path: 'work',
      //     name: 'work',
      //     components: work
      //   },
      //   {
      //     path: 'hobby',
      //     name: 'hobby',
      //     components: hobby
      //   }
      // ]
    },
    {
      path: '/user/:tip?/:userId?',
      name: 'user',
      meta: {
        index: 3
      },
      component: user
    },
    // 嵌套视图
    {
      path: '/about',
      meta: {
        index: 2
      },
      component: about,
      children: [
        {
          path: '',
          name: 'about',
          meta: {
            index: 2
          },
          component: study
        },
        {
          path: 'work',
          name: 'work',
          component: work
        },
        {
          path: 'hobby',
          name: 'hobby',
          component: hobby
        }
      ]
    },
    // 命名视图
    {
      path: '/document',
      meta: {
        index: 1
      },
      name: 'document',
      components: {
        default: document,
        slider: slider
      }
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: notFound
    },
    {
      path: '*',
      // components: notFound
      // 重定向
      // redirect: {path: '/about'}
      // redirect: '/',
      // redirect: {name: 'document'}
      // 动态设置重定向
      redirect(to) {
        // 目标路由对象，就是访问的路径的路由信息
        // console.log(to)
        if (to.path === '/index') {
          return '/'
        } else if (to.path === '/docs') {
          return '/document'
        } else if (to.path === '/me') {
          return '/about'
        } else {
          return '/notFound'
        }
      }
    }
  ]
})
