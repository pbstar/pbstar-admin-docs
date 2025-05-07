import { defineConfig } from "vitepress";

export default defineConfig({
  title: "PbstarAdmin",
  description:
    "Pbstar-admin 是一套全面便捷的后台管理系统解决方案，基于 micro-app、pnpm 完成微前端架构，运用 vue3、vite、pinia、element plus 等主流技术栈。",
  head: [["link", { rel: "icon", type: "image/png", href: "/pbstar-admin/logo.png" }]],
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
          { text: "什么是PbstarAdmin", link: "/intro/what" },
          { text: "快速开始", link: "/intro/start" },
        ],
      },
      {
        text: "功能模块",
        items: [
          { text: "脚手架", link: "/module/cli" },
          { text: "组件", link: "/module/components" },
          { text: "配置", link: "/module/config" },
          { text: "工具", link: "/module/utils" },
          { text: "主包", link: "/module/main" },
          { text: "子包", link: "/module/packages" },
          { text: "服务端", link: "/module/server" },
          { text: "代码生成器", link: "/module/generator" },
          { text: "部署工具", link: "/module/deploy" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pbstar/pbstar-admin" },
    ],
  },
});
