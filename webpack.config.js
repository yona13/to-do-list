const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        static: "./dist",
    },
    devtool: "inline-source-map",
    entry: {
        checkbox: "./src/js/checkbox.js",
        content: "./src/js/content.js",
        customSelect: "./src/js/custom-select.js",
        data: "./src/js/data.js",
        domElement: "./src/js/dom-element.js",
        index: "./src/js/index.js",
        itemList: "./src/js/item-list.js",
        layout: "./src/js/layout.js",
        menu: "./src/js/menu.js",
        navigator: "./src/js/navigator.js",
        popup: "./src/js/popup.js",
        priorities: "./src/js/priorities.js",
        projectList: "./src/js/project-list.js",
        search: "./src/js/search.js",
        toDoTable: "./src/js/to-do-table.js",
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