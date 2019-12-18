module.exports = {
  title: 'SinceChow',
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
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '编辑文档！',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Vue.js', items: [
          { text: 'Vue.js🔨', link: '/vuebase/Vue.md' },
          { text: 'Vuex🔨', link: '/vuebase/Vuex.md' },
          { text: 'VueRouter🔨', link: '/vuebase/vueRouter.md' },
          { text: 'Vue.js———三汪', link: '/vue/vue.md' },
          
        ]
      },
      {
        text: 'React.js', items: [
          { text: 'React.js🔨', link: '/react/React.md' },
          { text: 'Redux🔨', link: '/react/Redux.md' },
          
        ]
      },
      

      {
        text: 'JavaScriptBooks', items: [
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
        text: 'php', items: [
          { text: 'php基础', link: '/php/php基础' },
          { text: 'php面向对象', link: '/php/php面向对象' },
          { text: 'MySql', link: '/php/MySql' },
          { text: 'PHP操作mysql', link: '/php/PHP操作Mysql' },
          { text: 'PHP会话控制', link: '/php/PHP会话控制' },
          { text: 'Thinkphp', link: '/php/Thinkphp基础' },
          { text: 'Composer', link: '/php/Composer' },
          { text: 'Laravel', link: '/php/Laravel' },
          // { text: '错误与异常', link: '//' },
          // { text: '图像处理', link: '//' },
          
          // { text: 'XMind', link: '/php/XMind' },
        ]
      },
      {
        text: 'Notes', items: [
          { text: 'PHPstorm环境配置', link: '/php/PHPstorm环境配置' },
          { text: '环境变量配置', link: '/php/环境变量配置' },
          { text: 'vscode插件', link: '/vs/vscode插件' },
          { text: 'vuepress使用🔨', link: '/php/vuepress使用' },
        ]
      },
      {
        text: 'ErrorLog', items: [
          { text: 'Jetbrains全家桶中文乱码', link: '/php/踩坑记录' },
          { text: 'vuepress', link: '/php/vuepress踩坑' },
        ]
      },
      { text: 'Git', link: '//' },
      { text: 'Friend', link: '/php/Friend' },
      { text: '留言', link: '/about/' }
      
    ]
  }
}
