export default {
  nav: {
    features: '特性',
    about: '关于',
    faq: 'FAQ',
    blog: '博客',
    contact: '联系我们',
    docs: '文档',
    getStarted: '开始使用'
  },
  hero: {
    badge: '专为创作者',
    title: 'Cova 是一个专为\n封面设计打造的工具',
    description: '遇见现代封面设计系统。简化设计流程，让创作更加流畅。',
    getStarted: '开始使用',
    viewAbout: '关于我们'
  },
  features: {
    title: '为现代创作者打造',
    description: 'Cova 由创作者的实践和原则塑造，专注于提供极致的设计体验。',
    learnMore: '了解更多',
    cards: [
      {
        title: '专为封面设计打造',
        description: '从设计到导出，一站式解决封面设计需求，让创作更加专注。'
      },
      {
        title: '极致的设计体验',
        description: '优化的工作流程，50ms 的响应速度，让设计更加流畅自然。'
      },
      {
        title: '精心打磨的细节',
        description: '每一个交互都经过精心设计，带来卓越的使用体验。'
      }
    ]
  },
  cta: {
    title: '准备好开始创作了吗？',
    description: '立即开始使用 Cova，为你的内容创作精美的封面图片',
    getStarted: '开始使用'
  },
  footer: {
    product: '产品',
    resources: '资源',
    company: '社交媒体',
    features: '特性',
    pricing: '定价',
    changelog: '更新日志',
    docs: '文档',
    blog: '博客',
    github: 'GitHub',
    about: '关于',
    contact: '联系我们',
    privacy: '隐私政策',
    copyright: '© 2025 Cova. All rights reserved.',
    builtBy: '由 Guizimo 构建'
  },
  notFound: {
    title: '页面未找到',
    subtitle: '404',
    description: '抱歉，您访问的页面不存在。可能是页面已被删除，或者您输入的地址有误。',
    backHome: '返回首页',
    contactSupport: '联系支持'
  },
  generator: {
    title: '封面生成器',
    version: '版本',
    ai: {
      title: 'AI 助手',
      notConfiguredHint: '连接你的 AI 服务即可解锁 AI 设计 —— 点击进行配置',
      tabs: {
        design: '设计',
        copy: '文案',
        color: '配色'
      },
      design: {
        placeholder:
          '描述你想要的封面，例如「一张深色科技风封面，用于 Kubernetes 深度解析文章」；也可输入微调指令，例如「标题再大一点、换成暖色」',
        action: '生成设计',
        applied: '已应用 AI 设计',
        cancel: '取消',
        refineHint: '基于当前设计一键微调',
        chips: {
          brighter: '更鲜艳',
          darker: '深色模式',
          warmer: '暖色调',
          cooler: '冷色调',
          biggerTitle: '标题更大',
          minimal: '更简洁',
          gradient: '渐变背景'
        }
      },
      copy: {
        placeholder: '标题主题',
        action: '获取灵感',
        applied: '已应用文案'
      },
      color: {
        placeholder: '心情或关键词，例如「平静的海上日出」',
        action: '生成',
        applied: '已应用配色'
      },
      settings: {
        title: 'AI 服务配置',
        description: '自带密钥，兼容任意 OpenAI 协议端点（OpenAI、OpenRouter、Azure、Ollama 等）。',
        baseUrl: 'API 基础地址',
        apiKey: 'API 密钥',
        model: '模型',
        privacy: '仅保存在你的浏览器，请求直连你所选择的服务商。',
        connected: '已连接'
      },
      errors: {
        notConfigured: '请先配置你的 AI 服务',
        auth: '鉴权失败 —— 请检查 API 密钥',
        http: 'AI 请求失败，请重试',
        timeout: '请求超时，请重试',
        network: '网络错误 —— 请检查基础地址与网络连接',
        parse: '无法解析 AI 返回内容，请重试',
        empty: 'AI 未返回可用结果，请重试',
        unknown: '出错了，请重试'
      }
    },
    buttons: {
      reset: '重置',
      share: '分享',
      export: '导出',
      backToHome: '返回首页'
    },
    share: {
      success: '分享成功',
      copied: '链接已复制到剪贴板',
      failed: '分享失败，请重试'
    },
    reset: {
      done: '已重置为默认设计',
      reverted: '已恢复重置前的设计'
    },
    controls: {
      title: '控制面板',
      collapse: '收起',
      expand: '展开控制面板',
      dragHint: '拖动可移动面板'
    },
    export: {
      png: 'PNG 格式',
      jpeg: 'JPEG 格式',
      jpegQuality: '质量 {{value}}',
      webp: 'WebP 格式',
      avif: 'AVIF 格式',
      avifNote: '暂以 PNG 导出',
      exporting: '正在导出...',
      successTitle: '🎉 {{format}} 导出成功！',
      successDesc: '文件已开始下载',
      blurWarningTitle: '毛玻璃效果不会在导出中显示',
      blurWarningDesc: '建议使用浏览器截图功能保留效果',
      errors: {
        notFound: '找不到预览元素，请刷新页面重试',
        cors: '导出失败：图片跨域限制',
        corsDesc: '建议上传本地图片或使用支持 CORS 的图片服务',
        network: '导出失败：网络问题',
        networkDesc: '请检查网络连接或使用本地图片',
        memory: '导出失败：内存不足',
        memoryDesc: '请尝试减小图片尺寸',
        generic: '导出失败',
        genericDesc: '请重试或使用本地图片'
      }
    },
    config: {
      title: {
        label: '标题',
        placeholder: '输入您的标题',
        subtitleLabel: '副标题',
        subtitlePlaceholder: '选填，显示在标题下方'
      },
      size: {
        label: '封面尺寸',
        custom: '自定义',
        width: '宽度',
        height: '高度'
      },
      font: {
        label: '字体设置',
        family: '字体',
        size: '字体大小',
        weight: '字体粗细',
        style: '字体样式',
        lineHeight: '行高',
        letterSpacing: '字间距',
        color: '文字颜色',
        normal: '正常',
        italic: '斜体',
        thin: '细体',
        light: '轻体',
        regular: '常规',
        medium: '中等',
        semibold: '半粗',
        bold: '粗体',
        heavy: '重体'
      },
      background: {
        label: '背景设置',
        type: '类型',
        solid: '纯色',
        gradient: '渐变',
        image: '图片',
        transparent: '透明',
        color: '背景颜色',
        presetColors: '预设颜色',
        presetGradients: '预设渐变',
        recentlyUsed: '最近使用',
        gradientStart: '渐变起始色',
        gradientEnd: '渐变结束色',
        gradientAngle: '渐变角度',
        uploadImage: '上传图片',
        clickToUpload: '点击上传图片',
        imageUrl: '图片链接',
        imageUrlPlaceholder: '输入图片链接',
        imageSize: '图片尺寸',
        imagePosition: '图片位置',
        borderRadius: '圆角',
        backdropBlur: '背景模糊',
        cover: '覆盖',
        contain: '包含',
        center: '居中',
        topLeft: '左上',
        topRight: '右上',
        bottomLeft: '左下',
        bottomRight: '右下'
      },
      icon: {
        label: '图标设置',
        show: '显示图标',
        position: '位置',
        size: '大小',
        borderRadius: '圆角',
        shadow: '阴影',
        backgroundColor: '背景色',
        padding: '内边距',
        uploadIcon: '上传图标',
        clickToUpload: '点击上传图标',
        iconUrl: '图标链接',
        iconUrlPlaceholder: '输入图标链接',
        center: '居中',
        topLeft: '左上',
        topRight: '右上',
        bottomLeft: '左下',
        bottomRight: '右下'
      },
      tips: {
        suggestionTitle: '使用建议',
        suggestionDesc: '推荐使用上方的上传功能添加本地图片',
        onlineWarnTitle: '在线图片提示',
        onlineWarnDesc: '如导出失败，建议保存图片到本地后重新上传',
        localTitle: '本地图片',
        localDesc: '导出成功率最高，加载速度快',
        blurExportTitle: '导出限制提示',
        blurExportLine1: '毛玻璃效果在导出时不会显示',
        blurExportLine2: '如需保留效果，请使用浏览器截图功能'
      }
    },
    tabs: {
      config: '配置',
      preview: '预览'
    },
    templates: {
      title: '模板',
      myTemplates: '我的模板',
      saveAs: '保存为模板',
      apply: '应用',
      preview: '预览',
      import: '导入',
      remove: '删除',
      namePlaceholder: '输入模板名称',
      untitled: '未命名模板',
      saved: '已保存为模板',
      imported: '已导入到我的模板',
      previewed: '已应用模板（已保留你之前的设计）',
      previewReverted: '已恢复到你之前的设计',
      undo: '撤销',
      noTemplates: '暂无模板，可先设计后保存',
      marketplace: {
        title: '模板市场',
        searchPlaceholder: '搜索模板名称或用途',
        empty: '没有匹配的模板，请尝试其它关键词或分类',
        categories: {
          all: '全部',
          tech: '技术',
          social: '社媒',
          minimal: '极简'
        },
        items: {
          techDark: {
            name: '科技深色',
            description: '适合技术文章、发布日志与产品更新'
          },
          creatorWarm: {
            name: '创作者暖色',
            description: '适合内容总结、周报和社媒封面'
          },
          minimalLight: {
            name: '极简浅色',
            description: '适合产品文档、教程与知识卡片'
          }
        }
      }
    }
  },
  featuresPage: {
    hero: {
      title: '封面设计的\n全新标准',
      subtitle: 'cover design',
      description:
        '凭借精致的设计、惊人的速度和专门构建的工作流程，Cova 释放团队的全部潜力。它是现代创作者的首选工具。',
      getStarted: '开始使用',
      viewAbout: '关于我们'
    },
    coreFeatures: {
      coverDesign: {
        title: '封面设计',
        subtitle: '秒速创建精美封面',
        description: '专业级封面设计工具，支持实时预览和即时导出功能。',
        metrics: '50ms 响应时间'
      },
      lightningFast: {
        title: '闪电般快速',
        subtitle: '性能优化',
        description: '采用现代架构构建，注重速度。每一个交互都经过优化，确保最大的响应性。',
        metrics: '99.9% 正常运行时间'
      },
      exportReady: {
        title: '导出就绪',
        subtitle: '多格式支持',
        description: '支持导出 PNG、JPEG、WebP 和 AVIF 格式，具有可自定义的质量设置。',
        metrics: '支持 4 种格式'
      }
    },
    performance: {
      title: '专为性能而生',
      description: 'Cova 的每个方面都经过优化，确保在所有设备上都能提供卓越的速度和可靠性。',
      stats: {
        responseTime: '响应时间',
        exportFormats: '导出格式',
        localProcessing: '本地处理',
        customizations: '自定义'
      }
    },
    additionalFeatures: {
      title: '创作所需的一切',
      description: '全面的功能设计，旨在简化您的创意工作流程并提高生产力。',
      mobileOptimized: {
        title: '移动端优化',
        description: '全功能移动端体验，具有触控优化的控件和响应式设计。'
      },
      multiLanguage: {
        title: '多语言支持',
        description: '原生支持多种语言，具有自动检测和无缝切换功能。'
      },
      privacyFirst: {
        title: '隐私优先',
        description: '您的设计保持私密。无需服务器上传，一切都在您的浏览器中本地处理。'
      }
    },
    cta: {
      title: '准备开始创作了吗？',
      description: '加入成千上万信任 Cova 满足封面设计需求的创作者。',
      startDesigning: '开始设计',
      viewGithub: '查看 GitHub'
    }
  },
  faqPage: {
    hero: {
      title: '常见问题',
      subtitle: '快速找到您需要的答案',
      description: '我们整理了用户最常问的问题和详细解答，帮助您更好地使用 Cova。'
    },
    categories: {
      general: {
        title: '基础问题',
        questions: [
          {
            question: 'Cova 是什么？',
            answer:
              'Cova 是一个专为封面设计打造的免费开源工具。它提供现代化的设计界面，让您能够快速创建专业的封面图片，支持多种格式导出。'
          },
          {
            question: 'Cova 是免费的吗？',
            answer:
              '是的，Cova 完全免费且开源。您可以无限制地使用所有功能，无需注册账号或付费。我们的代码在 GitHub 上公开，遵循开源协议。'
          },
          {
            question: '我需要安装什么软件吗？',
            answer:
              '不需要。Cova 是一个基于 Web 的应用程序，您只需要一个现代的浏览器就可以使用，支持 Chrome、Firefox、Safari、Edge 等主流浏览器。'
          }
        ]
      },
      privacy: {
        title: '隐私与安全',
        questions: [
          {
            question: '我的设计数据会被上传到服务器吗？',
            answer:
              '不会。Cova 的所有处理都在您的浏览器本地完成，包括图片处理、文字渲染和导出功能。我们不会收集、存储或上传您的任何设计数据，确保您的隐私和数据安全。'
          },
          {
            question: '我上传的图片是否安全？',
            answer:
              '是的，完全安全。您上传的所有图片都只在您的浏览器内存中处理，不会传输到任何服务器。当您关闭浏览器标签页时，所有数据都会被清除。'
          }
        ]
      },
      features: {
        title: '功能相关',
        questions: [
          {
            question: '支持哪些导出格式？',
            answer:
              '目前支持 PNG、JPEG、WebP 三种主流格式，可自定义质量并默认以 2 倍分辨率高清输出。PNG 支持透明背景，JPEG 适合照片，WebP 拥有更好的压缩率；AVIF 选项目前会回退为 PNG 导出。'
          },
          {
            question: '可以自定义封面尺寸吗？',
            answer:
              '可以。除了预设的常用尺寸（如社交媒体封面、博客封面等），您还可以自定义任意尺寸。支持像素、百分比等单位，满足各种使用场景。'
          },
          {
            question: '支持哪些字体？',
            answer:
              'Cova 内置了多种精选的中英文字体，包括思源黑体、思源宋体、Inter、Roboto 等。我们会持续添加更多高质量的字体选项。'
          },
          {
            question: '可以保存设计方案吗？',
            answer: '目前您可以导出设计为图片格式保存。我们正在开发设计方案保存功能，将来您可以保存和分享您的设计模板。'
          }
        ]
      },
      technical: {
        title: '技术支持',
        questions: [
          {
            question: '遇到问题如何报告？',
            answer:
              '您可以通过多种方式联系我们：1. 在 GitHub 仓库创建 Issue；2. 发送邮件到 hello@cova.design；3. 访问我们的联系页面获取更多联系方式。'
          },
          {
            question: '如何提出功能建议？',
            answer:
              '我们欢迎您的建议！您可以在 GitHub 仓库创建 Feature Request，或者通过邮件联系我们。请详细描述您的需求和使用场景，这将帮助我们更好地改进产品。'
          },
          {
            question: '支持移动端使用吗？',
            answer: '是的，Cova 采用响应式设计，完美支持手机和平板设备。移动端界面经过优化，提供触控友好的操作体验。'
          },
          {
            question: '为什么导出的图片模糊？',
            answer:
              '请检查：1. 导出质量设置是否过低；2. 原始图片分辨率是否足够；3. 浏览器缩放设置是否为100%。建议使用高质量设置和高分辨率素材以获得最佳效果。'
          }
        ]
      }
    },
    contact: {
      title: '没有找到答案？',
      description: '如果您在这里没有找到需要的答案，欢迎随时联系我们。',
      contactUs: '联系我们'
    },
    search: {
      placeholder: '搜索问题...',
      noResults: '没有找到相关问题',
      noResultsDescription: '尝试使用不同的关键词搜索，或浏览下面的分类',
      clearSearch: '清除搜索'
    }
  },
  contactPage: {
    hero: {
      title: '联系我们',
      subtitle: '随时为您提供帮助',
      description: '有任何问题或建议？我们很乐意为您提供帮助。选择最适合您的联系方式。'
    },
    contactMethods: {
      email: {
        title: '发送邮件',
        description: '发送详细信息给我们，我们会尽快回复您。',
        action: '发送邮件',
        address: 'hello@cova.design'
      },
      github: {
        title: 'GitHub Issues',
        description: '在我们的 GitHub 仓库中报告问题或提出功能请求。',
        action: '访问 GitHub',
        link: 'github.com/guizimo/cova'
      },
      twitter: {
        title: '社交媒体',
        description: '在社交媒体上关注我们，获取最新更新和技术分享。',
        action: '关注我们',
        handle: '@cova_design'
      }
    },
    faq: {
      title: '常见问题',
      description: '查看我们的常见问题解答，也许能快速找到您需要的答案。',
      questions: [
        {
          question: 'Cova 是免费的吗？',
          answer: '是的，Cova 完全免费且开源。您可以无限制地使用所有功能。'
        },
        {
          question: '我的设计数据会被上传到服务器吗？',
          answer: '不会。Cova 所有处理都在您的浏览器本地完成，确保您的隐私和数据安全。'
        },
        {
          question: '支持哪些导出格式？',
          answer: '目前支持 PNG、JPEG、WebP 和 AVIF 四种格式，可以自定义质量设置。'
        },
        {
          question: '如何报告 Bug 或提出功能建议？',
          answer: '您可以在我们的 GitHub 仓库中创建 Issue，或者通过邮件联系我们。'
        }
      ]
    },
    support: {
      title: '技术支持',
      description: '遇到技术问题？我们提供多种支持渠道。',
      channels: [
        {
          title: '社区论坛',
          description: '与其他用户交流使用经验',
          link: '#'
        },
        {
          title: '视频教程',
          description: '观看详细的操作演示视频',
          link: '#'
        }
      ]
    },
    cta: {
      title: '准备开始了吗？',
      description: '立即开始使用 Cova 创建精美的封面设计',
      getStarted: '开始使用'
    },
    faqQuickLink: {
      title: '常见问题解答',
      description: '在联系我们之前，您可以先查看我们的常见问题解答，也许能快速找到您需要的答案。',
      viewFaq: '查看常见问题'
    }
  },
  aboutPage: {
    hero: {
      title: '关于 Cova',
      description: '我们致力于为创作者打造最优秀的封面设计工具，让每个人都能轻松创作出专业级的作品。'
    },
    mission: {
      title: '我们的使命',
      description: '简化设计流程，让创作更加专注。我们相信好的工具应该是无形的，让创意自由流淌。'
    },
    values: {
      performance: {
        title: '极致性能',
        description: '50ms 响应时间，流畅的操作体验，让设计过程不再有任何等待。'
      },
      userFirst: {
        title: '用户至上',
        description: '每一个功能都经过深思熟虑，确保用户体验的每个细节都尽善尽美。'
      },
      openSource: {
        title: '开源精神',
        description: '透明的开发过程，欢迎社区贡献，共同打造更好的产品。'
      }
    },
    techStack: {
      title: '技术栈',
      description: '我们使用最现代的技术栈，确保产品的稳定性和可扩展性。',
      react: '现代化的 React 18 框架，提供出色的用户界面体验。',
      typescript: '类型安全的 TypeScript，确保代码质量和开发效率。',
      vite: '极速的构建工具，提供快速的开发和构建体验。',
      tailwind: '原子化的 CSS 框架，快速构建现代化界面。',
      zustand: '轻量级状态管理，简单高效的数据流管理。',
      i18next: '国际化解决方案，支持多语言无缝切换。'
    },
    team: {
      title: '团队介绍',
      description: '我们是一支充满热情的团队，致力于为创作者提供最好的工具。',
      guizimo: {
        role: '创始人 & 开发者',
        description: '全栈开发者，专注于用户体验和产品设计，致力于打造优秀的创作工具。'
      }
    },
    roadmap: {
      title: '发展路线',
      description: '我们有着清晰的产品规划，持续为用户带来更多价值。',
      status: {
        'completed': '已完成',
        'in-progress': '进行中',
        'planned': '计划中'
      },
      v1: {
        title: '核心功能和稳定版本发布'
      },
      v1_1: {
        title: '模板市场和更多设计选项'
      },
      v1_2: {
        title: '协作功能和团队工作空间'
      },
      v1_3: {
        title: '插件系统和自定义扩展'
      },
      v2: {
        title: '高级动画和交互效果'
      }
    },
    cta: {
      title: '加入我们的旅程',
      description: '立即开始使用 Cova，体验全新的封面设计方式，或者在 GitHub 上查看源代码。',
      getStarted: '开始使用',
      viewSource: '查看源码'
    }
  }
};
