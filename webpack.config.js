// 用于拼接绝对路径的方法，node的方法
const {resolve} = require('path');
// console.log(resolve(__dirname,'build'));

module.exports = {
    /*
        1.entry 入口(entry)指示webpack以哪个文件作为入口起点开始打包，分析构建内部结构。
        入口有两种 单入口写法和多入口写法
    */
    // 1.1单入口： <单入口单出口>
    // 如果只有一个入口，使用字符串，指定一个入口文件单入口打包一个chunk，输出一个bundle，chunk的名称是默认
    entry:'./src/index.js', //默认也是当前目录里的src里的index.js 如果指定的是一个目录 那么又是另一种效果
    
    // 1.2多入口又有分三种类别
        //1.1.1:多入口数组写法：<多入口单出口>
        // 所有入口文件形成一个chunk，名称是output.filename的值
        // 最终输出的也只有一个 bundle
        // entry:['./src/index.js','./src/main.js'],
        
        // 1.1.2:多入口对象写法：<多入口多出口>
        // 有几个入口文件就会生成几个chunk，并输出几个bundle，这时如果使用这种写法就需要
        // 在output中的filename的值需要这样写"[name].js"
        // entry:{
        //     one:'./src/index.js',
        //     two:'./src/main.js',
        // },

        // 1.1.3:多入口对象数组组合写法:<多入口多出及多入口单出口>
        // entry:{
        //     onea:['./src/index.js','./src/main.js'],
        //     twob:'./src/index.js',
        // },
    /*
        2.output 输出(output)指示webpack打包后的资源bundles 输出到哪里，以及如何命名。
    */
    output:{
        // 输出文件名
        filename:"[name].js",
        // 输出路径 一般采用绝对路径
        path:resolve(__dirname,'build')
    },
    
    /*
        3.loader 让webpack能够去处理那些非javascript资源：css,img等，把他们处理成webpack能够识别的资源，可以理解成一个翻译过程 webpack自身只能理解js和json
    */
    // loader配置
    module:{
        rules:[

        ]
    },


    /*
        4.plugins 插件(plugins)可用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
    */
    // plugins配置
    plugins:[
        
    ],


    /*
        5.mode 指定webpack使用相应模式的配置
        production  生产模式 配置比较简单，能够让代码优化上线运行的环境。
        development 开发模式 代码需要不断优化达到性能最好，能让代码优化上线运行的环境都会自动启用一些插件，生产模式使用插件更多
    */
    // 指定模式
    mode:"development"
}