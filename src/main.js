import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import animated from 'animate.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import components from '@/components/index'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(store).use(router).use(components).use(animated).mount('#app')