# Components 组件库

**Base 基础组件**

- [p-title 标题组件](#p-title-标题组件)
- [p-icon 图标组件](#p-icon-图标组件)
- [p-button 按钮组件](#p-button-按钮组件)
- [p-item 基础项组件](#p-item-基础项组件)
- [p-form 表单组件](#p-form-表单组件)
- [p-searh 搜索组件](#p-searh-搜索组件)
- [p-table 表格组件](#p-table-表格组件)
- [p-dialog 对话框组件](#p-dialog-对话框组件)
- [p-collapse 折叠组件](#p-collapse-折叠组件)

**Layout 布局组件**

- [p-twinBox 双栏布局组件](#p-twinBox-双栏布局组件)

**引入方式**

```javascript
import { PTitle, PIcon } from "@Pcomponents";
```

## p-title 标题组件

### 功能说明

带切换功能的标题栏组件，支持右侧区域通过插槽自定义

### Props

| 参数 | 说明     | 类型  | 默认值 | 示例         |
| ---- | -------- | ----- | ------ | ------------ |
| list | 标题列表 | Array | []     | ['订单管理'] |

### Events

| 事件名 | 说明         | 回调参数                               |
| ------ | ------------ | -------------------------------------- |
| change | 标题切换事件 | ' { value: 当前值, index: 当前索引 } ' |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 右侧区域插槽 |

### 使用示例

```vue
<p-title :list="['订单', '物流']" @change="handleTitleChange" />
```

## p-icon 图标组件

### 功能说明

图标组件，支持 Element plus 图标和 iconfont 图标

### Props

| 参数  | 说明     | 类型          | 默认值          | 示例           |
| ----- | -------- | ------------- | --------------- | -------------- |
| name  | 图标名称 | String        | el-icon-loading | 'el-icon-edit' |
| size  | 图标大小 | String/Number | 16              | 24             |
| color | 图标颜色 | String        | #000            | '#ff0000'      |

### 使用示例

```vue
<p-icon name="el-icon-edit" size="24" color="#ff0000" />
```

## p-item 基础项组件

### 功能说明

通用表单项组件，支持多种输入类型和选项配置

### Props

| 参数       | 说明       | 类型   | 默认值 | 示例      |
| ---------- | ---------- | ------ | ------ | --------- |
| config     | 表单项配置 | Object | {}     | {}:Config |
| modelValue | 双向绑定值 | Any    | -      | -         |

#### Config 配置项

| 参数        | 说明           | 类型    | 默认值 | 示例                     |
| ----------- | -------------- | ------- | ------ | ------------------------ |
| key         | 字段名         | String  | -      | "name"                   |
| label       | 标签文本       | String  | -      | "用户名"                 |
| type        | 输入类型       | String  | -      | "input"                  |
| placeholder | 提示文字       | String  | -      | "请输入"                 |
| isText      | 文本展示       | Boolean | false  | false                    |
| isRequired  | 必填标识       | Boolean | false  | false                    |
| isDisabled  | 禁用标识       | Boolean | false  | false                    |
| options     | 选项列表       | Array   | []     | [{label:'男',value:'1'}] |
| enumKey     | 枚举类型       | String  | -      | "gender"                 |
| more        | 动态绑定的属性 | Object  | {}     | {}                       |

type 支持的输入类型：

- slot：插槽
- input：文本输入框
- textarea：多行文本输入框
- inputNumber：数字输入框
- select：下拉选择框
- selectMultiple：多选下拉选择框
- radio：单选框
- checkbox：多选框
- date：日期选择器
- daterange：日期范围选择器
- time：时间选择器
- datetime：日期时间选择器
- datetimerange：日期时间范围选择器

### Events

| 事件名 | 说明       | 回调参数                |
| ------ | ---------- | ----------------------- |
| change | 值变化事件 | '{ key?, value, row? }' |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义插槽     |
| right   | 自定义右侧插槽 |
| bottom  | 自定义底部插槽 |

### 使用示例

```vue
<p-item v-model="form.name" :config="{ type: 'input', label: '用户名' }" />
```

## p-button 按钮组件

### 功能说明

按钮组件，同 Element plus 按钮组件并支持 btnkey 权限控制

### Props

| 参数   | 说明                        | 类型   | 默认值 | 示例            |
| ------ | --------------------------- | ------ | ------ | --------------- |
| btnkey | 按钮权限名称                | String | -      | "orderPage_add" |
| ...    | Element plus 按钮组件 Props | -      | -      | -               |

### 使用示例

```vue
<p-button type="primary" btnkey="orderPage_add">添加订单</p-button>
```

## p-form 表单组件

### 功能说明

表单组件，支持动态表单配置

### Props

| 参数       | 说明                      | 类型   | 默认值     | 示例            |
| ---------- | ------------------------- | ------ | ---------- | --------------- |
| data       | 表单项配置                | Array  | []         | []:PItem.Config |
| spanList   | 栅格配置（占满整行为 12） | Array  | [6,6,6...] | []:Number       |
| modelValue | 双向绑定值                | Object | {}         | {name:'表单值'} |

### Events

| 事件名 | 说明       | 回调参数                |
| ------ | ---------- | ----------------------- |
| change | 值变化事件 | '{ key?, value, row? }' |

### Slots

| 名称  | 说明                                           |
| ----- | ---------------------------------------------- |
| {key} | 自定义搜索项（需要 PItem.Config.type 为 slot） |

### Exposes

| 方法名          | 说明                 | 参数            | 返回值  |
| --------------- | -------------------- | --------------- | ------- |
| toChangeData    | 修改 data 配置项数据 | []:PItem.Config | -       |
| toCheckRequired | 检查必填项           | -               | Boolean |

### 使用示例

```vue
<p-form :data="formItems" :spanList="spanList" />
```

## p-search 搜索组件

### 功能说明

搜索表单组件，支持动态表单配置

### Props

| 参数       | 说明             | 类型    | 默认值 | 示例            |
| ---------- | ---------------- | ------- | ------ | --------------- |
| data       | 搜索项配置       | Array   | []     | []:PItem.Config |
| modelValue | 双向绑定值       | Object  | {}     | {name:'表单值'} |
| showReset  | 是否显示重置按钮 | Boolean | true   | true            |

### Events

| 事件名   | 说明         | 回调参数                |
| -------- | ------------ | ----------------------- |
| change   | 值变化事件   | '{ key?, value, row? }' |
| btnClick | 按钮点击事件 | '{ type,data }'         |

### Slots

| 名称  | 说明                                           |
| ----- | ---------------------------------------------- |
| {key} | 自定义搜索项（需要 PItem.Config.type 为 slot） |

### Exposes

| 方法名       | 说明                 | 参数            | 返回值 |
| ------------ | -------------------- | --------------- | ------ |
| toChangeData | 修改 data 配置项数据 | []:PItem.Config | -      |

### 使用示例

```vue
<p-search :data="searchItems" @btnClick="handleSearch" />
```

## p-table 表格组件

### 功能说明

增强型表格组件，支持分页等功能

### Props

| 参数          | 说明         | 类型          | 默认值 | 示例          |
| ------------- | ------------ | ------------- | ------ | ------------- |
| data          | 表格数据     | Array         | []     | []            |
| showSelection | 显示多选框   | Boolean       | false  | false         |
| showIndex     | 显示序号列   | Boolean       | true   | true          |
| maxHeight     | 表格最大高度 | Number/String | 800    | 800           |
| pagination    | 分页配置     | Object        | {}     | {}:Pagination |

#### Pagination 分页配置

| 参数       | 说明     | 类型   | 默认值 | 示例 |
| ---------- | -------- | ------ | ------ | ---- |
| pageNumber | 页码     | Number | 1      | 1    |
| pageSize   | 每页条数 | Number | 10     | 10   |
| total      | 总条数   | Number | 0      | 0    |

### Events

| 事件名           | 说明           | 回调参数                    |
| ---------------- | -------------- | --------------------------- |
| selectionChange  | 选择项变化事件 | 'selectionList: 选中行数据' |
| paginationChange | 分页变化事件   | '{ pageNumber, pageSize }'  |

### Slots

| 名称     | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| topLeft  | 表格左上角区域 | -        |
| topRight | 表格右上角区域 | -        |
| column   | 操作列         | -        |
| botLeft  | 表格左下角区域 | -        |

### 使用示例

```vue
<p-table :data="tableData" />
```

## p-dialog 对话框组件

### 功能说明

支持三种形态的对话框组件（弹窗/抽屉/全屏页面）

### Props

| 参数       | 说明                             | 类型    | 默认值  |
| ---------- | -------------------------------- | ------- | ------- |
| type       | 类型：box/drawer/page            | String  | "box"   |
| modelValue | 显示/隐藏状态                    | Boolean | false   |
| title      | 对话框标题                       | String  | ""      |
| width      | 宽度（支持 px/%，page 类型无效） | String  | "500px" |

### Slots

| 名称    | 说明                         |
| ------- | ---------------------------- |
| default | 对话框主体内容               |
| header  | 页头区域右侧（仅 page 类型） |
| footer  | 页脚区域                     |

### 使用示例

```vue
<p-dialog type="drawer" title="编辑信息" v-model="showDialog"></p-dialog>
```

## p-collapse 折叠组件

### 功能说明

可折叠内容区域组件

### Props

| 参数         | 说明             | 类型    | 默认值 | 示例       |
| ------------ | ---------------- | ------- | ------ | ---------- |
| title        | 标题内容         | String  | ""     | "订单明细" |
| isCollapse   | 初始是否展开     | Boolean | false  | false      |
| isControl    | 是否允许折叠     | Boolean | true   | true       |
| showDownLine | 是否显示底部边框 | Boolean | true   | true       |

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 折叠面板内容区域 |

### 使用示例

```vue
<p-collapse title="详细信息">
  <p>这里是折叠内容</p>
</p-collapse>
```

## p-twinBox 双栏布局组件

### 功能说明

双栏布局组件，用于将内容分为左右两栏，移动端自适应为上下两栏

### Props

| 参数 | 说明              | 类型          | 默认值 | 示例  |
| ---- | ----------------- | ------------- | ------ | ----- |
| size | 首栏宽度/高度     | String/Number | "220"  | "220" |
| min  | 首栏最小宽度/高度 | String/Number | "100"  | "100" |
| max  | 首栏最大宽度/高度 | String/Number | "380"  | "380" |

### Slots

| 名称  | 说明          |
| ----- | ------------- |
| plan1 | 左侧/顶部内容 |
| plan2 | 右侧/底部内容 |

### 使用示例

```vue
<p-twinBox>
  <template #plan1>
    <p>这里是左侧内容</p>
  </template>
  <template #plan2>
    <p>这里是右侧内容</p>
  </template>
</p-twinBox>
```
