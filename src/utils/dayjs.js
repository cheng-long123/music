import Vue from 'vue'

// 初始化dayjs
import dayjs from 'dayjs'

// 加载中文语言包
import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

// 配置中文语言包
dayjs.locale('zh-cn')
// 过滤器
Vue.filter('relativeTime', value => {
  return dayjs(value).from(dayjs())
})
Vue.filter('datetime', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(value).format(format)
})
Vue.filter('time', value => {
  let min = parseInt(value / 1000 / 60)
  if (min < 10) {
    min = '0' + min
  }
  let fen = parseInt((value / 1000) % 60)
  if (fen < 10) {
    fen = '0' + fen
  }
  return `${min}:${fen}`
})
