import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Miaku Carbon',
  description: 'The Handbook Carbon-lang',

  theme: defaultTheme({
    base: '/carbon_book/',
    dest: 'public',
    logo: 'https://vuejs.press/images/hero.png',
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



