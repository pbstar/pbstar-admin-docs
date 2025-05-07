import { defineConfig } from "vitepress";

export default defineConfig({
  title: "PbstarAdmin",
  description:
    "Pbstar-admin 是一套全面便捷的后台管理系统解决方案，基于 micro-app、pnpm 完成微前端架构，运用 vue3、vite、pinia、element plus 等主流技术栈。",
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", href: "/pbstar-admin/logo.png" },
    ],
  ],
  base: "/pbstar-admin/",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/intro/what" },
    ],

    sidebar: [
      {
        text: "简介",
        items: [
          { text: "什么是 PbstarAdmin ?", link: "/intro/what" },
          { text: "快速开始", link: "/intro/start" },
        ],
      },
      {
        text: "功能模块",
        items: [
          { text: "Cli 脚手架", link: "/module/cli" },
          { text: "Components 组件库", link: "/module/components" },
          { text: "Assets 静态资源", link: "/module/assets" },
          { text: "Main 主应用", link: "/module/main" },
          { text: "Apps 子应用", link: "/module/apps" },
          { text: "Server 服务端", link: "/module/server" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pbstar/pbstar-admin" },
    ],
  },
});
