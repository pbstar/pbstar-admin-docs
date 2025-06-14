# App 子应用

- [system](#system-系统应用)：系统应用
- [example](#example-示例应用)：示例应用

pbstar-admin 子应用是基于 Vue 3 + Element Plus 的后台管理系统模块，通过 Wujie 微前端框架集成到主应用中。

## 现有子应用

### system (系统应用)

- 功能模块：
  - 用户管理
  - 角色管理
  - 菜单管理
  - 枚举管理
  - 代码生成器

### example (示例应用)

- 功能模块：
  - 列表示例
  - ECharts 示例
  - Markdown 编辑器
  - 富文本编辑器
  - 大屏可视化示例

## 集成方式

1. 主应用通过 WujieVue 组件加载子应用
2. 使用 window.$wujie.bus 进行主从应用通信
3. 从 sharedStore 状态管理中获取用户信息和一些系统配置数据
