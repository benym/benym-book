const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

    theme: 'vdoing', // 使用依赖包主题
    // theme: require.resolve('../../vdoing'), // 使用本地主题

    title: "benym的知识笔记",
    description: 'benym的知识管理&博客',
    base: '/benym-book/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
    head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', {rel: 'icon', href: '/img/favicon-two.ico'}], //favicons，资源放在public文件夹
        ['meta', {name: 'keywords', content: 'Java,benym,blog,knowledge'}],
        ['meta', {name: 'theme-color', content: '#ff954b'}], // 移动浏览器主题颜色

        // ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 广告相关，你可以去掉
        // ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 广告相关，你可以去掉
        /*************** start 添加谷歌统计 ***********/
        // [
        //     "script",
        //     {
        //         src: "https://www.googletagmanager.com/gtag/js?id=UA-168383599-1",
        //         async: true
        //     }
        // ],
        // [
        //     "script",{},
        //     `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag(){dataLayer.push(arguments);}
        //     gtag('js', new Date());
        //     gtag('config', 'UA-168383599-1');
        //     `
        // ],
        /*************** end 添加谷歌统计 ***********/
    ],

    // 主题配置
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            // {
            //     text: '指南', link: '/pages/a2f161/', items: [
            //         {text: '主题初衷与诞生', link: '/pages/52d5c3/'},
            //         {text: '介绍', link: '/pages/a2f161/'},
            //         {text: '快速上手', link: '/pages/793dcb/'},
            //         {text: '目录结构', link: '/pages/2f674a/'},
            //         {text: '核心配置和约定', link: '/pages/33d574/'},
            //         {text: '自动生成front matter', link: '/pages/088c16/'},
            //         {text: 'Markdown 容器', link: '/pages/d0d7eb/'},
            //         {text: 'Markdown 中使用组件', link: '/pages/197691/'},
            //         {
            //             text: '相关文章', items: [
            //                 {text: '使目录栏支持h2~h6标题', link: '/pages/8dfab5/'},
            //                 {text: '如何让你的笔记更有表现力', link: '/pages/dd027d/'},
            //                 {text: '批量操作front matter工具', link: '/pages/2b8e22/'},
            //                 {text: '部署', link: '/pages/0fc1d2/'},
            //                 {text: '关于写文章和H1标题', link: '/pages/9ae0bd/'},
            //                 {text: '关于博客搭建与管理', link: '/pages/26997d/'},
            //                 {text: '在线编辑和新增文章的方法', link: '/pages/c5a54d/'},
            //             ]
            //         }
            //     ]
            // },
            // {
            //     text: '配置', link: '/pages/a20ce8/', items: [
            //         {text: '主题配置', link: '/pages/a20ce8/'},
            //         {text: '首页配置', link: '/pages/f14bdb/'},
            //         {text: 'front matter配置', link: '/pages/3216b0/'},
            //         {text: '目录页配置', link: '/pages/54651a/'},
            //         {text: '添加摘要', link: '/pages/1cc523/'},
            //         {text: '修改主题颜色和样式', link: '/pages/f51918/'},
            //         {text: '评论栏', link: '/pages/ce175c/'},
            //     ]
            // },
            {
                text: 'Java', link: '/pages/225727/',
                items: [
                    {text: 'Java',
                        items: [
                            {text: 'Java-基础', link: '/pages/225727/'},
                            {text: 'Java-集合', link: '/pages/9786e5/'},
                            {text: 'Java-多线程与并发', link: '/pages/487c60/'},
                            {text: 'Java-JVM', link: '/pages/0a146e/'},
                            {text: 'Java-IO', link: '/pages/4aef64/'}
                        ]
                    },
                    {
                        text: 'Python', link: '/pages/0de67d/', items: [
                            {text: 'Python-基础', link: '/pages/0de67d/'},
                            {text: 'Python-机器学习', link: '/pages/43f8b9/'},
                        ]
                    }
                ]
            },
            {
                text: '分布式与中间件', link: '', items: [
                    {text: 'Kafka', link: '/pages/b53b0f/'},
                    {text: 'Redis', link: '/pages/847591/'},
                    {text: '分布式事务', link: '/pages/aaed8c/'},
                ]
            },
            {
                text: '数据库', link: '/pages/0f7e8e/', items: [
                    {text: 'MySQL', link: '/pages/0f7e8e/'}
                ]
            },
            {
                text: '框架',
                items: [
                    // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
                    {
                        text: 'Spring',
                        items: [
                            {text: 'SpringIOC', link: '/pages/6e0b99/'},
                            {text: 'SpringAOP', link: '/pages/a657d3/'},
                        ],
                    },
                ],
            },
            {
                text: '算法', link: '/pages/83cdcf/', items: [
                    {text: '剑指Offer', link: '/pages/83cdcf/'},
                    {text: 'LeetCode', link: '/pages/b2b5b5/'},
                    {text: '排序算法', link: '/pages/8d006a/'},
                ]
            },
            {text: '实践', link: '/pages/f6b758/'},
            {
                text: '开源项目', link: '/pages/3147fe/',
                items: [
                    {
                        text: 'Rpas',
                        items: [
                            {text: 'Utils', link: '/pages/3147fe/'},
                            {text: 'Core', link: '/pages/b127c7/'}
                        ],
                    },
                ],
            },
            {
                text: '索引', link: '/pages/2c6c1b/', items: [
                    {text: '概览', link: '/pages/2c6c1b/'},
                    {text: '归档', link: '/archives/'},
                    // {text: '分类', link: '/categories/'},
                    {text: '标签', link: '/tags/'},
                ]
            },
            {text: '目录', link: '/pages/059f1f/'},
            {text: '关于', link: '/about/'},
            // {text: '案例', link: '/pages/5d571c/'},
            // {text: '问答', link: '/pages/9cc27d/'},
            // {text: '💖支持', link: '/pages/1b12ed/'},
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: 'https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/img/guideline-two-left.png', // 导航栏logo
        repo: 'benym/benym-book/', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

        docsDir: 'docs', // 编辑的文件夹
        editLinks: true, // 编辑链接
        editLinkText: '编辑',

        // 以下配置是Vdoing主题改动的和新增的配置
        sidebar: {mode: 'structuring', collapsable: false}, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

        // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
        updateBar: { // 最近更新栏
            showToArticle: true, // 显示到文章页底部，默认true
            // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        },
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        // bodyBgImg: [
        //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
        //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
        //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
        // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。


        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        // contentBgStyle: 1,

        category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

        author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
            name: 'benym', // 必需
            href: 'https://github.com/benym' // 可选的
        },
        blogger: {
            avatar: 'https://image-1-1257237419.cos.ap-chongqing.myqcloud.com/sitelogo3.jpg/zipstyle',
            name: 'benym',
            slogan: '惟其艰难，才更显勇毅🍂惟其笃行，才弥足珍贵',
        },
        social: { // 社交图标，显示于博主信息栏和页脚栏
            // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '邮件',
                    link: 'mailto:675260709@qq.com'
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/benym'
                },
                {
                    iconClass: 'icon-zhihu',
                    title: '知乎',
                    link: 'https://www.zhihu.com/people/xu-ge-yuan-ba-68'
                }
            ]
        },
        footer: { // 页脚信息
            createYear: 2018, // 博客创建年份
            copyrightInfo: 'benym | <a href="https://github.com/benym/benym-book/blob/master/LICENSE" target="_blank">MIT License</a> | <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">渝ICP备18012574号</a>', // 博客版权信息，支持a标签
        },
        // html广告
        // htmlModules,
        extendFrontmatter: {
            author: {
                name: 'benym',
                link: 'https://github.com/benym'
            }
        },
    },

    // 插件
    plugins: [
        // [require('./plugins/love-me'), { // 鼠标点击爱心特效
        //   color: '#11a8cd', // 爱心颜色，默认随机色
        //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
        // }],

        ['fulltext-search'], // 全文搜索

        // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        //   thirdparty: [ // 可选，默认 []
        //     {
        //       title: '在GitHub中搜索',
        //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
        //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        //     },
        //     {
        //       title: '在npm中搜索',
        //       frontUrl: 'https://www.npmjs.com/search?q=',
        //     },
        //     {
        //       title: '在Bing中搜索',
        //       frontUrl: 'https://cn.bing.com/search?q='
        //     }
        //   ]
        // }],

        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: baiduCode || '92af11dd09d5616401db6d088dec3a2f'
            }
        ],

        ['one-click-copy', { // 代码块复制按钮
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false // whether to display on the mobile side, default: false.
        }],
        ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false // 是否展示为横向样式
            }
        }],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)',
                options: {
                    bgColor: 'rgba(0,0,0,0.6)'
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    const dayjs = require('dayjs') // https://day.js.org/
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            }
        ],
        [
            'sitemap',
            {
                hostname: 'https://cloud.benym.cn'
            },
        ],
        [
            "md-enhance",
            {
                // 配置选项
                // 启用下角标功能
                sub: true,
                // 启用上角标
                sup: true,
                // 开启脚注
                footnote: true
                // enableAll : true
            },
        ],
    ],

    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.js',
        '.vuepress/config/htmlModules.js',
    ]
}
