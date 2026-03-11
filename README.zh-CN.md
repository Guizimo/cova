# 🎨 Cova

<div align="center">
  <p><a href="./README.md">English</a> | <strong>简体中文</strong></p>
  
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/logo.png">
    <source media="(prefers-color-scheme: light)" srcset="public/logo.png">
    <img alt="Cova Logo" src="public/logo.png" width="120" height="120">
  </picture>

  <h1>Cova</h1>
  <p><strong>封面设计的全新标准</strong></p>
  <p>专业级封面图片生成器，支持实时预览、模板管理和多格式导出 —— 完全在浏览器中本地运行。</p>

  <div>
    <a href="https://cova.guizimo.com" target="_blank">
      <img src="https://img.shields.io/badge/🌐_在线演示-cova.guizimo.com-4285F4?style=for-the-badge" alt="在线演示">
    </a>
  </div>

  <br>

  <div>
    <a href="https://github.com/guizimo/cova/stargazers">
      <img src="https://img.shields.io/github/stars/guizimo/cova?style=for-the-badge&logo=github&color=ffca28" alt="GitHub Stars">
    </a>
    <a href="https://github.com/guizimo/cova/network/members">
      <img src="https://img.shields.io/github/forks/guizimo/cova?style=for-the-badge&logo=github&color=32c955" alt="GitHub Forks">
    </a>
    <a href="https://github.com/guizimo/cova/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/guizimo/cova?style=for-the-badge&color=1976d2" alt="License">
    </a>
    <a href="https://github.com/guizimo/cova/releases">
      <img src="https://img.shields.io/github/v/release/guizimo/cova?style=for-the-badge&color=9c27b0" alt="Release">
    </a>
  </div>

  <br>

  <div>
    <a href="#-功能特性">功能特性</a> •
    <a href="#-快速开始">快速开始</a> •
    <a href="#-技术架构">技术架构</a> •
    <a href="#-参与贡献">参与贡献</a> •
    <a href="#-发展路线">发展路线</a>
  </div>

  <br>

  <div>
    <img src="https://img.shields.io/badge/React-19.1.0-61dafb?style=flat-square&logo=react&logoColor=white" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Vite-6.3.5-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.8-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
  </div>
</div>

---

## 🌟 功能特性

<table>
  <tr>
    <td width="50%">
      <h3>🎨 专业设计工具</h3>
      <ul>
        <li><strong>实时预览</strong> — 设计时即刻查看效果变化</li>
        <li><strong>丰富的排版选项</strong> — 多种字体、字号、字距、行高、斜体、颜色</li>
        <li><strong>灵活的背景设置</strong> — 纯色、渐变预设、图片上传、毛玻璃效果</li>
        <li><strong>图标支持</strong> — 添加图标并自定义背景色和内边距</li>
      </ul>
    </td>
    <td width="50%">
      <h3>📐 尺寸与布局</h3>
      <ul>
        <li><strong>多种尺寸预设</strong> — 覆盖博客、社交媒体等常见封面尺寸</li>
        <li><strong>自定义尺寸</strong> — 自由设置任意宽度和高度</li>
        <li><strong>圆角调整</strong> — 可调节的边框圆角</li>
        <li><strong>响应式编辑器</strong> — 可拖拽调整的面板，适配你的工作流程</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🚀 导出与模板</h3>
      <ul>
        <li><strong>多格式导出</strong> — 支持 PNG、JPEG、WebP、AVIF</li>
        <li><strong>模板系统</strong> — 保存、加载和管理最多 10 个模板</li>
        <li><strong>配置持久化</strong> — 设置自动缓存到本地</li>
        <li><strong>一键下载</strong> — 即时导出高质量封面图片</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🌍 国际化与隐私</h3>
      <ul>
        <li><strong>双语界面</strong> — 完整的中英文支持</li>
        <li><strong>100% 本地处理</strong> — 无需上传服务器，数据永不离开你的浏览器</li>
        <li><strong>GitHub Stars 展示</strong> — 编辑器顶部内置仓库星标数显示</li>
        <li><strong>开源项目</strong> — GPL-3.0 协议，免费使用和修改</li>
      </ul>
    </td>
  </tr>
</table>

## 📸 界面展示

<div align="center">

