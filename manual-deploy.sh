#!/bin/bash

echo "🚀 开始手动部署到GitHub Pages..."

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 构建成功!"
    
    # 备份原始文件
    echo "💾 备份原始文件..."
    mkdir -p backup
    cp index.html backup/ 2>/dev/null || true
    cp -r assets backup/ 2>/dev/null || true
    
    # 复制构建文件到根目录
    echo "📋 复制构建文件到根目录..."
    cp -r dist/* .
    
    # 确保.nojekyll文件存在
    touch .nojekyll
    
    echo "✅ 部署文件准备完成!"
    echo ""
    echo "📝 下一步操作："
    echo "1. 检查文件是否正确复制"
    echo "2. 提交更改: git add ."
    echo "3. 提交: git commit -m 'Deploy to GitHub Pages'"
    echo "4. 推送: git push origin main"
    echo ""
    echo "🌐 部署后访问: https://sinclairmj.github.io/"
    
else
    echo "❌ 构建失败!"
    exit 1
fi
