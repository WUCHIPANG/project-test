import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import './styles/index.css'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '1009635135040-ri9kt1c6od213d6c54hq39vi1jv7emuf.apps.googleusercontent.com'
})

app.use(createPinia())
app.use(router)

app.mount('#app')