> 在线体验：**[cova.guizimo.com](https://cova.guizimo.com)**

</div>

## 🚀 快速开始

### 环境要求

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/pnpm-9.15.0%2B-f69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm">
</div>

### 安装步骤

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

### 可用脚本

```bash
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本 (tsc + vite)
pnpm preview          # 本地预览生产构建
pnpm lint             # 运行 ESLint 检查
pnpm format           # 使用 Prettier 格式化代码
pnpm release          # 创建新版本 (standard-version)
pnpm release:major    # 主版本升级
pnpm release:minor    # 次版本升级
```

## 🏗️ 技术架构

### 技术栈

<div align="center">

| 分类 | 技术 |
|------|------|
| **前端框架** | ![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?logo=typescript&logoColor=white) |
| **样式方案** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-38bdf8?logo=tailwindcss&logoColor=white) ![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-000000?logo=radixui&logoColor=white) |
| **构建工具** | ![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-9.28.0-4B32C3?logo=eslint&logoColor=white) |
| **状态管理** | ![Zustand](https://img.shields.io/badge/Zustand-5.0.5-FF6B6B?logoColor=white)（含 persist 中间件） |
| **国际化** | ![i18next](https://img.shields.io/badge/i18next-25.2.1-26A69A?logo=i18next&logoColor=white) ![react-i18next](https://img.shields.io/badge/react--i18next-15.5.2-26A69A?logoColor=white) |
| **导出能力** | ![html-to-image](https://img.shields.io/badge/html--to--image-1.11.13-FF6B6B?logoColor=white) ![file-saver](https://img.shields.io/badge/file--saver-2.0.5-4CAF50?logoColor=white) |

</div>

### 项目结构

```
cova/
├── src/
│   ├── components/
│   │   ├── ui/                # 基础 UI 组件（Button、Input、Select、Slider 等）
│   │   ├── layout/            # 落地页模块（Navbar、Hero、Features、CTA、Footer）
│   │   └── generator/         # 编辑器组件
│   │       ├── Header.tsx     # 编辑器头部（版本号 & GitHub Stars）
│   │       ├── Preview.tsx    # 实时封面预览画布
│   │       └── ConfigPanel/   # 配置面板
│   │           ├── TitleConfig.tsx
│   │           ├── FontConfig.tsx
│   │           ├── BackgroundConfig.tsx
│   │           ├── IconConfig.tsx
│   │           ├── SizeConfig.tsx
│   │           └── TemplateConfig.tsx
│   ├── pages/                 # 路由页面
│   │   ├── home/              # 首页
│   │   ├── generator/         # 封面编辑器（核心功能）
│   │   ├── features/          # 功能展示页
│   │   ├── about/             # 关于页面
│   │   ├── contact/           # 联系页面
│   │   ├── faq/               # 常见问题页
│   │   └── not-found/         # 404 页面
│   ├── store/                 # Zustand 状态管理（生成器状态 + 模板管理）
│   ├── config/                # 应用配置常量
│   ├── types/                 # TypeScript 类型定义
│   ├── utils/                 # 工具函数（导出、国际化、分享）
│   ├── lib/                   # 共享辅助函数（cn 工具）
│   ├── locales/               # 国际化翻译文件（en.ts、zh.ts）
│   ├── styles/                # 全局样式
│   └── router/                # React Router 路由配置
├── public/                    # 静态资源
├── CHANGELOG.md               # 自动生成的变更日志
└── package.json
```

## 🤝 参与贡献

我们欢迎社区贡献！参与方式如下：

1. **Fork** 仓库
2. **创建** 功能分支：`git checkout -b feature/amazing-feature`
3. **提交** 更改：`git commit -m 'feat: add amazing feature'`
4. **推送** 分支：`git push origin feature/amazing-feature`
5. **提交** Pull Request

### 代码规范

| 工具 | 用途 |
|------|------|
| **TypeScript** | 完全类型化的代码库 |
| **ESLint** | 一致的代码风格 |
| **Prettier** | 自动格式化 |
| **Commitlint** | 约定式提交信息 |
| **Husky + lint-staged** | 提交前质量检查 |

## 🌟 发展路线

- [x] **v1.0.0** — 核心封面生成器：背景、字体、图标、导出
- [x] **v1.1.0** — 移动端优化、用户体验增强、模板系统
- [ ] **v1.2.0** — 模板市场
- [ ] **v1.3.0** — 协作功能
- [ ] **v2.0.0** — 插件系统、高级动画和特效

## 💝 支持项目

如果您觉得 Cova 有帮助，请考虑：

<div align="center">
  <a href="https://github.com/guizimo/cova/stargazers">
    <img src="https://img.shields.io/badge/在_GitHub_上点星-FFD700?style=for-the-badge&logo=github&logoColor=black" alt="在 GitHub 上点星">
  </a>
  <a href="https://github.com/guizimo/cova/issues">
    <img src="https://img.shields.io/badge/报告问题-FF4444?style=for-the-badge&logo=github&logoColor=white" alt="报告问题">
  </a>
  <a href="https://github.com/guizimo/cova/discussions">
    <img src="https://img.shields.io/badge/参与讨论-4285F4?style=for-the-badge&logo=github&logoColor=white" alt="参与讨论">
  </a>
</div>

## 📄 开源协议

本项目基于 **GPL-3.0 协议** 开源 — 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

<div align="center">

**Guizimo** — *创建者与维护者*

[![邮箱](https://img.shields.io/badge/邮箱-17680262548@163.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:17680262548@163.com)
[![GitHub](https://img.shields.io/badge/GitHub-guizimo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/guizimo)

</div>

---

<div align="center">
  <strong>由 Cova 团队用 ❤️ 精心制作</strong>
  <br>
  <sub>为创作者而生，由创作者打造</sub>
</div>
