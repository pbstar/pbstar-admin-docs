# Server 服务端

## 项目概述

本项目[pbstar-admin-nodejs](https://github.com/pbstar/pbstar-admin-nodejs)为 Node.js 版的 pbstar-admin 项目服务端示例。

## 技术选型

- 后端框架：Node.js + Express
- 数据库：MySQL
- 代码风格：Prettier

## 项目结构

```
src/
├── controllers/      # 控制器
├── db/               # 数据库配置
├── middlewares/      # 中间件
├── routes/           # 路由
├── utils/            # 工具函数
├── main.js           # 服务入口
└── app.js            # Express应用入口
```

## 接口规范

### 通用响应格式

```json
{
  "code": 200, // 状态码
  "data": {}, // 响应数据
  "msg": "成功" // 消息
}
```

### 接口分类

#### 1. Main 模块

- 用户鉴权（登录、Token 登录、登出等）3 个接口
- 获取枚举 1 个接口
- 获取菜单 1 个接口
- 修改个人信息 1 个接口

#### 2. System 模块

- 代码生成器 1 个接口
- 枚举管理（主子表增删改查等）10 个接口
- 菜单管理（增删改查等）5 个接口
- 角色管理（增删改查等）5 个接口
- 用户管理（增删改查等）5 个接口
- 操作日志（删查等）3 个接口

#### 3. Example 模块

- 人员管理（主子表增删改查等）10 个接口

## 开发指南

### 数据库配置

- 1. 导入`src/db/pbstar_admin.sql`数据库脚本

```bash
mysql -u root -p pbstar_admin < pbstar_admin.sql
```

- 2. 修改`src/db/config.js`文件中的数据库连接信息：

```javascript
module.exports = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "pbstar_admin",
};
```

### 项目启动

```bash
# 开发模式
npm run dev

# 生产模式
npm start
```
