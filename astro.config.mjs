// @ts-check
import { defineConfig } from 'astro/config'; //确认框架
import cloudflare from '@astrojs/cloudflare'; //使用集成开发环境

// https://astro.build/config
export default defineConfig({
    output: 'server',  //启动服务渲染
    adapter: cloudflare(),  //绑定Cloudflare Workers[6,7](@ref)
    vite: {
        resolve: {
          alias: {
            '@layouts': './src/layouts',
          },
        },
      }
});

