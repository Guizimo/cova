# 🎨 Cova

[English](./README.md) | 简体中文

<div align="center">
  <img src="public/logo.png" alt="Cova Logo" width="180" />
  
  <p><em>一款让创作变得简单的现代封面设计工具</em></p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.6.2-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6.0.3-646cff?style=flat-square&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8?style=flat-square&logo=tailwindcss" alt="TailwindCSS" />
  </p>

  <p>
    <a href="#预览">预览</a> •
    <a href="#特性">特性</a> •
    <a href="#技术栈">技术栈</a> •
    <a href="#快速开始">快速开始</a> •
    <a href="#开发">开发</a>
  </p>
</div>

## 📸 预览

<div align="center">
  <img src="public/preview-1.jpg" alt="编辑器界面" width="800" />
  <p><em>极简设计</em></p>
</div>

<div align="center">
  <img src="public/preview-2.jpg" alt="导出结果" width="800" />
  <p><em>强大的编辑器界面</em></p>
</div>

## ✨ 技术栈

- ![React](https://img.shields.io/badge/React-18.3.1-61dafb)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)
- ![Vite](https://img.shields.io/badge/Vite-6.0.3-646cff)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8)

### UI 组件
- Radix UI - 可访问的 React UI 原语
- Lucide React - 精美的图标库
- React Resizable Panels - 可调整大小的面板组件

## 🚀 快速开始

确保您的开发环境中已安装 [Node.js](https://nodejs.org/)（推荐 v18+）和 [pnpm](https://pnpm.io/)。

```bash
# 克隆仓库
git clone https://github.com/guizimo/cova.git

# 进入项目目录
cd cova

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 📁 项目结构
```plaintext
cova/
├── src/
│ ├── components/ # React 组件
│ ├── pages/ # 页面组件
│ ├── styles/ # 样式文件
│ └── main.tsx # 入口文件
├── public/ # 静态资源
└── package.json # 项目配置
```

## 🎯 特性
- 现代用户界面
- 响应式设计
- 可调整布局
- 图像导出功能
- 实时预览
- 多种预设模板
- 自定义尺寸支持
- 背景自定义
- 文本样式选项
- 图标管理

## 💻 开发
### 可用脚本
```bash
pnpm dev # 启动开发服务器
pnpm build # 构建生产版本
pnpm preview # 预览生产构建
pnpm lint # 运行 ESLint 检查
```

### 要求
- Node.js >= 18.x
- pnpm >= 9.15.0

## 📦 依赖
### 核心
- react & react-dom：React 核心库
- vite：现代前端构建工具
- typescript：带类型支持的 JavaScript 超集

### UI 组件
- @radix-ui/*：可访问的 React UI 组件
- lucide-react：图标库
- react-resizable-panels：可调整大小的面板

### 工具库
- file-saver：文件保存功能
- html2canvas：HTML 转 canvas 转换
- clsx & tailwind-merge：样式工具

## 更新日志
详情请查看 CHANGELOG.md。

## 贡献
欢迎贡献！以下是贡献方式：

1. Fork 仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -am 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 开启 Pull Request

## 许可证
本项目采用 GPL-3.0 许可证 - 详情请查看 LICENSE 文件。

## 联系方式
如果您有任何问题或建议，请随时联系：

- 邮箱：17680262548@163.com
- GitHub Issues：[这里](https://github.com/guizimo/cova/issues)

感谢您使用 Cova！如果您觉得它有用，请考虑给它一个星标 ⭐️

        