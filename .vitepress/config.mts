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
      { text: "文档", link: "/docs/what" },
      { text: "在线演示", link: "" },
      {
        text: "1.0.0-beta.1（待发布）",
        items: [
          {
            text: "更新日志",
            link: "https://github.com/pbstar/pbstar-admin/blob/main/CHANGELOG.md",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "简介",
        items: [
          { text: "什么是 PbstarAdmin ?", link: "/docs/what" },
          { text: "目录结构", link: "/docs/structure" },
          { text: "快速开始", link: "/docs/start" },
        ],
      },
      {
        text: "指南",
        items: [
          { text: "Cli 脚手架", link: "/docs/cli" },
          { text: "Components 组件库", link: "/docs/components" },
          { text: "Assets 静态资源", link: "/docs/assets" },
          { text: "Main 主应用", link: "/docs/main" },
          { text: "Apps 子应用", link: "/docs/apps" },
        ],
      },
      {
        text: "进阶",
        items: [{ text: "Server 服务端", link: "/docs/server" }],
      },
      {
        text: "其他",
        items: [
          { text: "常见问题", link: "/docs/faq" },
          { text: "参与贡献", link: "/docs/contribute" },
          { text: "赞助支持", link: "/docs/sponsor" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/pbstar/pbstar-admin" },
    ],
  },
});
