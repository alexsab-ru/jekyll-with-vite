const path = require("path");

module.exports = {
	mode: "development",
    watch: true,
    cache: false,
	entry: path.join(__dirname, "src", "index"),
	output: {
		path: path.resolve(__dirname, "assets/js"),
		filename: "app.js",
	},
	module: {
		rules: [
			// {
			// 	test: /.js$/,
			// 	exclude: [
			// 		path.resolve(__dirname, "node_modules"),
			// 		path.resolve(__dirname, "bower_components"),
			// 	],
			// 	loader: "babel-loader",
			// 	// query: {
			// 	// 	presets: ["env"],
			// 	// },
			// },
			// {
			// 	test: /\.css$/i,
			// 	include: path.resolve(__dirname, "src"),
			// 	use: ["postcss-loader"],
			// },
		],
	},
	resolve: {
		extensions: [".json", ".js", ".jsx"],
	},
};
