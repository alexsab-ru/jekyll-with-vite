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
	resolve: {
		extensions: [".json", ".js", ".jsx"],
	},
};
