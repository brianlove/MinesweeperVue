import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBomb, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBomb, faFlag);

import "@/styles/variables.css";

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
