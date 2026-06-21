export default {
  nav: {
    features: 'Features',
    about: 'About',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Contact',
    docs: 'Docs',
    getStarted: 'Get Started'
  },
  hero: {
    badge: 'For Creators',
    title: 'Cova is a tool built for\ncover design',
    description: 'Meet the modern cover design system. Streamline your design process and make creation more fluid.',
    getStarted: 'Get Started',
    viewAbout: 'About Us'
  },
  features: {
    title: 'Built for Modern Creators',
    description:
      "Cova is shaped by creators' practices and principles, focused on delivering the ultimate design experience.",
    learnMore: 'Learn More',
    cards: [
      {
        title: 'Purpose-built for Cover Design',
        description: 'From design to export, a one-stop solution for cover design needs, making creation more focused.'
      },
      {
        title: 'Ultimate Design Experience',
        description: 'Optimized workflow, 50ms response time, making design more fluid and natural.'
      },
      {
        title: 'Meticulously Crafted Details',
        description: 'Every interaction is carefully designed to deliver an exceptional user experience.'
      }
    ]
  },
  cta: {
    title: 'Ready to Start Creating?',
    description: 'Start using Cova now to create beautiful cover images for your content',
    getStarted: 'Get Started'
  },
  footer: {
    product: 'Product',
    resources: 'Resources',
    company: 'Social Media',
    features: 'Features',
    pricing: 'Pricing',
    changelog: 'Changelog',
    docs: 'Documentation',
    blog: 'Blog',
    github: 'GitHub',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    copyright: '© 2025 Cova. All rights reserved.',
    builtBy: 'Built by Guizimo'
  },
  notFound: {
    title: 'Page Not Found',
    subtitle: '404',
    description:
      "Sorry, the page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.",
    backHome: 'Back to Home',
    contactSupport: 'Contact Support'
  },
  generator: {
    title: 'Cova Cover Generator',
    version: 'version',
    ai: {
      title: 'AI Assistant',
      notConfiguredHint: 'Connect your AI provider to unlock AI design — click to set it up',
      tabs: {
        design: 'Design',
        copy: 'Copy',
        color: 'Color'
      },
      design: {
        placeholder:
          'Describe the cover you want, e.g. "A dark, techy cover for a Kubernetes deep-dive article" — or type a tweak like "make the title bigger and use warm colors"',
        action: 'Generate design',
        applied: 'AI design applied',
        cancel: 'Cancel',
        refineHint: 'Quick refine based on the current design',
        chips: {
          brighter: 'More vivid',
          darker: 'Dark mode',
          warmer: 'Warmer',
          cooler: 'Cooler',
          biggerTitle: 'Bigger title',
          minimal: 'Minimal',
          gradient: 'Gradient'
        }
      },
      copy: {
        placeholder: 'Topic for the headline',
        action: 'Ideas',
        applied: 'Copy applied'
      },
      color: {
        placeholder: 'Mood or keyword, e.g. "calm ocean sunrise"',
        action: 'Generate',
        applied: 'Palette applied'
      },
      settings: {
        title: 'AI provider settings',
        description: 'Bring your own key. Any OpenAI-compatible endpoint works (OpenAI, OpenRouter, Azure, Ollama…).',
        baseUrl: 'API Base URL',
        apiKey: 'API Key',
        model: 'Model',
        privacy: 'Stored only in your browser; requests go directly to your provider.',
        connected: 'Connected'
      },
      errors: {
        notConfigured: 'Please configure your AI provider first',
        auth: 'Authentication failed — check your API key',
        http: 'AI request failed, please try again',
        timeout: 'Request timed out, please try again',
        network: 'Network error — check the Base URL and your connection',
        parse: 'Could not parse the AI response, please retry',
        empty: 'The AI returned no usable result, please retry',
        unknown: 'Something went wrong, please try again'
      }
    },
    buttons: {
      reset: 'Reset',
      share: 'Share',
      export: 'Export',
      backToHome: 'Back to Home'
    },
    share: {
      success: 'Shared successfully',
      copied: 'Link copied to clipboard',
      failed: 'Share failed, please try again'
    },
    reset: {
      done: 'Reset to the default design',
      reverted: 'Restored your previous design'
    },
    controls: {
      title: 'Controls',
      collapse: 'Collapse',
      expand: 'Expand controls',
      dragHint: 'Drag to move the panel'
    },
    canvas: {
      zoomIn: 'Zoom in',
      zoomOut: 'Zoom out',
      fit: 'Fit to screen',
      resetZoom: 'Reset zoom',
      grid: 'Grid'
    },
    export: {
      png: 'PNG Format',
      jpeg: 'JPEG Format',
      jpegQuality: 'Quality {{value}}',
      webp: 'WebP Format',
      avif: 'AVIF Format',
      avifNote: 'Falls back to PNG',
      exporting: 'Exporting...',
      successTitle: '🎉 {{format}} exported successfully!',
      successDesc: 'Your file is downloading',
      blurWarningTitle: 'Backdrop blur is not included in exports',
      blurWarningDesc: 'Use your browser screenshot tool to keep it',
      errors: {
        notFound: 'Preview element not found, please refresh and try again',
        cors: 'Export failed: image cross-origin restriction',
        corsDesc: 'Upload a local image or use a CORS-enabled image service',
        network: 'Export failed: network issue',
        networkDesc: 'Check your connection or use a local image',
        memory: 'Export failed: out of memory',
        memoryDesc: 'Try reducing the cover size',
        generic: 'Export failed',
        genericDesc: 'Please retry or use a local image'
      }
    },
    config: {
      title: {
        label: 'Title',
        placeholder: 'Enter your title',
        subtitleLabel: 'Subtitle',
        subtitlePlaceholder: 'Optional, shown below title'
      },
      size: {
        label: 'Cover Size',
        custom: 'Custom',
        width: 'Width',
        height: 'Height'
      },
      font: {
        label: 'Font Settings',
        family: 'Font Family',
        size: 'Font Size',
        weight: 'Font Weight',
        style: 'Font Style',
        lineHeight: 'Line Height',
        letterSpacing: 'Letter Spacing',
        color: 'Text Color',
        normal: 'Normal',
        italic: 'Italic',
        thin: 'Thin',
        light: 'Light',
        regular: 'Regular',
        medium: 'Medium',
        semibold: 'Semi Bold',
        bold: 'Bold',
        heavy: 'Heavy'
      },
      background: {
        label: 'Background Settings',
        type: 'Type',
        solid: 'Solid',
        gradient: 'Gradient',
        image: 'Image',
        transparent: 'Transparent',
        color: 'Background Color',
        presetColors: 'Preset Colors',
        presetGradients: 'Preset Gradients',
        recentlyUsed: 'Recently Used',
        gradientStart: 'Gradient Start',
        gradientEnd: 'Gradient End',
        gradientAngle: 'Gradient Angle',
        uploadImage: 'Upload Image',
        clickToUpload: 'Click to upload an image',
        imageUrl: 'Image URL',
        imageUrlPlaceholder: 'Enter image URL',
        imageSize: 'Image Size',
        imagePosition: 'Image Position',
        borderRadius: 'Border Radius',
        backdropBlur: 'Backdrop Blur',
        cover: 'Cover',
        contain: 'Contain',
        center: 'Center',
        topLeft: 'Top Left',
        topRight: 'Top Right',
        bottomLeft: 'Bottom Left',
        bottomRight: 'Bottom Right'
      },
      icon: {
        label: 'Icon Settings',
        show: 'Show Icon',
        position: 'Position',
        size: 'Size',
        borderRadius: 'Border Radius',
        shadow: 'Shadow',
        backgroundColor: 'Background Color',
        padding: 'Padding',
        uploadIcon: 'Upload Icon',
        clickToUpload: 'Click to upload an icon',
        iconUrl: 'Icon URL',
        iconUrlPlaceholder: 'Enter icon URL',
        center: 'Center',
        topLeft: 'Top Left',
        topRight: 'Top Right',
        bottomLeft: 'Bottom Left',
        bottomRight: 'Bottom Right'
      },
      tips: {
        suggestionTitle: 'Tip',
        suggestionDesc: 'Use the uploader above to add a local image',
        onlineWarnTitle: 'Online image notice',
        onlineWarnDesc: 'If export fails, save the image locally and re-upload it',
        localTitle: 'Local image',
        localDesc: 'Highest export success rate and fast loading',
        blurExportTitle: 'Export limitation',
        blurExportLine1: 'Backdrop blur is not rendered in exports',
        blurExportLine2: 'To keep the effect, use your browser screenshot tool'
      }
    },
    tabs: {
      config: 'Configuration',
      preview: 'Preview'
    },
    templates: {
      title: 'Templates',
      myTemplates: 'My templates',
      saveAs: 'Save as template',
      apply: 'Apply',
      preview: 'Preview',
      import: 'Import',
      remove: 'Remove',
      rename: 'Rename',
      saveTitle: 'Save the current design as a template',
      namePlaceholder: 'Enter template name',
      untitled: 'Untitled template',
      saved: 'Saved as template',
      applied: 'Template applied (previous design kept)',
      renamed: 'Renamed',
      deleted: 'Template deleted',
      capacityHint: 'Template limit reached. Saving removes the oldest one',
      imported: 'Imported to my templates',
      previewed: 'Template applied (your previous design is kept)',
      previewReverted: 'Reverted to your previous design',
      undo: 'Undo',
      noTemplates: 'No templates yet. Design and save one',
      marketplace: {
        title: 'Template marketplace',
        searchPlaceholder: 'Search by name or use case',
        empty: 'No templates matched. Try another keyword or category',
        categories: {
          all: 'All',
          tech: 'Tech',
          social: 'Social',
          minimal: 'Minimal',
          vibrant: 'Vibrant',
          dark: 'Dark'
        },
        items: {
          techDark: {
            name: 'Tech Dark',
            description: 'Great for engineering posts, release notes, and product updates'
          },
          creatorWarm: {
            name: 'Creator Warm',
            description: 'Great for weekly recaps, creator content, and social covers'
          },
          minimalLight: {
            name: 'Minimal Light',
            description: 'Great for docs, tutorials, and knowledge cards'
          },
          midnightPro: {
            name: 'Midnight Pro',
            description: 'Great for releases, changelogs, and dark-themed covers'
          },
          sunsetPop: {
            name: 'Sunset Pop',
            description: 'Great for launches, announcements, and high-energy themes'
          },
          oceanCalm: {
            name: 'Ocean Calm',
            description: 'Great for cloud, infrastructure, and tech brands'
          },
          monoPaper: {
            name: 'Mono Paper',
            description: 'Great for long reads, essays, and editorial content'
          },
          neonGrid: {
            name: 'Neon Future',
            description: 'Great for cutting-edge tech, launches, and trendy themes'
          },
          forestZen: {
            name: 'Forest Zen',
            description: 'Great for lifestyle, focus, and mindfulness content'
          }
        }
      }
    }
  },
  featuresPage: {
    hero: {
      title: 'The New Standard for\nCover Design',
      subtitle: 'cover design',
      description:
        "With exquisite design, amazing speed, and purpose-built workflows, Cova unleashes your team's full potential. It's the go-to tool for modern creators.",
      getStarted: 'Get Started',
      viewAbout: 'About Us'
    },
    coreFeatures: {
      coverDesign: {
        title: 'Cover Design',
        subtitle: 'Create beautiful covers in seconds',
        description: 'Professional-grade cover design tools with real-time preview and instant export capabilities.',
        metrics: '50ms response time'
      },
      lightningFast: {
        title: 'Lightning Fast',
        subtitle: 'Optimized for performance',
        description:
          'Built for speed with modern architecture. Every interaction is optimized for maximum responsiveness.',
        metrics: '99.9% uptime'
      },
      exportReady: {
        title: 'Export Ready',
        subtitle: 'Multiple format support',
        description: 'Export your designs in PNG, JPEG, WebP, and AVIF formats with customizable quality settings.',
        metrics: '4 formats supported'
      }
    },
    performance: {
      title: 'Built for performance',
      description:
        'Every aspect of Cova is optimized for speed and reliability, delivering exceptional performance across all devices.',
      stats: {
        responseTime: 'Response time',
        exportFormats: 'Export formats',
        localProcessing: 'Local processing',
        customizations: 'Customizations'
      }
    },
    additionalFeatures: {
      title: 'Everything you need to create',
      description: 'Comprehensive features designed to streamline your creative workflow and enhance productivity.',
      mobileOptimized: {
        title: 'Mobile Optimized',
        description: 'Full-featured mobile experience with touch-optimized controls and responsive design.'
      },
      multiLanguage: {
        title: 'Multi-Language',
        description: 'Native support for multiple languages with automatic detection and seamless switching.'
      },
      privacyFirst: {
        title: 'Privacy First',
        description: 'Your designs stay private. No server uploads, everything processes locally in your browser.'
      }
    },
    cta: {
      title: 'Ready to start creating?',
      description: 'Join thousands of creators who trust Cova for their cover design needs.',
      startDesigning: 'Start designing',
      viewGithub: 'View on GitHub'
    }
  },
  contactPage: {
    hero: {
      title: 'Contact Us',
      subtitle: "We're here to help",
      description: "Have any questions or suggestions? We'd love to help you out. Choose the best way to reach us."
    },
    contactMethods: {
      email: {
        title: 'Send us an email',
        description: "Send us detailed information and we'll get back to you as soon as possible.",
        action: 'Send Email',
        address: 'hello@cova.design'
      },
      github: {
        title: 'GitHub Issues',
        description: 'Report bugs or request features in our GitHub repository.',
        action: 'Visit GitHub',
        link: 'github.com/guizimo/cova'
      },
      twitter: {
        title: 'Social Media',
        description: 'Follow us on social media for the latest updates and tech insights.',
        action: 'Follow Us',
        handle: '@cova_design'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: "Check out our FAQ section, you might find the answer you're looking for.",
      questions: [
        {
          question: 'Is Cova free to use?',
          answer: 'Yes, Cova is completely free and open source. You can use all features without any limitations.'
        },
        {
          question: 'Is my design data uploaded to servers?',
          answer: 'No. All Cova processing is done locally in your browser, ensuring your privacy and data security.'
        },
        {
          question: 'What export formats are supported?',
          answer: 'Currently supports PNG, JPEG, WebP, and AVIF formats with customizable quality settings.'
        },
        {
          question: 'How can I report bugs or suggest features?',
          answer: 'You can create an Issue in our GitHub repository or contact us via email.'
        }
      ]
    },
    support: {
      title: 'Technical Support',
      description: 'Having technical issues? We provide multiple support channels.',
      channels: [
        {
          title: 'Community Forum',
          description: 'Exchange experiences with other users',
          link: '#'
        },
        {
          title: 'Video Tutorials',
          description: 'Watch detailed operation demonstrations',
          link: '#'
        }
      ]
    },
    cta: {
      title: 'Ready to start creating?',
      description: 'Join thousands of creators who trust Cova for their cover design needs.',
      startDesigning: 'Start designing',
      viewGithub: 'View on GitHub'
    },
    faqQuickLink: {
      title: 'Frequently Asked Questions',
      description: 'Before contacting us, you might want to check our FAQ section for quick answers.',
      viewFaq: 'View FAQ'
    }
  },
  faqPage: {
    hero: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find the answers you need quickly',
      description: "We've compiled the most common questions and detailed answers to help you make the most of Cova."
    },
    categories: {
      general: {
        title: 'General Questions',
        questions: [
          {
            question: 'What is Cova?',
            answer:
              'Cova is a free, open-source tool built specifically for cover design. It provides a modern design interface that lets you quickly create professional cover images with support for multiple export formats.'
          },
          {
            question: 'Is Cova free to use?',
            answer:
              'Yes, Cova is completely free and open source. You can use all features without any limitations, no account registration or payment required. Our code is publicly available on GitHub under an open source license.'
          },
          {
            question: 'Do I need to install any software?',
            answer:
              'No. Cova is a web-based application that works directly in your browser. You just need a modern browser like Chrome, Firefox, Safari, or Edge to get started.'
          }
        ]
      },
      privacy: {
        title: 'Privacy & Security',
        questions: [
          {
            question: 'Is my design data uploaded to servers?',
            answer:
              "No. All Cova processing happens locally in your browser, including image processing, text rendering, and export functions. We don't collect, store, or upload any of your design data, ensuring your privacy and data security."
          },
          {
            question: 'Are my uploaded images safe?',
            answer:
              "Yes, completely safe. All images you upload are processed only in your browser's memory and never transmitted to any servers. When you close the browser tab, all data is cleared."
          }
        ]
      },
      features: {
        title: 'Features',
        questions: [
          {
            question: 'What export formats are supported?',
            answer:
              'Currently supports PNG, JPEG, and WebP formats with customizable quality and 2x high-resolution output. PNG supports transparency, JPEG is great for photos, and WebP offers better compression. AVIF is also offered and currently falls back to PNG.'
          },
          {
            question: 'Can I customize cover dimensions?',
            answer:
              'Yes. In addition to preset common sizes (like social media covers, blog headers, etc.), you can also set custom dimensions. Supports pixels, percentages, and other units to meet various use cases.'
          },
          {
            question: 'What fonts are supported?',
            answer:
              'Cova includes multiple carefully selected Chinese and English fonts, including Source Han Sans, Source Han Serif, Inter, Roboto, and more. We continuously add more high-quality font options.'
          },
          {
            question: 'Can I save my designs?',
            answer:
              "Currently you can export your designs as image files for saving. We're developing a design template saving feature that will allow you to save and share your design templates in the future."
          }
        ]
      },
      technical: {
        title: 'Technical Support',
        questions: [
          {
            question: 'How do I report issues?',
            answer:
              'You can contact us through multiple channels: 1. Create an Issue in our GitHub repository; 2. Send an email to hello@cova.design; 3. Visit our contact page for more contact methods.'
          },
          {
            question: 'How can I suggest new features?',
            answer:
              'We welcome your suggestions! You can create a Feature Request in our GitHub repository or contact us via email. Please describe your needs and use cases in detail to help us improve the product better.'
          },
          {
            question: 'Does it work on mobile devices?',
            answer:
              'Yes, Cova uses responsive design and works perfectly on phones and tablets. The mobile interface is optimized to provide a touch-friendly user experience.'
          },
          {
            question: 'Why are my exported images blurry?',
            answer:
              'Please check: 1. Export quality settings might be too low; 2. Original image resolution might be insufficient; 3. Browser zoom should be set to 100%. We recommend using high-quality settings and high-resolution assets for best results.'
          }
        ]
      }
    },
    contact: {
      title: "Didn't find your answer?",
      description: "If you didn't find what you're looking for here, feel free to contact us anytime.",
      contactUs: 'Contact Us'
    },
    search: {
      placeholder: 'Search questions...',
      noResults: 'No related questions found',
      noResultsDescription: 'Try using different keywords or browse the categories below',
      clearSearch: 'Clear Search'
    }
  },
  aboutPage: {
    hero: {
      title: 'About Cova',
      description:
        'We are dedicated to creating the best cover design tool for creators, enabling everyone to easily create professional-grade works.'
    },
    mission: {
      title: 'Our Mission',
      description:
        'Simplify the design process and make creation more focused. We believe good tools should be invisible, letting creativity flow freely.'
    },
    values: {
      performance: {
        title: 'Ultimate Performance',
        description: '50ms response time, smooth operation experience, making the design process without any waiting.'
      },
      userFirst: {
        title: 'User First',
        description: 'Every feature is carefully considered to ensure every detail of the user experience is perfect.'
      },
      openSource: {
        title: 'Open Source Spirit',
        description:
          'Transparent development process, welcoming community contributions to build better products together.'
      }
    },
    techStack: {
      title: 'Tech Stack',
      description: 'We use the most modern tech stack to ensure product stability and scalability.',
      react: 'Modern React 18 framework providing excellent user interface experience.',
      typescript: 'Type-safe TypeScript ensuring code quality and development efficiency.',
      vite: 'Lightning-fast build tool providing rapid development and build experience.',
      tailwind: 'Atomic CSS framework for quickly building modern interfaces.',
      zustand: 'Lightweight state management with simple and efficient data flow management.',
      i18next: 'Internationalization solution supporting seamless multi-language switching.'
    },
    team: {
      title: 'Our Team',
      description: 'We are a passionate team dedicated to providing the best tools for creators.',
      guizimo: {
        role: 'Founder & Developer',
        description:
          'Full-stack developer focused on user experience and product design, committed to creating excellent creative tools.'
      }
    },
    roadmap: {
      title: 'Roadmap',
      description: 'We have a clear product roadmap, continuously bringing more value to users.',
      status: {
        'completed': 'Completed',
        'in-progress': 'In Progress',
        'planned': 'Planned'
      },
      v1: {
        title: 'Core features and stable version release'
      },
      v1_1: {
        title: 'Template marketplace and more design options'
      },
      v1_2: {
        title: 'Collaboration features and team workspace'
      },
      v1_3: {
        title: 'Plugin system and custom extensions'
      },
      v2: {
        title: 'Advanced animations and interactive effects'
      }
    },
    cta: {
      title: 'Join Our Journey',
      description:
        'Start using Cova now to experience a new way of cover design, or check out the source code on GitHub.',
      getStarted: 'Get Started',
      viewSource: 'View Source'
    }
  }
};
