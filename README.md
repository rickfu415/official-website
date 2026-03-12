# 食圈儿 FOOOODIS 官方网站

这是食圈儿 FOOOODIS 的官方网站项目，使用 React、TypeScript 和 Express 构建。

## 项目概述

食圈儿 FOOOODIS 官方网站是一个现代化的餐饮企业网站，提供菜单展示、门店信息、加盟信息以及在线点餐等功能。

## 技术栈

### 前端
- React 19
- TypeScript
- Vite
- React Router v7
- React Bootstrap
- Bootstrap 5

### 后端
- Node.js
- Express

## 项目结构

```
official-website/
├── client/                 # 前端项目
│   ├── public/             # 静态资源
│   ├── src/                # 源代码
│   │   ├── components/     # 组件
│   │   ├── pages/          # 页面
│   │   ├── App.tsx         # 主应用组件
│   │   └── main.tsx        # 入口文件
│   ├── index.html          # HTML 模板
│   ├── package.json        # 前端依赖
│   └── vite.config.ts      # Vite 配置
├── server.js               # Express 服务器
└── package.json            # 项目依赖
```

## 功能特性

- 响应式设计，适配各种设备
- 菜单展示
- 门店信息
- 加盟信息
- 关于我们
- 在线点餐（开发中）
- 管理后台（开发中）

## 安装与运行

### 开发环境

1. 克隆项目
```bash
git clone <repository-url>
cd official-website
```

2. 安装依赖
```bash
# 安装服务器依赖
npm install

# 安装客户端依赖
cd client
npm install
```

3. 运行开发服务器
```bash
# 在 client 目录下
npm run dev
```

### 生产环境

1. 构建前端项目
```bash
cd client
npm run build
```

2. 启动服务器
```bash
# 在项目根目录
npm start
```

## 部署

详细的部署步骤请参考 `tutorial.txt` 文件，其中包含了在阿里云服务器上部署的完整指南。

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

[MIT](LICENSE)

## 联系方式

食圈儿 FOOOODIS - [网站链接](https://foooodis.com)
