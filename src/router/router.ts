// 对外暴露的常量路由
export const constantRoute = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    name: 'login',
  },
  {
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  }
]
