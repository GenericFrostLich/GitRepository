const path = require('path');

module.exports = (env) => {
    const webpackMode = (typeof env === "undefined" ? 'development' : (
        typeof env.mode === "string" ? env.mode : 'development'
    ));

    let options = {
        mode: webpackMode,
        entry: [
            'babel-polyfill',
            './index.js'
        ],
        output: {
            path: path.resolve(__dirname, '../game'),
            filename: 'base.js'
        },
        module: {
            rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }]
        }
    };

    if (webpackMode === 'development')
        options['devtool'] = 'inline-source-map';

    return options;
};