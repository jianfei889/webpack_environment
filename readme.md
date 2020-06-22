1. webpack:
    1. 编译：es6->es5,ts->js
    2. gulp能做到的，webpak都可以做到
    3. 自带服务器，服务器也是基于node创建(webpack-dev-server)
    4. 常用于 Vue 、 react

2. 安装
    1. 全局安装 
        ```npm i -g webpack```
        - webpack4.x 版本需要配置环境，同时webpack@cli 的3.x版本不建议入手，先着手2.x版本 
        ```npm -g webpack-cli@2.x```
    2. 项目初始化 package.json 
        ```npm init -y```
    3. 安装项目依赖的webpack'
        ```npm i -D webpack@3.x``` 
        >-D为 --save-dev 的缩写
    4. 项目根目录下创建文件夹
        - src 
        - dist
    5. 编写代码到index.js
        ```document.write('hello webpack')```
    6. 执行webpack，编译到boundle.js
        - webpack src/index.js dist/boundle.js
    7. 这里编写hello.js,index.js 引入 hello.js


3. 生成 webpack.config.js 配置文件，配置入口出口
    module.exports = {
    entry: __dirname + "/src/index.js",//用上相对路径 __dirname
    output:{
        path:__dirname + "/dist",
        filename:"bundle.js"
    }
  }

4. webpack 执行的快捷方案
    - 在package.json 文件中代替 webpack 的执行
    ```// "test": "echo \"Error: no test specified\" && exit 1"```
    执行 ```npm run build```

5. 调试，错误调试

6. 服务器
    1. 全局安装服务器
    ```npm i -g webpack-dev-server@2.x```
    2. 安装项目依赖
    ```npm i -D webpack-dev-server@2.x```
    3. 运行webpack服务器
    ```webpack-dev-server```
    4. 配置服务器的快捷执行方案
     在package.json文件的scripts中添加： "dev" : "webpack-dev-server" 
     - 之后执行```npm run -dev```
    5. 修改服务器根路径
        - "dev": "webpack-dev-server --content-base dist"
    6. 热更新
        ```"dev": "webpack-dev-server --content-base dist --inline --hot"```
        > --hot可以省略，和--inline代表热更新的意思
    7. 服务器配置
        | | 命令符 | 备注信息      |
        |:--------:| -------------:|
        | --content-base | 指定服务器运行根目录 |
        | --inline | 热更新 |
        | --port=8080 | 修改端口 |
        | --open | 自动打开默认浏览器 |
7. module
    loaders
    >新版本的 module 为 use,这个也就是加载器loader
    1. 配置loaders
        - test: 一个匹配loader要做的文件的一个正则表达式（必须）
        - loader: loader要执行的任务的名字（必须）
        - options: 为loader提供的一些外部选项配置（可选项）
    2. json转换为js的对象
        [注] : 当前的json-loader已经在webpack@3.x中安装，集成安装了，所以安装可以省略，但是当版本低时可以手动安装
     - 安装json-loader ```npm i -D json-loader```
     - 编写配置文件代码（在webpack配置文件中编写）
        module:{
            rules:[
                {
                    test:/\.json$/,
                    use:"json-loader"
                }
            ]
        }
        
8. es6 -> es5
    1. 安装依赖
    npm install -D babel-core babel-loader babel-preset-es2015
    > npm i -D babel-loader@7  因为最新版babel-loader 编译会有误，可以先用着 @7 版本的
    2. 配置 webpack-config.js 文件,把es6转换为es5
        {  test:/\.js$/,  use:"babel-loader",  options:{ presets:["es2015"] } }
        因为options出错，先略掉
        > 因为 es6 语法在一些浏览器可能会编译不成功,但是 es5 可以。所以匹配loader 满足开发需求

9. 安装开发环境 Vue（这里安装 Vue的，需要react的需要另行安装配置）





