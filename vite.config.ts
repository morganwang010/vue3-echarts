import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`;
          }
        }
      ]
    })
  ],
  // 公共样式
  css: {
    // 🔥此处添加全局scss🔥
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/common.scss";'
      }
    }
  },
  // 生产环境路径，类似webpack的assetsPath
  base: './',
  build: {
    // 打包后目录,默认dist
    outDir: 'dist',
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: []
  },
  server: {
    // host: "0.0.0.0"
    host: "localhost",
    strictPort: true,
    port: 3000,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    proxy: {
      '/dev': {
        target: 'http://jsonplaceholder.typicode.com/dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, '')
      },
      '/api': {
        target: 'http://jsonplaceholder.typicode.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // with RegEx
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com/fallback',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      },
      // Using the proxy instance
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy will be an instance of 'http-proxy'
      //   }
      // }
    }
  }
})
