# 这是webpack-02的源码与笔记
## **webpack-02到底说了什么？**
## **打包和压缩HTML资源**
> 通过插件(plugins)对HTML文件进行打包处理(html-webpack-plugin)

# **使用步骤**
>* 1.下载
>* 2.引用
>* 3.使用

## 1.下载

 ```
 $ npm install html-webpack-plugin -D
 ```

## 2.引用
```javascript
const HWP = require('html-webpack-plugin');
```

## 3.使用
```javascript
plugins:[
    // 默认会创建一个空的html，目的就是自动引入打包的资源(js/css)
    new HWP(),
]
```
# **自定义打包配置**
```javascript
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
    ]
```



