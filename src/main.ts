import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import ECharts from 'vue-echarts'
import { use } from "echarts/core";

// 手动引入 ECharts 各模块来减小打包体积
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  LineChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent
]);



import 'dayjs/locale/zh-cn'
// import locale from "element-plus/lib/locale/lang/zh-cn";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css' //  一定要引入
import utils from './utils'
import instance from './api/axios'

// Vue.prototype.$axios = instance
const app = createApp(App)
app.config.globalProperties.$axios = instance
app.component('v-chart', ECharts)
app.use(ElementPlus, { locale: zhCn, size: 'mini' }).use(store).use(router).use(utils).mount('#app')
