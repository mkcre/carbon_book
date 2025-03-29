import comp from "/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/getting-started/structure.html.vue"
const data = JSON.parse("{\"path\":\"/handbook/getting-started/structure.html\",\"title\":\"Hello, World! и структура проекта\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Структура проекта\",\"slug\":\"структура-проекта\",\"link\":\"#структура-проекта\",\"children\":[]},{\"level\":2,\"title\":\"Запуск кода\",\"slug\":\"запуск-кода\",\"link\":\"#запуск-кода\",\"children\":[]},{\"level\":2,\"title\":\"Запуск через Bazel\",\"slug\":\"запуск-через-bazel\",\"link\":\"#запуск-через-bazel\",\"children\":[]},{\"level\":2,\"title\":\"\",\"slug\":\"\",\"link\":\"#\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"handbook/getting-started/structure.md\"}")
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
