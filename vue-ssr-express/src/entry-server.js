// entry-server.js 核心作用是 渲染首屏

import createApp from './app'

// context 哪来的？
// 这里暴露出去的 还是一个 工厂函数
// 所以个函数将来一定会被调用
// 会被谁调用？
// 会被 node服务器 调用，只有 node服务器 才知道用户请求的地址是什么
// 让 node服务器 调用它不就OK了吗？context 不就传进来了吗？
export default context => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp()

        // 进入首屏
        router.push(context.url)    // 想要 跳转到 哪个页面，就 router.push() 哪个链接进来?
        router.onReady(() => {      // router 不是一蹴而就的，他需要准备时间，这里有可能是异步的，所以需要等待
            resolve(app)            // 把 app 返回出去
        }, reject)                  // 这里有可能会报错，如果报错了，就执行 reject
    })
}
