import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "ja-JP",
  title: "ImakiroOfficial",
  description: "App",
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
