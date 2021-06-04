import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueAgile } from 'vue-agile'
import './assets/tailwind.css'

createApp(App).use(store).use(router).use(VueAgile).mount('#app')
