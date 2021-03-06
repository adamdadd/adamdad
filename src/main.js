import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/Experience.vue'

Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'aboutme',
            component: AboutMe,
        },
        {
            path: '/experience',
            name: 'experience',
            component: Experience,
        }
    ],
    mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
