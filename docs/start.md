# 快速开始

::: warning
注意：v1.0.0 版本前均为测试版，可能会有不兼容与破坏性的更新，升级版本时请仔细阅读更新日志和必要的提交记录。
:::

## 环境要求

- node >= 18.12.0
- pnpm >= 9.15.0

## 快速开始

```bash
# 克隆项目
git clone https://github.com/pbstar/pbstar-admin.git
# 进入项目目录
cd pbstar-admin
# 安装pnpm（如果已安装pnpm，请忽略此步骤）
npm install -g pnpm
# 安装依赖
pnpm install
# 启动项目
pnpm run dev
```

## 创建子应用

```bash
pnpm run create
```

## 安装删除指定依赖

```bash
# 安装依赖到主包
pnpm add <依赖名> -w
# 安装依赖到指定包
pnpm add <依赖名> --filter <包名>
# 删除主包的依赖
pnpm remove <依赖名>
# 删除指定包的依赖
pnpm remove <依赖名> --filter <包名>
```
