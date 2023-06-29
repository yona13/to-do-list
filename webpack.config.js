const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        static: "./dist",
    },
    devtool: "inline-source-map",
    entry: {
        index: "./src/js/index.js",
        layout: "./src/js/layout.js",
        popupManager: "./src/js/popup.js",
        projectManager: "./src/js/projects.js",
        toDoList: "./src/js/to-do-list.js",
        customSelect: "./src/js/custom-select.js",
    }, 
    mode: "development", 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
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
            title: "TODO",
            favicon: "./src/images/favicon.png",
        }),
    ],
};