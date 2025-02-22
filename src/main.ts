import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入element-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import 'virtual:svg-icons/register'

// 中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

// 国际化配置
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)

// svg插件引入
import 'virtual:svg-icons-register'

// 全局样式引入
import '@/styles/index.scss'

app.mount('#app')
