const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const path = require('path');
const PATH_SOURCE = path.resolve('./src');
const PATH_BUILD = path.resolve('./docs');
const port = 3000;

const NODE_ENV = process.env.NODE_ENV;

module.exports = () => {
    return {
        mode: NODE_ENV !== 'production' ? 'development' : NODE_ENV,
        entry: {
            index: PATH_SOURCE + '/index.tsx'
        },
        output: {
            path: PATH_BUILD,
            filename: '[name].js?[hash]',
            publicPath: './'
        },
        resolve: {
            modules: [PATH_SOURCE, 'node_modules'],
            extensions: ['.ts', '.tsx', '.js', 'jsx'],
            alias: {
                '@': PATH_SOURCE,
            },
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader?minimize&sourceMap'],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'assets/[name].[ext]?[hash]',
                                context: '../images'
                            }
                        },
                    ],
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                favicon: 'public/favicon.ico'
            }),
            new DotEnvPlugin({
                path: path.resolve('./env',`.env.${NODE_ENV}`),
                safe: false,
                defaults: path.resolve('./env',`/.env`),
            }),
            new CleanWebpackPlugin(),
        ],
        devtool: 'source-map',
        devServer: {
            host: 'localhost',
            port: port,
            historyApiFallback: true,
            inline: true,
            hot: true,
            publicPath: '/',
        },
    }
}
;
