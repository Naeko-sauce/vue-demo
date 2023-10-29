import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//配置src的路径别名
import path from "path";
//引入svg需要的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  createSvgIconsPlugin({

    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],//配置svg文件路径

    symbolId: 'icon-[dir]-[name]',
  }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src")//相对路径配置别名使用@代替src
    }
  }
});
