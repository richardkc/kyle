const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devServer: {
		host: "localhost",
		port: "8000",
	},
	entry: "./src/index.tsx",
	output: {
		publicPath: "/",
		filename: "bundle.[hash:8].js",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\/(png|jpg|jpeg|gif|svg)$/,
				loader: "url-loader",
				exclude: /node_modules/,
				options: {
					limit: 2048,
					name: "[name]_[hash:6].[ext]",
					outputPath: "images/",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
