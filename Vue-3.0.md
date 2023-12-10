# Vue 3.0

- vue3 90% 以上的API 依然兼容 vue2.x


- ## Vue 3.0 相对于 Vue 2.0 进行了许多重要的变化和改进。以下是一些主要的变化：
    - ### Composition API：

        - Vue 3.0 引入了 Composition API，这是一种新的组织组件代码的方式。它使得代码更加可组织和可重用，特别是对于大型复杂组件来说更为有利。Composition API 支持将逻辑代码按照功能划分成多个函数，而不是像以前的 Options API 那样将所有逻辑放在一个对象中。

    - ### 性能优化：

        - Vue 3.0 进行了许多性能优化，包括更小的包大小、更高的运行时性能等。
        
    - ### Vite：

        - Vue 3.0 引入的新的开发、打包工具 Vite，使得开发 Vue 应用更加轻量、快速和高效。Vite 基于原生 ESM 模块，并且使用 Rollup

    - ### Reactivity System 的重写：

        - Vue 3.0 对响应式系统进行了全面的重写，以提高性能和可维护性。Vue 3.0 使用了 Proxy 对象而不再使用 Object.defineProperty，这带来了更好的性能和更灵活的响应式系统。

    - ### Teleport：

        - Vue 3.0 引入了 Teleport 特性，使得在组件内部的任何地方都能够将内容渲染到 DOM 树的其他位置。这对于在应用中创建弹出框、对话框等非常有用。

    - ### Fragments：

        - Vue 3.0 支持 Fragments，允许组件返回多个根节点而无需包装它们在一个父元素内。

    - ### 全局 API 的调整：

        - Vue 3.0 对全局 API 进行了一些调整，使其更加一致和易于使用。例如，全局的Vue.extend()现在被替换为defineComponent。

    - ### 更好的 TypeScript 支持：

        - Vue 3.0 对 TypeScript 提供了更好的支持，包括更好的类型推断和更准确的类型定义。

    - ### 使用 Monorepo 管理项目结构
        > 什么是 Monorepo ?, 介绍视频: [超清楚简单的monorepo项目创建与基础演示](https://www.youtube.com/watch?v=1PIIlyYgp7U)

        - Vue 3.0 使用了 Monorepo 管理项目结构，使得项目的开发更加高效和易于维护。
        - 使用一个项目 管理多个包，把不同功能的代码 放到不同的 package 中，方便管理。
            - 把 Vue 核心代码放在 packages/core 中
            - 把 Vue CLI 放在 packages 目录下，
            - 把 Vue Router 放在 packages/router 中，
            - 把 Vuex 放在 packages/store 中，等等。

    - ### Suspense 和 Async Setup：

        - Vue 3.0 引入了 Suspense 特性，使得在异步组件加载时能够更好地处理 loading 状态。此外，Vue 3.0 还引入了 Async Setup 特性，使得组件的 setup 函数能够返回一个 Promise。


    - 这只是一些 Vue 3.0 的主要变化，更详细的信息可以在 Vue 3 的官方文档中找到。请注意，由于我知识截止日期为2022年1月，后续可能有更多的更新和改变。