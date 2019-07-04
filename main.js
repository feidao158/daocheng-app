import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.serverUrl = 'http://daocheng.natapp1.cc'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
