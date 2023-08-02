const path = require('path') //Node js module

module.exports = {
    entry: {
        main: './src/index.js' //Input file, select the js file
    },

    mode: 'development', //default mode 'production' or 'development'

    /*output: { // Create a public folder
        path: path.resolve(__dirname, 'public'), // C:/Users/vinic/Onedrive/..../puclic
        filename: '[name].bundle.min.js' //rename the outfile inside the folder created above

        //filename: 'bundle.min.js' //Used for just one js file, if we've more than 1, we should add [name] on fron
    }*/

    module: {
        rules: [{
            test: /\.css$/, //file that we gonna use
            use:  ['style-loader', 'css-loader'] //Loaders that we're going to use
        }]
    }
}