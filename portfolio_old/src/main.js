import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//import { loadFonts } from './plugins/webfontloader'

// disable font loading
//loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
