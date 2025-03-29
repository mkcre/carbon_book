import comp from "/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/getting-started/hello_world.html.vue"
const data = JSON.parse("{\"path\":\"/handbook/getting-started/hello_world.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Carbon и работа над компилятором\",\"slug\":\"carbon-и-работа-над-компилятором\",\"link\":\"#carbon-и-работа-над-компилятором\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"handbook/getting-started/hello_world.md\"}")
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
