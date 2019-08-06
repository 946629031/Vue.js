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