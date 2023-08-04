const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    mode: "development",
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['css-loader', 'babel-loader']
            }
        ],
        plugins:
            {
                new MiniCssExtractPlugin()
            }
        
    }
}