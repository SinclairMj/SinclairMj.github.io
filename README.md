# Bilir的个人网站

这是一个基于React的现代化个人网站，包含个人介绍、文章管理、分类标签和搜索功能。

## 🚀 技术栈

- **React 18** - 现代化前端框架
- **React Router** - 单页应用路由
- **Vite** - 快速构建工具
- **Marked** - Markdown渲染
- **Fuse.js** - 模糊搜索
- **Font Awesome** - 图标库
- **Google Fonts** - 字体库

## 📁 项目结构

```
SinclairMj.github.io/
├── src/                    # 源代码目录
│   ├── components/         # React组件
│   │   ├── Header.jsx     # 导航栏组件
│   │   ├── Hero.jsx       # 英雄区域组件
│   │   ├── About.jsx      # 关于我组件
│   │   ├── Articles.jsx   # 文章列表组件
│   │   ├── ArticleDetail.jsx # 文章详情组件
│   │   ├── Contact.jsx    # 联系组件
│   │   └── Footer.jsx     # 页脚组件
│   ├── data/              # 数据文件
│   │   └── articles.js    # 文章数据
│   ├── css/               # 样式文件
│   │   └── index.css      # 主样式文件
│   ├── App.jsx            # 主应用组件
│   └── main.jsx           # 应用入口
├── pages/                 # 文章页面目录
│   └── *.md              # Markdown文章文件
├── img/                   # 图片资源目录
│   ├── avatars/          # 个人头像
│   ├── articles/         # 文章图片
│   └── icons/            # 网站图标
├── index.html             # 主HTML文件
├── package.json           # 项目配置
├── vite.config.js         # Vite配置
└── README.md              # 项目说明
```

## 🎯 功能特性

### 🏠 个人介绍
- 现代化的响应式设计
- 个人技能标签展示
- 联系方式集成
- 社交媒体链接

### 📝 文章管理
- 支持Markdown格式的文章编写
- 文章分类管理（技术、学习、生活等）
- 标签系统（前端、后端、算法、思考等）
- 文章预览和详情查看
- 文章封面图片支持

### 🔍 搜索功能
- 实时搜索文章标题、摘要和内容
- 按分类筛选文章
- 按标签筛选文章
- 搜索结果高亮显示
- 模糊搜索支持

### 📱 响应式设计
- 完美适配桌面端、平板和手机
- 移动端友好的导航菜单
- 优化的触摸交互
- 现代化的UI设计

## 使用方法

### 1. 添加新文章
在 `index.html` 文件中的 `articlesData` 脚本标签内添加新文章：

```javascript
{
    "id": 5,
    "title": "文章标题",
    "excerpt": "文章摘要",
    "content": "# 文章内容\n\n使用Markdown格式编写...",
    "category": "技术",
    "tags": ["前端", "JavaScript"],
    "date": "2024-01-20",
    "readTime": "5分钟"
}
```

### 2. 修改个人信息
在 `index.html` 中找到以下部分进行修改：

- **个人介绍**：修改 `about-section` 中的内容
- **技能标签**：修改 `skill-tags` 中的标签
- **联系方式**：修改 `contact-links` 中的链接

### 3. 自定义样式
在 `styles.css` 中修改：
- 颜色主题
- 字体样式
- 布局间距
- 动画效果

### 4. 添加新功能
在 `script.js` 中可以扩展：
- 新的文章筛选条件
- 额外的搜索功能
- 文章统计功能
- 评论系统

## 部署到GitHub Pages

1. 将所有文件推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源
4. 访问 `https://yourusername.github.io` 查看网站

## 技术栈

- **HTML5**：语义化结构
- **CSS3**：现代化样式和动画
- **JavaScript ES6+**：交互功能
- **Font Awesome**：图标库
- **Google Fonts**：字体库

## 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 自定义配置

### 修改主题颜色
在 `styles.css` 中搜索并替换以下颜色值：
- 主色调：`#2563eb`
- 强调色：`#fbbf24`
- 背景色：`#fafafa`

### 添加新的文章分类
1. 在 `index.html` 的 `categoryFilter` 中添加新选项
2. 在 `script.js` 的 `filterArticles` 方法中处理新分类

### 添加新的标签
1. 在 `index.html` 的 `tag-filter` 中添加新标签
2. 在文章数据中使用新标签

## 性能优化

- 使用CDN加载外部资源
- 图片懒加载（可扩展）
- CSS和JS文件压缩
- 响应式图片（可扩展）

## 维护建议

1. **定期备份**：定期备份文章数据
2. **版本控制**：使用Git管理代码版本
3. **内容更新**：定期更新文章和个人信息
4. **性能监控**：监控网站加载速度

## 许可证

MIT License - 可自由使用和修改

## 联系方式

如有问题或建议，欢迎通过以下方式联系：
- GitHub Issues
- 邮箱：your-email@example.com
