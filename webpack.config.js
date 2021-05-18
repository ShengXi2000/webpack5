const {resolve} = require('path');
const HWP = require('html-webpack-plugin');
const MCEP = require('mini-css-extract-plugin');
module.exports = {
    // 入口文件
    entry:{
        index:"./src/index.js"
    }, 

    output:{
        // 输出文件名
        filename:"[name].js",
        // 输出路径 一般采用绝对路径
        path:resolve(__dirname,'build')
    },

    // loader配置
    module:{
        rules:[
            // {test:/\.css$/,use:["style-loader","css-loader"]},
            // 顺序永远是从右到左
            // MCEP.loader 会创建一个新的css然后将右边的结果打包到这个css中，然后在页面中用link引入
            {test:/\.css$/,use:[MCEP.loader,"css-loader"]},
            {test:/\.less$/,use:[MCEP.loader,"css-loader","less-loader"]},
            {test:/\.scss$/,use:[MCEP.loader,"css-loader","sass-loader"]},
        ],
    },

    // plugins配置
    plugins:[
        // 配置html出口
        new HWP({
            // 打包文件路径
            template:"./src/index.html",
            // 输出文件名 (输出位置output已经指定了)
            filename:"index.html",
            // 需要引入的chunks ，从entry处获取
            chunks:["index"],
            // 压缩html代码
            minify:{
                // 移除空格
                collapseWhitespace:false,
                // 移除注释
                removeComments:true
            }
        }),  
        // 配置css link出口
        new MCEP({
            filename:'demo.css'
        })
    ],

    // 指定模式
    mode:"development"
}