const {resolve} = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    // 入口文件
    entry:'./src/index.js', 

    output:{
        // 输出文件名
        filename:"[name].js",
        // 输出路径 一般采用绝对路径
        path:resolve(__dirname,'build')
    },

    // loader配置
    module:{
        rules:[

        ]
    },

    // plugins配置
    plugins:[
        new HWP({
            // 打包文件路径
            template:"./index.html",
            // 输出文件名 (输出位置output已经指定了)
            filename:"demo.html",
            // 压缩html代码
            minify:{
                // 移除空格
                collapseWhitespace:true,
                // 移除注释
                removeComments:true
            }
        }),
    ],

    // 指定模式
    mode:"development"
}