module.exports = {
    entry: './js/index.jsx',
    output: {
        filename: './index.js'
    },
    watch: true,
    module: {
        loaders:
        [
            {
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};