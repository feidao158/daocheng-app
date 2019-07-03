import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.serverUrl = 'http://121.42.11.227:8080'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
