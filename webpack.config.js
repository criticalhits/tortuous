const webpack = require('webpack');
module.exports = {
    entry: {
        app: './app/index.js',// this is the starting point for running `webpack` to create one bundle   
    },
    output: {
        filename: '[name].bundle.js',//When webpack finishes, you will have a /dist/app.bundle.js file you can include in your html
        path: __dirname + '/dist'
    },
    plugins: [
            new webpack.ProvidePlugin({
                p5: "p5",//this webpack function allows me to automatically load a module when the identifier is used in the module. TODO: EXPLAIN BETTER
                p5dom: "p5/lib/addons/p5.dom"
           })
        ]
};