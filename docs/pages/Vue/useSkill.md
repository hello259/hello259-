#### 「 如何优雅的使用 VUE? 」不可不知的 VUE 实战技巧

1. [全局组件注册]

    - 一般组件应用弊端
        - 傻瓜式，太笨拙
        - 繁琐，低效

    ```js
        <template>
        <div>
            <h1>I am HelloWorld</h1>
            <Child1></Child1>
        </div>
        </template>

        <script>
        import Child1 from './child1.vue'   // 引入
        export default {
        name: 'HelloWorld',
        data(){
            return{
            }
        },
        components:{   // 注册
            Child1
        },
        props: {
            msg: String
        },
        methods:{
        }
        }
        </script>

        <style scoped lang="less">
        </style>
    ```

    - 创建全局.js 文件管理全局组件

        - 在 components 建立新的 js 文件，命名随意

        // 1 - globalComponent.js

        ```js
        import Vue from "vue"; // 引入vue

        // 处理首字母大写 abc => Abc
        function changeStr(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        /*
              require.context(arg1,arg2,arg3)
                  arg1 - 读取文件的路径
                  arg2 - 是否遍历文件的子目录
                  arg3 - 匹配文件的正则
              关于这个Api的用法，建议小伙伴们去查阅一下，用途也比较广泛
          */
        const requireComponent = require.context(".", false, /\.vue$/);
        requireComponent.keys().forEach(fileName => {
            const config = requireComponent(fileName);
            const componentName = changeStr(
                fileName.replace(/^\.\//, "").replace(/\.\w+$/, "") // ./child1.vue => child1
            );

            Vue.component(componentName, config.default || config); // 动态注册该目录下的所有.vue文件
        });
        ```

        // 2 - 将 globalComponent.js 引入 main.js

        ```js
        import global from "./components/globalComponent";
        ```

        // 3 - 使用这类组件不再需要引入和注册，直接标签使用即可
