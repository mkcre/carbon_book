import comp from "/home/shiku/proj/miaku_handbook_template/docs/.vuepress/.temp/pages/projects-in-carbon/guessing_game.html.vue"
const data = JSON.parse("{\"path\":\"/projects-in-carbon/guessing_game.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"projects-in-carbon/guessing_game.md\"}")
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
