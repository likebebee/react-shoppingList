const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname,'src/index.js'),
	output: {
		filename :'bundle.js',
		path: path.resolve(__dirname,'./dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['es2015', 'react']
			}
		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}