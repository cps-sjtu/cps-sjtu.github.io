# CPS项目主页配置说明

页面基于 `Vue` 构建，使用 `Vue Router` 进行路由管理，使用 `Github Workflow` 完成自动化部署。为了方便使用，我们提供了两种配置方式：

1. **快速配置：** 使用预制模板，只需修改`js`配置文件，可以快速生成页面。
2. **自定义配置：** 基于模板，可以根据需求自定义页面结构和样式。

## 快速配置

在快速配置中，只需要关注以下几个目录：

| 目录路径                               | 说明                             |
| -------------------------------------- | -------------------------------- |
| `/config/pages/template/<ProjectName>` | 放置配置文件，用于定义页面内容。 |
| `/config/router.js`                    | 路由配置文件，定义页面路由跳转。 |
| `/public/<ProjectName>`                | 存放图片等静态资源。             |

**基本配置步骤如下：**

1. **新建项目配置文件：** 在`/config/pages/template/`目录下新建一个文件，命名为`<ProjectName>.js`，内容参考`/config/pages/template/sample.js`。
2. **添加静态资源：** 将项目所需的图片等静态资源放置在`/public/<ProjectName>/`目录下，确保配置文件中引用的路径正确。
   - **所有静态资源路径均为相对`/public`的路径，如`/public/example/1.png`在配置文件中的路径写为`/example/1.png`**
3. **填写项目基本信息：** 根据模版文件中的注释，填写文章题目、摘要、作者以及页面块配置等基本信息。
4. **修改路由配置：** 在`/config/router.js`中添加对应的路由配置，确保新页面可以通过路由访问。

   - 导入配置：
     ```javascript
     import {configAll as <specialConfigName>} from '@/config/pages/template/<ProjectName>';
     ```
   - 添加路由：

     ```javascript
     const export routerConfig = {
        "/<ProjPath>": <specialConfigName>,
        ...otherRoutes
     };
     ```

     **注意路径和配置名称区分大小写，且不能与已有路径冲突。**

     新页面 URL 将会是`cps-sjtu.github.io/<ProjPath>`。
5. **部署预览：** 提交代码后，Github Workflow 会自动构建并部署页面，稍等片刻后即可通过配置的路由访问新页面。新页面也会被自动加入到主页的项目列表中。

## 自定义配置

自定义配置允许用户根据需求修改页面结构和样式。用户可以在快速配置的基础上，调整 Vue 组件和样式文件，以实现更复杂的页面布局和交互效果。

自定义配置需要关注的目录包括：
| 目录路径 | 说明 |
| ------------------------------------- | -------------------------------- |
| `/config/pages/custom/<ProjectName>` | 放置自定义页面组件和样式文件。 |
| `/config/router.js` | 路由配置文件，定义页面路由跳转。 |
| `/public/<ProjectName>` | 存放图片等静态资源。 |

**具体步骤如下：**

1. **新建自定义页面目录：** 在`/config/pages/custom/`目录下新建一个文件夹，命名为`<ProjectName>`，用于存放自定义组件和样式文件。
2. **添加静态资源：** 将项目所需的图片等静态资源放置在`/public/<ProjectName>/`目录下，确保配置文件中引用的路径正确。
   - **所有静态资源路径均为相对`/public`的路径，如`/public/example/1.png`在配置文件中的路径写为`/example/1.png`**
3. **填写项目基本信息：** 在`/config/pages/custom/<ProjectName>/config.js`中填写文章题目、摘要、作者等基本信息以及页面配置。
4. **创建自定义组件：** 参照`/config/pages/custom/example`目录下的示例，基于已有的模板组件，进行自定义修改。
5. **修改路由配置：** 在`/config/router.js`中添加对应的路由配置，确保新页面可以通过路由访问。

   - 导入页面和配置：
     ```javascript
     import <specialComponentName> from "./pages/custom/example/example.vue";
     import { configAll as <specialConfigName> } from "./pages/custom/example/config";
     ```
   - 添加路由：

     ```javascript
     const export routerConfig = {
        "/<ProjPath>": {
            component: <specialComponentName>,  // 必须指定自定义组件！这个key决定了是否为自定义页面
            ...<specialConfigName>,
        },
        ...otherRoutes
     };
     ```

     **注意路径和配置名称区分大小写，且不能与已有路径冲突。**

     新页面 URL 将会是`cps-sjtu.github.io/<ProjPath>`。
6. **部署预览：** 提交代码后，Github Workflow 会自动构建并部署页面，稍等片刻后即可通过配置的路由访问新页面。新页面也会被自动加入到主页的项目列表中。
7. **注意事项：** 自定义页面需要确保组件和样式文件的正确性，避免因代码错误导致页面无法正常显示。建议在本地进行充分测试后再提交代码。

## 本地预览配置

如果希望在本地预览修改效果，我们提供了两种方案：

### 使用本机环境

需要安装 `Node.js` 和相关依赖，运行本地开发服务器进行预览。

1. **安装依赖：** 确保已经安装了 [Node.js](https://nodejs.org/)，然后在项目根目录下运行以下命令安装依赖：
   ```bash
   npm install
   ```
2. **启动开发服务器：** 运行以下命令启动本地开发服务器：
   ```bash
   npm run dev
   ```
3. **访问本地页面：** 打开浏览器，访问`http://localhost:5173/<ProjPath>`，即可预览新添加或修改的页面。

### 使用 VSCode DevContainers

如果使用 VSCode，可以利用 Dev Containers 功能快速搭建开发环境。**(本机需要有Docker环境，推荐使用)**

1. **安装 Dev Containers 插件：** 确保已经安装了 [Dev Containers](vscode:extension/ms-vscode-remote.remote-containers) 插件。
2. **打开项目：** 在 VSCode 中打开项目根目录。
3. **重载窗口：** 按下 `F1`，输入并选择 `Dev Containers: Reopen in Container`，VSCode 会自动构建并打开 DevContainer。**（第一次构建可能需要一些时间，请耐心等待）**
4. **启动开发服务器：** 进入 DevContainer 后，VSCode 会自动在终端中运行 `npm install` 和 `npm run dev` 命令安装依赖和启动服务器。如果没有自动运行，可以手动在终端中执行：
   ```bash
   npm run dev
   ```
5. **访问本地页面：** 打开浏览器，访问`http://localhost:5173/<ProjPath>`，即可预览新添加或修改的页面。
