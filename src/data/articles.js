export const articlesData = [
  {
    id: 1,
    title: "JavaScript异步编程深度解析",
    excerpt: "深入理解JavaScript中的Promise、async/await等异步编程模式，以及它们在实际开发中的应用场景。",
    content: `# JavaScript异步编程深度解析

## 引言

JavaScript作为一门单线程语言，异步编程是其核心特性之一。本文将深入探讨JavaScript中的各种异步编程模式，帮助开发者更好地理解和运用异步编程。

## Promise详解

Promise是ES6引入的重要特性，它解决了回调地狱的问题，让异步代码更加清晰易读。

### 基本用法

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    resolve('操作成功');
  }, 1000);
});

promise.then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});
\`\`\`

### Promise链式调用

\`\`\`javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return processData(data);
  })
  .then(processedData => {
    console.log('处理完成:', processedData);
  })
  .catch(error => {
    console.error('发生错误:', error);
  });
\`\`\`

## async/await的使用

async/await让异步代码看起来像同步代码，大大提高了代码的可读性。

### 基本语法

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('获取数据失败:', error);
  }
}
\`\`\`

### 并发处理

\`\`\`javascript
async function fetchMultipleData() {
  const [userData, postsData, commentsData] = await Promise.all([
    fetch('/api/user').then(res => res.json()),
    fetch('/api/posts').then(res => res.json()),
    fetch('/api/comments').then(res => res.json())
  ]);
  
  return { userData, postsData, commentsData };
}
\`\`\`

## 实际应用场景

### 1. API请求处理

\`\`\`javascript
class ApiService {
  async get(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return await response.json();
    } catch (error) {
      console.error('API请求失败:', error);
      throw error;
    }
  }
}
\`\`\`

### 2. 文件上传

\`\`\`javascript
async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('上传成功:', result);
      return result;
    } else {
      throw new Error('上传失败');
    }
  } catch (error) {
    console.error('上传错误:', error);
    throw error;
  }
}
\`\`\`

## 总结

异步编程是JavaScript开发中的重要概念，掌握Promise和async/await的使用，能够让我们写出更加优雅和高效的代码。在实际开发中，要根据具体场景选择合适的异步处理方式。`,
    category: "技术",
    tags: ["前端", "JavaScript"],
    date: "2024-01-15",
    readTime: "8分钟",
    coverImage: "/img/articles/javascript-async.jpg",
    author: "Bilir"
  },
  {
    id: 2,
    title: "Python数据分析入门指南",
    excerpt: "从零开始学习Python数据分析，包括pandas、numpy等核心库的使用方法和实际案例分析。",
    content: `# Python数据分析入门指南

## 环境搭建

首先需要安装必要的库：

\`\`\`bash
pip install pandas numpy matplotlib seaborn jupyter
\`\`\`

## 数据读取与处理

### 使用pandas读取数据

\`\`\`python
import pandas as pd
import numpy as np

# 读取CSV文件
df = pd.read_csv('data.csv')

# 读取Excel文件
df = pd.read_excel('data.xlsx')

# 读取JSON文件
df = pd.read_json('data.json')
\`\`\`

### 数据探索

\`\`\`python
# 查看数据基本信息
print(df.info())
print(df.describe())

# 查看前几行数据
print(df.head())

# 检查缺失值
print(df.isnull().sum())
\`\`\`

## 数据清洗

### 处理缺失值

\`\`\`python
# 删除包含缺失值的行
df_clean = df.dropna()

# 用平均值填充数值型缺失值
df['column'].fillna(df['column'].mean(), inplace=True)

# 用众数填充分类变量
df['category'].fillna(df['category'].mode()[0], inplace=True)
\`\`\`

### 数据类型转换

\`\`\`python
# 转换数据类型
df['date'] = pd.to_datetime(df['date'])
df['price'] = pd.to_numeric(df['price'], errors='coerce')
\`\`\`

## 数据可视化

### 使用matplotlib

\`\`\`python
import matplotlib.pyplot as plt

# 创建图表
plt.figure(figsize=(10, 6))
plt.plot(df['date'], df['value'])
plt.title('数据趋势图')
plt.xlabel('日期')
plt.ylabel('数值')
plt.show()
\`\`\`

### 使用seaborn

\`\`\`python
import seaborn as sns

# 创建热力图
plt.figure(figsize=(12, 8))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('相关性热力图')
plt.show()
\`\`\`

## 统计分析

### 描述性统计

\`\`\`python
# 基本统计信息
print(df.describe())

# 分组统计
group_stats = df.groupby('category')['value'].agg(['mean', 'std', 'count'])
print(group_stats)
\`\`\`

### 假设检验

\`\`\`python
from scipy import stats

# t检验
t_stat, p_value = stats.ttest_ind(group1, group2)
print(f"t统计量: {t_stat}, p值: {p_value}")
\`\`\`

## 机器学习应用

### 数据预处理

\`\`\`python
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

# 特征标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)
\`\`\`

### 模型训练

\`\`\`python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# 训练模型
model = LinearRegression()
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估模型
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
print(f"均方误差: {mse}")
print(f"R²分数: {r2}")
\`\`\`

## 总结

Python数据分析是一个强大的工具，通过pandas、numpy、matplotlib等库，我们可以高效地进行数据处理、分析和可视化。掌握这些基础技能，能够帮助我们更好地理解和分析数据。`,
    category: "学习",
    tags: ["Python", "数据分析"],
    date: "2024-01-10",
    readTime: "12分钟",
    coverImage: "/img/articles/python-data-analysis.jpg",
    author: "Bilir"
  },
  {
    id: 3,
    title: "算法学习心得",
    excerpt: "分享我在算法学习过程中的心得体会，包括学习方法、刷题技巧和常见算法模式总结。",
    content: `# 算法学习心得

## 学习方法

算法学习需要系统性和持续性，以下是我总结的一些有效方法：

### 1. 理论基础

- **数据结构基础**：数组、链表、栈、队列、树、图
- **算法复杂度**：时间复杂度和空间复杂度的分析
- **常见算法模式**：递归、分治、动态规划、贪心算法

### 2. 实践练习

\`\`\`javascript
// 二分查找示例
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}
\`\`\`

## 刷题技巧

### 1. 题目分类

- **数组和字符串**：双指针、滑动窗口
- **链表**：快慢指针、反转链表
- **树**：DFS、BFS、递归
- **图**：最短路径、拓扑排序
- **动态规划**：状态转移方程

### 2. 解题步骤

1. **理解题目**：仔细阅读题目，理解输入输出
2. **分析复杂度**：估算时间和空间复杂度
3. **选择算法**：根据题目特点选择合适算法
4. **编写代码**：注意边界条件和特殊情况
5. **测试验证**：用多个测试用例验证

### 3. 代码模板

\`\`\`javascript
// 双指针模板
function twoPointers(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // 根据条件移动指针
    if (condition) {
      left++;
    } else {
      right--;
    }
  }
  
  return result;
}
\`\`\`

## 常见模式总结

### 1. 滑动窗口

\`\`\`javascript
function slidingWindow(s) {
  let left = 0;
  let maxLen = 0;
  const window = new Set();
  
  for (let right = 0; right < s.length; right++) {
    while (window.has(s[right])) {
      window.delete(s[left]);
      left++;
    }
    window.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
\`\`\`

### 2. 动态规划

\`\`\`javascript
function dp(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}
\`\`\`

### 3. 回溯算法

\`\`\`javascript
function backtrack(path, choices) {
  if (满足条件) {
    result.push([...path]);
    return;
  }
  
  for (let choice of choices) {
    path.push(choice);
    backtrack(path, newChoices);
    path.pop();
  }
}
\`\`\`

## 学习资源推荐

### 在线平台
- **LeetCode**：最流行的算法刷题平台
- **牛客网**：国内算法练习平台
- **Codeforces**：竞赛算法平台

### 书籍推荐
- 《算法导论》：经典算法教材
- 《剑指Offer》：面试算法指南
- 《编程珠玑》：算法思维训练

### 视频教程
- B站算法课程
- YouTube算法频道
- Coursera算法课程

## 面试准备

### 1. 常见题型
- 数组和字符串处理
- 链表操作
- 树的遍历和操作
- 动态规划问题
- 图算法

### 2. 面试技巧
- **思路清晰**：先讲思路再写代码
- **代码规范**：注意变量命名和注释
- **边界处理**：考虑特殊情况
- **复杂度分析**：能够分析时间和空间复杂度

### 3. 时间管理
- 5分钟理解题目
- 10分钟分析思路
- 20分钟编写代码
- 5分钟测试和优化

## 总结

算法学习是一个长期的过程，需要持续练习和总结。通过系统性的学习和大量的实践，我们能够掌握各种算法模式，提高解决问题的能力。记住，算法不仅仅是编程技巧，更是一种思维方式。`,
    category: "学习",
    tags: ["算法", "思考"],
    date: "2024-01-05",
    readTime: "6分钟",
    coverImage: "/img/articles/algorithm-learning.jpg",
    author: "Bilir"
  },
  {
    id: 4,
    title: "Web开发最佳实践",
    excerpt: "总结Web开发中的最佳实践，包括代码规范、性能优化、安全考虑等方面。",
    content: `# Web开发最佳实践

## 代码规范

良好的代码规范是项目成功的基础，以下是一些重要的规范：

### 1. HTML规范

\`\`\`html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面标题</title>
  <meta name="description" content="页面描述">
</head>
<body>
  <!-- 语义化标签 -->
  <header>
    <nav>
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/about">关于</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>文章标题</h1>
      <p>文章内容</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2024 网站名称</p>
  </footer>
</body>
</html>
\`\`\`

### 2. CSS规范

\`\`\`css
/* 使用BEM命名规范 */
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header__logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.header__nav {
  display: flex;
  gap: 2rem;
}

.header__nav-item {
  text-decoration: none;
  color: #333;
}

.header__nav-item--active {
  color: #007bff;
  font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header__nav {
    flex-direction: column;
    gap: 1rem;
  }
}
\`\`\`

### 3. JavaScript规范

\`\`\`javascript
// 使用ES6+语法
class UserService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  
  async getUser(id) {
    try {
      const response = await fetch(\`\${this.apiUrl}/users/\${id}\`);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return await response.json();
    } catch (error) {
      console.error('获取用户失败:', error);
      throw error;
    }
  }
}

// 使用箭头函数和模板字符串
const formatUser = (user) => {
  return \`\${user.firstName} \${user.lastName} (\${user.email})\`;
};

// 使用解构赋值
const { firstName, lastName, email } = user;
\`\`\`

## 性能优化

### 1. 图片优化

\`\`\`html
<!-- 使用现代图片格式 -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="描述" loading="lazy">
</picture>

<!-- 响应式图片 -->
<img 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 33vw"
  src="medium.jpg" 
  alt="描述"
>
\`\`\`

### 2. CSS优化

\`\`\`css
/* 使用CSS变量 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}

/* 使用CSS Grid和Flexbox */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

### 3. JavaScript优化

\`\`\`javascript
// 使用防抖和节流
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 使用事件委托
document.addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    handleButtonClick(e.target);
  }
});

// 使用Web Workers处理重计算
const worker = new Worker('worker.js');
worker.postMessage({ data: largeDataSet });
worker.onmessage = (e) => {
  console.log('计算结果:', e.data);
};
\`\`\`

## 安全考虑

### 1. 输入验证

\`\`\`javascript
// 前端验证
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input) {
  return input
    .replace(/[<>]/g, '') // 移除HTML标签
    .trim() // 去除首尾空格
    .substring(0, 100); // 限制长度
}
\`\`\`

### 2. HTTPS和安全头

\`\`\`html
<!-- 强制HTTPS -->
<meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains">

<!-- 内容安全策略 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'">

<!-- XSS保护 -->
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
\`\`\`

### 3. 数据保护

\`\`\`javascript
// 敏感数据加密
function encryptData(data, key) {
  // 使用Web Crypto API
  return crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: new Uint8Array(12) },
    key,
    new TextEncoder().encode(data)
  );
}

// 安全的API调用
async function secureApiCall(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${getAuthToken()}\`
    },
    body: JSON.stringify(data)
  });
  
  if (!response.ok) {
    throw new Error(\`API调用失败: \${response.status}\`);
  }
  
  return await response.json();
}
\`\`\`

## 可访问性

### 1. 语义化HTML

\`\`\`html
<main role="main">
  <section aria-labelledby="section-title">
    <h2 id="section-title">章节标题</h2>
    <p>章节内容</p>
  </section>
</main>

<!-- 表单可访问性 -->
<form>
  <label for="email">邮箱地址</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    required 
    aria-describedby="email-help"
  >
  <div id="email-help">请输入有效的邮箱地址</div>
</form>
\`\`\`

### 2. 键盘导航

\`\`\`css
/* 焦点样式 */
.button:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* 跳过链接 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
}

.skip-link:focus {
  top: 6px;
}
\`\`\`

## 总结

Web开发最佳实践涵盖了代码规范、性能优化、安全考虑和可访问性等多个方面。遵循这些实践能够帮助我们构建更加健壮、高效和用户友好的Web应用。记住，最佳实践是不断发展的，我们需要持续学习和改进。`,
    category: "技术",
    tags: ["前端", "后端"],
    date: "2024-01-01",
    readTime: "10分钟",
    coverImage: "/img/articles/web-development.jpg",
    author: "Bilir"
  }
]

export const categories = [
  { id: 'all', name: '全部', count: articlesData.length },
  { id: '技术', name: '技术', count: articlesData.filter(a => a.category === '技术').length },
  { id: '学习', name: '学习', count: articlesData.filter(a => a.category === '学习').length },
  { id: '生活', name: '生活', count: articlesData.filter(a => a.category === '生活').length }
]

export const tags = [
  { id: 'all', name: '全部', count: articlesData.length },
  { id: '前端', name: '前端', count: articlesData.filter(a => a.tags.includes('前端')).length },
  { id: '后端', name: '后端', count: articlesData.filter(a => a.tags.includes('后端')).length },
  { id: 'JavaScript', name: 'JavaScript', count: articlesData.filter(a => a.tags.includes('JavaScript')).length },
  { id: 'Python', name: 'Python', count: articlesData.filter(a => a.tags.includes('Python')).length },
  { id: '算法', name: '算法', count: articlesData.filter(a => a.tags.includes('算法')).length },
  { id: '思考', name: '思考', count: articlesData.filter(a => a.tags.includes('思考')).length }
]
