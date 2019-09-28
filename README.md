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
    - [2-6 父组件传值给子组件](#2-6-父组件传值给子组件)
    - [2-7 子组件传值给父组件](#2-7-子组件传值给父组件)
- [第3章 Vue 基础精讲](#第3章-Vue-基础精讲)
    - [3-1 Vue实例](#3-1-Vue实例)
    - [3-2 Vue实例生命周期](#3-2-Vue实例生命周期)
    - [3-3 Vue的模版语法](#3-3-Vue的模版语法)
    - [3-4 计算属性,方法与侦听器](#3-4-计算属性,方法与侦听器)
    - [3-5 计算属性的 getter 和 setter](#3-5-计算属性的-getter-和-setter)
    - [3-6 Vue中的样式绑定](#3-6-Vue中的样式绑定)
    - [3-7 Vue中的条件渲染](#3-7-Vue中的条件渲染)
    - [3-8 Vue中的列表渲染](#3-8-Vue中的列表渲染)
    - [3-9 Vue中的set方法](#3-9-Vue中的set方法)
- [第4章 深入理解 Vue 组件](#第4章-深入理解-Vue-组件)
    - [4-1 使用组件的细节点](#4-1-使用组件的细节点)
        - [is=""]()
        - [子组件的 data，必须是 **函数返回值**]()
        - [ref Vue中如何操作DOM]()
    - [4-2 父子组件间的数据传递](#4-2-父子组件间的数据传递)
        - [4-2-1 父组件 如何向 子组件 传递数据](#4-2-1-父组件-如何向-子组件-传递数据)
        - [单向数据流](#单向数据流)
        - [4-2-2 子组件 如何向 父组件 传递数据](#4-2-2-子组件-如何向-父组件-传递数据)
    - [4-3 组件参数校验与非 props 特性](#4-3-组件参数校验与非-props-特性)
    - [4-4 给组件绑定原生事件](#4-4-给组件绑定原生事件)
    - [4-5 非父子组件间的传值](#4-5-非父子组件间的传值)
    - [4-6 在Vue中使用插槽 slot](#4-6-在Vue中使用插槽-slot)
    - [4-7 作用域插槽](#4-7-作用域插槽)
    - [4-8 动态组件与 v-once 指令](#4-8-动态组件与-v-once-指令)
- [第5章 Vue 中的动画特效](#第5章-Vue-中的动画特效)
    - [5-1 Vue动画 - Vue中CSS动画原理]()
    - [5-2 在Vue中使用 animate.css 库]()
    - [5-3 在Vue中同时使用过渡和动画]()
    - [5-4 Vue中的 Js 动画与 Velocity.js 的结合]()
    - [5-5 Vue中多个元素或组件的过渡]()
    - [5-6 Vue中的列表过渡]()
    - [5-7 Vue中的动画封装]()
    - [5-8 本章小节]()
- [第6章 Vue 项目预热](#第6章-Vue-项目预热)
    - [6-1 Vue项目预热 - 环境配置](#6-1-Vue项目预热---环境配置)
    - [6-2 Vue项目预热 - 项目代码介绍](#6-2-Vue项目预热---项目代码介绍)
    - [6-3 Vue项目预热 - 单文件组件与Vue中的路由](#6-3-Vue项目预热---单文件组件与Vue中的路由)
    - [6-4 Vue项目预热 - 单页应用VS多页应用](#6-4-Vue项目预热---单页应用VS多页应用)
    - [6-5 Vue项目预热 - 项目代码初始化](#6-5-Vue项目预热---项目代码初始化)
        - [1.限制缩放](#1限制缩放)
        - [2.重置样式](#2重置样式)
        - [3.1px像素边框的问题](#31px像素边框的问题)
        - [4.移动端 300毫秒 点击延迟问题](#4移动端-300毫秒-点击延迟问题)
- [第7章 项目实战 - 旅游网站首页开发](#第7章-项目实战---旅游网站首页开发)
    - [7-1 Vue项目首页 - header区域开发](#7-1-Vue项目首页---header区域开发)
    - [7-2 Vue项目首页 - iconfont 的使用和代码优化和代码优化](#7-2-Vue项目首页---iconfont-的使用和代码优化和代码优化)
        - [7-2-2 在vue中 定义css变量](#7-2-2-在vue中-定义css变量)
        - [7-2-3-3 vue项目中 给目录取别名，例如 @ 代表 src 目录一样](#7-2-3-3-vue项目中-给目录取别名例如--代表-src-目录一样)
    - [7-3 Vue项目首页 - 首页轮播图](#7-3-Vue项目首页---首页轮播图)
        - [7-3-1 在 git 新分支上开发新功能，然后合并](#7-3-1-在-git-新分支上开发新功能然后合并)
        - [7.CSS 利用 `padding-bottom` 实现固定比例的容器 - ( 图片 网速慢 加载时 占位问题 )](#7css-利用-padding-bottom-实现固定比例的容器----轮播图-网速慢-加载时-占位问题-)
        - [8.vue 中 css scoped 穿透问题](#8vue-中-css-scoped-穿透问题)
        - [7-3-3 git 新分支上开发新完后，怎么合并到 master 主分支上？](#7-3-3-git-新分支上开发新完后怎么合并到-master-主分支上)
    - [7-4 Vue项目首页 - 图标区域页面布局](#7-4-Vue项目首页---图标区域页面布局)
        - [7-4-2 纯css 固定比例伸缩 容器 - 适配任意屏幕](#7-4-2-纯css-固定比例伸缩-容器---适配任意屏幕)
    - [7-5 Vue项目首页 - 图标区域逻辑实现](#7-5-Vue项目首页---图标区域逻辑实现)
        - [7-5-2 css函数 mixins](#7-5-2-css函数-mixins)
    - [7-6 Vue项目首页 - 热销推荐组件开发](#7-6-Vue项目首页---热销推荐组件开发)
        - [7-6-1 flex 的部分问题](#7-6-1-flex-的部分问题)
    - [7-7 Vue项目首页 - 开发周末游组件](#7-7-Vue项目首页---开发周末游组件)
    - [7-8 Vue项目首页 - 使用 axios 发送 ajax 请求](#7-8-Vue项目首页---使用-axios-发送-ajax-请求)
    - [7-9 Vue项目首页 - 首页父子组组件间传值](#7-9-Vue项目首页---首页父子组组件间传值)
- []()
    - []()
    - []()
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


- ### 2-6 父组件传值给子组件
    - 下面我们 使用组件改造TodoList
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

- ### 2-7 子组件传值给父组件
    - [上一节](#通过-v-bind-传递内容给子组件--父组件传值给子组件-)，我们讲解了，父组件如何传值给子组件
    - 那么，子组件如何传值给父组件呢？
    - 我们先来看，如何实现这样的一个功能
        - 在我们点击 TodoList 中的每一项时，就把该项删除掉
        - 这时候，就涉及到 子组件向父组件传值的问题了

    > ```@click="handleBtnClick"``` 是 ```v-on:click="handleBtnClick"``` 的简写<br>
    > ```:content="item"``` 是 ```v-bind:content="item"``` 的简写

    - 数据放在父组件里 ( ```app.$data.list``` )，父组件决定子组件显示多少个
    - 所以删除子组件的时候，我们点击子组件，子组件把绑定的内容传给父组件，让父组件去改变数据，父组件的数据改变了，子组件就会消失
    
    - #### 子组件如何传值给父组件呢？
        - 1.子组件传值，我们可以通过 ```this.$emit("delete")``` 的方式来向外触发事件
            ```js
            var TodoItem = {
                template: "<li>content</li>",
                methods: {
                    handleItemClick: function(){
                        this.$emit('delete', this.index)    // 触发 delete 事件的同时，将 参数 this.index 带出去
                    }
                }
            }
            ```
        - 2.在子组件上，监听 delete 事件， ```<todo-item @delete="handleItemDelete"></todo-item>```
            - 一但监听到 ```delete``` 事件，就会执行父组件里 ```handleItemDelete``` 方法
        - 3.在父组件里定义 handleItemDelete 方法
            ```js
            var app = new Vue({
                el: '#app',
                methods: {
                    handleItemDelete: function(index){
                        this.list.splice(index, 1)
                    }
                }
            })
            ```
    - 完整代码
    ```html
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    <div id="app">
        <input type="text" v-model='inputValue'>
        <button v-on:click="handleBtnClick">提交</button>
        <ul>
            <todo-item v-bind:content="item" 
                        v-bind:index="index"
                        v-for="(item, index) in list" 
                        @delete="handleItemDelete"></todo-item>
        </ul>
    </div>
    <script>
        var TodoItem = {
            props: ['content', 'index'],
            template: "<li @click='handleItemClick'>{{content}}</li>",
            methods: {
                handleItemClick: function(){
                    this.$emit('delete', this.index)    // 触发 delete 事件的同时，将 参数 this.index 带出去
                }
            }
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
                },
                handleItemDelete: function(index){
                    this.list.splice(index, 1)
                }
            }
        })
    </script>
    ```

    
## 第3章 Vue 基础精讲
- ### 3-1 Vue实例
    ```js
    var vm = new Vue({
        el: '#app',
        data: {
            message: 'hello'
        }
    })
    ```
    - ```vm.$data.message```
    - 凡是已 $ 开头的符号，都是指 Vue 实例的 **实例属性/实例方法**

- ### 3-2 Vue实例生命周期
    <!-- ![lifecycle](https://github.com/946629031/Vue.js/blob/master/img/5.lifecycle.jpg) -->
    - 生命周期函数，就是 Vue 实例在某一个时间点会自动执行的函数
    ```html
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    <div id="app"></div>
    <script>
        var vm = new Vue({
            el: '#app',
            template: '<div>{{message}}</div>',
            data: {
                message: 'hello world'
            },
            beforeCreate: function(){
                console.log('beforeCreate')
            },
            created: function(){
                console.log('created')
            },
            beforeMount: function(){
                console.log(this.$el)
                console.log('beforeMount')
            },
            mounted: function(){
                console.log(this.$el)
                console.log('mounted')
            },
            beforeDestroy: function(){          // vm.$destroy()
                console.log('beforeDestroy')
            },
            destroyed: function(){
                console.log('destroyed')
            },
            beforeUpdate: function(){           // 当改变 vm.$data 里面的数据时
                console.log('beforeUpdate')
            },
            updated: function(){
                console.log('updated')
            }
        })
    </script>
    ```

- ### 3-3 Vue的模版语法
    ```html
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

    <div id="app">
        {{msg}}
        <div v-text='msg'></div>
        <div v-html='msg'></div>
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                msg: '<h1>Dell</h1>'
            }
        })
    </script>
    ```
    - 执行结果
    <!-- ![Vue的模版语法](https://github.com/946629031/Vue.js/blob/master/img/3-3.jpg) -->
    - 凡是 像 ```v-text='msg'```  ```v-html='msg'``` 以 v-什么 开头的指令，后面引号内都是 跟JS表达式


- ### 3-4 计算属性,方法与侦听器
    - 需求：根据给定的元数据 ```firstName, lastName```，在页面中自动生成 ```fullName``` ( fullName = firstName + lastName)。并且，如果元数据改变，fullName 也跟着改变

    - 实现方法一
        ```html
        <div id="app">
            {{firstName + ' ' + lastName}}
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    firstName: 'Dell',
                    lastName: 'Lee'
                }
            })
        </script>
        ```
        - 分析：这种方式虽然能实现，但是，在你的模板里面却包含了逻辑，一般情况下，我们不希望在模版里面 写表达式，而是直接展示结果就好
    - 实现方法二 - computed
        ```html
        <div id="app">
            {{fullName}}
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    firstName: 'Dell',
                    lastName: 'Lee'
                },
                // 计算属性
                computed: {
                    fullName: function(){
                        return this.firstName + ' ' + this.lastName
                    }
                }
            })
        </script>
        ```
        - #### 计算属性缓存
            - computed 计算属性 是有缓存的，只要他依赖的变量不改变，系统就会一直用他已经计算好的缓存，来提高性能
    - 实现方法三 - methods
        ```html
        <div id="app">
            {{fullName()}}
            {{age}}
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    firstName: 'Dell',
                    lastName: 'Lee',
                    age: 27
                },
                methods: {
                    fullName: function(){
                        console.log('计算了一次')
                        return this.firstName + ' ' + this.lastName
                    }
                }
            })
        </script>
        ```
        - 分析：这种方式虽然也能实现需求，但是这种方式是没有缓存的，如果我改变 ```age: 27``` 页面被重新渲染，则 methods 也被重新执行了一次，而不是像 computed 一样继续读取缓存
        - **很明显 methods 的方法实现，没有 computed 的性能好**

    - 实现方法四 - watch
        ```html
        <div id="app">
            {{fullName}}
            {{age}}
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    firstName: 'Dell',
                    lastName: 'Lee',
                    fullName: 'Dell Lee',
                    age: 27
                },
                watch: {
                    firstName: function(){
                        console.log('计算了一次')
                        this.fullName = this.firstName + ' ' + this.lastName
                    },
                    lastName: function(){
                        console.log('计算了一次')
                        this.fullName = this.firstName + ' ' + this.lastName
                    }
                }
            })
        </script>
        ```
        - 分析：虽然 watch 这种方式也能实现需求，但是却造成了代码冗余，所以还是 computed 比较好
    - 总结：如果一个功能，可以通过 watch, methods, computed 这三种方法实现，那么优先使用 computed 来实现

- ### 3-5 计算属性的 getter 和 setter
    - 计算属性默认只有 getter 
        - 默认写法
            ```js
            var vm = new Vue({
                el: '#app',
                data: {
                    firstName: 'Dell',
                    lastName: 'Lee'
                },
                computed: {
                    fullName: function(){
                        return this.firstName + ' ' + this.lastName
                    }
                }
            })
            ```
        - 完整写法
            ```js
            var vm = new Vue({
                el: '#app',
                data: {
                    firstName: 'Dell',
                    lastName: 'Lee'
                },
                computed: {
                    fullName: {
                        // getter
                        get: function(){
                            return this.firstName + ' ' + this.lastName
                        }
                    }
                }
            })
            ```
        - 这两种写法是完全一模一样的
    - 计算属性中的 setter
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            {{fullName}}
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    firstName: 'Dell',
                    lastName: 'Lee'
                },
                computed: {
                    fullName: {
                        // getter 当读取 fullName值 的时候，执行 getter function
                        get: function(){
                            return this.firstName + ' ' + this.lastName
                        },
                        // setter 当设置 fullName值 的时候，执行 setter function
                        set: function(value){
                            let arr = value.split(' ');
                            this.firstName = arr[0];
                            this.lastName = arr[1];
                        }
                    }
                }
            })
        </script>
        ```
        - 当改变 fullName ( vm.fullName = 'Mike Wang' ), 即执行 setter function 时
        - setter function 里的 ```this.firstName``` 和 ```this.lastName``` 都被改变了
        - 而 firstName 和 lastName 又是 getter funciton 的依赖变量
        - 所以，引发了 getter function 重新执行，更新缓存
        - 最后，得到的结果重新渲染到页面上

- ### 3-6 Vue中的样式绑定
    - Vue 中如何绑定 class?
        - 需求：点击一下 toggle 字体颜色
    - #### 绑定方式一 - 对象语法
        ```html
        <style> .red{ color: red;} </style>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    
        <div id="app">
            <div v-bind:class="{red: isActivated}" @click="handleClick">hello</div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    isActivated: false
                },
                methods: {
                    handleClick: function(){
                        this.isActivated = !this.isActivated
                    }
                }
            })
        </script>
        ```
        - 绑定class
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
        <div id="app">
            <div v-bind:class="{}">hello</div>
        </div>
        <script>
            var app = new Vue({
                el: '#app'
            })
        </script>
        ```
    <!-- ![绑定 class](https://github.com/946629031/Vue.js/blob/master/img/6.bind_class.jpg) -->
    - #### 绑定方式二 - 数组语法
        ```html
        <style> .activated{ color: red;} </style>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    
        <div id="app">
            <div v-bind:class="[activated, bold]" @click="handleClick">hello</div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    activated: '',
                    bold: 'bold'
                },
                methods: {
                    handleClick: function(){
                        this.activated = this.activated === 'activated' ? '' : 'activated'
                    }
                }
            })
        </script>
        ```
    - #### 绑定方式三 - 绑定内联样式 style - 对象语法
        ```html
        <style> .activated{ color: red;} </style>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    
        <div id="app">
            <div v-bind:style="styleObj" @click="handleClick">hello</div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    styleObj: {
                        color: 'black',
                        display: 'block'
                    }
                },
                methods: {
                    handleClick: function(){
                        this.styleObj.color = this.styleObj.color === 'red' ? 'black' : 'red'
                    }
                }
            })
        </script>
        ```
    - #### 绑定方式四 - 绑定内联样式 style - 数组语法
        ```html
        <style> .activated{ color: red;} </style>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
        <div id="app">
            <div v-bind:style="[styleObj, {fontSize: '20px'}]" @click="handleClick">hello</div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    styleObj: {
                        color: 'black',
                        display: 'block'
                    }
                },
                methods: {
                    handleClick: function(){
                        this.styleObj.color = this.styleObj.color === 'red' ? 'black' : 'red'
                    }
                }
            })
        </script>
        ```
        - 注意： v-bind:style="[styleObj, {fontSize: '20px'}]"
        - 由于这里不能写：{font-size: '20px'}
        - 所以 要写成：{fontSize: '20px'}

- ### 3-7 Vue中的条件渲染
    - 条件渲染 v-if
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
        <div id="app">
            <div v-if="show">{{message}}</div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    show: false,
                    message: 'hello world'
                }
            })
        </script>
        ```
        - 这里，```<div v-if="show">{{message}}</div>``` 这个标签的渲染与否，是由 ```show``` 决定的
            - ```show: false``` 为不渲染
            - ```show: true``` 为渲染

    - 条件渲染 v-show
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    
        <div id="app">
            <div v-if="show" data-test="v-if">{{message}}</div>
            <div v-show="show" data-test="v-show">{{message}}</div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    show: false,
                    message: 'hello world'
                }
            })
        </script>
        ```
    - 总结：
        - ```v-if``` 和 ```v-show``` 都能控制元素是否显示
        - 但是，```v-if``` 为 false 时，该标签压根不存在于 DOM 之上了
        - 而，```v-show``` 为 false 时，该标签存在于 DOM 之上，只是 ```display: none;``` 了而已
        - 而且，```v-show``` 的性能更优，因为 ```v-if``` 是直接操作 DOM 的

    - 条件渲染 v-if v-else-if v-else
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
        <div id="app">
            <div v-if="show === 'a'">This is A</div>
            <div v-else-if="show === 'b'">This is B</div>
            <div v-else>This is Others</div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    show: 'a'
                }
            })
        </script>
        ```
    - Vue 中的key值
        - 用 key 管理可复用的元素
        - Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。
        - 存在的问题：
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    
            <div id="app">
                <div v-if="show">
                    用户名：<input />
                </div>
                <div v-else>
                    邮箱名：<input />
                </div>
            </div>
            <script>
                var app = new Vue({
                    el: '#app',
                    data: {
                        show: true
                    }
                })
            </script>
            ```
            - 如上面这个例子，当我们 在 input 中输入内容，如 "123" 时
            - 我们将 ```app.show = false``` 改为了 false 时，我们的预期：显示 v-else 的内容，并清空 input 框
            - 但是，我们实际得到的结果：显示了 "邮箱名："，但是 input 框没有清空
            - 那么，如果解决这个问题呢？
        - 解决问题
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    
            <div id="app">
                <div v-if="show">
                    用户名：<input key="username"/>
                </div>
                <div v-else>
                    邮箱名：<input key="password"/>
                </div>
            </div>
            <script>
                var app = new Vue({
                    el: '#app',
                    data: {
                        show: true
                    }
                })
            </script>
            ```
            - 当你给 **标签** 加上 **key值** 后
            - vue 就会对比 key值 是否相同，只有相同的 key值 的标签，才会被复用
            - tips: key值 的内容可以随便取
- ### 3-8 Vue中的列表渲染
    - 1.在使用 key值 的时候，每个循环项上最好都带一个 key值，来提高性能
        - 如何性能能达到最优呢？
            - **key值 要唯一，同时不要使用 index 作为 key值**
            - 虽然使用 index 昨晚 key值，也不会报错，但是性能没有那么好
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
        <div id="app">
            <div v-for="(item, index) of list" :key="item.id">
                {{item.text}} --- {{index}}
            </div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    list: [{
                            id: '231123',
                            text: 'hello'
                        },{
                            id: '231124',
                            text: 'Dell'
                        },{
                            id: '231125',
                            text: 'Lee'
                        }
                    ]
                }
            })
        </script>
        ```
    - 2.数组的变异方法
        - 不能通过下标的方式来改变数组内容，这样不会更新到页面上
            - 如：```app.list[4] = {id: '001', text: '2'}```
        - 要通过 **数组变异方法** 来改变数组内容，这样才能更新到页面上
            - 如：```app.list.push({id: '001', text: '2'})```
            - **数组变异方法**：push, pop, shift, unshift, splice, sort, reverse
    - 3.除了通过数组变异方法 可以改变页面上的内容，还可以通过**改变数组的引用**，来更新页面上的内容
        - 改变数组的引用 即 重新赋值
        - 如：
            ```js
            app.list = [{
                            id: '231123',
                            text: 'hello'
                        },{
                            id: '2311241111',
                            text: 'Dellxxxxx'
                        },{
                            id: '231125',
                            text: 'Lee'
                        }
                    ]
            ```
    - 4.循环中的 template 占位符
        - 先看存在的问题
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    
            <div id="app">
                <div v-for="(item, index) of list" :key="item.id">
                    <div>
                        {{item.text}} --- {{index}}
                    </div>
                    <span>{{item.text}}</span>
                </div>
            </div>
            <script>
                var app = new Vue({
                    el: '#app',
                    data: {
                        list: [{
                                id: '231123',
                                text: 'hello'
                            },{
                                id: '231124',
                                text: 'Dell'
                            },{
                                id: '231125',
                                text: 'Lee'
                            }
                        ]
                    }
                })
            </script>
            ```
        <!-- - 渲染结果 ![循环中的 template 占位符](https://github.com/946629031/Vue.js/blob/master/img/7.v-for_template.jpg) -->
        - 渲染结果，每个循环项里，都被一个 div 标签包裹着
        - 但是，如果我不希望，循环项被这一个多余的标签包裹着，怎么办呢？
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
        <div id="app">
            <template v-for="(item, index) of list" :key="item.id">
                <div>
                    {{item.text}} --- {{index}}
                </div>
                <span>{{item.text}}</span>
            </template>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    list: [{
                            id: '231123',
                            text: 'hello'
                        },{
                            id: '231124',
                            text: 'Dell'
                        },{
                            id: '231125',
                            text: 'Lee'
                        }
                    ]
                }
            })
        </script>
        ```
        <!-- - 渲染结果 ![循环中的 template 占位符](https://github.com/946629031/Vue.js/blob/master/img/8.v-for_template.jpg) -->
        - 把包裹的 div 改成 template 即可，其中 template 只是占位符，不会被渲染到页面上
    - 5.对象循环
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
        <div id="app">
            <div v-for="(item, key, index) of userInfo">
                {{item}} -- {{key}} -- {{index}}
            </div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    userInfo: {
                        name: "Dell",
                        age: 28,
                        gander: "male",
                        salary: "secret"
                    }
                }
            })
        </script>
        ```
        - 1.修改对象已有的信息，```app.userInfo.name = 'Dell Lee'```, 这种方法是可以修改的
        - 2.新增对象内容
            - ```app.userInfo.address = 'Beijing'```, 这种方法虽然不会报错，但是新增内容没有被更新到页面上
            - 通过修改对象的引用 - 重新赋值
                ```js
                app.userInfo = {
                        name: "Dell",
                        age: 28,
                        gander: "male",
                        salary: "secret",
                        address: "Beijing"
                    }
                ```
                - 通过重新赋值的方法，会被自动更新到页面上
        
- ### 3-9 Vue中的set方法
    - #### 1.对象的 set方法
        - 存在的问题
            - 在上一节[3-8 Vue中的列表渲染](#3-8-Vue中的列表渲染) 中, 我们提到，如果要修改 Object 对象的内容，只能通过 重新赋值 (修改引用) 的方法
            - 其实，还可以通过 ```Vue.set()``` 方法，来修改 Object 对象的内容
        - ```Vue.set()``` 例子
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
            
            <div id="app">
                <div v-for="(item, key, index) of userInfo">
                    {{item}} -- {{key}} -- {{index}}
                </div>
            </div>
            <script>
                var app = new Vue({
                    el: '#app',
                    data: {
                        userInfo: {
                            name: "Dell",
                            age: 28,
                            gander: "male",
                            salary: "secret"
                        }
                    }
                })
            </script>
            ```
        - ```Vue.set()``` 全局方法
            - 然后在 控制台里输入 ```Vue.set(app.userInfo, 'address', 'beijing')```
            - 对象内容新增成功，页面也同时更新
        - ```app.$set()``` 实例方法
            - ```app.$set(app.userInfo, 'address', 'beijing')```
            - 对象内容新增成功，页面也同时更新
            - ```Vue.set()``` 和 ```app.$set()``` 是完全一模一样的
    
    - #### 2.数组的 set方法
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    
        <div id="app">
            <div v-for="(item, index) of userInfo">
                {{item}}
            </div>
        </div>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    userInfo: [0,1,2,3,4]
                }
            })
        </script>
        ```
        - ```app.$set(app.userInfo, 1, 5)```, 实例方法
            - 数组内容新增成功，页面也同时更新  
        - ```Vue.set(app.userInfo, 1, 5)```, 全局方法
            - 数组内容新增成功，页面也同时更新

## 第4章 深入理解 Vue 组件
- ### 4-1 使用组件的细节点
    - #### 4-1-1 问题1 - is=""
        - 1.存在问题
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
            <div id="app">
                <table>
                    <tbody>
                        <row></row>
                        <row></row>
                        <row></row>
                    </tbody>
                </table>
            </div>
            <script>
                Vue.component('row', {
                    template: '<tr><td>this is a row</td></tr>'
                })

                var vm = new Vue({
                    el: '#app'
                })
            </script>
            ```
            <!-- - ![存在问题](https://github.com/946629031/Vue.js/blob/master/img/9.Component_problems.jpg) -->

            - 原本我们的预期：row子组件，被包含于 tbody 中
            - 但是我们得到的：row子组件，跑到 tbody 外面去了
        - 2.如何解决这个问题？ is=""
            - H5规范 规定，tbody 里只能写 tr
            - 然后，我们使用 ```is="row"``` 使其绑定 子组件即可
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
        
            <div id="app">
                <table>
                    <tbody>
                        <tr is="row"></tr>
                        <tr is="row"></tr>
                        <tr is="row"></tr>
                    </tbody>
                </table>
            </div>
            <script>
                Vue.component('row', {
                    template: '<tr><td>this is a row</td></tr>'
                })

                var vm = new Vue({
                    el: '#app'
                })
            </script>
            ```
            <!-- - ![存在问题](https://github.com/946629031/Vue.js/blob/master/img/9-1.Component_problems.jpg) -->
            - 同理，以下标签 里面，如果要放子组件，也是同理
                ```html
                <ul>
                    <li is="row"></li>
                    <li is="row"></li>
                    <li is="row"></li>
                </ul>
                ```
                ```html
                <ol>
                    <li is="row"></li>
                    <li is="row"></li>
                    <li is="row"></li>
                </ol>
                ```
                ```html
                <select>
                    <option is="row"></option>
                    <option is="row"></option>
                    <option is="row"></option>
                </select>
                ```
    - #### 4-1-2 问题2 - 子组件的 data，必须是 **函数返回值**
        - 1.先看代码
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <table>
                <tbody>
                    <tr is="row"></tr>
                    <tr is="row"></tr>
                    <tr is="row"></tr>
                </tbody>
            </table>
        </div>
        <script>
            Vue.component('row', {
                data: {
                    content: 'this is a row'
                },
                template: '<tr><td>{{content}}</td></tr>'
            })

            var vm = new Vue({
                el: '#app'
            })
        </script>
        ```
        - 2.报错 ```[Vue warn]: The "data" option should be a function that returns a per-instance value in component definitions.```
            - data 应该是一个 function 
            - 而不是
                ```js
                Vue.component('row', {
                    data: {
                        content: 'this is a row'
                    },
                    template: '<tr><td>{{content}}</td></tr>'
                })
                ```
        - 3.原因
            - 1.在根组件里 ```new Vue({})``` , 如果定义 ```data: {}``` 这样不会任何的问题
            - 2.但是，如果你在非根组件 ( 子组件 ) 里，定义 data 时，就不能这样定义了。子组件里定义 data 时，要求data 必须是 **函数的返回值**
                ```js
                Vue.component('row', {
                    data: function(){
                        return {
                            content: 'this is a row'
                        }
                    },
                    template: '<tr><td>{{content}}</td></tr>'
                })
                ```
            - 3.之所以这么设计，是因为
                - 一个子组件 不会像 根组件只会被调用一次，子组件可能会被调用多次。
                - 那么，每一个子组件的数据，我不希望他 和其他子组件产生冲突, 希望他是**独立的数据**
                - 通过 **函数返回值** 的方式，就可以做到，每个子组件拥有独立的数据存储
        - 4.正确的完整代码
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <table>
                <tbody>
                    <tr is="row"></tr>
                    <tr is="row"></tr>
                    <tr is="row"></tr>
                </tbody>
            </table>
        </div>
        <script>
            Vue.component('row', {
                data: function(){
                    return {
                        content: 'this is a row'
                    }
                },
                template: '<tr><td>{{content}}</td></tr>'
            })

            var vm = new Vue({
                el: '#app'
            })
        </script>
        ```
    - #### 4-1-3 问题3 - ref Vue中如何操作DOM
        - 存在的问题：单靠Vue中的数据绑定这种方式，在某些及其复杂的情况下，是处理不了的。所以，在有些必要的情况下仍然需要操作DOM
        - 1.先看一段代码
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

            <div id="app">
                <div ref='hello' @click='handleClick'>hello world</div>
            </div>
            <script>
                var vm = new Vue({
                    el: '#app',
                    methods: {
                        handleClick: function(){
                            console.log(this.$refs.hello.innerHTML)
                        }
                    }
                })
            </script>
            ```
            - ref 引用
                - 给该标签，起一个引用的名字，叫做 'hello'
                - ```this.$refs``` 指的是 Vue实例 中所有的引用
                - ```this.$refs.hello``` 获得 名叫 'hello' 的DOM节点
                    - 如果 ref 写在组件上，如 ```<com ref='demo'></com>```，则是获取组件的引用
        - 2.案例2
            - 需求：实现一个计数器，每点击一次 i++，然后把所有的计数器实时计算总和
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

            <div id="app">
                <counter ref='one' @change='handleChange'></counter>
                <counter ref='two' @change='handleChange'></counter>
                <div>{{total}}</div>
            </div>
            <script>
                Vue.component('counter', {
                    data: function(){
                        return {
                            number: 0
                        }
                    },
                    template: '<div @click="handle">{{number}}</div>',
                    methods: {
                        handle: function(){
                            this.number++;
                            this.$emit('change')
                        }
                    }
                })

                var vm = new Vue({
                    el: '#app',
                    data: {
                        total: 0
                    },
                    methods: {
                        handleChange: function(){
                            this.total = this.$refs.one.number + this.$refs.two.number
                        }
                    }
                })
            </script>
            ```
- ### 4-2 父子组件间的数据传递
    - 现在我们继续实现一个需求：
        - 实现一个计数器，每点击一次 i++，然后把所有的计数器实时计算总和
    - #### 4-2-1 父组件 如何向 子组件 传递数据
        - ##### 父组件通过属性的方式，向子组件传递数据
            - 这种方式传递给子组件的 0 或 1 会变成一个 **字符串**
                ```html
                <div id="app">
                    <counter count='0'></counter>
                    <counter count='1'></counter>
                </div>
                ```

            - 这种方式传递给子组件的 0 或 1 会变成一个 **数字**
                - 加了 : 冒号后，引号里面的内容就变成 **js表达式** 了，而不是一个字符串了
                ```html
                <div id="app">
                    <counter :count='0'></counter>
                    <counter :count='1'></counter>
                </div>
                ```
        - ##### 然后 子组件 通过 props 接收数据
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

            <div id="app">
                <counter count='2'></counter>
                <counter count='1'></counter>
            </div>
            <script>
                let counter = {
                    props: ['count'],
                    template: '<div>{{count}}</div>'
                }

                var vm = new Vue({
                    el: '#app',
                    components: {
                        counter: counter
                    }
                })
            </script>
            ```
        - ##### 单向数据流
            - 先看问题
                ```html
                <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

                <div id="app">
                    <counter count='2'></counter>
                    <counter count='1'></counter>
                </div>
                <script>
                    let counter = {
                        props: ['count'],
                        template: '<div @click="handleClick">{{count}}</div>',
                        methods: {
                            handleClick: function(){
                                this.count ++
                            }
                        }
                    }

                    var vm = new Vue({
                        el: '#app',
                        components: {
                            counter: counter
                        }
                    })
                </script>
                ```
            - 这样写，虽然能实现点击就 i++ 的功能，但是 控制台会报错
                - [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "count"
                - 意思是说，你**子组件 不要直接修改 父组件传递过来的数据**
                - 因为，如果父组件传递过来的 是非基础类型的数据，而是引用类型的数据，如 {}
                    - 你在子组件里改变了数据的内容，而这个数据有可能 被其他子组件所使用
                    - 这样的话，你的修改 不仅影响了你自己，还有可能影响其他 子组件
                - 那我们又确实要改变 父组件传过来的数据，改怎么办呢？
                    - 在子组件里，写个变量 接收一下
                ```html
                <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

                <div id="app">
                    <counter count='2'></counter>
                    <counter count='1'></counter>
                </div>
                <script>
                    let counter = {
                        props: ['count'],
                        data: function(){
                            return {
                                number: this.count  // 写个变量 接收一下 父组件传过来的数据
                            }
                        },
                        template: '<div @click="handleClick">{{number}}</div>',
                        methods: {
                            handleClick: function(){
                                this.number ++
                            }
                        }
                    }

                    var vm = new Vue({
                        el: '#app',
                        components: {
                            counter: counter
                        }
                    })
                </script>
                ```
    - #### 4-2-2 子组件 如何向 父组件 传递数据
        - 1.子组件向外触发事件的方式，向外传递数据
            ```js
            this.$emit('change', 2)    // 向外触发一个change事件，并且可以携带多个参数
            ```
        - 2.父组件监听该事件
            ```html
            <div id="app">
                <counter count='2' @change='handleChange'></counter>
                <counter count='1'></counter>
            </div>
            ```
            - 一但监听到 change 事件，我就执行 handleChange 方法
        - 3.在父组件里 接收参数
            ```js
            methods: {
                handleChange: function(number){
                    console.log(number)
                }
            }
            ```
        - 完整代码
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

            <div id="app">
                <counter count='0' @change='handleChange'></counter>
                <counter count='0' @change='handleChange'></counter>
                <div>{{total}}</div>
            </div>
            <script>
                let counter = {
                    props: ['count'],
                    data: function(){
                        return {
                            number: this.count
                        }
                    },
                    template: '<div @click="handleClick">{{number}}</div>',
                    methods: {
                        handleClick: function(){
                            this.number ++;
                            this.$emit('change', 1, this.number)    // 向外触发一个change事件，并且可以携带多个参数
                        }
                    }
                }

                var vm = new Vue({
                    el: '#app',
                    data: {
                        total: 0
                    },
                    components: {
                        counter: counter
                    },
                    methods: {
                        handleChange: function(step, number){
                            this.total += step
                            console.log(number)
                        }
                    }
                })
            </script>
            ```
- ### 4-3 组件参数校验与非 props 特性
    - 1.组件参数校验
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <child parent-msg='hello world'></child>
        </div>
        <script>
            Vue.component('child', {
                props: {
                    parentMsg: null,	// null 代表不验证类别
                    propA: Number,	  // 限定数字
                    propB: [String, Number],	// 多重条件可用 [] 隔开
                    propC: {
                        type: String,
                        require: true	// 为true时，意思是必须要传，不传就报错
                    },
                    propD: {
                        // 数字类型，且有预设值
                        type: Number,
                        default: 100
                    },
                    propE: {
                        // Object 类型，代表可接受的是对象或者数组
                        type: Object,
                        default: function(){
                            return {
                                message: 'hello'
                            }
                        }
                    },
                    propF: {
                        // 自定义的条件验证
                        validator: function(value){
                            return value > 10
                        }
                    }
                },
                template: '<div>{{parentMsg}}</div>'
            })

            var vm = new Vue({
                el: '#app',
            })
        </script>
        ```
    - 2.非 props 特性
        - #### 什么是 props 特性？
            ```html
            <div id="app">
                <child content='hello world'></child>
            </div>
            <script>
                Vue.component('child', {
                    props: ['content'],
                    template: '<div>{{content}}</div>'
                })

                var vm = new Vue({
                    el: '#app'
                })
            </script>
            ```
            - 1.props 特性1 - 不显示在 DOM 上
                - 1.你在 html 中写了 ```content='hello world'```
                - 2.但是，由于你在子组件上 props 接收了 content
                - 3.所以， ```content='hello world'``` 不会在最终渲染完后 显示在　DOM 上
            - 2.props 特性2
                - 当你 ```props: ['content']``` 接收了 content 以后
                - 你就可以直接在 ```template: '<div>{{content}}</div>'``` 中使用该值了
        - #### 什么是 非 props 特性？
            ```html
            <div id="app">
                <child content='hello world'></child>
            </div>
            <script>
                Vue.component('child', {
                    // props: ['content'],
                    template: '<div>{{content}}</div>'
                })

                var vm = new Vue({
                    el: '#app'
                })
            </script>
            ```
            - 当你父组件传递属性 ```content='hello world'``` 的时候
            - 你没有用 ```props: ['content']``` 去接收
            - 非 props 特性1：
                - 这时候，```content='hello world'``` 就会被渲染显示在  最终的 DOM 上
            - 非 props 特性2：
                - 而且，在 ```template: '<div>{{content}}</div>'``` 这里也没法用，因为没有接收
                
- ### 4-4 给组件绑定原生事件
    - 存在的问题
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <div @click='clickx'>div</div>
            <child @click='clickx'></child>
        </div>
        <script>
            Vue.component('child', {
                template: '<div>child</div>'
            })

            var vm = new Vue({
                el: '#app',
                methods: {
                    clickx: function(){
                        alert(12)
                    }
                }
            })
        </script>
        ```
        - 执行代码发现
            - 绑在原生节点上的 ```<div @click='clickx'>div</div>``` 事件可以被正常触发
            - 但是，同一个事件，绑在组件上 却**不能触发**
    - 分析
        - 当我给组件绑定一个事件的时候，```<child @click='clickx'></child>```，这个 click 实际上是一个自定义的事件
        - 如果你要触发 组件上的自定义事件，就要这样
            - 1.先触发子组件的 div 上的 ```@click="handleChildClick"``` 事件 
            - 2.handleChildClick 再去向外触发这个自定义的 click 事件 ```this.$emit('click')```
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

            <div id="app">
                <div @click='clickxx'>div</div>
                <child @click='clickxx'></child>
            </div>
            <script>
                Vue.component('child', {
                    template: '<div @click="handleChildClick">child</div>',
                    methods: {
                        handleChildClick: function(){
                            alert('handleChildClick')
                            this.$emit('click')
                        }
                    }
                })

                var vm = new Vue({
                    el: '#app',
                    methods: {
                        clickxx: function(){
                            alert(12)
                        }
                    }
                })
            </script>
            ```
    - #### 总结 - 给组件绑定原生事件
        - 你会发现，用上面的方法来实现该功能，会显得非常复杂
        - 所以，我们要用更简洁的方法， **给组件绑定原生事件**
        - 给绑在组件上的原生事件后，加个 ```.native``` 即可
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <div @click='clickx'>div</div>
            <child @click.native='clickx'></child>
        </div>
        <script>
            Vue.component('child', {
                template: '<div>child</div>'
            })

            var vm = new Vue({
                el: '#app',
                methods: {
                    clickx: function(){
                        alert(12)
                    }
                }
            })
        </script>
        ```
- ### 4-5 非父子组件间的传值
    - 存在的问题
    <!-- - ![非父子组件间的传值](https://github.com/946629031/Vue.js/blob/master/img/4-5.jpg) -->
    - 如上图所示
        - 根据我们前面学习的内容，父子组件间传值，是可以实现的
            - 父传子，通过 ```props```
            - 子传父，通过 ```this.$emit()```
        - 但是，如果我们要实现 ```1 跟 3``` 或者 ```3 跟 3``` 之间的传值，该怎么办呢？
            - 显然，如果通过一层层往上传，然后再一层层往下传，这种方式虽然可以实现，但是非常复杂，这不是个好的解决方案
    - 解决方法
        - 1.借助 Vuex
        - 2.发布订阅模式 ( Bus / 总线机制 / 观察者模式 )
    - 解决方法 - Bus
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <child content='Dell'></child>
            <child content='Lee'></child>
        </div>
        <script>
            Vue.component('child', {
                props: {
                    content: String
                },
                template: '<div>{{content}}</div>'
            })

            var vm = new Vue({
                el: '#app',
                methods: {
                    clickxx: function(){
                        alert(12)
                    }
                }
            })
        </script>
        ```
        - 看上面的代码，如何才能实现这样一个功能？
            - 当我点击 Dell 的时候，其他的都变成 Dell
            - 当我点击 Lee 的时候，其他的都变成 Lee
        - 分析
            - 如果要实现这个功能，那么就意味着，他们之间不是 父子组件的关系，而是兄弟组件的关系
            - 如何才能实现，非父子组件间的传值问题呢？
        - 1.```Vue.prototype.bus = new Vue()```
            - 第一步，我先创建一个 vue实例，然后挂载到 Vue 这个类的 prototype 上，并且取名为 bus
                - 这样做的话，后面，不管我使用哪一个 vue实例，上面都会有 bus 这个属性
        - 2.在子组件上绑定点击事件
            ```js
            template: '<div @click="handleClick">{{content}}</div>',
			methods: {
				handleClick: function(){
					alert(this.content)
				}
			}
            ```
        - 3.接下来，我要把我的内容，传递给另外一个组件，该怎么传？
            - ```this.bus.$emit('change', this.content)```
            - 在自己这个组件上，向自己 vue实例 的bus 上触发 change事件，并且带去一个 this.content 参数
            ```js
            template: '<div @click="handleClick">{{content}}</div>',
			methods: {
				handleClick: function(){
					this.bus.$emit('change', this.content)
				}
			}
            ```
        - 4.我这个组件触发事件，另外的组件是不是应该监听呀？
            - 监听事件
            ```js
            mounted: function(){
				this.bus.$on('change', function(msg){
					alert(msg)
				})
			}
            ```
            - 到当前这一步的完整代码
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

            <div id="app">
                <child content='Dell'></child>
                <child content='Lee'></child>
            </div>
            <script>
                Vue.prototype.bus = new Vue()

                Vue.component('child', {
                    props: {
                        content: String
                    },
                    template: '<div @click="handleClick">{{content}}</div>',
                    methods: {
                        handleClick: function(){
                            this.bus.$emit('change', this.content)
                        }
                    },
                    mounted: function(){
                        this.bus.$on('change', function(msg){
                            alert(msg)
                        })
                    }
                })

                var vm = new Vue({
                    el: '#app'
                })
            </script>
            ```
            - 当你点击子组件的时候，之所以 ```alert(msg)``` 被弹出两次，是因为有两个组件都在监听
        - 5.第五步，监听并接收到 msg 后，是不是应该 把自己的内容都改成 msg 呢？
            ```js
            mounted: function(){
				this.bus.$on('change', function(msg){
					this.content = msg  // 如果你这样写
				})
			}
            ```
            - 如果你这样写，你会发现，你修改不了
            - 原因：function 里面的 this 作用域发生了变化
            ```js
            mounted: function(){
				var this_ = this;  // 将 this 保存一份
				this.bus.$on('change', function(msg){
					this_.content = msg
				})
			}
            ```
            - 这样写了之后，你会发现，功能就实现了
                - 当我点击 Dell 的时候，其他的都变成 Dell
                - 当我点击 Lee 的时候，其他的都变成 Lee
        - 6.但是，真的实现了吗？
            - 打开控制台后，你会发现，Vue 报了警告
            - [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "content"
            - 报错原因，违反了 **单向数据流** 的原则
            - 解决办法，在组件中，新建一个变量，接收该变量就行
            ```js
            Vue.component('child', {
                data: function(){
                    return {
                        selfContent: this.content
                    }
                },
                props: {
                    content: String
                }
            })
            ```
    - 最终完整代码
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <child content='Dell'></child>
            <child content='Lee'></child>
        </div>
        <script>
            Vue.prototype.bus = new Vue()

            Vue.component('child', {
                data: function(){
                    return {
                        selfContent: this.content
                    }
                },
                props: {
                    content: String
                },
                template: '<div @click="handleClick">{{selfContent}}</div>',
                methods: {
                    handleClick: function(){
                        this.bus.$emit('change', this.selfContent)
                    }
                },
                mounted: function(){
                    var this_ = this;  // 将 this 保存一份
                    this.bus.$on('change', function(msg){
                        this_.selfContent = msg
                    })
                }
            })

            var vm = new Vue({
                el: '#app'
            })
        </script>
        ```
- ### 4-6 在Vue中使用插槽 slot
    - 存在的问题
        - 先来看这段代码
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

            <div id="app">
                <child></child>
            </div>
            <script>
                Vue.component('child', {
                    template: '<div><p>hello</p></div>'
                })

                var vm = new Vue({
                    el: '#app'
                })
            </script>
            ```
        - 现在有这么一个问题
            - 现在子组件内，除了展示 ```<p>hello</p>``` 以外
            - **我还需要展示一段内容，但是这段内容不是我子组件所决定的，而是父组件传递过来的**
        - 尝试解决问题
            - 按照我们过去的方法，可能会想到这样
            ```html
            <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

            <div id="app">
                <child content='<p>Dell</p>'></child>
            </div>
            <script>
                Vue.component('child', {
                    props: ['content'],
                    template: `<div>
                                    <p>hello</p>
                                    <div v-html='this.content'></div>
                            </div>`
                })

                var vm = new Vue({
                    el: '#app'
                })
            </script>
            ```
            - 分析
                - 虽然这样 好像能解决问题了
                - 问题1：
                    - 但是 ```<p>Dell</p>``` 的外层多了一个 div 标签
                        - 有的同学会想到这样 ```<template v-html='this.content'></template>```
                        - 把 div 改成 template 模板占位符
                        - 但是执行结果发现，这样并不能实现功能
                        - 所以，还是得多包一层 div ```<div v-html='this.content'></div>```
                - 问题2：
                    - 当你这样传递的内容很少的时候还行
                    - 如果传递的内容很多的时候，就会变成这样
                        ```html
                        <div id="app">
                            <child content='<p>Dell</p><p>Dell</p><p>Dell</p><p>Dell</p><p>Dell</p><p>Dell</p><p>Dell</p><p>Dell</p><p>Dell</p>'></child>
                        </div>
                        ```
                    - 就会代码变得非常难以阅读
    - 插槽 slot
        - 什么是 插槽 slot？
            - 由于 上面案例中 的解决方法存在的问题，所以 我们引入了 **插槽slot** 的概念
            - 用于 **父组件 将要传递的 DOM内容 给到子组件的** 优雅解决方案
        - 插槽 slot 的使用方法
            - 第一步
                - 在子组件的标签之间，写入 DOM内容，如 ```<p>Dell</p>```
                ```html
                <div id="app">
                    <child>
                        <p>Dell</p>
                    </child>
                </div>
                ```
            - 第二步
                - 在子组件的 template 中，用 ```<slot></slot>``` 标签接收内容即可
                ```html
                Vue.component('child', {
                    template: `<div>
                                    <slot></slot>
                                    <p>hello</p>
                            </div>`
                })
                ```
            - 完整代码
                ```html
                <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

                <div id="app">
                    <child>
                        <p>Dell</p>
                    </child>
                </div>
                <script>
                    Vue.component('child', {
                        template: `<div>
                                        <slot></slot>
                                        <p>hello</p>
                                </div>`
                    })

                    var vm = new Vue({
                        el: '#app'
                    })
                </script>
                ```
        - 插槽 slot 的一些特性
            - 特性1 - 默认值
                - 当你 父组件不传入任何内容的时候，在子组件的 slot插槽可以定义默认内容，如 ```<slot>默认内容</slot>```
                - 这样子的话，就会显示插槽内的默认内容
                ```html
                <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

                <div id="app">
                    <child></child>
                </div>
                <script>
                    Vue.component('child', {
                        template: `<div>
                                        <slot>默认内容</slot>
                                        <p>hello</p>
                                </div>`
                    })

                    var vm = new Vue({
                        el: '#app'
                    })
                </script>
                ```
            - 特性2 - **具名插槽**
                - 具名插槽
                    - 给插槽取名字，然后根据名字取用插槽内容
                ```html
                <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

                <div id="app">
                    <child>
                        <div class="headerx" slot="header">header</div>
                        <div class="footerx" slot="footer">footer</div>
                    </child>
                </div>
                <script>
                    Vue.component('child', {
                        template: `<div>
                                        <slot name="header">默认内容</slot>
                                        <p>hello</p>
                                        <slot name="footer"></slot>
                                </div>`
                    })

                    var vm = new Vue({
                        el: '#app'
                    })
                </script>
                ```
- ### 4-7 作用域插槽
    - 什么是作用域插槽？
        - **作用域插槽**：能够让插槽内容能够访问子组件中才有的数据。
    - 先来看一段代码
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <child></child>
        </div>
        <script>
            Vue.component('child', {
                data: function(){
                    return {
                        list: [1,2,3,4]
                    }
                },
                template: `<div>
                            <ul>
                                <li v-for='item of list'>{{item}}</li>
                            </ul>
                        </div>`
            })

            var vm = new Vue({
                el: '#app' 
            })
        </script>
        ```
    - 存在的问题
        - 如上代码，如果我需要的不一定是以 ```<li></li>``` 为标签包裹的
        - 要什么标签包裹，我要在父组件来确定，你子组件只需要把数据传给父组件就好
        - 如果是这种需求，该怎么实现呢？
    - 这时候，就需要用到 **作用域插槽**
        - **作用域插槽 的执行逻辑**
            - 父组件调用子组件的时候，传递了一个插槽
            - 这个插槽叫做 **作用域插槽**
                - 1.从子组件 传递数据 到父组件，```<slot v-for='item of list' :msg=item></slot>```
                - 2.作用域插槽必须以 ```<template></template>``` 开头结尾
                - 3.从子组件接收的数据都放在 props 里面，```slot-scope='props'``` 这个名字可以随意取
                - 4.你还应该告诉子组件，你接收的 props 应该怎么展示，这里以 ```<li>{{props.msg}}</li>``` 的方式展示
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <child>
                <template slot-scope='props'>
                    <li>{{props.msg}}</li>
                </template>
            </child>
        </div>
        <script>
            Vue.component('child', {
                data: function(){
                    return {
                        list: [1,2,3,4]
                    }
                },
                template: `<div>
                            <ul>
                                <slot v-for='item of list' :msg=item></slot>
                            </ul>
                        </div>`
            })

            var vm = new Vue({
                el: '#app' 
            })
        </script>
        ```
- ### 4-8 动态组件与 v-once 指令
    - 先来看下面这段代码, 实现一个 toggle 切换 组件的功能
        ```html
        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

        <div id="app">
            <child-one v-if='type === "child-one"'></child-one>
            <child-two v-if='type === "child-two"'></child-two>
            <button @click='handleClick'>toggle</button>
        </div>
        <script>
            Vue.component('child-one', {
                template: '<div>child-one</div>'
            })

            Vue.component('child-two', {
                template: '<div>child-two</div>'
            })

            var vm = new Vue({
                el: '#app',
                data: {
                    type: 'child-one'
                },
                methods: {
                    handleClick: function(){
                        this.type = this.type === 'child-one' ? 'child-two' : 'child-one'
                    }
                }
            })
        </script>
        ```
    - 那么，除了上面这张方法，有没有更优雅的方法呢？
    - 有的，**动态组件**
    - 动态组件逻辑
        - 1.```<component></component>``` 是 Vue 的 动态组件 保留关键字
        - 2.动态组件会根据 ```:is=''``` 里面的数据，来动态变化
            - 如 ```:is='child-one'```，动态组件就显示 child-one 组件
            - 如 ```:is='child-two'```，动态组件就显示 child-two 组件
    ```html
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>

    <div id="app">
        <component :is='type'></component>
        <!-- <child-one v-if='type === "child-one"'></child-one>
        <child-two v-if='type === "child-two"'></child-two> -->
        <button @click='handleClick'>toggle</button>
    </div>
    <script>
        Vue.component('child-one', {
            template: '<div>child-one</div>'
        })

        Vue.component('child-two', {
            template: '<div>child-two</div>'
        })

        var vm = new Vue({
            el: '#app',
            data: {
                type: 'child-one'
            },
            methods: {
                handleClick: function(){
                    this.type = this.type === 'child-one' ? 'child-two' : 'child-one'
                }
            }
        })
    </script>
    ```
    - v-once
        - 你可以在根元素上添加 v-once 特性以确保这些内容只计算一次然后缓存起来
            - 优点：会缓存起来，提高性能
        - 尽量少用
        - 缺点：使用 v-once 但也会出现一些问题，具体查看 [官方文档](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E9%80%9A%E8%BF%87-v-once-%E5%88%9B%E5%BB%BA%E4%BD%8E%E5%BC%80%E9%94%80%E7%9A%84%E9%9D%99%E6%80%81%E7%BB%84%E4%BB%B6)

## 第5章 Vue 中的动画特效
- ### 5-1 Vue动画 - Vue中CSS动画原理
- ### 5-2 在Vue中使用 animate.css 库
- ### 5-3 在Vue中同时使用过渡和动画
- ### 5-4 Vue中的 Js 动画与 Velocity.js 的结合
- ### 5-5 Vue中多个元素或组件的过渡
- ### 5-6 Vue中的列表过渡
- ### 5-7 Vue中的动画封装
- ### 5-8 本章小节

## 第6章 Vue 项目预热
- ### 6-1 Vue项目预热 - 环境配置
    - 1.安装node
    - 2.链接 git 仓库
        - 1.生成 sshkey
            ```ssh-keygen -t rsa -C "xxxxx@xxxxx.com"```
        - 2.查看公钥
            ```cat ~/.ssh/id_rsa.pub```
        - 3.在github仓库中 - 设置 - SSH公钥中，添加该公钥
    - 3.项目初始化
        ```
        # 全局安装 vue-cli
        $ npm install --global vue-cli

        # 创建一个基于 webpack 模板的新项目
        $ vue init webpack my-project

        # 安装依赖, 走你
        $ cd my-project
        $ npm install
        $ npm run dev
        ```
        - 项目初始化时的 **问题翻译**
            ```
            $ vue init webpack travel

            ? Target directory exists. Continue? (Y/n) yes
            ? Target directory exists. Continue? Yes
            ? Project name (travel)     // 回车默认选择，或者重新输入
            ? Project name travel
            ? Project description (A Vue.js project)
            ? Project description A Vue.js project
            ? Author (username <xxxxxxx@qq.com>)
            ? Author username <xxxxxxx@qq.com>

            ? Vue build runtime standalone
            > Runtime + Compiler: recommended for most users

            ? Install vue-router? (Y/n) y
            ? Install vue-router? Yes
            ? Use ESLint to lint your code? (Y/n) y
            ? Use ESLint to lint your code? Yes
            ? Pick an ESLint preset (Use arrow keys)
            ? Pick an ESLint preset Standard
            ? Set up unit tests (Y/n) n     // 单元测试
            ? Set up unit tests No
            ? Setup e2e tests with Nightwatch? (Y/n) n  // e2e tests 端到端测试又叫功能测试，站在用户视角，使用各种功能
            ? Setup e2e tests with Nightwatch? No
            ? Should we run `npm install` for you after the project has been created? (recom
            ? Should we run `npm install` for you after the project has been created? (recom
            mended) npm
            ```
    - 4.解决eslint在.vue中没有提示的问题
        - .vscode/setting.json
            ```json
            {
                // An array of language ids which should be validated by ESLint
                "eslint.validate": [
                    "javascript",
                    "javascriptreact",
                    {
                        "language": "vue",  // 添加 vue 文件为 eslint 的检测文件
                        "autoFix": true
                    }
                ],
            }
            ```


- ### 6-2 Vue项目预热 - 项目代码介绍
    - [参考链接](http://vuejs-templates.github.io/webpack/structure.html)
    
    ```
    Vue.js 目录结构
    + |- /build             // 项目构建(webpack)相关代码
    + |- /config            // 配置目录，包括端口号等
    + |- /node_modules
    + |- /src
        + |- /assets        // 放置一些图片，如logo等
        + |- /components    // 组件文件，可以不用。
        + |- /router
            |- App.vue
            |- main.js
    + |- /static            // 静态资源目录，如图片、字体等。
    |- .babelrc
    |- .editorconfig
    |- .eslintignore
    |- .eslintrc.js
    |- .gitignore
    |- .postcssrc.js
    |- index.html.json
    |- package-lock.json
    |- package.json
    |- README.md
    ```

- ### 6-3 Vue项目预热 - 单文件组件与Vue中的路由
    - #### 6-3-1 单文件组件
        - App.vue **是整个应用的根组件**
        - 下面这段代码，就是 单文件组件
        - 由三部分组成 template, script, style
        ```html
        // src/App.vue
        <template>
            <div id="app">
                <img src="./assets/logo.png">
                <router-view/>
                <!-- 显示的是当前路由地址所对应的内容 -->
            </div>
        </template>

        <script>
            export default {
                name: 'App'
            }
        </script>

        <style>
        #app {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            margin-top: 60px;
        }
        </style>
        ```

    - #### 6-3-2 Vue中的路由
        - 什么是路由？
            - 路由就是根据网址的不同，返回不同的内容给用户
        - 在 ```src/App.vue``` 文件中，有个 ```<router-view/>``` 标签
        - 我们先回到入口文件 ```src/main.js```
            ```js
            // src/main.js
            import Vue from 'vue'
            import App from './App'
            import router from './router'   // 引入路由配置文件 router/index.js

            Vue.config.productionTip = false

            new Vue({
                el: '#app',
                router,    // 使用 router。这里是es6语法，等于 router: router
                components: { App },
                template: '<App/>'
            })
            ```
        - 再看 **路由配置文件**
            ```js
            // src/router/index.js
            import Vue from 'vue'
            import Router from 'vue-router'
            import HelloWorld from '@/components/HelloWorld'    // @ 指的就是 src 目录

            Vue.use(Router)

            export default new Router({
                routes: [
                    {
                    path: '/',      // 如果访问跟路径
                    name: 'HelloWorld',
                    component: HelloWorld     // 就加载 HelloWorld 组件
                    }
                ]
            })
            ```


- ### 6-4 Vue项目预热 - 单页应用VS多页应用
    - #### 6-4-1 多页应用
        - 每次页面跳转，都返回新的 HTML
        - 优点：首屏时间快，SEO效果好
        - 缺点：页面切换慢
    - #### 6-4-2 单页应用
        - 页面跳转，通过js渲染
        - 优点：页面切换快
        - 缺点：首屏时间稍慢，SEO差 (vue服务器端渲染 可解决SEO问题)
        - 它是如何做到，不请求 HTML，但是页面却会跟着变呢？
            - js 监控 url 变化，切换页面时，通过js 清除页面内容，然后再把 新页面的内容挂载到页面上
            - 这时候，路由不是后端来做了，而是前端来做的
    - Vue 中的 **跳转链接**
        - 在过去，我们都是用 ```<a></a>``` 标签 来做跳转的
        - 但是，在Vue中，由于是单页面应用，所以不能用 ```<a></a>``` 标签
        - 要用 ```<router-link></router-link>```
        ```html
        <template>
            <div>
                <div>home</div>
                <router-link to="/list">列表页</router-link>
            </div>
        </template>

        <script>
        export default {
            name: 'Home'
        }
        </script>

        <style></style>
        ```
        - 但是由于 **单页面组件** 中的 ```<template></template>``` 只能有一个根标签，所以外层还需要包一个 ```<div></div>```

- ### 6-5 Vue项目预热 - 项目代码初始化
    - #### 1.限制缩放
        ```html
        // index.html
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        ```
    - #### 2.重置样式
        - ```npm i minireset.css```
        - 在入口文件 引入
            ```js
            // src/main.js
            import Vue from 'vue'
            import App from './App'
            import router from './router'
            import 'minireset.css'    // 引入重置样式

            Vue.config.productionTip = false

            new Vue({
                el: '#app',
                router,
                components: { App },
                template: '<App/>'
            })
            ```
        - 此外重置样式还有：normalize.css, reset.css, minireset.css
    - #### 3.1px像素边框的问题
        - 解决方案
            - [border.css](https://blog.csdn.net/qq_36407748/article/details/80958774)
            - [border-1px](https://github.com/yscoder/border-1px)
        - 用法
            ```js
            // src/main.js
            import Vue from 'vue'
            import App from './App'
            import router from './router'
            import 'minireset.css'
            import '@/assets/styles/border.css'     // 在这里直接引入即可

            Vue.config.productionTip = false

            new Vue({
                el: '#app',
                router,
                components: { App },
                template: '<App/>'
            })
            ```
        - 使用方法：
            - 在对于的 html 中，加上 对于的 class 即可
            ```html
            <li class="border-bottom">
                <img src="3.jpg">
            </li>
            ```
        - 参考 [《7-6-2 1px 1像素边框 的使用》](#7-6-2-1px-1像素边框-的使用)
    - #### 4.移动端 300毫秒 点击延迟问题
        - 问题：在移动端开发中，在某些机型、某些浏览器，当你使用 click事件 的时候，这个click事件 会延迟 300毫秒 才执行，这样的话用户体验就不是特别好了
        - 解决方案：fastClick
        - 安装 ```npm i fastclick```
        - 使用
            ```js
            // src/main.js
            import Vue from 'vue'
            import App from './App'
            import router from './router'
            import fastClick from 'fastclick'       // 引入
            import 'minireset.css'
            import '@/assets/styles/border.css'

            Vue.config.productionTip = false
            fastClick.attach(document.body)         // 配置使用

            new Vue({
                el: '#app',
                router,
                components: { App },
                template: '<App/>'
            })
            ```

            
## 第7章 项目实战 - 旅游网站首页开发
- ### 7-1 Vue项目首页 - header区域开发
    - 7-1-1 使用 stylus
        - 什么是 stylus ?
            - 类似于 less 或者 Sass, 可以帮助我们在css 中，使用变量、mixin .. 这种东西
        - 安装 stylus ```npm i stylus stylus-loader```
    - 7-1-2 我们先来看一下要做的首页UI设计图
        <!-- ![首页UI设计图](https://github.com/946629031/Vue.js/blob/master/img/7-1-1_index.jpg) -->
    - 7-1-3 首页 header 部分的开发
        - 下面我们来讲，怎么将首页拆分成组件
        ```
        项目目录
        + |- /build
        + |- /config
        + |- /node_modules
        + |- /src
            + |- /assets
            + |- /pages
                + |- /home
                    + |- /components
                        |- Header.vue       // 首页 header 组件
                      |- Home.vue
            + |- /router
              |- App.vue
              |- main.js
        + |- /static
        |- .babelrc
        |- .editorconfig
        |- .eslintignore
        |- .eslintrc.js
        |- .gitignore
        |- .postcssrc.js
        |- index.html
        |- package-lock.json
        |- package.json
        |- README.md
        ```

    ```html
    // /src/pages/home/Home.vue
    <template>
    <div>
        <home-header></home-header>  <!-- 使用 HomeHeader 组件 -->
    </div>
    </template>

    <script>
    import HomeHeader from './components/Header'
    export default {
    name: 'Home',
        components: {
            HomeHeader // 将组件Header，注册到局部组件
        }
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    </style>
    ```

    ```html
    // /src/pages/home/components/Header.vue
    <template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">输入城市/景点/游玩主题</div>
        <div class="header-right">城市</div>
    </div>
    </template>

    <script>
    export default {
        name: 'Home'
    }
    </script>

    <!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
    <style lang="stylus" scoped>
        .header
            display: flex
            line-height: .86rem
            background: #00bcd4
            color: #fff
            font-size: 16px

            .header-left
                width: .64rem
                float: left
            .header-input
                flex: 1
                background: #fff
                height: .64rem
                line-height: .64rem
                margin: .12rem 0 0 .2rem
                border-radius: .1rem
                color: #ccc
            .header-right
                width: 1.24rem
                float: right
    </style>
    ```
    - 7-1-4 遇到的问题
        - #### 如何在手机上预览vue项目
            - 1.修改config文件夹下的index.js文件:
                ```js
                module.exports = {
                    dev: {
                        host: '0.0.0.0' // 原为: host: 'localhost'
                    }
                }
                ```
            - 2.查询本地局域网ip
                - window: ctrl+r输入cmd回车,打开命令提示符,输入ipconfig,查看本地ip 
                - mac：点右上角状态wifi图标，选择更多偏好设置即可看见本机局域网ip


- ### 7-2 Vue项目首页 - iconfont 的使用和代码优化和代码优化
    - #### 7-2-1 iconfont的使用
        - 7-2-1-1 iconfont下载流程
            - 1.选择需要的图标 -> 加入到购物车 -> 点开购物车 -> 将所选图标 添加至项目 -> 打开 [我的项目](https://www.iconfont.cn/manage/index) -> 下载至本地
        - 7-2-1-2 哪些文件有用？
            - 下载解压后，发现有很多文件
            - 我们保留
                - 字体文件  ( .eot .svg .ttf .woff )
                - iconfont.css
        - 7-2-1-3 将 iconfont 放进项目里
            ```
            项目目录
            + |- /build
            + |- /config
            + |- /node_modules
            + |- /src
                + |- /assets
                    + |- /styles
                        + |- /iconfont          // 添加文件夹
                            |- iconfont.eot     // 添加文件
                            |- iconfont.svg
                            |- iconfont.ttf
                            |- iconfont.woff
                            |- iconfont.woff2
                        |- iconfont.css       // 添加文件
                + |- /pages
                + |- /router
                |- App.vue
                |- main.js
            + |- /static
            |- index.html
            |- package.json
            |- README.md
            ```
        - 7-2-1-4 将 iconfont.css 里 字体文件 地址修改正确
            - 如 在各个字体文件前，加 ./iconfont/
            ```css
            @font-face {font-family: "iconfont";
                src: url('./iconfont/iconfont.eot?t=1568849960214'); /* IE9 */
                src: url('./iconfont/iconfont.eot?t=1568849960214#iefix') format('embedded-opentype'), /* IE6-IE8 */
                url('data:application/x-font-woff2;charset=utf-8;base64,....') format('woff2'),
                url('./iconfont/iconfont.woff?t=1568849960214') format('woff'),
                url('./iconfont/iconfont.ttf?t=1568849960214') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
                url('./iconfont/iconfont.svg?t=1568849960214#iconfont') format('svg'); /* iOS 4.1- */
                }

            .iconfont {
                font-family: "iconfont" !important;
                font-size: 16px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            /* 以下部分可以直接删除，因为使用 &#xeb99; 这种方法 */
            .iconicon_left:before { content: "\eb99"; }
            .iconicon_search:before { content: "\eb9c"; }
            .iconicon-test:before { content: "\e65c"; }
            ```

        - 7-2-1-5 在vue中引入 iconfont.css
            - ```import '@/assets/styles/iconfont.css' // 引入iconfont```
            ```js
            // src/main.js
            import Vue from 'vue'
            import App from './App'
            import router from './router'
            import fastClick from 'fastclick' // 移动端 300毫秒 点击延迟问题
            import 'minireset.css'
            import '@/assets/styles/border.css' // 1px像素边框的问题
            import '@/assets/styles/iconfont.css' // 引入iconfont

            Vue.config.productionTip = false
            fastClick.attach(document.body) // 配置使用

            /* eslint-disable no-new */
            new Vue({
                el: '#app',
                router,
                components: { App },
                template: '<App/>'
            })
            ```
        - 7-2-1-6 在vue中使用 iconfont 字体图标
            - 1.添加 ```class="iconfont"```
            - 2.在 [iconfont 我的项目](https://www.iconfont.cn/manage/index) 中，鼠标hover图标 即可复制图标代码，如 ```&#xeb99;```
            ```html
            <template>
            <div class="header">
                <div class="header-left">
                    <span class="iconfont">&#xeb99;</span>  // 使用图标
                </div>
                <div class="header-input">输入城市/景点/游玩主题</div>
                <div class="header-right">城市</div>
            </div>
            </template>

            <script>
            export default {
                name: 'Home'
            }
            </script>

            <!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
            <style lang="stylus" scoped>
            </style>
            ```
    - #### 7-2-2 在vue中 定义css变量
        - 7-2-2-1 为什么要定义css变量？
            - 在项目中我们发现，某个css的值被经常使用，如主题色
            - 如果现在过圣诞节、新年... 之类的，需要改变主题色。如果是按照之前的方法一个个都写死了，当你改起来时，你会发现非常想屎，**维护性极差**
            - 这时候，如果把主题色存在一个变量里，只要我把变量改变，整个app主题色就都改变了，这是不是一个一劳永逸的方法呢
        - 7-2-2-2 这里讲解的是 stylus 变量
            ```
            项目目录
            + |- /build
            + |- /config
            + |- /node_modules
            + |- /src
                + |- /assets
                    + |- /styles
                        + |- /iconfont
                        |- iconfont.css
                        |- varibles.styl      // 创建 css变量文件
                + |- /pages
                    + |- /home
                        + |- /components
                            |- Header.vue     // 这里使用 css变量
                        |- Home.vue
                + |- /router
                |- App.vue
                |- main.js
            + |- /static
            |- index.html
            |- package.json
            |- README.md
            ```

            ```css
            /* src/assets/styles/varibles.styl */
            $bgColor = #00bcd4  /* 定义变量 */
            ```
            ```html
            // src/pages/home/components/Header.vue
            <template>
            <div class="header">
                <div class="header-left">
                    <div class="iconfont">&#xeb99;</div>
                </div>
            </div>
            </template>

            <script>
            export default {
                name: 'Home'
            }
            </script>

            <!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
            <style lang="stylus" scoped>
                @import '../../../assets/styles/varibles.styl' // 引入 css变量文件
                .header
                    display: flex
                    line-height: .86rem
                    background: $bgColor // 使用css变量
                    color: #fff
                    font-size: 16px
            </style>
            ```

    - #### 7-2-3 vue项目中 给目录取别名，例如 @ 代表 src 目录一样
        - 7-2-3-1 存在的问题
            - 在上一节中，我们发现
                - ```@import '../../../assets/styles/varibles.styl'```
                - 这里有一句很长的引用
                - 那么有没有更好的办法，可以简化呢？
            - 这时候，我们会想到前面用过的 @ 符号
                - 例如在 《7-2-5 在vue中引入 iconfont.css》 这一节中
                - 我们 ```import '@/assets/styles/border.css'```
                - 就是使用的 @ 符号，来代表 项目中 src 目录
                - 那么，这是怎么实现的呢？
        - 7-2-3-2 在 css 中使用 @ 符号
            - 其实，在 vue 中也是可以直接使用 @ 符号表示 src 目录的，但是要在前面加个 ~ 号，如下
            ```html
            <template>
            <div class="header">
                <div class="header-input">
                    <span class="iconfont">&#xeb9c;</span>
                    输入城市/景点/游玩主题
                </div>
            </div>
            </template>

            <script>
            export default {
                name: 'Home'
            }
            </script>

            <!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
            <style lang="stylus" scoped>
                // @import '../../../assets/styles/varibles.styl' // 引入 css变量文件
                @import '~@/assets/styles/varibles.styl' // ~@ 表示项目目录 src 文件夹
                .header
                    display: flex
                    line-height: .86rem
                    background: $bgColor // 使用css变量
                    color: #fff
                    font-size: 16px
            </style>
            ```
        - #### 7-2-3-3 vue项目中 给目录取别名，例如 @ 代表 src 目录一样
            - 1.我们在开发项目过程中发现，styles 目录也经常被使用
                - 而且在经常使用的过程中，很多时候需要写一串非常长的目录地址，导致非常的繁琐、不利于阅读
                - 那么怎么才能优化他，给 styles目录 起个别名呢？
            - 2.第一步，定义别名
                ```js
                // build/webpack.base.conf.js
                module.exports = {
                    resolve: {
                        extensions: ['.js', '.vue', '.json'],
                        alias: {
                        'vue$': 'vue/dist/vue.esm.js',
                        '@': resolve('src'),    // 这里是定义 @ 表示 src
                        'styles': resolve('src/assets/styles'),    // 依葫芦画瓢，我们这里定义 styles 指向 src/assets/styles 这个目录
                        }
                    }
                }
                ```
                - **注意**：当修改了 webpack 配置项的时候，需要重启服务器，才能生效
            - 3.第二步，使用该别名
                - 下面3种引入 css 的方式都是等价的
                    ```html
                    <template>
                    <div class="header"></div>
                    </template>

                    <script>
                    export default {
                        name: 'Home'
                    }
                    </script>

                    <!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
                    <style lang="stylus" scoped>
                        // @import '../../../assets/styles/varibles.styl' // 引入 css变量文件
                        // @import '~@/assets/styles/varibles.styl' // 引入 css变量文件
                        @import '~styles/varibles.styl' // 引入 css变量文件

                        .header
                            display: flex
                            line-height: .86rem
                            background: $bgColor // 使用css变量
                            color: #fff
                            font-size: 16px
                    </style>
                    ```
                - 在 .js 文件中使用别名
                    ```js
                    // src/main.js
                    import Vue from 'vue'
                    import App from './App'
                    import router from './router'
                    import 'minireset.css'
                    import '@/assets/styles/border.css'     // 使用 @ 别名
                    import 'styles/border.css'     // 使用 styles 别名，等价于上一条语句

                    Vue.config.productionTip = false

                    new Vue({
                        el: '#app',
                        router,
                        components: { App },
                        template: '<App/>'
                    })
                    ```


- ### 7-3 Vue项目首页 - 首页轮播图
    - #### 7-3-1 在 git 新分支上开发新功能，然后合并
        - 背景：为什么？
            - 为什么要在 git 新分支上开发新功能，然后合并？
            - 1.在真正的企业级别开发之中，我们每开发一个功能，实际上是要创建一个 git 分支的
            - 2.然后在分支上开发新功能 ( 或者修复Bug )
            - 3.当我们代码开发完成之后，我们再把 分支上的代码 合并到 master 主分支上
        - 7-3-1-2 怎么新建分支？
            - 1.打开 [github 项目链接](https://github.com/946629031/Travel)
            - 2.在左上方，找到 ```Branch: master``` 按钮
            - 3.点开该按钮，在里面输入 新分支名，然后确认创建即可
        - 7-3-1-3 创建完新分支，下一步呢？
            - 1.将远程仓库的代码 pull 到本地
                ```shell
                $ git pull
                From https://github.com/946629031/Travel
                * [new branch]      index-swiper -> origin/index-swiper
                Already up to date.
                ```
            - 2.切换到新分支下
                ```shell
                $ git checkout index-swiper
                Switched to branch 'index-swiper'
                ```
            - 3.检查各分支状态
                - 如果有修改了，但未提交的文件，```git status``` 后会被标红
                ```shell
                $ git status
                On branch index-swiper
                Your branch is up to date with 'origin/index-swiper'.

                nothing to commit, working tree clean
                ```
            - 4.进入开发模式
                ```shell
                $ npm run dev
                ```
    - #### 7-3-2 轮播图 开发
        - 1.轮播图使用的插件 [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
        - 2.安装插件 ```npm install vue-awesome-swiper@2.6.7 --save```
        - 3.配置
            ```js
            // src/main.js
            import Vue from 'vue'
            import VueAwesomeSwiper from 'vue-awesome-swiper'

            // require styles
            import 'swiper/dist/css/swiper.css'

            Vue.use(VueAwesomeSwiper, /* { default global options } */)
            ```
        - 4.新建 Swiper.vue 文件
            ```
            项目目录
            + |- /build
            + |- /config
            + |- /node_modules
            + |- /src
                + |- /assets
                + |- /pages
                    + |- /home
                        + |- /components
                            |- Header.vue
                            |- Swiper.vue       // 创建 Swiper.vue 文件
                        |- Home.vue
                + |- /router
                |- App.vue
                |- main.js
            + |- /static
            |- index.html
            |- package.json
            |- README.md
            ```
        - 5.Swiper.vue
            ```html
            // src/pages/home/components/Swiper.vue
            <template>
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img src="url.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="url.jpg">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            </template>

            <script>
            export default {
                name: 'HomeSwiper',
                data () {
                    return {
                        swiperOption: {
                            loop: true
                        }
                    }
                }
            }
            </script>

            <style lang="stylus" scoped>
            </style>
            ```
            ```js
            // 对象的扩展
            {
                data () {               // es6 写法
                    return {}
                }
            }

            // 等同于

            {
                data: function () {     // es5 写法
                    return {}
                }
            }
            ```
        - 6.将 Swiper.vue 组件注册到 Home.vue 中，并使用
            ```html
            // src/pages/home/Home.vue
            <template>
            <div>
                <home-header></home-header>
                <home-swiper></home-swiper>  <!-- 使用 HomeSwiper 组件 -->
            </div>
            </template>

            <script>
            import HomeHeader from './components/Header'
            import HomeSwiper from './components/Swiper'
            export default {
            name: 'Home',
                components: {
                    HomeHeader,
                    HomeSwiper // 将组件HomeSwiper，注册到局部组件
                }
            }
            </script>

            <style scoped>
            </style>
            ```
        - ##### 7.CSS 利用 `padding-bottom` 实现固定比例的容器 - ( 轮播图 网速慢 加载时 占位问题 )
            - 问题描述
                - 1.在 Home.vue 中加个 div
                    ```html
                    // src/pages/home/Home.vue
                    <template>
                    <div>
                        <home-header></home-header>
                        <home-swiper></home-swiper>
                        <div>test</div>  <!-- 加个 div -->
                    </div>
                    </template>
                    ```
                - 2.然后在 chrome 控制台 network 右侧 找到 ```no throttling``` 然后选择 ```Slow 3G```
                    - 意思是，让项目在低网速的环境下访问
                - 3.这时候，强制刷新 ```shift + f5```
                    - 你会看到
                        - 起初，```<home-swiper>``` 是不占位的，因为图片没有加载到
                            - 这时候，```<div>test</div>``` 的位置是在 ```<home-swiper>``` 的位置上
                        - 然后，```<home-swiper>``` 里的图片，加载到一半
                            - ```<div>test</div>``` 也往下移动一半
                        - 最后，```<home-swiper>``` 里的图片，加载完全
                            - ```<div>test</div>``` 才回到它应该在位置
                    - **也就是说，从头到尾，随着图片的加载，页面元素的位置是不断发生变化的**
                        - 而这种情况，会让用户感觉到不适
            - 问题解决
                - 参考文章：
                    - [《巧用margin/padding的百分比值实现高度自适应（多用于占位，避免闪烁）》](https://segmentfault.com/a/1190000004231995)
                    - [《CSS 利用 `padding-bottom` 实现固定比例的容器》](https://www.cnblogs.com/Wayou/p/css_keep_ratio_by_padding_bottom.html)
                    - ###### 本文依赖于一个基础却又容易混淆的css知识点：当margin/padding取形式为 ```百分比``` 的值时，无论是left/right，还是 ```top/bottom```，都是以 ```父元素的width``` 为参照物的！
                - 1.因为 轮播图 宽高比是 750:200，所以 200/750 = 26.66%
                - 2.实现 固定比例的容器
                    - 这种方式 实现 **固定比例的容器**，无论 用户屏幕多大，都能完美适配
                    ```html
                    // src/pages/home/components/Swiper.vue
                    <template>
                        <div class="wrapper">
                            <swiper :options="swiperOption">
                                <swiper-slide>
                                    <img src="url.jpg">
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="url.jpg">
                                </swiper-slide>
                                <div class="swiper-pagination"  slot="pagination"></div>
                            </swiper>
                        </div>
                    </template>

                    <script>
                    export default {
                        name: 'HomeSwiper',
                        data () {
                            return {
                                swiperOption: {
                                    loop: true
                                }
                            }
                        }
                    }
                    </script>

                    <style lang="stylus" scoped>
                        .wrapper
                            overflow: hidden
                            width: 100%                // 相对于 父元素的width
                            height: 0
                            padding-bottom: 26.66%     // 相对于 父元素的width
                    </style>
                    ```
                - 3.另一种写法
                    - 利用 vw 也是可以的，但是可能存在一定的兼容问题
                    ```html
                    <style lang="stylus" scoped>
                        .wrapper
                            width: 100%
                            height: 26.66vw
                    </style>
                    ```
        - ##### 8.vue 中 css scoped 穿透问题
            - 1.轮播图底部的 小白点
                ```html
                // src/pages/home/components/Swiper.vue
                <template>
                <div class="wrapper">
                    <swiper :options="swiperOption">
                    <swiper-slide>
                        <img src="url.jpg">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="url.jpg">
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    </swiper>
                </div>
                </template>

                <script>
                export default {
                    name: 'HomeSwiper',
                    data () {
                        return {
                            swiperOption: {
                                pagination: '.swiper-pagination', // 轮播图底部的 小白点
                                loop: true
                            }
                        }
                    }
                }
                </script>

                <style lang="stylus" scoped>
                .wrapper
                    overflow: hidden
                    width: 100%
                    height: 0
                    padding-bottom: 26.66%
                    .swiper-pagination-bullet-active
                        background: #fff    // 这样设置是无效的
                </style>
                ```
            - 2.设置了 轮播图底部的 小白点 后发现，他的点是蓝色的
                - 1.原因是因为 swiper 插件 他的 swiper.css 默认设置为 
                    ```css
                    .swiper-pagination-bullet-active {
                        background: blue;
                    }
                    ```
                - 2.尝试解决
                    ```stylus
                    <style lang="stylus" scoped>
                    .wrapper
                        overflow: hidden
                        width: 100%
                        height: 0
                        padding-bottom: 26.66%
                        .swiper-pagination-bullet-active
                            background: #fff    // 这样设置是无效的
                    </style>
                    ```
                    - 无效的原因：
                        - 1.因为 ```<style lang="stylus" scoped>``` 设定了 scoped (作用域)，该作用域只对 该 .vue 文件有效
                        - 2.而 ```.swiper-pagination-bullet-active``` 是 swiper 插件自动生成的，不在当前的 .vue 文件中
                        - 3.所以 这样设置是无效的
                - 3.解决方法
                    - scoped 样式穿透 以后，就不受 scoped 作用域 的限制了
                    ```stylus
                    <style lang="stylus" scoped>
                        .wrapper >>> .swiper-pagination-bullet-active  // scoped 穿透 写法
                            background: #fff
                        .wrapper
                            overflow: hidden
                            width: 100%
                            height: 0
                            padding-bottom: 26.66%
                    </style>
                    ```
        - 9.把图片数据写在 组件的 data 数据中, 用 v-for 去循环
            ```html
            // src/pages/home/components/Swiper.vue
            <template>
                <div class="wrapper">
                    <swiper :options="swiperOption">
                    <!-- slides -->
                    <swiper-slide v-for="item of swiperList" :key="item.id">
                        <img :src="item.url">
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    </swiper>
                </div>
            </template>

            <script>
            export default {
                name: 'HomeSwiper',
                data () {
                    return {
                    swiperOption: {
                        pagination: '.swiper-pagination', // 轮播图底部的 小白点
                        loop: true
                    },
                    swiperList: [{
                        id: '0001',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/3ff47fa622d07edad492c2859a5ad32f.jpg_750x200_3df30168.jpg'
                    }, {
                        id: '0002',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/0fa39f9f5e66189e85b5c6e54278587d.jpg_750x200_86c8f2d8.jpg'
                    }]
                    }
                }
            }
            </script>

            <style lang="stylus" scoped>
            .wrapper >>> .swiper-pagination-bullet-active
                background: #fff
            .wrapper
                overflow: hidden
                width: 100%
                height: 0
                padding-bottom: 26.66%
            </style>
            ```
    - #### 7-3-3 git 新分支上开发新完后，怎么合并到 master 主分支上？
        - 1.把开发完分支的内容 **推送到远程仓库**
            - 由于之前是在 index-swiper 分支上开发的，现在开发完成后，需要做一下收尾工作
                - ```git add .```
                - ```git commit```
                - ```git push```
        - 2.把 分支 合并到 master主分支上
            - ```git checkout master```
            - ```git merge origin/index-swiper```
                - 将 远程仓库origin上的index-swiper分支, merge 到当前的 master branch 上, origin是默认远程仓库名
            - ```git push```


- ### 7-4 Vue项目首页 - 图标区域页面布局
    <!-- - ![设计效果图](https://github.com/946629031/Vue.js/blob/master/img/7-1-1_index.jpg) -->
    - 明确目标
        - 看上图。接下来，我们要做的部分，是轮播图下面这个 icon 部分
    - 7-4-1 创建 开发新功能的 分支，再 pull 到本地
        - [项目 github](https://github.com/946629031/Travel) 上创建分支
        - 拉取新分支到本地
            ```shell
            $ git pull
            From https://github.com/946629031/Travel
            * [new branch]      index-icons -> origin/index-icons
            Already up to date.
            ```
        - 切换到新分支
            ```shell
            $ git checkout index-icons
            Switched to a new branch 'index-icons'
            ```
        - ```npm run dev``` 进入开发模式
    - #### 7-4-2 纯css 固定比例伸缩 容器 - 适配任意屏幕
        - 不管屏幕大小，元素位置都是固定的，自动适配任意屏幕
        - 主要知识点
            - [《css多种 水平垂直 居中方式》](https://blog.csdn.net/qq_41893551/article/details/101073529)
            - [CSS 利用 padding-bottom 实现固定比例的容器 - ( 轮播图 网速慢 加载时 占位问题 )](#7css-利用-padding-bottom-实现固定比例的容器----轮播图-网速慢-加载时-占位问题-)
            - [本文依赖于一个基础却又容易混淆的css知识点：当margin/padding取形式为 百分比 的值时，无论是left/right，还是 top/bottom，都是以 父元素的width 为参照物的！](#本文依赖于一个基础却又容易混淆的css知识点当marginpadding取形式为-百分比-的值时无论是leftright还是-topbottom都是以-父元素的width-为参照物的)
        - 先看效果图
            <!-- - ![适配任意屏幕](https://github.com/946629031/Vue.js/blob/master/img/7-4-1_index_icons.jpg) -->
        ```html
        // src/pages/home/components/Icons.vue
        <template>
            <div class="icons">
            <div class="icon">
                <div class="img-wrapper">
                <img src="https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
                </div>
                <div class="keywords">景点门票</div>
            </div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            </div>
        </template>

        <script>
        export default {
        name: 'Icons'
        }
        </script>

        <style lang="stylus" scoped>
        .icons
            width: 100%
            height: 0
            padding-bottom: 50%

            .icon
                width: 25%
                padding-bottom: 25%
                height: 0
                float: left
                position: relative
                border: 1px solid #ccc // 分界线
                background: red

                .img-wrapper
                    position: relative
                    padding-bottom: 100%
                    height: 0

                    img
                        width: 60%
                        position:absolute
                        left: 0
                        right: 0
                        top:0
                        bottom: .44rem
                        margin: auto
                
                .keywords
                    font-size: .22rem
                    height: .44rem
                    line-height: .44rem
                    position: absolute
                    top: 65%
                    bottom: 0
                    left: 0
                    right: 0
                    margin: auto
        </style>
        ```
    - 到这里，首页图标区域布局 已完成

- ### 7-5 Vue项目首页 - 图标区域逻辑实现
    - 7-5-1 本节目标
        - 通过上一节 [7-4 首页图标区域布局](#7-4-vue项目首页---图标区域页面布局) 已经完成了 css 的页面布局
        - 接下来，我们要实现的是：
            - 1.根据 首页图标数据 的不同，自动更新页面图标，而不是 写死在页面上的
            - 2.如果图标个数超过8个，可以实现左右拖动，类似于轮播图的效果
    - 主要思路
        - 1.获得的 imgList 数据是一个数组，数组结构为 ```[{}, {}, {}, {}, {}...]```
            - 数组内每一个对象，就是一个 icon
            - 数组内子元素 的个数不确定，可能8个，可能十几个...
            - 但是首页上的 icon 布局，一次最多看到8个
            - 所以，我们需要对 获得的 imgList **数据再处理**，处理成8个一组，8个一组 的形式
            - 然后，在通过 v-for 循环展示到页面上
        - 2.根据 上面分成的 8个一组，8个一组 的数据，再分别放在 轮播图的两个页面上 ```<swiper-slide></swiper-slide>```
    - 代码
        ```html
        <template>
            <div class="icons">
            <swiper>
                <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="img-wrapper">
                    <img :src="item.url">
                    </div>
                    <div class="keywords">{{item.name}}</div>
                </div>
                </swiper-slide>
            </swiper>
            </div>
        </template>

        <script>
        export default {
            name: 'Icons',
            data () {
                return {
                    imgList: [{
                        id: '0001',
                        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        name: '景点门票'
                    }, {
                        id: '0002',
                        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        name: '广州必游'
                    }, {
                        id: '0003',
                        url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                        name: '动植物园'
                    }, {
                        id: '0004',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                        name: '自然风光'
                    }, {
                        id: '0005',
                        url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        name: '一日游'
                    }, {
                        id: '0006',
                        url: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                        name: '水上乐园'
                    }, {
                        id: '0007',
                        url: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                        name: '亲子游'
                    }, {
                        id: '0008',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
                        name: '长隆度假区'
                    }, {
                        id: '0009',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
                        name: '广州塔'
                    }, {
                        id: '0010',
                        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
                        name: '广州融创'
                    }]
                }
            },
            computed: {
                pages () {
                    const pages = []
                    this.imgList.forEach((item, index) => {
                        const page = Math.floor(index / 8)
                        if (!pages[page]) pages[page] = [] // 如果为空
                        pages[page].push(item)
                    })
                    return pages
                }
            },
            mounted () {
                console.log(this.pages)
            }
        }
        </script>

        <style lang="stylus" scoped>
            @import '~styles/varibles.styl';
            .icons >>> .swiper-container
                height 0
                padding-bottom: 50%
            .icon
                width: 25%
                padding-bottom: 25%
                height: 0
                float: left
                position: relative
                .img-wrapper
                    position: relative
                    padding-bottom: 100%
                    height: 0
                    img
                        width: 60%
                        position:absolute
                        left: 0
                        right: 0
                        top:0
                        bottom: .44rem
                        margin: auto
                .keywords
                    font-size: .22rem
                    height: .44rem
                    line-height: .44rem
                    position: absolute
                    top: 65%
                    bottom: 0
                    left: 0
                    right: 0
                    margin: auto
                    color: $darkTextColor
        </style>
        ```
    - #### 7-5-2 css函数 mixins
        - 有时候我们需要：一行字，如果超出规定长度，就显示省略号，如：'广州热门旅游景...'
        - 解决方法：
            - 我们只要给对应的选择器，加上3行css即可
                ```css
                overflow: hidden
                white-space: nowarp
                text-overflow: ellipsis
                ```
        - css函数 mixins
            - 问题
                - 我们发现，像类似这种css，可能会被复用到多个地方
                - 所以，它能不能像 js 那样定义成函数，然后需要时，直接调用就可以了呢？
                - 是可以的
            - 1.定义 css函数 - mixins
                ```stylus
                // src/assets/styles/mixins.styl
                ellipsis()
                    overflow: hidden
                    white-space: nowarp
                    text-overflow: ellipsis
                ```
            - 2.调用函数 mixins
                ```
                // demo.vue
                <template>
                </template>

                <script>
                </script>

                <style lang="stylus" scoped>
                @import '~styles/varibles.styl'     // 引入css变量文件
                @import '~styles/mixins.styl'       // 引入css函数 mixins文件
                    .keywords
                        font-size: .22rem
                        height: .44rem
                        line-height: .44rem
                        color: $darkTextColor       // 使用 css变量
                        ellipsis()                  // 调用 css函数 mixins
                </style>
                ```
    - 7-5-3 git 新分支上开发新完后，怎么合并到 master 主分支上？
        - 1.把开发完分支的内容 **推送到远程仓库**
            - 由于之前是在 index-swiper 分支上开发的，现在开发完成后，需要做一下收尾工作
                - ```git add .```
                - ```git commit```
                - ```git push```
        - 2.把 分支 合并到 master主分支上
            - ```git checkout master```
            - ```git merge origin/index-swiper```
                - 将 远程仓库origin上的index-swiper分支, merge 到当前的 master branch 上, origin是默认远程仓库名
            - ```git push```

- ### 7-6 Vue项目首页 - 热销推荐组件开发
    - #### 7-6-1 flex 的部分问题
        - [在 flex 项中设置 ```min-width: 0;``` -- flex 项中子元素文本溢出截断 text-overflow:ellipsis 失效问题](https://www.html.cn/archives/10319)
        - [[翻译] Flex Basis与Width的区别](https://www.jianshu.com/p/17b1b445ecd4)
            - Flex Items 的 最终宽度优先级
            - ```content –> width –> flex-basis -> ( flex-grow | flex-shrink ) -> ( limted by max | min-width ) 优先级```
        - [flex设置成1和auto有什么区别 [思否] -- flex各个取值分别是什么意思](#https://segmentfault.com/q/1010000004080910/a-1020000004121373)
        - 当 ```flex-basis: 0``` 跟 ```flex-basis: 0%``` 时
            - 当 flex-basis 设为 0 后，元素的宽度，取决于 元素内 宽度最大 的子元素，如果没有子元素 则取决于单词宽度最长的词
            - 如果 flex-basis 为 0，则 flex-grow 忽略弹性项目中内容的大小，并将行中的所有空间都视为自由空间
            - 其中，当 flex-basis 设为 百分比 后，如 ```flex-basis: 10%```，意思是 相对于父元素的 10% 宽度
            ```html
            <ul> <li>I am a simple list AND I am a simple list</li> </ul>
            <style>
                ul { display: flex; background: #ccc} 
                li { padding: 4px; background: #2798bd;}
                li { flex-basis: 0; }
            </style>
            ```
            - [[参考链接] 该flex-basis因素](https://stackoverflow.com/questions/43520932/make-flex-grow-expand-items-based-on-their-original-size)

    - #### 7-6-2 1px 1像素边框 的使用
        - 在前面 [《1px像素边框的问题》](#31px像素边框的问题) 已经介绍过了，下面讲怎么使用
        - 使用方法：
            - 在对于的 html 中，加上 对于的 class 即可
            ```html
            <li class="border-bottom">
                <img src="3.jpg">
            </li>
            ```
    - 7-6-3 本节模块代码
        ```html
        <template>
            <div>
              <div class="home-recommend-title">热销推荐</div>
              <ul class="home-recommend-list">
                <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                  <img class="home-recommend-img" :src="item.imgUrl" alt="">
                  <div>
                    <p class="home-recommend-item-title">{{item.title}}</p>
                    <p class="home-recommend-item-desc">{{item.desc}}</p>
                    <p class="home-recommend-item-price"><span>{{item.price}}</span>起</p>
                  </div>
                </li>
              </ul>
            </div>
        </template>

        <script>
        export default {
          name: 'HomeRecommend',
          data () {
            return {
              recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/35/35ae31e6e6c8032ea3.img.jpg_200x200_7f6d7753.jpg',
                title: '广州国瑞欢乐世界',
                desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡',
                price: '￥99'
              }, {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/34/34c81bc0470c6d6f90.water.jpg_200x200_5f2fbb19.jpg',
                title: '广州PORORO主题乐园',
                desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡',
                price: '￥168'
              }, {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_200x200_c7102a23.jpg',
                title: '南沙百万葵园',
                desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡',
                price: '￥50'
              }, {
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/24/3468c8d9e250848093835fbb.png_200x200_8f8a29ee.png',
                title: '望谷温泉度假村',
                desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡',
                price: '￥156'
              }]
            }
          }
        }
        </script>

        <style lang="stylus" scoped>
        @import '~styles/mixins.styl'
          .home-recommend-title
            background #efefef
            line-height 2.7
            font-size .3rem
            text-align left
            padding 0 .3rem
          .home-recommend-list
            .item
              display flex
              .home-recommend-img
                width 1.9rem
                height 1.9rem
                padding .2rem
              div
                min-width 0
                p
                  font-size .3rem
                  color #999
                  ellipsis()
                .home-recommend-item-title
                  font-weight bold
                  color #333
                  padding-top .2rem
                .home-recommend-item-desc
                  line-height .5rem
                .home-recommend-item-price
                  line-height .8rem
                  span
                    color orange
                    font-weight bold
                    font-size .35rem
                    padding-right .1rem
        </style>
        ```

    
- ### 7-7 Vue项目首页 - 开发周末游组件
- ### 7-8 Vue项目首页 - 使用 axios 发送 ajax 请求-ajax-请求
- ### 7-9 Vue项目首页 - 首页父子组组件间传值
