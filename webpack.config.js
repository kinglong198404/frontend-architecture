const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: { // 入口js文件
        index: "./src/index/index.js",
        login: "./src/login/login.js"
    },
    output: { // 输出路径配置
        publicPath: './',
        filename: "scripts/[name].js",               // 打包生成js文件的文件名
        path: path.join(__dirname, "dist")  // 打包生成文件的保存路径
    },
    plugins: [
        new HtmlWebpackPlugin({ // 默认只对js打包，所以打包html需要插件
            filename: 'index.html',
            template: './src/index/index.html',
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({ // 默认只对js打包，所以打包html需要插件
            filename: 'login.html',
            template: './src/login/login.html',
            inlineSource: '.(js|css)$'
        }),
        new VueLoaderPlugin(),// vuejs加载插件
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery",
            Popper: ['popper.js', 'default']
        })
    ],
    module: { // 处理对应模块
        rules: [
            { // 处理css打包
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{//解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
                use:['style-loader','css-loader','sass-loader']
            }, { // 处理图片打包
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/',//输出到images文件夹
                        name: '[name].[ext]',
                        limit: 80  //是把小于1024B的文件打成Base64的格式，写入JS
                    }
                }]
            }, {
                test: /\.jpg$/,
                use: ['file-loader']
            // },{ // 处理字体图标 ？？是否好用 待测试
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10000,
            //         name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            }, { // 处理ES6的js文件的打包
                test: /\.js$/,
                loader: 'babel-loader',
                //排除 node_modules下的所有
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'],//关键字
                    plugins: ['transform-runtime'],//函数
                }
            }, { // 解析vue，处理vue文件的打包
                test: /\.vue$/,
                loader: 'vue-loader',//vue-template-compiler是代码上的依赖
            }
        ]
    },
    // vue:{
    //     loaders: {
    //         js: 'babel',
    //         css: ExtractTextPlugin.extract("css"),
    //         sass: ExtractTextPlugin.extract("css!sass")
    //     },
    // }
}