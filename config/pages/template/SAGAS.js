import {
  PuretextBlock,
  CarouselBlock,
  GridviewBlock,
  FlexviewBlock,
  VideoBlock,
  BibtexBlock,
} from "../classes/classes.js";

// 路由配置项 [redirect,]
const routeConfig = {
  // redirect: "/DAG-STL",
  redirect: null,
};

// 首页配置
const homeConfig = {
  // 要显示的徽章配置，如果配置了 paperInfo.date，则会自动显示发布日期徽章
  badges: [
    // {
    //   type: "custom", // 徽章标签
    //   label: "NeurIPS 2025", // 徽章标签
    //   color: "#ff3c00ff", // 徽章颜色，"" 表示使用默认颜色"
    //   icon_type: "url", // 徽章图标类型，目前支持 svg 和 url 两种类型
    //   icon: "https://nips.cc/static/core/img/neurips-navbar-logo.svg", // 徽章图标svg或链接
    // },
  ],
};

// 项目页配置
const pageConfig = {
  // 是否显示滚动到顶部按钮
  showScrollBtn: true,
  // 是否在最后两个作者姓名之间添加 "and", 否则使用逗号
  addAndBetweenLastTwoNames: false,
  // 是否显示作者单位上标
  showAffiliationSup: true,
  // 是否显示作者单位信息
  showAffiliationInfo: true,
};

// 文章信息
const paperInfo = {
  title:
    "SAGAS: Semantic-Aware Graph-Assisted Stitching for Offline Temporal Logic Planning",
  shortTitle: "SAGAS",
  date: "2025-12-05", // YYYY-MM-DD, 可不填
  abstract:
    "Linear Temporal Logic (LTL) provides a rigorous framework for complex robotic tasks, yet existing methods often rely on accurate dynamics models or expensive online interaction. In this work, we address LTL-constrained control in a challenging fully offline, model-free setting, utilizing only fixed, task-agnostic datasets of fragmented trajectories. We propose **SAGAS**, a novel framework combining graph-assisted trajectory stitching with automata-guided planning. First, we construct a latent reachability graph from a learned temporal-distance representation. To bridge the semantic gap, we augment this graph with certified anchor nodes and probabilistic soft labels. We then translate the specification into a Büchi automaton and search the implicit product space to derive a cost-minimal prefix--suffix plan. Finally, a subgoal-conditioned low-level policy executes these latent waypoints. Experiments on OGBench locomotion domains demonstrate that SAGAS successfully synthesizes efficient trajectories for diverse LTL tasks, effectively bridging the gap between fragmented offline data and complex logical constraints.",
  bibtex: `@article{YourPaperKey2024,
    title={Your Paper Title Here},
    author={First Author and Second Author and Third Author},
    journal={Conference/Journal Name},
    year={2025},
    url={https://your-domain.com/your-project-page}
}`,
};

// 页面元数据信息（搜索用）
const headerInfo = {
  title: paperInfo.title,
  description: "DESCRIPTION_PLACEHOLDER",
  keywords:
    "Offline Reinforcement Learning, Linear Temporal Logic, Hierarchical Planning",
  author: "Ruijia Liu, Ancheng Hou, Shaoyuan Li, Xiang Yin",
  citation_title: paperInfo.title,
  citation_authors: ["Liu, Ruijia", "Hou, Ancheng"],
  citation_publication_date: "2025",
  robots: "index, follow",
  language: "English",
};

// 作者信息
const authorsInfo = [
  // style为主页上作者名字的特殊样式，可选值有 underline 和 bold
  {
    name: "Ruijia Liu",
    style: "underline",
    affiliationIndex: 1,
  },
  {
    name: "Ancheng Hou",
    style: "underline",
    affiliationIndex: 1,
  },
  {
    name: "Shaoyuan Li",
    affiliationIndex: 1,
  },
  {
    name: "Xiang Yin",
    style: "bold",
    affiliationIndex: 1,
    link: "https://xiangyin.sjtu.edu.cn",
  },
];

// 单位信息
const affiliationsInfo = [
  {
    index: 1,
    name: "School of Automation and Intelligent Sensing, Shanghai Jiao Tong University, Shanghai, China.",
  },
];

// TitleBlock 组件中的链接按钮信息
const linkbtnsInfo = [
  // 目前支持类型：[arxiv, pdf, github]
  // 更多类型可手动添加 linkBtn 组件
  // {
  //   type: "arxiv",
  //   label: "Paper",
  //   // url: "https://arxiv.org/abs/2406.08320",
  // },
  // {
  //   type: "github",
  //   label: "Code",
  //   // url: "github url here"
  // },
  // {
  //   type: "pdf",
  //   label: "Supplementary",
  //   // url: "/path/to/supplementary.pdf"
  // },
];

