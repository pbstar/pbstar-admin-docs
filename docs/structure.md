# 项目结构

## 架构图

![架构图](/architecture.png)

## 目录结构

目录结构如下：

```
├── pbstar-admin                  # 主项目
│ ├── apps                        # 内部子应用
│ │ ├── example                   # 示例应用
│ │ ├── system                    # 系统应用
│ │ └── apps.json                 # 子应用配置
│ ├── assets                      # 静态资源
│ ├── build                       # 打包产物
│ ├── components                  # 组件
│ ├── main                        # 主应用
│ ├── tools                       # 工具
│ ├── package.json                # 依赖
│ ├── jsconfig.json               # js配置
│ ├── pnpm-workspace.yaml         # 工作区配置
│ ├── rsbuild.config.mjs          # 打包配置
│ └── README.md                   # 说明
└── pbstar-admin-apps             # 外部子应用
  └── equipment                   # 设备应用
```
