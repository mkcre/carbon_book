import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Miaku Carbon',
  description: 'The Handbook Carbon-lang',
  base: '/carbon_book/',
  theme: defaultTheme({
    
    navbar: [
      {
        text: 'Handbook Carbon',
        link: '/'
      },
      {
        text: 'GitHub Carbon',
        link: '/'
      }
    ],
    themePlugins: {
      copyCode: true,
      
    },
  }),

  bundler: viteBundler(),
})



