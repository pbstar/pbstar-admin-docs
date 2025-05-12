# Components 组件库

- [p-title](#p-title-标题组件)
- [p-item](#p-item-基础项组件)
- [p-searh](#p-searh-搜索组件)
- [p-table](#p-table-表格组件)
- [p-dialog](#p-dialog-对话框组件)
- [p-collapse](#p-collapse-折叠组件)

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
<!-- import pTitle from "@Pcomponents/base/p-title/index.vue"; -->
<p-title :list="['订单', '物流']" @change="handleTitleChange" />
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

| 参数        | 说明     | 类型    | 默认值 | 示例                   |
| ----------- | -------- | ------- | ------ | ---------------------- |
| key         | 字段名   | String  | -      | "name"                 |
| label       | 标签文本 | String  | -      | "用户名"               |
| labelStyle  | 标签样式 | Object  | -      | {}                     |
| type        | 输入类型 | String  | -      | "input"                |
| options     | 选项列表 | Array   | []     | []                     |
| placeholder | 提示文字 | String  | -      | "请输入"               |
| isText      | 文本展示 | Boolean | false  | false                  |
| isRequired  | 必填标识 | Boolean | false  | false                  |
| isDisabled  | 禁用标识 | Boolean | false  | false                  |
| enumKey     | 枚举类型 | String  | -      | "gender"               |
| tipText     | 提示文字 | String  | -      | "用户名请输入真实姓名" |
| rightText   | 右侧文字 | String  | -      | "元"                   |

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

### 使用示例

```vue
<!-- import pItem from "@Pcomponents/base/p-item/index.vue"; -->
<p-item v-model="form.name" :config="{ type: 'input', label: '用户名' }" />
```

## p-search 搜索组件

### 功能说明

组合式搜索表单组件，支持动态表单配置

### Props

| 参数      | 说明             | 类型    | 默认值 | 示例            |
| --------- | ---------------- | ------- | ------ | --------------- |
| data      | 搜索项配置       | Array   | []     | []:PItem.Config |
| showReset | 是否显示重置按钮 | Boolean | true   | true            |

### Events

| 事件名   | 说明         | 回调参数                |
| -------- | ------------ | ----------------------- |
| change   | 值变化事件   | '{ key?, value, row? }' |
| btnClick | 按钮点击事件 | '{ type,data }'         |

### 使用示例

```vue
<!-- import pSearch from "@Pcomponents/base/p-search/index.vue"; -->
<p-search :data="searchItems" @btnClick="handleSearch" />
```

## p-table 表格组件

### 功能说明

增强型表格组件，支持分页、列配置、操作按钮等功能

### Props

| 参数          | 说明         | 类型          | 默认值 | 示例                                                       |
| ------------- | ------------ | ------------- | ------ | ---------------------------------------------------------- |
| data          | 表格数据     | Array         | []     | []                                                         |
| column        | 列配置       | Array         | []     | []:Column                                                  |
| tableKey      | 表格唯一键   | String        | ""     | "orderTable"                                               |
| showSelection | 显示多选框   | Boolean       | false  | false                                                      |
| showIndex     | 显示序号列   | Boolean       | true   | true                                                       |
| showSetting   | 显示设置列   | Boolean       | false  | false                                                      |
| maxHeight     | 表格最大高度 | Number/String | 800    | 800                                                        |
| pagination    | 分页配置     | Object        | {}     | {}:Pagination                                              |
| topBtn        | 顶部按钮配置 | Array         | []     | []:TopBtn                                                  |
| rightBtn      | 操作列配置   | Array         | []     | []:RightBtn                                                |
| export        | 导出方法     | Function/null | null   | (callBack) => {callBack({ fileName: "用户列表",data: []})} |

#### Column 列配置

| 参数     | 说明             | 类型   | 默认值 | 示例     |
| -------- | ---------------- | ------ | ------ | -------- |
| key      | 字段名           | String | -      | "name"   |
| label    | 列标题           | String | -      | "姓名"   |
| width    | 列宽度           | String | -      | "100px"  |
| minWidth | 列最小宽度       | String | -      | "50px"   |
| enumKey  | 枚举类型         | String | -      | "gender" |
| options  | 选项列表         | Array  | []     | []       |
| slot     | 自定义列的插槽名 | String | -      | "name"   |

#### Pagination 分页配置

| 参数       | 说明     | 类型   | 默认值 | 示例 |
| ---------- | -------- | ------ | ------ | ---- |
| pageNumber | 页码     | Number | 1      | 1    |
| pageSize   | 每页条数 | Number | 10     | 10   |
| total      | 总条数   | Number | 0      | 0    |

#### TopBtn 顶部按钮配置

| 参数  | 说明     | 类型   | 默认值 | 示例      |
| ----- | -------- | ------ | ------ | --------- |
| key   | 按钮 key | String | -      | "add"     |
| label | 按钮文本 | String | -      | "新增"    |
| type  | 按钮类型 | String | -      | "primary" |

#### RightBtn 操作列配置

| 参数  | 说明     | 类型             | 默认值 | 示例                       |
| ----- | -------- | ---------------- | ------ | -------------------------- |
| key   | 按钮 key | String           | -      | "edit"                     |
| label | 按钮文本 | String           | -      | "编辑"                     |
| type  | 按钮类型 | String           | -      | "primary"                  |
| show  | 显示条件 | Boolean/Function | -      | (row) => row.status == '1' |

### Events

| 事件名           | 说明               | 回调参数                                       |
| ---------------- | ------------------ | ---------------------------------------------- |
| topBtnClick      | 顶部按钮点击事件   | '{ btn: 按钮 key,selectionList?: 选中行数据 }' |
| rightBtnClick    | 操作列按钮点击事件 | '{ btn: 按钮 key,row: 行数据 }'                |
| paginationChange | 分页变化事件       | '{ pageNumber, pageSize }'                     |

### Slots

| 名称     | 说明           | 回调参数  |
| -------- | -------------- | --------- |
| topRight | 表格右上角区域 | -         |
| botLeft  | 表格左下角区域 | -         |
| {key}    | 自定义列       | '{ row }' |

### 使用示例

```vue
<!-- import pTable from "@Pcomponents/base/p-table/index.vue"; -->
<p-table :data="tableData" :column="columns" />
```

## p-dialog 对话框组件

### 功能说明

支持三种形态的对话框组件（弹窗/抽屉/全屏页面）

### Props

| 参数       | 说明                             | 类型    | 默认值    |
| ---------- | -------------------------------- | ------- | --------- |
| type       | 类型：box/drawer/page            | String  | "box"     |
| modelValue | 显示/隐藏状态                    | Boolean | false     |
| title      | 对话框标题                       | String  | ""        |
| width      | 宽度（支持 px/%，page 类型无效） | String  | "500px"   |
| botBtn     | 底部按钮配置                     | Array   | []:BotBtn |

#### BotBtn 底部按钮配置

| 参数  | 说明     | 类型   | 默认值 | 示例      |
| ----- | -------- | ------ | ------ | --------- |
| key   | 按钮 key | String | -      | "confirm" |
| label | 按钮文本 | String | -      | "确定"    |
| type  | 按钮类型 | String | -      | "primary" |

### Events

| 事件名      | 说明             | 回调参数             |
| ----------- | ---------------- | -------------------- |
| botBtnClick | 底部按钮点击事件 | ' { btn: 按钮 key }' |

### Slots

| 名称    | 说明                         |
| ------- | ---------------------------- |
| default | 对话框主体内容               |
| header  | 页头区域右侧（仅 page 类型） |

### 使用示例

```vue
<!-- import pDialog from "@Pcomponents/base/p-dialog/index.vue"; -->
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
<!-- import pCollapse from "@Pcomponents/base/p-collapse/index.vue"; -->
<p-collapse title="详细信息">
  <p>这里是折叠内容</p>
</p-collapse>
```
