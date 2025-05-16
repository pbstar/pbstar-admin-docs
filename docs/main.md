# Main 主应用

## 主要功能

- 用户认证与权限管理
- 微前端应用集成
- 主题切换(深色/浅色模式)
- 全屏模式
- 导航历史记录

## 项目结构

```

main
├── src
│ ├── assets            # 静态资源
│ ├── components        # 公共组件
│ │ └── layout          # 布局组件
│ ├── router            # 路由配置
│ ├── stores            # Pinia 状态管理
│ ├── views             # 页面视图
│ │ ├── admin           # 管理后台
│ │ │ ├── app.vue       # 子应用容器
│ │ │ ├── home.vue      # 首页
│ │ │ └── index.vue     # 后台主框架
│ │ └── login           # 登录页
│ ├── App.vue           # 根组件
│ └── main.js           # 入口文件
└── package.json        # 依赖

```
