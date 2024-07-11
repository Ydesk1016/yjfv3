import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YJF",
  description: "个人源码学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '源码初识', link: '/pages/1.源码初识.md' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      // https://github.com/Ydesk1016/vue3-source-code-notes 目前为私密仓库
      { icon: 'github', link: 'https://github.com/Ydesk1016' }
    ]
  }
})
