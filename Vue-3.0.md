# Vue 3.0

- 学习资源
    - [vue组合式api手册 【vue 官方】](https://vue3js.cn/vue-composition-api/)

- 目录
    - [第1章 vue 3.0 的主要改动](#1-1-vue-30-的主要改动)
    - [第2章 创建vue3项目](#2-创建vue3项目)
        - [2-1 使用 vue-cli 创建](#2-1-使用-vue-cli-创建)
        - [2-2 使用 vite 创建](#2-2-使用-vite-创建)
    - [第3章 Composition API](#3-composition-api)
        - [3-1.Composition API(常用部分)](#3-1-composition-api)
            - [1.setup](#1setup)
            - [2.ref](#2ref)
            - [3.reactive](#3reactive)
            - [4.比较Vue2与Vue3的响应式(重要)](#4比较vue2与vue3的响应式)
                - [vue2的响应式](#vue2的响应式)
                - [Vue3的响应式](#vue3的响应式)
            - [5.setup细节](#5setup细节)
            - [6.reactive与ref-细节](#6reactive与ref-细节)
            - [7.计算属性与监视](#7计算属性与监视)
            - [8.生命周期](#8生命周期)
            - [9.自定义hook函数](#9自定义hook函数)
            - [10.toRefs](#10toRefs)
            - [11.ref获取元素](#11ref获取元素)
        - [3-2.Composition API(其它部分)](#3-2-composition-api)
            - [1.shallowReactive 与 shallowRef](#1shallowreactive-与-shallowref)
            - [2.readonly 与 shallowReadonly](#2readonly-与-shallowreadonly)
            - [3.toRaw 与 markRaw](#3toraw-与-markraw)
            - [4.toRef](#4toRef)
            - [5.customRef](#5customref)
            - [6.provide 与 inject](#6provide-与-inject)
            - [7.响应式数据的判断](#7响应式数据的判断)

    - [第4章 手写组合API]()
        - [4-1.shallowReactive 与 reactive]()
        - [4-2.shallowRef 与 ref]()
        - [4-3.shallowReadonly 与 readonly]()
        - [4-4.isRef, isReactive 与 isReadonly]()

    -  [第5章 Composition API VS Option API]()
        - [5-1 Option API的问题]()
        - [5-2 使用Compisition API]()

    - [第6章.其它新组合和API]()
        - [6-1.新组件]()
            - [6-1-1.Fragment(片断)]()
            - [6-1-2.Teleport(瞬移)]()
            - [6-1-3.Suspense(不确定的)]()
        - [6-2.其他新的API]()
            - [6-2-1.全新的全局API]()
            - [6-2-1.将原来的全局API转移到应用对象]()
            - [6-2-1.模板语法变化]()

    - []()
    - []()

----


- vue3 90% 以上的API 依然兼容 vue2.x

# 第1章 vue 3.0 的主要改动
> Vue 3.0 相对于 Vue 2.0 进行了许多重要的变化和改进。以下是一些主要的变化：
- ### Composition API：

    - Vue 3.0 引入了 Composition API，这是一种新的组织组件代码的方式。它使得代码更加可组织和可重用，特别是对于大型复杂组件来说更为有利。Composition API 支持将逻辑代码按照功能划分成多个函数，而不是像以前的 Options API 那样将所有逻辑放在一个对象中。

- ### 性能优化：

    - Vue 3.0 进行了许多性能优化，包括更小的包大小、更高的运行时性能等。
    
- ### Vite：

    - Vue 3.0 引入的新的开发、打包工具 Vite，使得开发 Vue 应用更加轻量、快速和高效。Vite 基于原生 ESM 模块，并且使用 Rollup

- ### 源码组织方式
    - #### 更好的 TypeScript 支持：
        -  源码 采用 TypeScript 重写，提供了更好的类型推断和更准确的类型定义。
        - Vue 3.0 对 TypeScript 提供了更好的支持，包括更好的类型推断和更准确的类型定义。

    - #### 使用 Monorepo 管理项目结构
        > 什么是 Monorepo ?  介绍视频: [超清楚简单的monorepo项目创建与基础演示](https://www.youtube.com/watch?v=1PIIlyYgp7U)
        - 使用一个项目 管理多个包，不同功能的代码 放在不同的 package 中管理。
            - 每个功能模块 划分明确，模块之间 解耦，方便维护。
            - 每个模块 都可以 **`单独开发，单独测试，单独发布`**。

        - Vue 3.0 使用了 Monorepo 管理项目结构，使得项目的开发更加高效和易于维护。
        - 使用一个项目 管理多个包，把不同功能的代码 放到不同的 package 中，方便管理。
            - 把 Vue 核心代码放在 packages/core 中
            - 把 Vue CLI 放在 packages 目录下，
            - 把 Vue Router 放在 packages/router 中，
            - 把 Vuex 放在 packages/store 中，等等。

        ```
        packages
            |-> compiler-core
            |-> compiler-dom
            |-> compiler-sfc
            |-> compiler-ssr
            |-> reactivity
            |-> runtime-core
            |-> runtime-dom
            |-> runtime-test
            |-> server-renderer
            |-> shared
            |-> size-check
            |-> template-explorer
            |-> vue
            |-  global.d.ts
        ```

- ### Reactivity System 的重写：

    - Vue 3.0 对响应式系统进行了全面的重写，以提高性能和可维护性。Vue 3.0 使用了 Proxy 对象而不再使用 Object.defineProperty，这带来了更好的性能和更灵活的响应式系统。

- ### Teleport：

    - Vue 3.0 引入了 Teleport 特性，使得在组件内部的任何地方都能够将内容渲染到 DOM 树的其他位置。这对于在应用中创建弹出框、对话框等非常有用。

- ### Fragments：

    - Vue 3.0 支持 Fragments，允许组件返回多个根节点而无需包装它们在一个父元素内。

- ### 全局 API 的调整：

    - Vue 3.0 对全局 API 进行了一些调整，使其更加一致和易于使用。例如，全局的Vue.extend()现在被替换为defineComponent。

- ### Suspense 和 Async Setup：

    - Vue 3.0 引入了 Suspense 特性，使得在异步组件加载时能够更好地处理 loading 状态。此外，Vue 3.0 还引入了 Async Setup 特性，使得组件的 setup 函数能够返回一个 Promise。


- 这只是一些 Vue 3.0 的主要变化，更详细的信息可以在 Vue 3 的官方文档中找到。请注意，由于我知识截止日期为2022年1月，后续可能有更多的更新和改变。







# 第2章 创建vue3项目
- ## 2-1 使用 vue-cli 创建
    文档: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

    ```js
    // 安装或者升级
    npm install -g @vue/cli
    // 保证 vue cli 版本在 4.5.0 以上
    vue --version
    // 创建项目
    vue create my-project
    ```

    然后的步骤

    - Please pick a preset - 选择 **Manually select features**
    - Check the features needed for your project - 选择上 TypeScript ，特别注意点空格是选择，点回车是下一步
    -   Choose a version of Vue.js that you want to start the project with - 选择 3.x - (Preview)
    - Use class-style component syntax - 直接回车
    - Use Babel alongside TypeScript - 直接回车
    - Pick a linter / formatter config - 直接回车
    - Use history mode for router? - 直接回车
    - Pick a linter / formatter config - 直接回车
    - Pick additional lint features - 直接回车
    - Where do you prefer placing config for Babel, ESLint, etc.? - 直接回车
    - Save this as a preset for future projects? - 直接回车

- ## 2-2 使用 vite 创建
    - 文档: https://v3.cn.vuejs.org/guide/installation.html

    - vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，

    - 它做到了***本地快速开发启动***, 在生产环境下基于 Rollup 打包。
        - 快速的冷启动，不需要等待打包操作；
        - 即时的热模块更新，替换性能和模块数量的解耦让更新飞起；
        - 真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。

    ```js
    npm init vite-app <project-name>
    cd <project-name>
    npm install
    npm run dev
    ```

# 第3章 Composition API
- ## 3-1.Composition API(常用部分)
    - ### 1.setup
    - ### 2.ref
    - ### 3.reactive
    - ### 4.比较Vue2与Vue3的响应式(重要)
        - ### vue2的响应式
        - ### Vue3的响应式
    - ### 5.setup细节
    - ### 6.reactive与ref-细节
    - ### 7.计算属性与监视
    - ### 8.生命周期
    - ### 9.自定义hook函数
    - ### 10.toRefs
    - ### 11.ref获取元素


- ## 3-2.Composition API(其它部分)
    - ### 1.shallowReactive 与 shallowRef
    - ### 2.readonly 与 shallowReadonly
    - ### 3.toRaw 与 markRaw
    - ### 4.toRef
    - ### 5.customRef
    - ### 6.provide 与 inject
    - ### 7.响应式数据的判断


# 第4章 手写组合API
- ## 4-1.shallowReactive 与 reactive
- ## 4-2.shallowRef 与 ref
- ## 4-3.shallowReadonly 与 readonly
- ## 4-4.isRef, isReactive 与 isReadonly


# 第5章 Composition API VS Option API
- ## 5-1 Option API的问题
- ## 5-2 使用Compisition API


# 第6章.其它新组合和API
- ## 6-1.新组件
    - ### 6-1-1.Fragment(片断)
    - ### 6-1-2.Teleport(瞬移)
    - ### 6-1-3.Suspense(不确定的)

- ## 6-2.其他新的API
    - ### 6-2-1.全新的全局API
    - ### 6-2-1.将原来的全局API转移到应用对象
    - ### 6-2-1.模板语法变化



五.Vue3综合案例
TODO LIST
使用VuePress搭建在线文档网站


