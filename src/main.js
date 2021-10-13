import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'normalize.css'
import TheTimer from'./components/ui/TheTimer.vue'

const app = createApp(App)
app.component('the-timer',TheTimer)

app.mount('#app')
