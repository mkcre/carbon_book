export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Справочник по языку Carbon"} }],
  ["/handbook.html", { loader: () => import(/* webpackChunkName: "handbook.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook.html.js"), meta: {"title":""} }],
  ["/handbook/", { loader: () => import(/* webpackChunkName: "handbook_index.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/index.html.js"), meta: {"title":""} }],
  ["/handbook/about_carbon.html", { loader: () => import(/* webpackChunkName: "handbook_about_carbon.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/about_carbon.html.js"), meta: {"title":""} }],
  ["/handbook/foreword.html", { loader: () => import(/* webpackChunkName: "handbook_foreword.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/foreword.html.js"), meta: {"title":""} }],
  ["/handbook/guessing_game.html", { loader: () => import(/* webpackChunkName: "handbook_guessing_game.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/guessing_game.html.js"), meta: {"title":""} }],
  ["/handbook/introduction.html", { loader: () => import(/* webpackChunkName: "handbook_introduction.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/introduction.html.js"), meta: {"title":""} }],
  ["/handbook/getting-started/", { loader: () => import(/* webpackChunkName: "handbook_getting-started_index.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/getting-started/index.html.js"), meta: {"title":""} }],
  ["/handbook/getting-started/installation.html", { loader: () => import(/* webpackChunkName: "handbook_getting-started_installation.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/getting-started/installation.html.js"), meta: {"title":""} }],
  ["/handbook/projects-in-carbon/guessing_game.html", { loader: () => import(/* webpackChunkName: "handbook_projects-in-carbon_guessing_game.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/projects-in-carbon/guessing_game.html.js"), meta: {"title":""} }],
  ["/handbook/common-concepts/", { loader: () => import(/* webpackChunkName: "handbook_common-concepts_index.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/common-concepts/index.html.js"), meta: {"title":""} }],
  ["/handbook/common-concepts/comments.html", { loader: () => import(/* webpackChunkName: "handbook_common-concepts_comments.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/common-concepts/comments.html.js"), meta: {"title":""} }],
  ["/handbook/common-concepts/control_flow.html", { loader: () => import(/* webpackChunkName: "handbook_common-concepts_control_flow.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/common-concepts/control_flow.html.js"), meta: {"title":""} }],
  ["/handbook/common-concepts/data_types.html", { loader: () => import(/* webpackChunkName: "handbook_common-concepts_data_types.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/common-concepts/data_types.html.js"), meta: {"title":""} }],
  ["/handbook/common-concepts/functions.html", { loader: () => import(/* webpackChunkName: "handbook_common-concepts_functions.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/common-concepts/functions.html.js"), meta: {"title":""} }],
  ["/handbook/common-concepts/variables_and_mutability.html", { loader: () => import(/* webpackChunkName: "handbook_common-concepts_variables_and_mutability.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/common-concepts/variables_and_mutability.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/handbook/getting-started/structure.html", { loader: () => import(/* webpackChunkName: "handbook_getting-started_structure.html" */"/home/shiku/proj/vuepress-carbon-handbook/docs/.vuepress/.temp/pages/handbook/getting-started/structure.html.js"), meta: {"title":"Hello, World! и структура проекта"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
