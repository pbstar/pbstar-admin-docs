# Components 组件库

## 功能概述

Base 组件库包含系统基础 UI 组件，主要功能包括：

- 提供统一风格的 UI 组件
- 封装常用交互逻辑
- 支持自定义配置

---

## 组件列表

- [p-title](#p-title-标题组件)
- [p-collapse](#p-collapse-折叠组件)
- [p-dialog](#p-dialog-对话框组件)
- [p-table](#p-table-表格组件)
- [p-item](#p-item-基础项组件)
- [p-searh](#p-searh-搜索组件)

### p-title 标题组件

#### 功能说明

带切换功能的标题栏组件，支持左右布局和动态切换

#### Props

| 参数 | 说明     | 类型  | 默认值 |
| ---- | -------- | ----- | ------ |
| list | 标题列表 | Array | []     |

#### Events

| 事件名 | 说明         | 回调参数                               |
| ------ | ------------ | -------------------------------------- |
| change | 标题切换事件 | ' { value: 当前值, index: 当前索引 } ' |

#### 使用示例

```vue
<p-title :list="['订单', '物流']" @change="handleTitleChange" />
```

---

### p-collapse 折叠组件

#### 功能说明

可折叠内容区域组件，支持自定义图标和禁用状态

#### Props

| 参数         | 说明             | 类型    | 默认值 |
| ------------ | ---------------- | ------- | ------ |
| title        | 标题内容         | String  | ""     |
| isCollapse   | 初始是否展开     | Boolean | false  |
| isControl    | 是否允许折叠     | Boolean | true   |
| showDownLine | 是否显示底部边框 | Boolean | true   |

#### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 折叠面板内容区域 |

#### 使用示例

```vue
<p-collapse title="详细信息">
  <p>这里是折叠内容</p>
</p-collapse>
```

---

### p-dialog 对话框组件

#### 功能说明

支持三种形态的对话框组件（弹窗/抽屉/全屏页面）

#### Props

| 参数       | 说明                  | 类型    | 默认值  |
| ---------- | --------------------- | ------- | ------- |
| type       | 类型：box/drawer/page | String  | "box"   |
| modelValue | 显示/隐藏状态         | Boolean | false   |
| title      | 对话框标题            | String  | ""      |
| width      | 宽度（支持 px/%）     | String  | "500px" |
| botBtn     | 底部按钮配置          | Array   | []      |

#### Events

| 事件名      | 说明             | 回调参数             |
| ----------- | ---------------- | -------------------- |
| botBtnClick | 底部按钮点击事件 | ' { key: 按钮 key }' |

#### Slots

| 名称    | 说明                     |
| ------- | ------------------------ |
| default | 对话框主体内容           |
| header  | 页头区域（仅 page 类型） |

#### 使用示例

```vue
<p-dialog type="drawer" title="编辑信息" v-model="showDialog">
  <template #default>表单内容</template>
</p-dialog>
```

---

### p-table 表格组件

#### 功能说明

增强型表格组件，支持分页、列配置、操作按钮等功能

#### Props

| 参数          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| data          | 表格数据     | Array   | []     |
| column        | 列配置       | Array   | []     |
| showSelection | 显示多选框   | Boolean | false  |
| showIndex     | 显示序号列   | Boolean | true   |
| maxHeight     | 表格最大高度 | Number  | 800    |
| pagination    | 分页配置     | Object  | {}     |

#### Events

| 事件名           | 说明               | 回调参数                         |
| ---------------- | ------------------ | -------------------------------- |
| rightBtnClick    | 操作列按钮点击事件 | '{ row: 行数据, btn: 按钮 key }' |
| paginationChange | 分页变化事件       | '{ pageNumber, pageSize }'       |

#### Slots

| 名称     | 说明           |
| -------- | -------------- |
| topRight | 表格右上角区域 |
| botLeft  | 表格左下角区域 |

#### 使用示例

```vue
<p-table :data="tableData" :column="columns" />
```

---

### p-item 基础项组件

#### 功能说明

通用表单项组件，支持 12 种输入类型

#### Props

| 参数       | 说明       | 类型                    | 默认值 |
| ---------- | ---------- | ----------------------- | ------ |
| item       | 表单项配置 | Object                  | {}     |
| modelValue | 双向绑定值 | [Number, String, Array] | -      |

#### 配置项说明

```js
item: {
  key: "字段名",
  label: "标签文本",
  type: "input/select/date...", // 12种输入类型
  options: [], // 选项列表
  placeholder: "提示文字",
  isRequired: false, // 必填标识
  enumType: "" // 枚举类型
}
```

#### Events

| 事件名 | 说明       | 回调参数              |
| ------ | ---------- | --------------------- |
| change | 值变化事件 | '{ key, value, row }' |

#### 使用示例

```vue
<p-item v-model="form.name" :item="{ type: 'input', label: '用户名' }" />
```

---

### p-search 搜索组件

#### 功能说明

组合式搜索表单组件，支持动态表单配置

#### Props

| 参数      | 说明             | 类型    | 默认值 |
| --------- | ---------------- | ------- | ------ |
| data      | 搜索项配置       | Array   | []     |
| showReset | 是否显示重置按钮 | Boolean | true   |

#### Events

| 事件名   | 说明         | 回调参数        |
| -------- | ------------ | --------------- |
| btnClick | 按钮点击事件 | '{ type,data }' |

#### 使用示例

```vue
<p-search :data="searchItems" @btnClick="handleSearch" />
```
