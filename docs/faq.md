# 常见问题

## 安装问题

### 1. 安装依赖时出现错误

**问题描述**：运行 `pnpm install` 时出现错误

**解决方案**：

1. 确保已安装 Node.js 18+ 和 pnpm 9+
2. 清除缓存后重试：`pnpm store prune`
3. 删除 node_modules 和 pnpm-lock.yaml 后重新安装

## 开发问题

### 1. 启动项目报 ExperimentalWarning 警告

**问题描述**：运行 `pnpm run dev` 时出现以下警告

```
(node:25836) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```

**解决方案**：

写法 import apps from "../apps/apps.json" with { type: "json" } 是正确的，只是 Node 18 仍然会提醒它是实验性的。可以放心使用！
若不想看到该警告，可以升级 Node.js 版本至 20+，或关闭该警告：`node --no-warnings`

## 部署问题
