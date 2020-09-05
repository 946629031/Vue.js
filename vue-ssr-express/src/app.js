// app.js 的核心作用是 创建vue实例

import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

let a = 0
// 每一次用户请求，都需要全新的用户实例，所以 这里应该是一个工厂 (工厂函数)
// 而不应该是一个单实例
export default function createApp () {
    const router = createRouter()   // 创建router实例
    const app = new Vue({           // 创建vue实例
        router,
        render: h => h(App)         // 把App.vue 渲染生成一下
    })

    a++
    console.log('a => ' + a)

    return { app, router }
}
 