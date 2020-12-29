const path = require("path");
module.exports = {
    entry: "./src/TypeScript/index.js",
    mode: "production",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                use: "ts-loader",
            },
        ],
    },
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "public/js"),
    },
    resolve: {
        extensions: [".ts"],
    },
};
