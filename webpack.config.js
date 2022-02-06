const path = require('path')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",

    experiments: {
        asyncWebAssembly: true
    },
    entry: './lib.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: __dirname,
        }),
        new CopyPlugin({
            patterns: [
                { from: "index.html", to: path.resolve(__dirname, 'dist') }
            ]
        })
    ],
}