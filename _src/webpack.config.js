const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
	// mode: process.env.NODE_ENV,
	entry: {
		main: [
			'./js/main.js',
			'./scss/main.scss'
		],
		dashboard: [
			'./scss/dashboard.scss'
		]
	},
	output: {
		path: path.resolve(__dirname,'../assets'),
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
					// fallback to style-loader in development
					// process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
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