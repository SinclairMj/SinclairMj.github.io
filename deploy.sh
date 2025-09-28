#!/bin/bash

# 构建项目
echo "Building project..."
npm run build

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # 如果dist目录存在，复制到根目录
    if [ -d "dist" ]; then
        echo "Copying files to root directory..."
        cp -r dist/* .
        echo "Deployment files copied successfully!"
    else
        echo "Error: dist directory not found!"
        exit 1
    fi
else
    echo "Build failed!"
    exit 1
fi
