import comp from "/home/shiku/proj/miaku_handbook_template/docs/.vuepress/.temp/pages/introduction/introduction1.0.html.vue"
const data = JSON.parse("{\"path\":\"/introduction/introduction1.0.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"start carbon now btch\",\"slug\":\"start-carbon-now-btch\",\"link\":\"#start-carbon-now-btch\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"introduction/introduction1.0.md\"}")
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
