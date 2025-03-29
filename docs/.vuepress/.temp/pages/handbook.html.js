import comp from "/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook.html.vue"
const data = JSON.parse("{\"path\":\"/handbook.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Справочник по языку Carbon\",\"slug\":\"справочник-по-языку-carbon\",\"link\":\"#справочник-по-языку-carbon\",\"children\":[]},{\"level\":2,\"title\":\"Источники, для обучения Carbon\",\"slug\":\"источники-для-обучения-carbon\",\"link\":\"#источники-для-обучения-carbon\",\"children\":[]},{\"level\":2,\"title\":\"Сложности, с которыми можно столкнуться при обучении\",\"slug\":\"сложности-с-которыми-можно-столкнуться-при-обучении\",\"link\":\"#сложности-с-которыми-можно-столкнуться-при-обучении\",\"children\":[]},{\"level\":2,\"title\":\"Пожелания к обучению\",\"slug\":\"пожелания-к-обучению\",\"link\":\"#пожелания-к-обучению\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"handbook.md\"}")
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
