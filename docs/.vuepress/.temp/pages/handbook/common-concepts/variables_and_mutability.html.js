import comp from "/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/common-concepts/variables_and_mutability.html.vue"
const data = JSON.parse("{\"path\":\"/handbook/common-concepts/variables_and_mutability.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"handbook/common-concepts/variables_and_mutability.md\"}")
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
