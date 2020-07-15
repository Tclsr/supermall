import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { request } from './network/request'


Vue.config.productionTip = false

//全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.all([

//   axios({
//     url: '/home/multidata',
//   }),
//   axios({
//     url: '/home/data',
//   })
// ]).then(([a, b]) => {
//   console.log(a);
//   console.log(b);
// })

// request(
//   {
//     url: '/home/multidata',
//   }
// ).then(res => {
//   console.log('成功了'+res);
// }).catch(err => {
//   console.log('失败了'+err);
// })
