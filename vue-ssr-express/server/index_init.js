const express = require('express')
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

const app = new express()
const VuePage = new Vue({
    template: '<div>Hello, vue ssr!!!</div>'
})

app.get('/', async (req, res) => {
    try {
        const html = await renderer.renderToString(VuePage)
        res.send(html)
    } catch (error) {
        res.status(500).send('服务器内部错误')
    }
})

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('server is running at 3000 port')
})