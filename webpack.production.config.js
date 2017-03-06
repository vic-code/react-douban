'use strict';

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


//插件
var plugins = [
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('common.js'),

    new webpack.optimize.UglifyJsPlugin(), //生产阶段,压缩js,css

    //将样式提取到style.css中
    new ExtractTextPlugin("style.css"),

    //版权声明
    new webpack.BannerPlugin("Copyright GBW")
];

//入口
var entry = ['./src/main.js'],
    buildPath = "/dist/",//输出路径
    publicPath = "./",
    cdnPath = "./";


console.log('process.env.NODE_ENV:'+process.env.NODE_ENV);
if(process.env.NODE_ENV === 'production'){  //生产阶段
    publicPath = cdnPath;
}   




//编译输出路径
module.exports = {
    debug: false,
    entry: entry,
    output: {
        path: __dirname + buildPath,
        filename: 'build.js',
        publicPath: publicPath, //替换成制定CND加速
        chunkFilename:"[id].build.js?[chunkhash]"
    },
    module: {
        loaders: [ {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader?sourceMap!cssnext-loader")
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        },{
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?limit=5000&name=images/[hash].[ext]"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0', 'react']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js']
    },
    plugins: plugins,
    devtool: '#source-map'
};
