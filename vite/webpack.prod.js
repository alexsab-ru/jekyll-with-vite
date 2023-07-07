const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production",
	entry: path.join(__dirname, "src", "index"),
	output: {
		path: path.resolve(__dirname, "assets/js"),
		filename: "app.js",
        clean: true
	},
    resolve: {
		extensions: [".json", ".js", ".jsx"],
	},
};
