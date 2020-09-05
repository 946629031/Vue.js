import Vue from 'vue'
import Router from 'vue-router'

// import Index from '@/components/Index'
// import Detail from '@/components/Detail'

Vue.use(Router)

// 这里为什么不像 client端 一样，到处一个router实例？
// 因为每次用户请求都需要创建router实例
// 如果只导出一个 router实例，会导致不同端用户 共用一个router
// 就会导致 不同用户之间端 router 串行、混乱

// export default function createRouter () {
//     return new Router({
//         mode: 'history',
//         routes: [
//             { path: '/', component: Index },
//             { path: '/detail', component: Detail }
//         ]
//     })
// }


export default function createRouter () {
    
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: () => import('@/components/Index') },
            { path: '/detail', component: () => import('@/components/Detail') },
            { path: '/page1', component: () => import('@/components/Page1') },
            { path: '/page2', component: () => import('@/components/Page2') }
        ]
    })
}
