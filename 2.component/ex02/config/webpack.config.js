const path = require('path');

module.exports = function(env)  { 
    return {
        mode : 'development',
        entry : path.resolve(`src/${env.src}/index.js`), // path 'src/01/index.js' 'src/02/index.js 등 path 설정 
        output : {
            path: path.resolve('public'),
            filename: 'main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'     // hash = string -> integer 로 바꾸는것 
        },
        module : {
            rules:[{
                test: /\.js$/i,
                exclude: /node_modules/, // 내코드만 변환
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json') // babelconfig path 지정해줌
                }
            },{ 
                test: /\.(sa|sc|c)ss$/i,    // scss, sass ,.css 로 끝난다, i -> ignore 대문자 소문자 상관없이
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {  modules: env['css-modules'] !== 'false' }}, // true로 줌 
                    'sass-loader']
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
}