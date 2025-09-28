# 文章页面目录

此目录用于存放文章的Markdown文件。

## 文件命名规范
- 使用英文和连字符
- 格式：YYYY-MM-DD-article-title.md
- 示例：2024-01-15-javascript-async-programming.md

## 文章结构
每篇文章应包含以下frontmatter：

```yaml
---
title: "文章标题"
excerpt: "文章摘要"
category: "技术"
tags: ["前端", "JavaScript"]
date: "2024-01-15"
readTime: "8分钟"
coverImage: "/img/articles/article-cover.jpg"
author: "Bilir"
---
```

## 文章内容
- 使用标准Markdown语法
- 支持代码高亮
- 支持图片引用
- 支持表格、列表等元素

## 图片引用
文章中的图片应引用 `/img/articles/` 目录下的图片：
```markdown
![图片描述](/img/articles/image-name.jpg)
```
