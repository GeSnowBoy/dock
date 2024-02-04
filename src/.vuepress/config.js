import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  title: "文档中心",
  description: "文档中心描述",
  base: "/doc/",
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: ["/", "/get-started"],
  }),

  bundler: viteBundler(),
});
