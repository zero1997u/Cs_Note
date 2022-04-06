// .vuepress/config.js
module.exports = {
    title:"珠峰计划",
    description:"为cser求职.......",
    head:[
      ['link',{rel:'icon',href:'/favicon.ico'}]
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: '更新时间',
        // 导航
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        // 侧边栏
        // sidebar: 'auto'
        sidebar:[
            {
                title: 'Java',   // 必要的
                path: '/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/java/object',
                    '/java/extend'
                ]
            },
            {
                title: '机器学习',
                children: [ /* ... */ ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    },
}