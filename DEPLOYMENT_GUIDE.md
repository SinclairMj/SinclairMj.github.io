# 🚀 GitHub Pages 部署指南

## 项目说明

这是一个**纯静态HTML项目**，不需要任何构建过程。所有文件都可以直接部署到GitHub Pages。

## 📁 项目结构

```
/
├── index.html          # 主页
├── about.html          # 关于我
├── contact.html        # 联系我
├── blog.html          # 博客
├── 404.html           # 404页面
├── img/               # 图片资源
│   ├── avatars/       # 头像
│   ├── icons/         # 图标
│   └── articles/      # 文章图片
└── README.md          # 项目说明
```

## 🔧 GitHub Pages 设置

### 方法1：自动部署（推荐）

1. **推送代码到GitHub**：
   ```bash
   git add .
   git commit -m "Deploy static MoltinSite website"
   git push origin main
   ```

2. **在GitHub仓库设置中**：
   - 进入 `Settings` → `Pages`
   - 选择 `Source`: `Deploy from a branch`
   - 选择 `Branch`: `main`
   - 选择 `Folder`: `/ (root)`
   - 点击 `Save`

3. **等待部署完成**：
   - GitHub会自动部署您的静态文件
   - 访问：`https://yourusername.github.io`

### 方法2：手动上传

1. **下载所有文件**
2. **上传到GitHub仓库**
3. **按照方法1的步骤2-3设置**

## ✅ 验证部署

部署成功后，您应该能看到：
- ✅ 动态太阳动画
- ✅ 渐变文字效果
- ✅ 毛玻璃导航栏
- ✅ 所有页面正常显示
- ✅ 图片正确加载

## 🐛 常见问题

### 问题1：图片不显示
**解决方案**：确保图片路径正确
- 检查 `img/` 目录是否存在
- 确认图片文件名正确
- 验证HTML中的路径

### 问题2：页面404
**解决方案**：检查文件名
- 确保文件名正确（区分大小写）
- 检查文件是否已上传到GitHub

### 问题3：样式不生效
**解决方案**：检查CSS
- 确保CSS代码在HTML文件中
- 检查浏览器控制台是否有错误

## 📝 注意事项

1. **纯静态项目**：不需要Node.js、npm或任何构建工具
2. **直接部署**：所有文件都可以直接上传
3. **路径正确**：确保所有图片和资源路径正确
4. **文件名**：GitHub Pages区分大小写

## 🎯 部署检查清单

- [ ] 所有HTML文件已上传
- [ ] img目录及其内容已上传
- [ ] GitHub Pages已启用
- [ ] 分支设置为main
- [ ] 根目录设置为/
- [ ] 网站可以正常访问
- [ ] 所有图片正常显示
- [ ] 所有页面链接正常

## 🔗 访问地址

部署成功后，您的网站将在以下地址可用：
`https://sinclairmj.github.io/`

## 📞 技术支持

如果遇到问题，请检查：
1. GitHub Pages设置是否正确
2. 文件是否完整上传
3. 浏览器控制台是否有错误信息
