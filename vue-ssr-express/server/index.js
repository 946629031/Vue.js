const fs = require('fs')
const path = require('path')
const express = require('express')
const app = new express()
// const renderer = require('vue-server-renderer').createRenderer()
const {createBundleRenderer} = require('vue-server-renderer')
const serverBundle = require('../dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json') // 客户端清单

// createBundleRenderer() 的第二个选项，是要告诉它 客户端的清单是什么？
// 将来生成的页面，要把 manifest清单 解析出来，附加到这个页面中
// 最终生成的 HTML 文件中，会有些js文件需要附加. 那到底要附加哪些js呢？ clientManifest 会告诉他
const renderer = createBundleRenderer(serverBundle, {   // 这里的 bundle 应该是服务端的 bundle
    runInNewContext: false,  // 为false时: bundle 代码将与服务器进程在同一个 global 上下文中运行，所以请留意在应用程序代码中尽量避免修改 global。为true时 虽然不会污染全局变量, 但是开销巨大, 应尽量避免
    // template: fs.readFileSync('../public/index.temp.html', 'utf-8'),  // 宿主模版文件  // 这里写相对地址，有可能找不到文件，推荐使用绝对地址
    template: fs.readFileSync(path.resolve('./public/index.temp.html'), 'utf-8'),  // 宿主模版文件
    clientManifest
})

// 中间件, 去处理静态文件的请求
// app.use(express.static('../dist/client', {index: false}))  // 默认读取index.html文件 关闭
app.use(express.static('../dist/client'))  // 默认读取index.html文件 关闭

// 路由处理交给vue
app.get('*', async (req, res) => {  // 允许所有的 url地址请求
    try {
        const url = req.path
        // 这里要做一个拦截，如果请求的是非 .html文件，就给他返回对应的 静态文件，如js, css, img, font...等
        // 否则，站内跳转到其他页面时候，全部资源都重新加载的，不是SPA
        if (url.includes('.')) {
            let filePath = path.join(__dirname, '../dist/client', url)
          return await res.sendFile(filePath)
        }

        const context = {
            url: req.url,  // 拿到请求地址 url
            title: 'ssr test'
        }
        const html = await renderer.renderToString(context)     // 之前是接受 vue实例，现在是接收 context上下文
        // const html = await renderer.renderToString(VuePage)  // 接受 vue实例
        res.send(html)
    } catch (error) {
        res.status(500).send('服务器内部错误', error)
    }
})

let port = process.env.PORT || 3001
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`server is running at locahost:${port} port`)
})