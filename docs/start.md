# 快速开始

::: warning
注意：v1.0.0 版本前均为测试版，可能会有不兼容与破坏性的更新，升级版本时请仔细阅读更新日志和必要的提交记录。
:::

## 环境要求

- node >= 18.12.0（推荐使用 Node.js 22 LTS）
- pnpm >= 9.15.0

## 快速开始

```bash
# 克隆项目
git clone https://github.com/pbstar/pbstar-admin.git
# 进入项目目录
cd pbstar-admin
# 克隆外部子应用仓库（可选）
git submodule update --init
# 安装pnpm（如果已安装pnpm，请忽略此步骤）
npm install -g pnpm
# 安装依赖
pnpm install
# 启动项目
pnpm run dev
# 打包项目
pnpm run build
# 添加指定依赖包
pnpm run add
# 移除指定依赖包
pnpm run remove
# 创建子应用
pnpm run create
```
