# App 子应用

- [In 内部子应用](#In-内部子应用)
- [Out 外部子应用](#Out-外部子应用)

pbstar-admin 子应用是基于 **Vue 3 + Element Plus** 的后台管理系统模块，通过 **Wujie 微前端框架** 集成到主应用中。子应用采用 **pnpm monorepo** 工作区管理，支持独立开发和部署。

## In 内部子应用

内部子应用是指同 pbstar-admin 主应用共用一个 git 代码仓库的子应用，位于 `apps/` 目录下。

### system (系统应用)

- 功能模块：
  - 用户管理
  - 角色管理
  - 应用管理
  - 菜单管理
  - 枚举管理
  - 操作日志

### example (示例应用)

- 功能模块：
  - 列表示例
  - ECharts 示例
  - Markdown 编辑器
  - 富文本编辑器
  - 大屏可视化示例

## Out 外部子应用

外部子应用是指单独放在独立的 git 仓库中的子应用，位于 `apps/` 目录下，需要配置 .gitmodules 文件。

### equipment (设备应用)

- 功能模块：
  - 设备台账

## 集成方式

1. 主应用通过 WujieVue 组件加载子应用
2. 使用 window.$wujie.bus 进行主从应用通信
3. 从 sharedStore 状态管理中获取用户信息和一些系统配置数据

## 外部子应用与内部子应用区别

- 代码仓库：外部子应用有独立的代码仓库，需要在主应用项目中配置 .gitmodules 文件。
