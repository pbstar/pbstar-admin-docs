# Components 组件库

**Base 基础组件**

- [p-title 标题组件](#p-title-标题组件)
- [p-icon 图标组件](#p-icon-图标组件)
- [p-button 按钮组件](#p-button-按钮组件)
- [p-item 基础项组件](#p-item-基础项组件)
- [p-searh 搜索组件](#p-searh-搜索组件)
- [p-table 表格组件](#p-table-表格组件)
- [p-dialog 对话框组件](#p-dialog-对话框组件)
- [p-collapse 折叠组件](#p-collapse-折叠组件)

**Layout 布局组件**

- [p-twinBox 双栏布局组件](#p-twinBox-双栏布局组件)

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

```javascript
import { pTitle } from "@Pcomponents";
```

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

```javascript
import { pIcon } from "@Pcomponents";
```

```vue
<p-icon name="el-icon-edit" size="24" color="#ff0000" />
```

## p-item 基础项组件

### 功能说明

基础表单项布局组件,提供标签和内容的统一布局,支持插槽自定义内容

### Props

| 参数       | 说明           | 类型          | 默认值 | 示例     |
| ---------- | -------------- | ------------- | ------ | -------- |
| label      | 标签文本       | String        | ""     | "用户名" |
| showText   | 是否为文本展示 | Boolean       | false  | true     |
| text       | 文本内容       | String/Number | ""     | "张三"   |
| isRequired | 是否必填       | Boolean       | false  | true     |
| isTextWrap | 文本是否换行   | Boolean       | false  | true     |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 主内容区域   |
| right   | 右侧区域     |
| bottom  | 底部提示区域 |

### 使用示例

```javascript
import { pItem } from "@Pcomponents";
```

```vue
<!-- 表单输入模式 -->
<p-item label="用户名" :isRequired="true">
  <el-input v-model="form.name" placeholder="请输入用户名" />
</p-item>

<!-- 文本展示模式 -->
<p-item label="用户名" :showText="true" text="张三" />

<!-- 带右侧插槽 -->
<p-item label="金额">
  <el-input v-model="form.amount" />
  <template #right>元</template>
</p-item>

<!-- 带底部提示 -->
<p-item label="密码">
  <el-input type="password" v-model="form.password" />
  <template #bottom>
    <span style="color: #999; font-size: 12px">密码长度为6-20位</span>
  </template>
</p-item>
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

```javascript
import { pButton } from "@Pcomponents";
```

```vue
<p-button type="primary" btnkey="orderPage_add">添加订单</p-button>
```

## p-search 搜索组件

### 功能说明

搜索表单组件，支持动态表单配置

### Props

| 参数      | 说明             | 类型    | 默认值 | 示例 |
| --------- | ---------------- | ------- | ------ | ---- |
| showReset | 是否显示重置按钮 | Boolean | true   | true |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| search | 搜索按钮点击事件 | -        |
| reset  | 重置按钮点击事件 | -        |

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 自定义搜索项插槽 |

### 使用示例

```javascript
import { pSearch } from "@Pcomponents";
```

```vue
<p-search @search="toSearch" @reset="toReset">
  <p-item class="item" label="姓名">
    <el-input v-model="searchValue.name" placeholder="请输入姓名" />
  </p-item>
</p-search>
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

```javascript
import { pTable } from "@Pcomponents";
```

```vue
<p-table
  :data="data"
  :pagination="pagination"
  @paginationChange="toPageChange"
>
  <template #column>
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="age" label="年龄">
      <template #default="{ row }">
        <span v-show="row.age < 25">{{ row.age }}</span>
        <span v-show="row.age >= 25">{{ row.age }}（老年人）</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="operation"
      label="操作"
      fixed="right"
      width="200"
    >
      <template #default="{ row }">
        <p-button type="primary" size="small" link @click="handleView(row)">
          查看
        </p-button>
        <p-button type="primary" size="small" link @click="handleEdit(row)">
          编辑
        </p-button>
      </template>
    </el-table-column>
  </template>
  <template #topLeft>
    <p-button type="primary" @click="handleAdd()"> 新增 </p-button>
  </template>
</p-table>
```

## p-dialog 对话框组件

### 功能说明

支持两种形态的对话框组件(弹窗/抽屉),内置全屏切换功能

### Props

| 参数       | 说明                                       | 类型    | 默认值 | 示例       |
| ---------- | ------------------------------------------ | ------- | ------ | ---------- |
| type       | 类型:box(弹窗)/drawer(抽屉)                | String  | "box"  | "drawer"   |
| modelValue | 显示/隐藏状态                              | Boolean | false  | true       |
| title      | 对话框标题                                 | String  | ""     | "用户信息" |
| width      | 宽度(box 类型默认 500px,drawer 默认 400px) | String  | ""     | "600px"    |

### Events

| 事件名            | 说明         | 回调参数 |
| ----------------- | ------------ | -------- |
| update:modelValue | 显示状态变化 | Boolean  |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 对话框主体内容 |
| footer  | 页脚区域       |

### 使用示例

```javascript
import { pDialog } from "@Pcomponents";
```

```vue
<p-dialog
  title="用户列表详情页"
  type="drawer"
  width="1000px"
  v-model="isDetail"
>
  <Detail ref="detailRef" :type="detailType" :id="detailId"></Detail>
  <template #footer>
    <p-button
      type="primary"
      @click="handleSave()"
      v-if="detailType !== 'view'"
    >
      保存
    </p-button>
    <p-button @click="handleBack()"> 返回 </p-button>
  </template>
</p-dialog>
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

```javascript
import { pCollapse } from "@Pcomponents";
```

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

```javascript
import { pTwinBox } from "@Pcomponents";
```

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
