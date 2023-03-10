import { createApp } from 'vue'
import App from './App.vue'
import indexCommonComponents from './components/commonComponents/indexCommonComponents'
import { store } from './store/store'

const app = createApp(App)

indexCommonComponents.forEach(component => app.component(component.name,component) )

app.mount('#app')
