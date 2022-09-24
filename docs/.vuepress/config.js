import { defineUserConfig, defaultTheme } from "vuepress";
import { gitPlugin } from "@vuepress/plugin-git";

export default defineUserConfig({
  lang: "ja-JP",
  title: "ImakiroOfficial",
  description: "App",
  // dest: "docs/",
  // base: "/Imakiro-site/",
  plugins: [
    gitPlugin({
      contributors: false,
    }),
  ],
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "利用規約",
        link: "../terms-of-service.md",
      },
      {
        text: "プライバシー",
        link: "../privacy-policy.md",
      },
    ],
  }),
});
