import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import { Auth0Plugin } from './auth'
import { domain, clientId } from '../auth.config.json'

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState: any) => {  // eslint-disable-line @typescript-eslint/no-explicit-any
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : '/'
    )
  }
})

Vue.config.productionTip = false
console.log(window.location.origin, window.location.href, window.location.pathname)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
