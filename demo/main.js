import Vue from 'vue'
import VueListbox from '../src/index.js'

import App from './app.vue'

Vue.component('app', App)
Vue.use(VueListbox)
new Vue({
	el: '#app',
	render: h => h('app')
})