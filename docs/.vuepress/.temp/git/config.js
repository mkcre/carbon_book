import { Contributors } from "/home/shiku/proj/vuepress-carbon-handbook/node_modules/@vuepress/plugin-git/lib/client/components/Contributors.js";
import { Changelog } from "/home/shiku/proj/vuepress-carbon-handbook/node_modules/@vuepress/plugin-git/lib/client/components/Changelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", Contributors);
    app.component("GitChangelog", Changelog);
  },
};
