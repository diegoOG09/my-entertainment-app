import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"

const prototype = createApp(App)
prototype.use(router)
prototype.mount('#app')
// createApp(App).mount('#app')
