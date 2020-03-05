const path = require("path");
module.exports = {
    // plugins: ["autobar"],
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@vuepress": path.join(__dirname, "./public")
            }
        }
    },
    title: "hello259首页",
    description: "hello259的前端记录",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/head-portrait.jpg"
            }
        ]
    ],
    themeConfig: {
        logo: "/head-portrait.jpg",
        nav: [{
                // 顶部导航栏
                text: "首页",
                link: "/"
            },
            {
                text: "分类",
                ariaLabel: "分类",
                items: [{
                        text: "文章",
                        link: "/page/index/index.md"
                    },
                    {
                        text: "琐碎",
                        link: "/pages/article/article/md"
                    }
                ]
            },
            {
                text: "Github",
                link: "https://github.com/dwanda"
            }
        ],
        sidebar: {
            "/pages/": [{
                    title: "es6新特性",
                    children: [
                        ["es6/es6.md", "es6新特性"],
                        ["es6/Array.md", "Array新方法"]
                    ]
                },
                {
                    title: "Vue",
                    children: [
                        ["Vue/useSkill.md", "Vue使用技巧.md"],
                        ["Vue/vue_render.md", "Vue的render函数使用.md"]
                    ]
                }
            ]
        }
    }
};