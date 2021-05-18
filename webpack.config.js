const {resolve} = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    // 入口文件
    entry:{
        // vendor 我们定义为一个所有html页面都需要引入的一个chunks
        // 以下每个属性对应一个chunks
        vendor:["./src/js/common.js","jquery"],
        index:"./src/js/index.js",
        cart:"./src/js/cart.js"
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

        ]
    },

    // plugins配置
    plugins:[
        new HWP({
            // 打包文件路径
            template:"./src/index.html",
            // 输出文件名 (输出位置output已经指定了)
            filename:"index.html",
            // 需要引入的chunks ，从entry处获取
            chunks:["index","vendor"],
            // 压缩html代码
            minify:{
                // 移除空格
                collapseWhitespace:false,
                // 移除注释
                removeComments:true
            }
        }),
        new HWP({
            template:"./src/cart.html",
            filename:"cart.html",
            chunks:["cart","vendor"],
            minify:{
                collapseWhitespace:false,
                removeComments:false
            }
        })
    ],

    // 指定模式
    mode:"development"
}