const path = require('path');

module.exports = {
    mode : 'development',
    entry : path.resolve('src/index.js'),
    output : {
        path: path.resolve('public'),
        filename: 'main.js',
        assetModuleFilename: 'assets/images/[hash][ext]'     // hash = string -> integer 로 바꾸는것 
    },
    module : {
        rules:[{
            test: /\.(sa|sc|c)ss$/i,    // scss, sass ,.css 로 끝난다, i -> ignore 대문자 소문자 상관없이
            use: ['style-loader','css-loader', 'sass-loader']
        },{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type : 'asset/resource'
        }]
    },
    devServer : {
        host : '0.0.0.0',
        port : 9090,
        liveReload : true, 
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}