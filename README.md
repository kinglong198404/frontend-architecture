一、Vue技术栈：webpack+vue+es6+nodejs+BootStrap+jQuery

    webpack：预编译和打包
    vue.js：框架、数据绑定
    vue-router：路由机制
    vue-cookie：cookie插件
    vue-i18n :国际化
    vue-moment：时间 格式化
    jquery:轻量的、功能丰富的js库
    axios：网络Http请求
    BootStrap：UI库
    NodeJs：JavaScript运行环境，辅助项目构建等

二、开发环境：Webpack及插件安装

    npm install -g webpack
    npm install -g webpack-cli
    npm install 安装依赖包
    npm run dev 调试

    如果报错，检查以下各项是否安装好：
    安装webpack-ES6相关: npm i babel-loaderbabel-loader@7.1.5 babel-core babel-preset-es2015 babel-plugin-transform-runtime -D
    安装webpack-serve :npm install webpack-serve --save-dev
    安装Vue：npm i vue -S & npm i vue-loader vue-template-compiler -D

三、工程目录约定

1.项目根目录结构及文件
*   src源代码目录，具备功能划分，MVC
*   dist 存放已打包的可上线的代码（减少请求、混淆代码）
*   node_modules 不用进行代码版本管理。
*   webpack.config.js 配置信息，根据改配置打包生成dist下的代码
*  package.json 包信息描述 包括依赖包的列表。在项目目录下执行npm init生成该文件，
        根据该文件的依赖包列表，可通过npm install（npm i）恢复 node_modules下的模块
*  README.md 项目的环境配置、业务流程、程序设计、服务接口、部署指南等说明

2.src下的目录结构及文件
*  assets(fonts、i18n、images、json、xml等不涉及编码的静态资源)
*  css(自定义的全局和各模块的样式)
*  scripts（业务模块的脚本代码）
     *  common/lib(工具类型的 优先安装vue相关插件：jquery cookie bootstrap select2)
            md5.js
            regExp.js
     *  plugins(插件类型的)
            ztree.js
            charts.js
            dialog.js
            bootstrap-datepicker.js
     *  modules(各模块的js 相当于MVC中的Controller)
            work_order
                work_order_assign.js
                work_order_create.js
                work_order_list.js
            area
                area_create.js
                area_edit.vue
      *  config.js（框架配置相关）
      *  global.js（公共数据等）
*  views(html/vue)
      *  components（可复用组件）
            *  menu.vue
            *  header.vue
            *  footer.vue
      *  modules（产品业务模块）
            *  work_order（工单模块）
                work_order_assign.vue
                work_order_create.vue
                work_order_list.vue
            *  area（区域模块）
                area_create.vue
                 ......
*  index.html（单页面应用入口html）
*  main.js（单页面应用入口js）
*  login（多页面应用的登录页）
      *  login.html（登录页入口html）
      *  login.js（登录页入口js）
*  index（多页面应用的主页）
      *  index.html（主页入口html）
      *  main.js（主页入口js）
    //以上单页面应用和多页应用的结构选择一种



