// const webpack = require('webpack')//热更新第二方法：第二步（貌似版本的更新把热更新的问题解决了，但是照例配置一下，以便出错可用）

module.exports = {
    entry: __dirname + "/src/index.js",//用上相对路径 __dirname
    output:{
        path:__dirname + "/dist",
        filename:"bundle.js"
    },

    devServer:{//dev-server的第二种方式
        // --content-base src --inline --hot --port=8080 --open
        open:true,
        port:8080,
        contentBase:"src",
        hot:true//热更新第二方法：第一步（貌似版本的更新把热更新的问题解决了，但是照例配置一下，以便出错可用）
    },

    //热更新第二方法：第三步（貌似版本的更新把热更新的问题解决了，但是照例配置一下，以便出错可用，但是不推荐这种方法，还是使用第一种方法。开发常用第一种方法。这个学习学习就可以了）
    // plugins:[
    //     new webpack.HotModuleReplacementPlugin()
    // ],

    module:{
        rules:[
            {  test:/\.json$/,  use:"json-loader"},
            {  test:/\.(js|jsx)$/,  use:"babel-loader",  },
            { test: /\.vue$/,  use: 'vue-loader'},

        ]
    }

  }