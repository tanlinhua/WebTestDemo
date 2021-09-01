const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'production',//生产模式 production,开发模式 development
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
}