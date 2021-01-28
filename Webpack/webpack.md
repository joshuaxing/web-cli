### 前端模块化

#### 优点

作用域封装
重用性
解除耦合

#### 作用域

运行时 - 变量 函数 对象的可访问性
作用域决定了代码中的变量和其他资源的可见性

#### [模块化方案](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)
1. AMD
Asynchronous Module Definition（异步模块定义）
```
define("getSum", ["math"], funtion(math){
    return function (a, b){
        log("sum:"+ math.sum(a, b))
    }
})
```
2. COMMONJS
```
// 通过require函数来引用
const math = require("./math");

// 通过exports将其导出
exports.getSum = function(a,b){
  return a + b;
}

```
3. ES6 MODULE

```
// 通过import函数来引用
import math from "./math";
// 通过export将其导出
export function sum(a, b){
  return a + b;
}
```

### webpack打包过程

```
(function(module) {
    var installedModules = {};
    function __webpack_require__(moduleId){
        // SOME CODE
    }
    // 。。。
    return __webpack_require__(0); // entry file
})([ /* modules array */])
```

```
function __webpack_require__(moduleId){
    // check if module is in cache

    if(installedModules[moduleId]){
        return installedModules[moduleId].exports;
    }

    // create a new module (and put into cache)

    var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
    };

    // exe the module func

    modules[moduleId].call{
        module.exports,
        module,
        module.exports,
        __webpack_require__
    };

    // flag the module as loaded
    module.l = true;
    // return the exxports of the module
    return module.exports;
}
```


- 从入口文件开始，分析整个应用的依赖树
- 将每个依赖模块包装起来，放到一个数组中等待调用
- 实现模块加载的方法，并把它放到模块执行的环境中，确保模块间可以互相调用
- 把执行入口文件的逻辑放在一个函数表达式中，并立即执行这个函数


### npm

- 理解包管理器
- 熟悉npm核心特性
- 理解npm"仓库"与"依赖"的概念
- 理解npm"语义化版本"
  1. ^version: 中版本和小版本 ^1.x.x -> 1.x.x
  2. ~version: 小版本 ~1.0.1 -> 1.0.x
  3. version特定版本
- 掌握使用npm自定义脚本工程脚本的方法
- npm install过程
    寻找报版本信息文件(package.json)，依照它来进行安装
    查找package.json中的依赖，并检查项目中其他的版本信息文件
    如果发现了新包，就更新版本信息文件

### loader

    - babel-loader
        @babel/preset-env
        @babel/core
        @babel/cli
        @babel/preset-react
    - css-loader
    - style-loader
    - sass-loader
    - postcss-loader
    - postcss-px-to-viewport
    - url-loader

### 插件

    webpackBundleAnalyzer
    TerserPlugin
    HotModuleReplacementPlugin
    html-webpack-plugin
    mini-css-extract-plugin
    friendly-errors-webpack-plugin
    clean-webpack-plugin
    copy-webpack-plugin


### webpack 打包优化思路

    1. 减少查找 include exclude
    2. 减少解析 noParse
    3. 缓存
    4. 预编译
    5. 多线程打包 happyPack
    6. tree-shaking
    7. cacheDictionary: true/false; 是否缓存，可以提升webpack打包执行的速度
    8. resolve: extensions：['.js','.jsx','.json']

### 查看全局安装包 

npm list -g --depth 0
yarn global list
