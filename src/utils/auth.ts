// 简单的密码验证系统
// 在生产环境中，您应该使用更安全的认证方式

const BLOG_PASSWORD = 'moltin2025'; // 您可以修改这个密码

export function verifyPassword(password: string): boolean {
  return password === BLOG_PASSWORD;
}

export function setBlogPassword(newPassword: string): void {
  // 这里可以扩展为从环境变量或配置文件读取
  // 目前使用硬编码的密码
}

export function getBlogPassword(): string {
  return BLOG_PASSWORD;
}
