import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name:
    component: () => import('@/views/layout'),
    children: [
      // {
      //   path: '',
      //   name: 'home',
      //   component: () => import('@/views/home')
      // },
      {
        path: '/discover',
        name: 'discover',
        component: () => import('@/views/discover')
      },
      {
        path: '/playlists',
        name: 'playlists',
        component: () => import('@/views/playlists')
      },
      {
        path: '/songs',
        name: 'songs',
        component: () => import('@/views/songs')
      },
      {
        path: '/mvs',
        name: 'mvs',
        component: () => import('@/views/mvs')
      },
      {
        path: '/collect',
        name: 'collect',
        component: () => import('@/views/collect')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search')
      },
      {
        path: '/songplay',
        name: 'songplay',
        component: () => import('@/views/songplay')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/discover')
  } else {
    next()
  }
})

export default router
