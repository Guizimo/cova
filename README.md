# 🎨 Cova

<div align="center">
  <p><strong>English</strong> | <a href="./README.zh-CN.md">简体中文</a></p>
  
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/logo.png">
    <source media="(prefers-color-scheme: light)" srcset="public/logo.png">
    <img alt="Cova Logo" src="public/logo.png" width="120" height="120">
  </picture>

  <h1>Cova</h1>
  <p><strong>The new standard for cover design</strong></p>
  <p>A professional-grade cover image generator with real-time preview, template management, and multi-format export — all running locally in your browser.</p>

  <div>
    <a href="https://cova.guizimo.com" target="_blank">
      <img src="https://img.shields.io/badge/🌐_Live_Demo-cova.guizimo.com-4285F4?style=for-the-badge" alt="Live Demo">
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
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-contributing">Contributing</a> •
    <a href="#-roadmap">Roadmap</a>
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

## 🌟 Features

<table>
  <tr>
    <td width="50%">
      <h3>🎨 Professional Design Tools</h3>
      <ul>
        <li><strong>Real-time Preview</strong> — See changes instantly as you design</li>
        <li><strong>Rich Typography</strong> — Multiple fonts, sizes, letter-spacing, line-height, italic, and color</li>
        <li><strong>Flexible Backgrounds</strong> — Solid colors, gradients with presets, image upload, frosted glass effects</li>
        <li><strong>Icon Support</strong> — Add icons with customizable background color and padding</li>
      </ul>
    </td>
    <td width="50%">
      <h3>📐 Size & Layout</h3>
      <ul>
        <li><strong>Multiple Presets</strong> — Common cover sizes for blogs, social media, etc.</li>
        <li><strong>Custom Dimensions</strong> — Set any width and height</li>
        <li><strong>Border Radius</strong> — Adjustable rounded corners</li>
        <li><strong>Responsive Editor</strong> — Resizable panels that adapt to your workflow</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🚀 Export & Templates</h3>
      <ul>
        <li><strong>Multi-format Export</strong> — PNG, JPEG, WebP, AVIF</li>
        <li><strong>Template System</strong> — Save, load, and manage up to 10 templates</li>
        <li><strong>Configuration Persistence</strong> — Your settings are automatically cached locally</li>
        <li><strong>One-click Download</strong> — Export high-quality cover images instantly</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🌍 Internationalization & Privacy</h3>
      <ul>
        <li><strong>Bilingual UI</strong> — Full English and Chinese support</li>
        <li><strong>100% Local Processing</strong> — No server uploads, your data never leaves your browser</li>
        <li><strong>GitHub Stars Display</strong> — Built-in repo star count on the editor header</li>
        <li><strong>Open Source</strong> — GPL-3.0, free to use and modify</li>
      </ul>
    </td>
  </tr>
</table>

## 📸 Showcase

<div align="center">

