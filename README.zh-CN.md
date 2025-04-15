# 🎨 Cova

[English](./README.md) | 简体中文

<div align="center">
  <img src="public/logo.jpg" alt="Cova Logo" width="180" />
  
  <p><em>一个现代化的封面设计工具，让创作更简单</em></p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.6.2-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6.0.3-646cff?style=flat-square&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8?style=flat-square&logo=tailwindcss" alt="TailwindCSS" />
  </p>

  <p>
    <a href="#预览">预览</a> •
    <a href="#特性介绍">特性介绍</a> •
    <a href="#技术栈">技术栈</a> •
    <a href="#快速开始">快速开始</a> •
    <a href="#开发指南">开发指南</a>
  </p>

</div>

---

## 📸 预览

<div align="center">
  <img src="public/preview-1.jpg" alt="编辑器界面" width="800" />
  <p><em>极简主义</em></p>
</div>

<div align="center">
  <img src="public/preview-2.jpg" alt="导出效果" width="800" />
  <p><em>强大的编辑器界面</em></p>
</div>

## ✨ 技术栈

- ![React](https://img.shields.io/badge/React-18.3.1-61dafb)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)
- ![Vite](https://img.shields.io/badge/Vite-6.0.3-646cff)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8)

### UI 组件
- Radix UI - 无障碍的 React UI 原语
- Lucide React - 美观的图标库
- React Resizable Panels - 可调整大小的面板组件

## 🚀 快速开始

确保你的开发环境中已安装 [Node.js](https://nodejs.org/) (推荐 v18+) 和 [pnpm](https://pnpm.io/)。

```bash
# 克隆项目
git clone https://github.com/guizimo/cova.git

# 进入项目目录
cd cova

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 📁 项目结构
```
cova/
├── src/
│ ├── components/ # React 组件
│ ├── pages/ # 页面组件
│ ├── styles/ # 样式文件
│ └── main.tsx # 入口文件
├── public/ # 静态资源
└── package.json # 项目配置
```
## 🎯 功能特性

- 现代化的用户界面
- 响应式设计
- 可调整布局
- 图片导出功能
- 实时预览

## 💻 开发指南

### 可用的脚本命令
```bash
pnpm dev # 启动开发服务器
pnpm build # 构建生产版本
pnpm preview # 预览生产构建
pnpm lint # 运行 ESLint 检查
```

### 添加新的组件
```bash
pnpm dlx shadcn@latest add <component-name>
```

### 开发环境要求

- Node.js >= 18.x
- pnpm >= 9.15.0

## 📦 依赖说明

### 核心依赖
- `react` & `react-dom`: React 核心库
- `vite`: 现代前端构建工具
- `typescript`: JavaScript 的超集，提供类型支持

### UI 组件
- `@radix-ui/*`: 无障碍的 React UI 组件
- `lucide-react`: 图标库
- `react-resizable-panels`: 可调整大小的面板

### 工具库
- `file-saver`: 文件保存功能
- `html2canvas`: HTML 转换为 canvas
- `clsx` & `tailwind-merge`: 样式工具


## 更新日志

[**Changelog**](./CHANGELOG.md) - 查看项目的更新日志

## 贡献

欢迎任何形式的贡献！你可以通过以下方式贡献代码：

1. Fork 此仓库
2. 创建你的功能分支 (git checkout -b feature/fooBar)
3. 提交你的更改 (git commit -am 'Add some fooBar')
4. 推送到分支 (git push origin feature/fooBar)
5. 创建一个新的Pull Request

## 许可

该项目基于 GPL-3.0 License 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 联系

如果你有任何问题或建议，请通过以下方式联系我：

- **Email**:  17680262548@163.com

- **GitHub Issues**: [这里](https://github.com/guizimo/cova/issues)



感谢你使用`cova`！希望它能对您有所帮助，别忘了点点星星哦。


