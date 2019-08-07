# Vue 语法入门
Vue 各种语法 入门讲解

从零开始掌握大型互联网公司NodeJS实际使用

[【视频地址】Vue2.5开发去哪儿网App 从零基础入门到实战项目](https://coding.imooc.com/class/203.html)

课程出品时间：2017.x ~ 2018.4

看视频整理要点笔记：

----

**目录**
- [第2章 Vue 起步](#第1章-导学)
    - [2-2 hello world](#2-2-hello-world)
    - [2-3 开发TodoList（v-model、v-for、v-on）](#2-3-开发todolistv-modelv-forv-on)
    - [2-4 MVVM模式](#2-4-mvvm模式)
    - [2-5 前端组件化](#2-5-前端组件化)
    - [2-6 使用组件改造TodoList](#2-6-使用组件改造TodoList)
    - [2-7 简单的组件间传值](#2-7-简单的组件间传值)
    - []()
    - []()
    - []()
- [第5章 项目初始化]()
    - [5-1 .gitignore .npmignore .EditorConfig](https://github.com/946629031/hello-node.js#5-1-gitignore)
    - [5-2 ESLint](https://github.com/946629031/hello-node.js#5-2-eslint)
    - []()
    - []()

----


## Vue 和 React 相同点
- 利用虚拟 DOM 实现快速渲染
- 轻量级 (对比 angluar)
- 响应式组件
- 服务器端渲染 - SSR (server side rander)
- 易于集成路由工具，打包工具以及状态管理工具
- 优秀的支持和社区


## 什么是虚拟DOM ?
- 什么是 DOM ？
    - DOM 是文档对象模型
    - 可以简单理解为，存放在磁盘中的文件，如 ```.html``` 文件
- 为什么需要虚拟 DOM ？
    - 在过去，我们做开发，都是直接操作 DOM ？
    - 如：改变节点，名字，改变节点文本
    - 缺点：直接操作 DOM 是 **非常耗费资源、非常昂贵的**
- ### 虚拟 DOM
    - 在 JS 内存里面，构建一个类似于 DOM 的对象
    - 通过 JS 定义一个 Object，用这个 Object 来模拟 DOM，**拼装数据**
    - 拼装完后，把这个整体做一个解析渲染，最后 把这个 Object 一次性的插入到 DOM 里面去
    - 这就形成了一个虚拟 DOM
- 优点
    - 由于基本都在内存中操作，这整个过程是非常快、非常省资源的

## 前端JS框架
- Jquery
    - 主要是针对 DOM 操作的函数库
- 传统的 MVC 框架
    - Model 和 View 解耦
    - Controller 控制 DOM
        - Controller 是核心控制器，一切用户的行为，都会通过 Controller 来进行触发、渲染视图
- 基于 MV* 模式的 Vue 框架
    <!-- - ![MV* 示意图](https://github.com/946629031/Vue.js/blob/master/img/1.jpg) -->
    - Model 绑定 View - (双向数据绑定)
    - 没有控制器概念
    - 数据驱动，状态管理，组件化 (核心思想)
        - 因此，在 MV* 模式下，不会操作 DOM, 不会操作 class
        - 更多的去关注我们的数据，通过改变变量 来控制视图



## 第2章 Vue 起步
- ### 2-2 hello world
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
</head>
<body>
    <div id="app">{{message}}</div>
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                message: 'hello world'
            }
        })

        // 2s后 将'hello world' 改为 'bye world'
        setTimeout(function(){
            app.$data.message = 'bye world'
        }, 2000)
    </script>
</body>
</html>
```

- ### 2-3 开发TodoList（v-model、v-for、v-on）
    - 数据双向绑定
        - 这个案例里
            - v-model='inputValue'，的意思是
            - 将该input 的数据与 Vue实例中 app.$data.inputValue 绑定
        - 只要 该input 值改变，app.$data.inputValue 也会跟着改变
        - 验证方法：
            - 在控制台里app.$data.inputValue = '123...', 则该input 值也同步变成了 '123...'
            - 或者，在该input里输入'666', 则 Vue实例中 app.$data.inputValue 也等于 '666'
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
</head>
<body>
    <div id="app">
        <input type="text" v-model='inputValue'>
        <button v-on:click="handleBtnClick">提交</button>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                list: ['第一课内容','第二课内容','2333'],
                inputValue: ''
            },
            methods: {
                handleBtnClick: function(){
                    this.list.push(this.inputValue)
                    this.inputValue = ''
                }
            }
        })
    </script>
</body>
</html>
```

- ### 2-4 MVVM模式
    - 在 MVP / MVC 模式下
        - 名词解释
            - Model - 数据层
            - Control - 控制层
            - View - 视图层
        - 在这种模式下，Control / Presenter 层，其实有大量的代码都是在操作 DOM，而恰好这种直接操作 DOM 的模式，是非常耗费资源的

    <!-- ![vue-mvvm](https://github.com/946629031/Vue.js/blob/master/img/2.vue-mvvm.jpg) -->

    - 在 MVVM 模式下
        - 我们不需要关注 VM 层是怎么实现的，因为这个 Vue 已经帮我们实现了
        - 我们只需要关注，Model 数据层、View 视图层 即可
        - MVVM 这种模式下 最重的一层 是 Model 层
            - 以前，我们使用 jquery 开发时候，我们是面向 DOM 做开发
            - 现在，我们使用 MVVM 这种模式开发的时候，我们是 **面向 Model 数据层 做开发**
    - 在 Vue 中
        - Model - 就是 Vue 实例中的 data
        - View - 就是 html 文件中的 html 结构
        - vue 实例中的 function 都是在对数据进行操作
        - VM 层 - 当数据变化的时候，View 层自动跟着变化，这 VM 层是 Vue 帮我们实现的

- ### 2-5 前端组件化
    <!-- ![美团外卖app](https://github.com/946629031/Vue.js/blob/master/img/3.meituan.jpg) -->

    - 看上面的例子
    - 如果没有组件化，我们需要把这个页面的所有逻辑都写在 这个页面上，如果这个页面的逻辑非常的多，那之后**维护起来就会很困难**
    - **组件化**
        <!-- - ![美团外卖app](https://github.com/946629031/Vue.js/blob/master/img/4.components.png) -->
        - 合理拆分组件，我们可以把一个大型的项目，像拼积木一样拼接起来
        - 一个大型的项目可能非常的复杂，拆分成组件之后，就会变得非常的精巧
        - 每一个组件的**维护就会相对更容易些，降低维护成本**


- ### 2-6 使用组件改造TodoList
    - 在 [2-3](#2-3-开发todolistv-modelv-forv-on) 中，里面的 List 是通过 li 标签来循环的
    - 现在，我们要把 li 标签变成一个组件，来看看应该怎么做
    ```html
    <div id="app">
        <input type="text" v-model='inputValue'>
        <button v-on:click="handleBtnClick">提交</button>
        <ul>
            <!-- <li v-for="item in list">{{item}}</li> -->

            <todo-item v-bind:content="item" v-for="item in list"></todo-item>
        </ul>
    </div>

    <script>
        Vue.component('TodoItem', {
            props: ['content'],
            template: "<li>{{content}}</li>"
        })

        var app = new Vue({
            el: '#app',
            data: {
                list: ['第一课内容','第二课内容','2333'],
                inputValue: ''
            },
            methods: {
                handleBtnClick: function(){
                    this.list.push(this.inputValue)
                    this.inputValue = ''
                }
            }
        })
    </script>
    ```

    - ```Vue.component()``` - 全局组件注册方法
        ```html
        Vue.component('TodoItem', {
            props: ['content'],
            template: "<li>{{content}}</li>"
        })
        ```
    - #### 通过 ```v-bind``` 传递内容给子组件 ( 父组件传值给子组件 )
        - 1.```v-for="item in list"``` list 数组的个数决定循环出多少个 item
        - 2.```v-bind:content="item"``` 将 ```item``` 赋值 给 ```content```
        - 3.在子组件注册的地方，通过 ```props: ['content'],``` 接收 ```content``` 变量
        - 4.最后，在 ```template: "<li>{{content}}</li>"``` 通过插值表达式插入 组件内容中

    - 局部组件注册方法
        - 1.注册局部组件
            ```js
                var TodoItem = {
                    props: ['content'],
                    template: "<li>{{content}}</li>"
                }
            ```
        - 2.在 Vue 实例中，接收该 局部组件
            ```js
            var app = new Vue({
                el: '#app',
                components: {
                    TodoItem: TodoItem
                }
            })
            ```
        ```html
        <div id="app">
            <input type="text" v-model='inputValue'>
            <button v-on:click="handleBtnClick">提交</button>
            <ul>
                <todo-item v-bind:content="item" v-for="item in list"></todo-item>
            </ul>
        </div>

        <script>
            var TodoItem = {
                props: ['content'],
                template: "<li>{{content}}</li>"
            }

            var app = new Vue({
                el: '#app',
                components: {
                    TodoItem: TodoItem
                },
                data: {
                    list: ['第一课内容','第二课内容','2333'],
                    inputValue: ''
                },
                methods: {
                    handleBtnClick: function(){
                        this.list.push(this.inputValue)
                        this.inputValue = ''
                    }
                }
            })
        </script>
        ```

- ### 2-7 简单的组件间传值
    - 上一节，我们讲解了，父组件如何传值给子组件
    - 那么，子组件如何传值给父组件呢？