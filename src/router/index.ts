// 通过vue-router实现路由模板
import { createRouter, createWebHistory } from 'vue-router';
import { constantRoute } from './router';

// 创建路由器
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoute,
  // 页面滚动
  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  }
})

export default router;
