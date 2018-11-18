// 引入第三方库
import $ from 'jquery'

import Vue from 'vue';
import Login from '../views/login.vue';

import Axios from 'axios';
Axios.defaults.baseURL = 'http://cloud.remonde.com:8091/';
Vue.prototype.$axios = Axios;

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// 引入多语言国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 注意以下message内部定义的语言名称命名不能带短横线 zh-CN这样是不允许的（会被当做减号处理）。
// locale的值从messages对象内的键值对的key选取一个赋值
const i18n = new VueI18n({
    locale:'zh_CN',
    messages:{
        zh_CN: require('../assets/i18n/message.zh-CN.json'),
        en: require('../assets/i18n/message.en.json'),
        da: require('../assets/i18n/message.da.json')
    }
});

new Vue({
    el: '#login',
    i18n,
    render: c => c(Login)
});
