const webpack = require('webpack')
const path = require('path')

//导入在内存中生成html页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: __dirname + "/src/index.js",//用上相对路径 __dirname
    output:{
        path:__dirname + "/dist",
        filename:"bundle.js"
    },


    plugins:[
    
    new htmlWebpackPlugin({//html放进运行磁盘中
        template:path.join(__dirname,'./src/index.html'),
        filename:'index.html'//生成页面的名称
    })
    ],

    module:{
        rules:[
            {  test:/\.json$/,  use:"json-loader"},
            {  test:/\.(js|jsx)$/,  use:"babel-loader",  },
            { test: /\.vue$/,  use: 'vue-loader'},
            { test: /\.css$/,  use: ['style-loader','css-loader']},
            // limit的字节数比图片大---base64 转码，比它小的就不base64转码
            { test: /\.(jpg|png|gif|jpeg)$/,  use:'url-loader?limit=6575&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|woff2|eot|svg|woff)/,use:'url-loader'},
            

        ]
    }

  }