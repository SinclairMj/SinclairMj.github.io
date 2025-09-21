import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  categories: string[];
  tags: string[];
  description: string;
  content: string;
  typoraRootUrl?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  author: string;
  date: string;
  categories: string[];
  tags: string[];
  description: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPostMeta[] {
  // 检查是否在浏览器环境中或Cloudflare环境中
  if (typeof window !== 'undefined' || typeof process === 'undefined' || !process.cwd) {
    console.warn('getAllPosts called in browser/Cloudflare environment, returning empty array');
    return [];
  }
  
  try {
    const files = fs.readdirSync(BLOG_DIR);
    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace('.md', '');
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        return {
          slug,
          title: data.title || '',
          author: data.author || '',
          date: data.date || '',
          categories: data.categories || [],
          tags: data.tags || [],
          description: data.description || '',
        } as BlogPostMeta;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  // 检查是否在浏览器环境中或Cloudflare环境中
  if (typeof window !== 'undefined' || typeof process === 'undefined' || !process.cwd) {
    console.warn('getPostBySlug called in browser/Cloudflare environment, returning null');
    return null;
  }
  
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      title: data.title || '',
      author: data.author || '',
      date: data.date || '',
      categories: data.categories || [],
      tags: data.tags || [],
      description: data.description || '',
      content,
      typoraRootUrl: data['typora-root-url'],
    } as BlogPost;
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.categories.some(cat => 
      cat.toLowerCase().includes(category.toLowerCase())
    )
  );
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.tags.some(t => 
      t.toLowerCase().includes(tag.toLowerCase())
    )
  );
}

export function searchPosts(query: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.description.toLowerCase().includes(lowercaseQuery) ||
    post.author.toLowerCase().includes(lowercaseQuery) ||
    post.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery)) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set<string>();
  
  allPosts.forEach(post => {
    post.categories.forEach(category => {
      categories.add(category);
    });
  });
  
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set<string>();
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      tags.add(tag);
    });
  });
  
  return Array.from(tags).sort();
}
