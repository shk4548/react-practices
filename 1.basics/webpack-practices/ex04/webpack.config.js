const path = require('path');

module.exports = {
    mode : 'development',
    entry : path.resolve('src/index.js'),
    output : {
        path: path.resolve('public'),
        filename: 'bundle.js'

    },
    module : {
        rules:[{
            test: /\.css$/i,    // .css 로 끝난다, i -> ignore 대문자 소문자 상관없이
            use: ['style-loader','css-loader']
        }]
    },
    devServer : {
        host : '0.0.0.0',
        port : 9090,
        liveReload : true, 
        hot: false,
        compress: true
    }
}