# 这是webpack-05笔记
# 每次写笔记写进README太麻烦了，所以不写了，笔记都写在代码注释里...

## 本源码内容是将css文件通过js引入并打包成style标签后插入到index页面中的head标签内的一系列操作
---
## 1.下载style-loader与css-loader包 该包为开发时依赖
```
$ npm i style-loader css-loader -D
```

## 2.使用loader
- 在入口文件中通过require()引入css文件
```javascript
require('./style.css');
```
- 在webpack.config.js中配置loader
```javascript
module:{
        rules:[      
            {
                // test 属性规定什么文件需要loader 使用正则规定
                test:/\.css$/,

                // 单个loader时写法
                // {loader:"css-loader"}
                // 多个loader 则由use属性以数组形式
                // 顺序是从右到左执行 或 从下到上
                use:["style-loader","css-loader"]
            }
        ]
    },
```
- 然后在命令行执行
> webpack

## 大功告成啦

