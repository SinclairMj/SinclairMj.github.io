# GitHub Pages 部署指南

## 🎉 问题解决状态

### ✅ 已解决的问题：
1. **本地开发正常** - React应用现在可以正常显示
2. **Vite配置修复** - 本地开发使用正确路径 `localhost:3000`
3. **React应用运行** - 从"Hello World!"测试可以确认React工作正常

### 🔧 GitHub Actions权限问题解决方案

GitHub Actions权限错误是因为需要正确的权限设置。我提供了两种解决方案：

## 方案一：使用新的GitHub Pages Actions（推荐）

1. **启用GitHub Pages**：
   - 进入仓库设置 → Pages
   - Source选择 "GitHub Actions"

2. **推送代码**：
   ```bash
   git add .
   git commit -m "Fix GitHub Actions deployment"
   git push origin main
   ```

3. **检查部署**：
   - 进入 Actions 标签页
   - 查看 "Deploy to GitHub Pages" 工作流
   - 等待部署完成

## 方案二：手动部署（简单可靠）

如果GitHub Actions仍有问题，可以使用手动部署：

1. **构建项目**：
   ```bash
   npm run build
   ```

2. **复制构建文件**：
   ```bash
   cp -r dist/* .
   ```

3. **提交并推送**：
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **设置GitHub Pages**：
   - 进入仓库设置 → Pages
   - Source选择 "Deploy from a branch"
   - Branch选择 "main"
   - Folder选择 "/ (root)"

## 方案三：使用部署脚本

运行自动化部署脚本：

```bash
./deploy.sh
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 🔍 故障排除

### 如果GitHub Actions仍然失败：

1. **检查仓库权限**：
   - 确保仓库是公开的
   - 检查Actions权限是否启用

2. **使用手动部署**：
   - 按照方案二进行手动部署
   - 这是最可靠的方法

3. **检查GitHub Pages设置**：
   - 确保选择了正确的源分支
   - 等待几分钟让更改生效

## 📝 部署后验证

部署成功后，访问：
- `https://sinclairmj.github.io/` - 应该显示完整的个人网站
- 检查所有功能：导航、文章列表、搜索等

## 🚀 本地开发

现在本地开发应该正常工作：
- 访问 `http://localhost:3000` 查看完整网站
- 所有React组件和功能都应该正常显示

## 📋 下一步

1. 推送代码到GitHub
2. 选择一种部署方案
3. 验证网站是否正常显示
4. 根据需要添加更多文章和内容
