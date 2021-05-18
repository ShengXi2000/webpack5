const {resolve} = require('path');
const HWP = require('html-webpack-plugin');
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
            {
                // test 属性规定什么文件需要loader
                test:/\.css$/,

                // 单个loader时写法
                // {loader:"css-loader"}
                // 多个loader 则由use属性以数组形式
                // 顺序是从右到左执行 或 从下到上
                use:["style-loader","css-loader"]
            }
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
            chunks:["index"],
            // 压缩html代码
            minify:{
                // 移除空格
                collapseWhitespace:false,
                // 移除注释
                removeComments:true
            }
        }),    
    ],

    // 指定模式
    mode:"development"
}