# vue3-vite4-dashboard
开箱即用的 vue3 vite4 antv 数据大屏模板，[即刻预览](https://quliangen.github.io/vue3-vite4-dashboard/)

![image](./src/assets/img/common/example.gif)
## 大屏适配方案：px2vw 横向自适应高度居中

- 🚀 ScreenAdapter.vue 屏幕适配组件，需按照设计搞设置宽高样式
- 💪 适配插件：主要配置 viewportWidth: 1600, // UI设计稿的宽度
- 🔥 Enter键 全屏模式切换
- 💡 增加 antv G2图表 L7地图示例 

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 4](https://github.com/vitejs/vite) - 快！
- 💪 [Typescript](https://www.typescriptlang.org/) - 当然！必不可少
- 🎉 [Element Plus 开箱即用](https://github.com/element-plus/element-plus) - 基于 Vue.js 3 的强大 UI 库
- 🔥 [Axios 配置和封装](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- 💡 [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- 📦 [组件自动按需加载](https://github.com/antfu/unplugin-vue-components) - 自动按需注册组件, 无需 import
- 📥 [API 自动按需加载](https://github.com/antfu/unplugin-auto-import) - 无需手动 import 进行引入
- 🍍 [Pinia 状态管理](https://pinia.esm.dev/) - 你将会喜欢上的 Vue Store
- 😃 [icones](https://github.com/antfu/unplugin-icons) - 强大的图标库，各种图标集为你所用
- 👩‍🎨 [NProgress](https://github.com/rstacruz/nprogress) - 页面加载进度反馈
- 😃 [SVG 支持](https://github.com/jpkleemans/vite-svg-loader) - 支持以 组件形式使用 SVG 图片
- 🔑 完整支持的代码风格规范和代码提交规范

## 已配置

### UI 框架

- [Element Plus](https://github.com/element-plus/element-plus) - 基于 Vue.js 3 的强大 UI 库

### Icons

- [🔍Icônes](https://icones.netlify.app/) - 使用任意的图标集
  - [unplugin-icons](https://github.com/antfu/unplugin-icons) - 自动按需引入你所需要的图标！

### 插件

- [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- [Pinia](https://pinia.esm.dev) - 新一代的 Vue Store 状态管理
- [Axios](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动按需加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动按需加载 API
- [unplugin-fonts](https://github.com/cssninjaStudio/unplugin-fonts) - Vite 的字体加载器
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - 支持以 组件形式使用 SVG 图片

### 编码风格

- [ESLint](https://eslint.org/) 配置为 [Airbnb Style](https://github.com/airbnb/javascript)

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/) - 零配置的部署
- [VS Code 扩展](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码质量和规则检查
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 专注于代码格式化、美化代码
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 编码风格检查

### 开发

只需要执行以下命令就可以在 http://localhost:5173 中看到

```bash
pnpm serve
```

### 构建

```bash
pnpm build:prod 
# pnpm build:test
```

### 特别说明：项目基础模版来自 [vitecamp](https://github.com/nekobc1998923/vitecamp)