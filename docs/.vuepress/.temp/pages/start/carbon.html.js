import comp from "/home/shiku/proj/miaku_handbook_template/docs/.vuepress/.temp/pages/start/carbon.html.vue"
const data = JSON.parse("{\"path\":\"/start/carbon.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"start carbon now btch\",\"slug\":\"start-carbon-now-btch\",\"link\":\"#start-carbon-now-btch\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"start/carbon.md\"}")
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
