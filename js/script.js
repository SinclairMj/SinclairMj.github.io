// 文章管理系统
class ArticleManager {
    constructor() {
        this.articles = [];
        this.filteredArticles = [];
        this.currentFilter = {
            search: '',
            category: '',
            tag: ''
        };
        this.init();
    }

    init() {
        this.loadArticles();
        this.setupEventListeners();
        this.renderArticles();
    }

    loadArticles() {
        const articlesData = document.getElementById('articlesData');
        if (articlesData) {
            this.articles = JSON.parse(articlesData.textContent);
            this.filteredArticles = [...this.articles];
        }
    }

    setupEventListeners() {
        // 搜索功能
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilter.search = e.target.value.toLowerCase();
                this.filterArticles();
            });
        }

        // 分类筛选
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentFilter.category = e.target.value;
                this.filterArticles();
            });
        }

        // 标签筛选
        const tagElements = document.querySelectorAll('.tag');
        tagElements.forEach(tag => {
            tag.addEventListener('click', (e) => {
                // 移除其他标签的active状态
                tagElements.forEach(t => t.classList.remove('active'));
                // 添加当前标签的active状态
                e.target.classList.add('active');
                
                this.currentFilter.tag = e.target.dataset.tag;
                this.filterArticles();
            });
        });

        // 文章卡片点击事件
        document.addEventListener('click', (e) => {
            const articleCard = e.target.closest('.article-card');
            if (articleCard) {
                const articleId = parseInt(articleCard.dataset.id);
                this.showArticleModal(articleId);
            }
        });

        // 模态框关闭事件
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
                this.closeModal();
            }
        });

        // ESC键关闭模态框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    filterArticles() {
        this.filteredArticles = this.articles.filter(article => {
            const matchesSearch = !this.currentFilter.search || 
                article.title.toLowerCase().includes(this.currentFilter.search) ||
                article.excerpt.toLowerCase().includes(this.currentFilter.search) ||
                article.content.toLowerCase().includes(this.currentFilter.search);

            const matchesCategory = !this.currentFilter.category || 
                article.category === this.currentFilter.category;

            const matchesTag = !this.currentFilter.tag || 
                article.tags.includes(this.currentFilter.tag);

            return matchesSearch && matchesCategory && matchesTag;
        });

        this.renderArticles();
    }

    renderArticles() {
        const articlesGrid = document.getElementById('articlesGrid');
        if (!articlesGrid) return;

        if (this.filteredArticles.length === 0) {
            articlesGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <h3>没有找到相关文章</h3>
                    <p>请尝试调整搜索条件或筛选器</p>
                </div>
            `;
            return;
        }

        articlesGrid.innerHTML = this.filteredArticles.map(article => `
            <div class="article-card" data-id="${article.id}">
                <div class="article-meta">
                    <span class="article-category">${article.category}</span>
                    <span class="article-date">${this.formatDate(article.date)}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
                </div>
                <div class="article-read-time">阅读时间: ${article.readTime}</div>
            </div>
        `).join('');
    }

    showArticleModal(articleId) {
        const article = this.articles.find(a => a.id === articleId);
        if (!article) return;

        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <button class="modal-close">&times;</button>
                    <h2 class="modal-title">${article.title}</h2>
                    <div class="modal-meta">
                        <span class="article-category">${article.category}</span>
                        <span class="article-date">${this.formatDate(article.date)}</span>
                        <span class="article-read-time">${article.readTime}</span>
                    </div>
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-body">
                    <div class="markdown-content">${this.renderMarkdown(article.content)}</div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // 滚动到顶部
        modal.querySelector('.modal-content').scrollTop = 0;
    }

    closeModal() {
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }

    renderMarkdown(content) {
        // 简单的Markdown渲染器
        return content
            // 标题
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            // 粗体
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            // 斜体
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            // 代码块
            .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
            // 行内代码
            .replace(/`([^`]*)`/gim, '<code>$1</code>')
            // 链接
            .replace(/\[([^\]]*)\]\(([^)]*)\)/gim, '<a href="$2" target="_blank">$1</a>')
            // 段落
            .replace(/\n\n/gim, '</p><p>')
            .replace(/^(?!<[h1-6]|<pre|<ul|<ol|<li)(.*)$/gim, '<p>$1</p>')
            // 列表
            .replace(/^\* (.*$)/gim, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>')
            .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/gims, '<ol>$1</ol>')
            // 引用
            .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
            // 换行
            .replace(/\n/gim, '<br>');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// 平滑滚动导航
class NavigationManager {
    constructor() {
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
    }

    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // 考虑导航栏高度
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// 移动端导航切换
class MobileNavigation {
    constructor() {
        this.setupMobileMenu();
    }

    setupMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // 点击菜单项后关闭移动菜单
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
    }
}

// 搜索功能增强
class SearchEnhancer {
    constructor(articleManager) {
        this.articleManager = articleManager;
        this.setupSearchEnhancements();
    }

    setupSearchEnhancements() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            // 搜索建议
            searchInput.addEventListener('focus', () => {
                this.showSearchSuggestions();
            });

            searchInput.addEventListener('blur', () => {
                setTimeout(() => this.hideSearchSuggestions(), 200);
            });

            // 键盘导航
            searchInput.addEventListener('keydown', (e) => {
                this.handleSearchKeyboard(e);
            });
        }
    }

    showSearchSuggestions() {
        // 可以在这里添加搜索建议功能
        console.log('显示搜索建议');
    }

    hideSearchSuggestions() {
        // 隐藏搜索建议
        console.log('隐藏搜索建议');
    }

    handleSearchKeyboard(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.performSearch();
        }
    }

    performSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            const query = searchInput.value.trim();
            if (query) {
                // 高亮搜索结果
                this.highlightSearchResults(query);
            }
        }
    }

    highlightSearchResults(query) {
        const articleCards = document.querySelectorAll('.article-card');
        articleCards.forEach(card => {
            const title = card.querySelector('.article-title');
            const excerpt = card.querySelector('.article-excerpt');
            
            if (title && excerpt) {
                const titleText = title.textContent;
                const excerptText = excerpt.textContent;
                
                if (titleText.toLowerCase().includes(query.toLowerCase()) || 
                    excerptText.toLowerCase().includes(query.toLowerCase())) {
                    card.style.border = '2px solid #2563eb';
                    card.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                } else {
                    card.style.border = '';
                    card.style.boxShadow = '';
                }
            }
        });
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    // 初始化文章管理器
    const articleManager = new ArticleManager();
    
    // 初始化导航管理器
    const navigationManager = new NavigationManager();
    
    // 初始化移动端导航
    const mobileNavigation = new MobileNavigation();
    
    // 初始化搜索增强器
    const searchEnhancer = new SearchEnhancer(articleManager);

    // 添加加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 添加滚动效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// 工具函数
const utils = {
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 节流函数
    throttle(func, limit) {
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
    },

    // 格式化日期
    formatDate(date) {
        return new Date(date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // 截取文本
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
};

// 导出给全局使用
window.ArticleManager = ArticleManager;
window.NavigationManager = NavigationManager;
window.MobileNavigation = MobileNavigation;
window.SearchEnhancer = SearchEnhancer;
window.utils = utils;
