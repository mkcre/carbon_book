import comp from "/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Справочник по языку Carbon\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Справочник по языку Carbon\",\"actions\":[{\"text\":\"getting-started\",\"link\":\"/handbook.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"the-carbon-language\",\"link\":\"/the-carbon-language\",\"details\":\"Minimal setup with markdown-centered project structure helps you focus on wri\"},{\"title\":[\"introduction\"],\"details\":\"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\"},{\"title\":[\"guessing_game\"],\"details\":\"Providing a default theme out of the box. You can also choose a community theme or create your own one.\"},{\"title\":[\"installation\"],\"details\":\"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.\"},{\"title\":[\"hello_world\"],\"details\":\"Default bundler is Vite, while Webpack is also supported. Choose the one you like!\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
