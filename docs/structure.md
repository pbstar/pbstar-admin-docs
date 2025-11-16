# 项目结构

## 目录结构

目录结构如下：

```
├── .husky                      # git hooks配置
├── apps                        # 子应用
│ ├── example                   # 示例应用
│ ├── system                    # 系统应用
│ ├── equipment                 # 设备应用（外部子应用）
│ └── apps.json                 # 子应用配置
├── assets                      # 静态资源
├── build                       # 打包产物
├── components                  # 组件
├── main                        # 主应用
├── tools                       # 工具
├── .gitignore                  # git忽略文件
├── .gitmodules                 # git子模块配置
├── .prettierrc                 # prettier配置
├── package.json                # 依赖
├── jsconfig.json               # js配置
├── pnpm-workspace.yaml         # 工作区配置
├── rsbuild.config.mjs          # 打包配置
└── README.md                   # 说明
```