> Try it live at **[cova.guizimo.com](https://cova.guizimo.com)**

</div>

## 🚀 Quick Start

### Prerequisites

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/pnpm-9.15.0%2B-f69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm">
</div>

### Installation

```bash
# Clone the repository
git clone https://github.com/guizimo/cova.git

# Navigate to the project directory
cd cova

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev              # Start development server
pnpm build            # Build for production (tsc + vite)
pnpm preview          # Preview production build locally
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier
pnpm release          # Create a new release (standard-version)
pnpm release:major    # Major version bump
pnpm release:minor    # Minor version bump
```

## 🏗️ Architecture

### Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Framework** | ![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?logo=typescript&logoColor=white) |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-38bdf8?logo=tailwindcss&logoColor=white) ![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-000000?logo=radixui&logoColor=white) |
| **Build** | ![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-9.28.0-4B32C3?logo=eslint&logoColor=white) |
| **State** | ![Zustand](https://img.shields.io/badge/Zustand-5.0.5-FF6B6B?logoColor=white) (with persist middleware) |
| **i18n** | ![i18next](https://img.shields.io/badge/i18next-25.2.1-26A69A?logo=i18next&logoColor=white) ![react-i18next](https://img.shields.io/badge/react--i18next-15.5.2-26A69A?logoColor=white) |
| **Export** | ![html-to-image](https://img.shields.io/badge/html--to--image-1.11.13-FF6B6B?logoColor=white) ![file-saver](https://img.shields.io/badge/file--saver-2.0.5-4CAF50?logoColor=white) |

</div>

### Project Structure

```
cova/
├── src/
│   ├── components/
│   │   ├── ui/                # Base UI components (Button, Input, Select, Slider, etc.)
│   │   ├── layout/            # Landing page sections (Navbar, Hero, Features, CTA, Footer)
│   │   └── generator/         # Editor components
│   │       ├── Header.tsx     # Editor header with version & GitHub stars
│   │       ├── Preview.tsx    # Real-time cover preview canvas
│   │       └── ConfigPanel/   # Configuration panels
│   │           ├── TitleConfig.tsx
│   │           ├── FontConfig.tsx
│   │           ├── BackgroundConfig.tsx
│   │           ├── IconConfig.tsx
│   │           ├── SizeConfig.tsx
│   │           └── TemplateConfig.tsx
│   ├── pages/                 # Route pages
│   │   ├── home/              # Landing page
│   │   ├── generator/         # Cover editor (core feature)
│   │   ├── features/          # Features showcase
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── faq/               # FAQ page
│   │   └── not-found/         # 404 page
│   ├── store/                 # Zustand stores (generator state + templates)
│   ├── config/                # App configuration constants
│   ├── types/                 # TypeScript type definitions
│   ├── utils/                 # Utility functions (export, i18n, share)
│   ├── lib/                   # Shared helpers (cn utility)
│   ├── locales/               # i18n translations (en.ts, zh.ts)
│   ├── styles/                # Global styles
│   └── router/                # React Router configuration
├── public/                    # Static assets
├── CHANGELOG.md               # Auto-generated changelog
└── package.json
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Submit** a Pull Request

### Code Standards

| Tool | Purpose |
|------|---------|
| **TypeScript** | Fully typed codebase |
| **ESLint** | Consistent code style |
| **Prettier** | Automated formatting |
| **Commitlint** | Conventional commit messages |
| **Husky + lint-staged** | Pre-commit quality checks |

## 🌟 Roadmap

- [x] **v1.0.0** — Core cover generator with background, fonts, icons, and export
- [x] **v1.1.0** — Mobile optimization, enhanced UX, template system
- [ ] **v1.2.0** — Template marketplace
- [ ] **v1.3.0** — Collaboration features
- [ ] **v2.0.0** — Plugin system, advanced animations and effects

## 💝 Support

If you find Cova helpful, please consider:

<div align="center">
  <a href="https://github.com/guizimo/cova/stargazers">
    <img src="https://img.shields.io/badge/Star_on_GitHub-FFD700?style=for-the-badge&logo=github&logoColor=black" alt="Star on GitHub">
  </a>
  <a href="https://github.com/guizimo/cova/issues">
    <img src="https://img.shields.io/badge/Report_Bug-FF4444?style=for-the-badge&logo=github&logoColor=white" alt="Report Bug">
  </a>
  <a href="https://github.com/guizimo/cova/discussions">
    <img src="https://img.shields.io/badge/Discussions-4285F4?style=for-the-badge&logo=github&logoColor=white" alt="Discussions">
  </a>
</div>

## 📄 License

This project is licensed under the **GPL-3.0 License** — see the [LICENSE](LICENSE) file for details.

## 📞 Contact

<div align="center">

**Guizimo** — *Creator & Maintainer*

[![Email](https://img.shields.io/badge/Email-17680262548@163.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:17680262548@163.com)
[![GitHub](https://img.shields.io/badge/GitHub-guizimo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/guizimo)

</div>

---

<div align="center">
  <strong>Made with ❤️ by the Cova Team</strong>
  <br>
  <sub>Built for creators, by creators</sub>
</div>
