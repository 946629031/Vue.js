// entry-client.js 核心作用是 挂载、激活 app
// 而且只有这一件事情，所以 entry-client.js 非常简单

// 挂载、激活 app

import createApp from './app'

const { app, router } = createApp()
router.onReady(() => {      // 等待 router 准备好后，才执行 $mount 挂载
    app.$mount('#app')
})
 