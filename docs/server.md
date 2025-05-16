# Server 服务端

::: warning
Server 服务端未接入数据库，仅作为示例和测试使用。
正式部署本项目时请由后端同学完成本部分内容。
官方计划在半年内采用 nodejs+mysql 技术完成正式的 Server 服务端。
同时，欢迎 java 同学开发 java 版的 Server 服务端，非常感谢。

:::

## 目录结构

```
server
├──  src                  # 子应用
│ ├── controllers         # 控制器
│ ├── db                  # 数据库
│ ├── routes              # 路由
│ ├── utils               # 工具
│ ├── app.js              # 应用入口
│ └── main.js             # 服务端入口
└── package.json          # 依赖
```
