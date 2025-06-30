# 快速开始

::: warning
注意：v1.0.0 版本前均为不稳定版本，可能存在未知的漏洞与风险，请谨慎用于生产项目。
:::

## 环境要求

- node >= 18.0.0
- pnpm >= 9.0.0

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
# 启动main包
pnpm run dev
# 启动应用包
pnpm run dev:<包名>
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
