#!/bin/bash

echo "🚀 开始部署到GitHub Pages..."

# 1. 构建项目
echo "📦 构建React项目..."
npm run build

# 2. 复制构建产物到根目录
echo "📋 复制构建产物到根目录..."
cp -r dist/* .

# 3. 验证文件结构
echo "✅ 验证文件结构..."
ls -la
ls -la assets/

# 4. 添加所有文件到git
echo "📝 添加文件到git..."
git add .

# 5. 提交更改
echo "💾 提交更改..."
git commit -m "Deploy: Build and copy assets to root directory

- Build React project for production
- Copy dist/* to root directory
- Ensure assets folder is accessible on GitHub Pages
- Fix blank page issue by providing all necessary files"

# 6. 推送到GitHub
echo "🚀 推送到GitHub..."
git push origin main

echo "✅ 部署完成！"
echo "🌐 请访问: https://sinclairmj.github.io/"
