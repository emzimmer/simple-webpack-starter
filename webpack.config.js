const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
	entry: {
		main: [
			'./_src/js/main.js',
			'./_src/scss/main.scss',
		],
		// anotherEntryPoint: [
		//  './_src/js/another.js',
		// 	'./_src/scss/another.scss',
		// ]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].min.js',
	},
	module: {
		rules: [
			{
				test: /\.m?jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
			}
		]
	},
	plugins: [
		new RemoveEmptyScriptsPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css',
		}),
	],
}
