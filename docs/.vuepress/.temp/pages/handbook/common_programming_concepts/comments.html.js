import comp from "/home/shiku/proj/miaku_handbook_template/docs/.vuepress/.temp/pages/handbook/common_programming_concepts/comments.html.vue"
const data = JSON.parse("{\"path\":\"/handbook/common_programming_concepts/comments.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"handbook/common_programming_concepts/comments.md\"}")
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
