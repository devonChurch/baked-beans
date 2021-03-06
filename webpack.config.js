var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var preLoaderEslint = {
    test: /\.(js|jsx)$/,
    loaders: ['eslint'],
    include:  __dirname + '/src/js'
};

var loaderSass = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss-loader!sass')
};

var loaderJs = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel', // Automatically generates source maps without the sourceMaps config
    query: {
        presets: ['react', 'es2015']
    }
};

var loaderJson = {
    test: /\.json$/,
    loader: 'json'
};

var eslintWarnings = {
    failOnWarning: false,
    failOnError: false
};

module.exports = [{
    name: 'client',
    target: 'web',
    context: __dirname + '/src',
    devtool: 'source-map',
    entry: './entry.js',
    output: {
        path: __dirname + '/dist/static',
        filename: 'client.js'
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     { from: './index.html', to: 'index.html' }
        //     // { from: './node', to: 'node' }
        // ]),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        preLoaders: [preLoaderEslint],
        loaders: [loaderSass, loaderJs]
    },
    eslint: eslintWarnings,
    postcss() {
        return [autoprefixer];
    }
},{
    name: 'server',
    target: 'node',
    context: __dirname + '/src',
    devtool: 'source-map',
    entry: './server.js',
    output: {
        path: __dirname + '/dist',
        filename: 'server.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './scaffold.jade', to: 'scaffold.jade' }
        ])
    ],
    module: {
        preLoaders: [preLoaderEslint],
        loaders: [loaderJs, loaderJson]
    },
    eslint: eslintWarnings
}];
