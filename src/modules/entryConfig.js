import Vue from 'vue'
import mainView from '@/modules/mainView.vue'
import appBridge from './sinaifCallApp'
import config from './newConfig'
import '@/assets/less/app.less'

console.log(appBridge, config);

console.log(process.env);

Vue.component('mainView', mainView);
