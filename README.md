项目描述：用antd、react、react-router-config来做demo,此demo实现根据权限获取动态路由展示页面，判断用户是否登录，如果登录进入首页，如果没有登录进入登录页面
项目配置（跨越问题）
1.第一步安装http-proxy-middleware
``` python
   npm install http-proxy-middleware
```
2. 在项目src下创建setupProxy.js
3.setupProxy.js
``` python
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(proxy('/api', {
      target: 'http://localhost:5000',
      secure: false,
      changeOrigin: true,
       pathRewrite: {
         "^/api": "/api"
       }
    }))
}
```
项目安装依赖包：yarn 
项目启动：yarn add

