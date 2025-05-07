# Components 组件库

## 功能概述

Base 组件库包含系统基础 UI 组件，主要功能包括：

- 提供统一风格的 UI 组件
- 封装常用交互逻辑
- 支持自定义配置

## 组件列表

- [PTable](#PTable表格组件)
- [PItem](#PItem基础项组件)

### PTable 表格组件

#### 功能说明

基础表格组件，支持分页、排序、筛选等功能

#### Props

| 参数    | 说明     | 类型  | 默认值 |
| ------- | -------- | ----- | ------ |
| data    | 表格数据 | Array | []     |
| columns | 列配置   | Array | []     |

#### Events

| 事件名    | 说明       | 回调参数   |
| --------- | ---------- | ---------- |
| row-click | 行点击事件 | row, event |

#### 使用示例

```vue
<p-table :data="tableData" :columns="columns" />
```

### PItem 基础项组件

#### 功能说明

基础列表项组件，支持图标、标题、描述等配置

#### Props

| 参数  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| icon  | 图标 | String | ''     |
| title | 标题 | String | ''     |

#### 使用示例

```vue
<p-item icon="user" title="用户管理" />
```
