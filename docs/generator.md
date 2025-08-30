# Generator 代码生成器

<div style="display: flex; justify-content: space-between;padding-top: 30px;">
    <img src="/screenshot/generator1.png" alt="generator" style="width:calc(50% - 5px);" />
    <img src="/screenshot/generator2.png" alt="generator" style="width:calc(50% - 5px);" />
</div>

## 功能概述

代码生成器是一个基于 Vue 和 Node.js 的自动化代码生成工具，主要功能包括：

1. 根据配置生成 Vue 组件模板
2. 支持三种模板类型：
   - main：生成主表组件，包含列表、创建、更新、删除、详情等功能
   - childTable：生成子表表格组件，包含列表、创建、更新、删除、详情等功能，采用主表 id 与子表关联
   - formTable：生成表单表格组件，包含列表、创建、更新、删除、详情等功能，作为主表的一个数组字段
3. 自动格式化生成的代码，支持一键复制和下载
4. 保存生成历史记录

## 前端实现

主要功能包括：

### 配置项

- 模板选择：main/childTable/formTable
- 基础信息：key(主表 key)、title、childKey(子表 key)
- API 配置：apiBase(后端的 api 基础地址)
- 字段管理：可添加、编辑、删除字段

## 后端实现

主要功能包括：

1. 根据模板类型调用不同的生成器模块
2. 使用 prettier 格式化生成的代码
3. 返回生成的文件列表
