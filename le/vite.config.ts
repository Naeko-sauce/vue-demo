import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//配置src的路径别名
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./src")//相对路径配置别名使用@代替src
    }
  }
});
