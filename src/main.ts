

import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/scss/index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import zzElement from  './components/index'
import    './components/theme-chalk/index.scss'
// vditor.css
import "vditor/src/assets/scss/index.scss"

// declare le
const app = createApp(App)
app.use(store)
app.use(router)
app.use(zzElement)
// @ts-ignore
app.use(ElementPlus)
app.mount('#app')
