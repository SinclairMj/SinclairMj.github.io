# 博客系统使用说明

## 功能概述

这个博客系统为您的Astro网站添加了以下功能：

- 🔐 密码保护的博客入口
- 📝 Markdown文章管理
- 🏷️ 标签和分类系统
- 🔍 搜索功能
- 📱 响应式设计
- 🖼️ 图片管理

## 访问博客

1. 在网站导航栏中点击"Blog"按钮
2. 输入密码：`moltin2025`
3. 进入博客列表页面

**注意**：
- 进入博客系统后，导航栏将只显示返回主页的"MoltinSite"按钮，其他导航按钮（About、Contact、Blog）将被隐藏，以提供更专注的博客阅读体验
- 在博客列表页面右上角有"Logout"按钮，点击后会退出博客系统并返回密码验证页面

## 添加新文章

### 1. 创建Markdown文件

在 `src/content/blog/` 目录下创建新的 `.md` 文件，文件名将成为文章的URL slug。

### 2. 文章头部信息

每个文章文件开头必须包含以下frontmatter：

```yaml
---
title: 文章标题
author: 作者名称
date: 2025-01-16
categories: [分类1, 分类2]
tags: [标签1, 标签2]
description: 文章描述
typora-root-url: ./..\assets\images
---
```

### 3. 文章内容

在frontmatter下方编写Markdown格式的文章内容。

## 图片管理

### 存储位置

所有图片文件应存储在 `public/assets/images/` 目录中。

### 在文章中使用图片

```markdown
![图片描述](image-name.jpg)
```

系统会自动将相对路径转换为正确的绝对路径。

## 功能特性

### 搜索功能

- 支持按标题、描述、作者、分类、标签搜索
- 实时搜索，无需刷新页面

### 分类和标签过滤

- 可以按分类筛选文章
- 可以按标签筛选文章
- 支持多条件组合筛选

### 响应式设计

- 适配桌面和移动设备
- 美观的玻璃拟态设计风格
- 与网站整体风格保持一致

## 安全特性

- 密码保护访问
- Session存储认证状态
- 自动登出功能

## 自定义配置

### 修改密码

编辑 `src/utils/auth.ts` 文件中的 `BLOG_PASSWORD` 常量：

```typescript
const BLOG_PASSWORD = 'your-new-password';
```

### 修改样式

所有样式都在对应的 `.astro` 文件中，可以根据需要调整颜色、字体、布局等。

## 技术实现

- **框架**: Astro
- **样式**: CSS with glassmorphism effects
- **Markdown处理**: gray-matter
- **认证**: Session-based authentication
- **图片处理**: 自动路径转换

## 文件结构

```
src/
├── content/blog/          # 文章存储目录
├── pages/
│   ├── blog.astro        # 博客入口页面
│   └── blog/
│       ├── list.astro    # 文章列表页面
│       └── [slug].astro  # 文章详情页面
├── utils/
│   ├── blog.ts          # 文章处理工具
│   └── auth.ts          # 认证工具
└── layouts/
    └── Layout.astro     # 主布局（已更新）

public/
└── assets/
    └── images/          # 图片存储目录
```

## 注意事项

1. 文章文件名不要包含特殊字符
2. 图片文件名建议使用英文和数字
3. 定期备份文章内容
4. 密码请妥善保管

## 故障排除

### 文章不显示

- 检查Markdown文件格式是否正确
- 确认frontmatter格式无误
- 检查文件名是否为 `.md` 扩展名

### 图片不显示

- 确认图片文件在 `public/assets/images/` 目录中
- 检查图片路径是否正确
- 确认图片文件格式支持

### 无法访问博客

- 确认密码正确
- 清除浏览器缓存和session
- 检查控制台是否有错误信息

### 遇到500错误

- 如果博客页面出现500错误，系统会自动重定向到有趣的错误页面
- 错误页面显示一个矿工卡通角色，举着"禁止爆破入内"的牌子
- 可以从错误页面重新尝试访问或返回主页

### Cloudflare部署问题

- 在Cloudflare Pages环境中，博客系统会自动检测环境并重定向到错误页面
- 这是为了处理Cloudflare环境中文件系统API不可用的问题
- 错误页面提供了友好的用户体验，而不是显示技术错误

## 退出博客系统

- 在博客列表页面右上角点击"Logout"按钮
- 系统会清除认证状态并重定向到密码验证页面
- 退出后需要重新输入密码才能访问博客
