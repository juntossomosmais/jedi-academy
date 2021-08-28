const { description } = require('../../package')
const codeContainers = require("./container/codeContainer");
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'JS+ Playbook',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ff7d00' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/juntossomosmais/jedi-academy',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: true,
    nav:false ,
    sidebar: {
      '/': [
        {
          title: 'CSharp',
          collapsable: true,
          children: [
            {
              title: 'Melhores práticas',
              collapsable: true,
              children: [
                'docs/csharp/best-practices/test',
              ]
            }
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ...codeContainers
  ]
  , markdown: {
    lineNumbers: true
  }
}
