// import platform from 'platform'
import Vue from 'vue'
import App from './App.vue'
import Modal from './models/Modal/index.js'

// 移动端及PC端适配
window.platform = window.navigator.userAgent
if (/iPhone/i.test(window.platform) || /Android/i.test(window.platform) || /SymbianOS/i.test(window.platform) || /iPad/i.test(window.platform) || /iPod/i.test(window.platform) || /Windows Phone/i.test(window.platform)) {
  window.isMobile = true
} else {
  window.document.body.style.height = '750px'
  window.document.body.style.width = '420px'
  window.document.body.style.margin = '0 auto'
  window.isMobile = false
}

window.wawaRoomId = 0
let query = window.location.search
if (query) {
  query = query.substr(1)
  let items = query.split('&')
  items.forEach(item => {
    let kv = item.split('=')
    if (kv[0] === 'roomid' && !Number.isNaN(kv[1])) {
      window.wawaRoomId = parseInt(kv[1])
    }
  })
}

Vue.use(Modal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
/* eslint-enable no-new */
