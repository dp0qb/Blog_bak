import { defineConfig } from 'vitepress'
import { getSidebarData, getNavData } from './navSidebarUtil'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "(｡•̀ᴗ-)✧",
  description: "BaiXia's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: getNavData(),
    sidebar: getSidebarData(),
    search: {
      provider: "local"
    }
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/dp0qb' }
    // ]
  }
})
