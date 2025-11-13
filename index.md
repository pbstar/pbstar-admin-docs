---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: PbstarAdmin
  tagline: 基于 wujie 微前端 + rsbuild 高性能构建 + pnpm monorepo 的现代化架构，集成 Vue3 + Pinia + Element Plus 主流技术体系，提供从开发到部署的完整解决方案。
  image:
    src: /logo-big.png
    alt: PbstarAdmin
  actions:
    - theme: brand
      text: 什么是 PbstarAdmin ?
      link: /docs/what
    - theme: alt
      text: 快速开始
      link: /docs/start
    - theme: alt
      text: 在线演示
      link: http://pbstar-admin.pbstar.cn/
features:
  - title: 微前端架构
    details: 基于腾讯wujie微前端框架，支持内外部子应用动态加载，实现真正的应用级微前端解耦
  - title: 主流技术栈
    details: 运用 vue3、pinia、element plus 等主流技术栈，提供最佳开发体验
  - title: 智能模块化
    details: pnpm monorepo工作区管理，支持内外部子应用（in/out类型），外部子应用可独立git仓库管理
  - title: 企业级组件化
    details: 共享组件库设计，@Pcomponents、@Passets统一别名引用，支持跨应用组件复用
  - title: 全链路工程化
    details: 完整的CLI工具链（create/dev/build/add/remove），自动化脚手架、依赖管理、打包部署
  - title: 极致现代化
    details: 基于Rsbuild高性能构建系统，多环境配置，支持子应用独立开发、调试、打包
---
