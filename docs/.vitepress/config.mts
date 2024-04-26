import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yaoo5",
  description: "I'm yaoo5.",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/yaoo5/yaoo5.github.io/blob/main/docs/:path',
      text: '在Github上编辑此页'
    },
    lastUpdated: {
      text: '最后更新时间'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '技术博客', link: '/tech/overview' },
      { text: '算法专题', link: '/leetcode/overview' },
      { text: '生活感悟', link: '/life/overview' },
      { text: '更新日志', link: '/changelog' },
      { text: '关于我', link: '/about' }
    ],
    sidebar: {
      '/leetcode': [
        { text: '目录', link: '/leetcode/overview' },
        { text: '回溯法', link: '/leetcode/backtrack' },
        {
          text: '参考',
          items: [
            {
              text: 'https://greyireland.gitbook.io',
              link: 'https://greyireland.gitbook.io/algorithm-pattern',
            }
          ]
      }
      ],
      '/tech': [
        { text: '目录', link: '/tech/overview.md' },
        {
          text: '2024',
          items: [
            { text: '04-26 | 常见限流算法', link: '/tech/rate-limit'},
            { text: '04-19 | 如何搭建个人博客', link: '/tech/blog-vitepress-github'},
          ]
        },
        { text: '更新日志', link: '/changelog.md' },
      ],
      '/life': [
        { text: 'Overview', link: '/life/overview.md' },
        {
          text: '读书',
          items: [
            { text: '2404 |《每一天梦想练习》', link: '/life/reading/everyday-dream-exercise' },
          ]
        },
        { text: '更新日志', link: '/changelog.md' },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaoo5' }
    ]
  }
})
