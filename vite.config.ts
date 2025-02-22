import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// 引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// mock插件引入
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      // 使用icons图标
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // 使用mock插件
      viteMockServe({
        mock: command === 'serve', // 修改为 mock 或 enable
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variable.scss" as *;`,
        },
      },
    },
  }
})
