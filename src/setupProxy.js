const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy.createProxyMiddleware('/api', {
        /*这里写自己的代理地址*/
        target: 'http://localhost:8081',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        },
    }));
};