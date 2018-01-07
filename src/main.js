import Vue from 'vue'
import App from './App.vue'
import * as Icon from 'vue-awesome'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueConfetti from 'vue-confetti'
import vmodal from 'vue-js-modal'

Vue.use(vmodal)
Vue.use(VueConfetti)
Vue.use(VueYouTubeEmbed)
var SocialSharing = require('vue-social-sharing');
Vue.component('icon', Icon)

Vue.use(SocialSharing);

new Vue({
  el: '#app',
  render: h => h(App)
})
