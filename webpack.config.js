const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');


module.exports = {
	mode: 'development',
	entry: ['babel-polyfill', './src/index.ts'],
	// entry: toObject(glob.sync('./src/*.ts')),
	output: {
		// filename: 'main.js',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		// Add '.ts' and '.tsx' as a resolvable extension.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		rules: [{
			// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
			test: /\.ts$/,
			include: path.join(__dirname, "src"),
			loader: ['babel-loader', "ts-loader"],
			exclude: [/node_modules/]
		},
		]
	},
	
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		hot: true
	},
	plugins: [
	new HtmlWebpackPlugin({
		filename: './src/index.html',
		template: './src/index.html'
	}),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin()
	]
};

function toObject(paths) {
	var ret = {};

	paths.forEach(function(path) {
		// you can define entry names mapped to [name] here
		ret[path.split('/').slice(-1)[0]] = path;
	});

	return ret;
}