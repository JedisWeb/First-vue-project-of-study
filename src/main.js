import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import {
  Header,
  Swipe,
  SwipeItem,
  Button,
  Lazyload
} from 'mint-ui'
import './css/mui.css'
import './css/icons-extra.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload)

// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css'

//异步操作
import VueResource from 'vue-resource'
Vue.use(VueResource)
// Vue.http.options.root = 'http://localhost:3000/src/'

//评论组件
import moment from 'moment'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import app from './App.vue'

Vue.filter('dateFormat', (date, pattern = "YYYY-MM-DD HH:mm:ss") => {
  return moment(date).format(pattern)
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})