// 引入第三方库
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// 引入vue
import Vue from 'vue';
import App from '../views/app.vue';
import HT from '../views/modules/ht/ht.vue';
import Header from '../views/components/header.vue';
import TreeMenu from '../views/components/treemenu.vue';
import Home from '../views/modules/home/home.vue';
import NotFound from '../views/components/notFound.vue';

// 注册全局组件
Vue.component('headerVue',Header);
Vue.component('treemenuVue',TreeMenu);

// 引入多语言国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale:'zh',
    messages:{
        zh: require('../assets/i18n/message.zh-CN.json'),
        en: require('../assets/i18n/message.en.json'),
        da: require('../assets/i18n/message.da.json')
    }
})

import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

Vue.use(require('vue-moment'))

import VueRouter from 'vue-router';
// 装配插件
Vue.use(VueRouter);
// VueRouter里面的键是固定的routes，不要写错为routers
let router = new VueRouter({
    // name作用相当于锚点 方便router-link:to="{name:'detail'}"中指定
    routes: [
        // {path: '/', redirect: {name: 'home'}},
        {name:'home',path: '/home', component: Home},
        {name:'ht',path: '/ht', component: HT},
        // {name: 'list', path: '/list', component: List},
        // {name:'details',path: '/details', component: Details},//查询字符串方式 /details?id = 1
        // {name: 'details', path: '/details/:id', component: Details},//path方式 details/1
        {path: '*', component: NotFound}
    ]
});

// import Tree from 'vuejs-tree'
// Vue.component('tree',Tree);// Vue.use(Tree) 无效

import Tree from '../plugins/tree-menu/tree.vue'
Vue.component('tree',Tree);

new Vue({
    el: '#app',
    router: router,
    i18n,
    methods: {
        getTree: function(treeId) {
            for (var i = 0; i <= this.$children.length - 1; i++) {
                if (this.$children[i].$props.id == treeId) return this.$children[i]
            }
        }
    },
    render: c => c(App)
});