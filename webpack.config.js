const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        static: "./dist",
    },
    devtool: "inline-source-map",
    entry: {
        index: "./src/index.js",
    }, 
    mode: "development", 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        runtimeChunk: "single",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "To-Do List"
        }),
    ],
};