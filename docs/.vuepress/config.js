import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Miaku Carbon',
  description: 'The Handbook Carbon-lang',

  theme: defaultTheme({
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

export default {
  base: 'carbon_book',
}



