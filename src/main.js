// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@vuepic/vue-datepicker/dist/main.css'

import './assets/global.css'
import './style.css'

createApp(App).use(router).mount('#app')
