const {sum} = require('./two');

console.log(sum);

// webpack打包有分 开发模式环境打包 和 生产模式环境打包
// 开发模式环境打包方式 webpack --mode development
// 生产模式环境打包方式 webpack --mode production

// webpack 可以自定义打包的入口文件和输出位置以及输出文件的命名

// 自定义格式:
// webpack 入口文件路径 -o 输出文件目录及输出文件名称 打包模式

// webpack ./src/index.js -o ./build/build.js --mode development

// 每次打包都需要这样写就太麻烦了，所以可以用更改配置文件的方式来指定入口文件路径与输出文件目录与打包模式等