// TitleBlock 组件信息, 一般无需修改
const titleBlockInfo = {
  title: paperInfo.title,
  authors: authorsInfo,
  affiliations: affiliationsInfo,
  linkbtns: linkbtnsInfo,
};

// 自定义其他节组件信息
// TitleBlock 组件只能有一个、且位于最前面，其他组件可按需添加多个，顺序按 blocksInfo 数组顺序排列
// 目前支持的组件有：[PuretextBlock, CarouselBlock, GridviewBlock, FlexviewBlock, VideoBlock, BibtexBlock]
const blocksInfo = [
  // 纯文字组件信息
  new PuretextBlock(
    "Abstract", // 摘要节标题
    paperInfo.abstract // 摘要内容
  ),
  // // 轮播图组件信息
  // new CarouselBlock(
  //   "image", // 图片类型轮播
  //   "Example Image Carousel", // 轮播节标题，可不显示
  //   "This is an example image carousel, this description supports **Markdown** syntax.", // 轮播节描述，可不显示
  //   "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
  //   [
  //     // 图片地址列表 (相对于 public 文件夹的路径)
  //     "/example/1.png",
  //   ]
  // ),

  // 网格视图图片/视频组件信息
  new GridviewBlock(
    "Overall Framework", // 网格视图节标题，可不显示
    "", // 网格视图节描述，可不显示
    true, // 是否显示图片标题
    "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    1, // 行数
    1, // 列数
    "100%", // 宽度，支持百分比和像素值
    "auto", // 高度，支持百分比和像素值
    [
      // 图片/视频数据列表
      {
        // 图片
        src: "/SAGAS/framework.png",
        // caption: "Image 1 Caption",
      },
    ],
    `
As illustrated above, the proposed pipeline is structured into four distinct stages:
1. **Offline Representation Learning & Graph Construction:**  
   Starting from the trajectory dataset, we perform **TD Pre-Training** to learn a temporal-distance representation $\\psi$ and simultaneously train a **Low-Level Policy** $\\pi_{\\text{low}}$. We then cluster the embedded states to perform **Latent Graph Construction**, creating a reusable topological substrate that captures long-horizon reachability independent of downstream tasks.

2. **Task-Specific Latent Graph Augmentation:**  
   Given an LTL task, we bridge the geometric latent space with discrete logic by annotating the graph. This involves estimating *soft labels* for nodes based on probabilistic estimation and inserting *anchor nodes* that serve as certified realizations of atomic propositions.

3. **High-Level Task Planning:**  
   We translate the LTL specification into a Büchi automaton and search the implicit **product** of this automaton and the augmented latent graph. This search yields a **cost-minimal** high-level plan (with respect to the latent metric) comprising a prefix path and a suffix cycle.

4. **Low-Level Execution:**  
   Finally, the agent executes the synthesized high-level plan using the pre-trained Low-Level Policy. The policy tracks the sequence of latent subgoals (prefix followed by the repeating suffix), thereby realizing the infinite-horizon behavior required by the specification.
`
  ),

  // 网格视图图片/视频组件信息
  new FlexviewBlock(
    "Experiment Visualizations", // 网格视图节标题，可不显示
    "### Success", // 网格视图节描述，可不显示
    true, // 是否显示图片标题
    "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    "100%", // 宽度，支持百分比和像素值
    "auto", // 高度，支持百分比和像素值
    [
      // 图片/视频数据列表
      {
        // 视频
        isVideo: true,
        videoType: "video", // 视频类型，可选值有 [iframe, video]
        src: "/SAGAS/videos/easy_circ_giant.mp4", // 视频地址
        caption: `Easy task on antmaze-giant-stitch  
        $\\mathrm{F}(e1 \\vee e2 \\vee e7 \\vee e4)$
        `, // 视频标题，可不显示
        autoplay: true, // 自动播放
        loop: true, // 循环播放
      },
      {
        isVideo: true,
        videoType: "video", // 视频类型，可选值有 [iframe, video]
        src: "/SAGAS/videos/hard_circ_giant.mp4", // 视频地址
        caption: `Hard task on antmaze-giant-stitch  
        $\\mathrm{F}(e0) \\wedge (\\neg e0 \\mathrm{U} e6) \\wedge \\mathrm{F}(e0 \\vee e4 \\vee e2) \\wedge \\mathrm{F}(e2) \\wedge \\mathrm{F}(e4) \\wedge \\mathrm{F}(e3) \\wedge \\mathrm{F}(e5) \\wedge (\\neg e2 \\mathrm{U} e4) \\wedge (\\neg e2 \\mathrm{U} e3) \\wedge (\\neg e2 \\mathrm{U} e5) \\wedge \\mathrm{G}(\\mathrm{F}(e2) \\wedge \\mathrm{F}(e4) \\wedge \\mathrm{F}(e0) \\wedge \\mathrm{F}(e5))$
        `, // 视频标题，可不显示
        autoplay: true, // 自动播放
        loop: true, // 循环播放
      },
      {
        isVideo: true,
        videoType: "video", // 视频类型，可选值有 [iframe, video]
        src: "/SAGAS/videos/easy_circ_large.mp4", // 视频地址
        caption: `Easy task on antmaze-large-navigate  
        $\\mathrm{F}(e1 \\vee e2 \\vee e7 \\vee e4)$
        `, // 视频标题，可不显示
        autoplay: true, // 自动播放
        loop: true, // 循环播放
      },
      {
        isVideo: true,
        videoType: "video", // 视频类型，可选值有 [iframe, video]
        src: "/SAGAS/videos/hard_circ_large.mp4", // 视频地址
        caption: `Hard task on antmaze-large-navigate  
        $\\mathrm{F}(e0) \\wedge (\\neg e0 \\mathrm{U} e1) \\wedge \\mathrm{F}(e2) \\wedge \\mathrm{F}(e0) \\wedge \\mathrm{F}(e7) \\wedge \\mathrm{F}(e4) \\wedge \\mathrm{F}(e1) \\wedge \\mathrm{G}(\\mathrm{F}(e5) \\wedge \\mathrm{F}(e1) \\wedge \\mathrm{F}(e7) \\wedge \\mathrm{F}(e4)) \\wedge \\mathrm{F}(e2) \\wedge \\mathrm{F}(e3) \\wedge \\mathrm{F}(e4) \\wedge \\mathrm{F}(e0) \\wedge (\\neg e3 \\mathrm{U} e2) \\wedge (\\neg e4 \\mathrm{U} e3) \\wedge (\\neg e0 \\mathrm{U} e4)$
        `, // 视频标题，可不显示
        autoplay: true, // 自动播放
        loop: true, // 循环播放
      },
    ],
    "", // 更多信息，留空可不显示
    true // 是否显示块顶部分割线
  ),

  // 网格视图图片/视频组件信息
  new FlexviewBlock(
    "", // 网格视图节标题，可不显示
    "### Failure", // 网格视图节描述，可不显示
    true, // 是否显示图片标题
    "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    "100%", // 宽度，支持百分比和像素值
    "auto", // 高度，支持百分比和像素值
    [
      // 图片/视频数据列表
      {
        isVideo: true,
        videoType: "video", // 视频类型，可选值有 [iframe, video]
        src: "/SAGAS/videos/fail_overturn.mp4", // 视频地址
        caption: "Agent flip", // 视频标题，可不显示
        autoplay: true, // 自动播放
        loop: true, // 循环播放
      },
      // {
      //   isVideo: true,
      //   videoType: "video", // 视频类型，可选值有 [iframe, video]
      //   src: "/SAGAS/videos/hard_circ_large.mp4", // 视频地址
      //   caption: "Hard task on antmaze-large-navigate", // 视频标题，可不显示
      //   autoplay: true, // 自动播放
      //   loop: true, // 循环播放
      // },
    ],
    "", // 更多信息，留空可不显示
    false // 是否显示块顶部分割线
  ),

  // // 视频组件信息
  // new VideoBlock(
  //   "Example Video Block", // 视频节标题，可不显示
  //   "This is an example video block, this description supports **Markdown** syntax.", // 视频节描述，可不显示
  //   {
  //     // videoType: "video", // 视频类型，可选值有 [iframe, video]
  //     // src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  //     videoType: "iframe", // 视频类型，可选值有 [iframe, video]
  //     src: "//player.bilibili.com/player.html?isOutside=true&aid=584666059&bvid=BV15z4y1Z734&cid=239973476&p=1", // 视频地址
  //     caption: "Example Video 1", // 视频标题，可不显示
  //     autoplay: true, // 自动播放
  //   }
  // ),
  // // Bibtex引用组件信息
  // new BibtexBlock(paperInfo.bibtex),
];

// 导出配置
export const configAll = {
  routeConfig: routeConfig,
  homeConfig: homeConfig,
  authorsInfo: authorsInfo,
  pageConfig: pageConfig,
  paperInfo: paperInfo,
  headerInfo: headerInfo,
  titleBlockInfo: titleBlockInfo,
  blocksInfo: blocksInfo,
};
