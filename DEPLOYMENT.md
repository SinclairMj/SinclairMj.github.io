# 部署说明

## 问题解决

### 1. 本地访问路径问题
**问题**：本地访问路径显示为 `localhost:3000/SinclairMj.github.io/`
**解决**：修改了 `vite.config.js` 中的 `base` 配置，现在本地开发使用 `/`，生产环境使用 `/SinclairMj.github.io/`

### 2. GitHub Pages 空白页面问题
**问题**：GitHub Pages 部署后显示空白页面
**解决**：
- 使用 `HashRouter` 替代 `BrowserRouter` 避免路由问题
- 创建了 `.nojekyll` 文件
- 创建了 `404.html` 文件处理路由重定向
- 手动将构建文件复制到根目录

## 部署步骤

### 方法一：手动部署（推荐）

1. **构建项目**
   ```bash
   npm run build
   ```

2. **复制构建文件到根目录**
   ```bash
   cp -r dist/* .
   ```

3. **提交并推送到GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### 方法二：使用部署脚本

1. **运行部署脚本**
   ```bash
   ./deploy.sh
   ```

2. **提交并推送**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### 方法三：使用GitHub Actions（自动部署）

1. 确保 `.github/workflows/deploy.yml` 文件存在
2. 推送代码到 `main` 分支
3. GitHub Actions 会自动构建并部署

## 本地开发

### 启动开发服务器
```bash
npm run dev
```
现在应该访问 `http://localhost:3000`（不再有奇怪的路径）

### 预览构建结果
```bash
npm run preview
```

## 文件说明

- `.nojekyll` - 告诉GitHub Pages不要使用Jekyll处理
- `404.html` - 处理GitHub Pages的路由重定向
- `vite.config.js` - 配置了正确的base路径
- `deploy.sh` - 自动化部署脚本

## 注意事项

1. **每次更新后都需要重新构建和部署**
2. **确保所有图片资源都在 `img/` 目录中**
3. **文章数据在 `src/data/articles.js` 中管理**
4. **样式文件在 `src/css/index.css` 中**

## 故障排除

### 如果GitHub Pages仍然显示空白：
1. 检查浏览器控制台是否有错误
2. 确保所有资源路径正确
3. 检查 `.nojekyll` 文件是否存在
4. 尝试清除浏览器缓存

### 如果本地开发有问题：
1. 删除 `node_modules` 和 `package-lock.json`
2. 重新运行 `npm install`
3. 启动开发服务器 `npm run dev`
