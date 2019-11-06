module.exports = {
  title: '飞跃高山和大洋的🐟',
  // description: '毛玉翔,TimSpan.vuepress',
  head: [
    ['link', { rel: 'icon', href: '/1.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  plugins: ['@vuepress/back-to-top'],
  base: '/documents/',
  themeConfig: {
    sidebar: 'auto',
    lastUpdated: '上次更新',
    repo: 'TimSpan/documents',
    repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '编辑文档！',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Vue.js', items: [
          { text: 'Vue基础知识', link: '/vue/' },
          { text: 'Vue原理剖析', link: '/vue/principle.md' }
        ]
      },
      {
        text: 'JavaScript书籍', items: [
          { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript/你不知道的javascript上' },
          { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript/你不知道的javascript中' },
        ]
      },
      {
        text: 'Css', items: [
          { text: 'Sass基础', link: '/jishu/Sass-notes.md' },
        ]
      },
      {
        text: 'C/C++', items: [
          { text: 'C基础', link: '/C/C语言基础.md' },
        ]
      },
      {
        text: 'php', items: [
          { text: 'php基础', link: '/php/php基础.md' },
          { text: 'XMind', link: '/php/XMind.md' },
          { text: 'Thinkphp', link: '/ /' },
          { text: 'Laravel', link: '/ /' },
          { text: 'Swoole', link: '/ /' },
        ]
      },
      { text: '关于', link: '/about/' }
      
    ]
  }
}