const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        configure: (webpackConfig, { env, paths }) => {
            paths.appBuild = 'dist'
            webpackConfig.output = {
                ...webpackConfig.output,
                path: path.resolve(__dirname, 'dist'),
                publicPath: '/'
            }
            return webpackConfig
        }
    },
    devServer: {
        proxy: {
            '/poposat': {
                target: 'http://35.79.219.105:10888',
                changeOrigin: true,
                pathRewrite: { '/poposat': 'poposat' }
            }
        }
    }
}
