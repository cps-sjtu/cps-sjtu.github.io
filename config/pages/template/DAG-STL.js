// 其他路由配置项 [redirect,]
const routeConfig = {
  // redirect: "/DAG-STL",
  redirect: null,
};

// 项目页配置
const pageConfig = {
  // 是否显示滚动到顶部按钮
  showScrollBtn: true,
  // 是否在最后两个作者姓名之间添加 "and", 否则使用逗号
  addAndBetweenLastTwoNames: true,
  // TitleBlock 组件配置
  titleBlock: {
    // 是否显示作者单位上标
    showAffiliationSup: true,
    // 是否显示作者单位信息
    showAffiliationInfo: true,
    // 是否显示链接按钮
    showLinkBtns: true,
  },
  // 是否显示摘要块
  showAbstractBlock: true,
  // 是否显示BibTeX引用块
  showBibtexBlock: true,
};

// 文章信息
const paperInfo = {
  title:
    "DAG-STL: A Hierarchical Framework of Zero-Shot Trajectory Planning for Signal Temporal Logic Tasks",
  short_title: "DAG-STL",
  date: "Oct 2025",
  abstract:
    "Signal Temporal Logic (STL) is a powerful specification language for describing complex temporal behaviors of continuous signals, making it well-suited for high-level robotic task descriptions. However, generating executable plans for STL tasks is challenging, as it requires consideration of the coupling between the task specification and the system dynamics. Existing approaches either follow a model-based setting that explicitly requires knowledge of the system dynamics or adopt a task-oriented data-driven approach to learn plans for specific tasks. In this work, we investigate the problem of generating executable STL plans for systems whose dynamics are unknown a priori. We propose a new planning framework that uses only task-agnostic data during the offline training stage, enabling zero-shot generalization to new STL tasks. Our framework is hierarchical, including: (i) decomposing the STL task into a set of progress and time constraints, (ii) searching for time-aware way-points guided by task-agnostic data, (iii) generating trajectories using a pre-trained safe diffusion model, and (iv) verifying the STL satisfaction and dynamic feasibility of the trajectory using a robustness-based STL checker and a conformal dynamics verifier. In addition, we incorporate an online replanning strategy during execution to further improve the actuation success rate. Simulation results demonstrate the effectiveness of our method indeed in achieving zero-shot generalization to various STL tasks.",
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
  keywords: "Signal Temporal Logic, Trajectory Planning, Diffusion Model",
  author: "Ruijia Liu, Ancheng Hou, Xiao Yu, Shaoyuan Li and Xiang Yin",
  citation_title:
    "DAG-STL: A Hierarchical Framework of Zero-Shot Trajectory Planning for  Signal Temporal Logic Tasks",
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
    name: "Xiao Yu",
    affiliationIndex: 2,
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
  {
    index: 2,
    name: "Institute of Artificial Intelligence, Xiamen University, Xiamen, China.",
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

// 轮播图组件信息
const carouselsInfo = [
  // // 每个字典项代表一个轮播节
  // // style 可选值有 [image]
  // {
  //   // 图片类型轮播
  //   style: "image",
  //   title: "Example Image Carousel", // 轮播节标题，可不显示
  //   description: "This is an example image carousel.", // 轮播节描述，可不显示
  //   imgFit: "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
  //   dataList: [
  //     // 图片地址列表 (相对于 public 文件夹的路径)
  //     "/example/1.png",
  //     ...
  //   ],
  // },
  // ...
];

// 网格视图图片组件信息
const gridviewImagesInfo = [
  // // 每个字典项代表一个网格视图节
  // {
  //   title: "Example Gridview Image Block", // 网格视图节标题，可不显示
  //   description: "This is an example gridview image block.", // 网格视图节描述，可不显示
  //   showImageCaption: true, // 是否显示图片标题
  //   imgFit: "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
  //   rows: 2, // 行数
  //   columns: 3, // 列数
  //   dataList: [
  //     // 图片数据列表
  //     {
  //       src: "/example/1.png",
  //       caption: "Image 1 Caption",
  //     },
  //     ...
  //   ],
  // },
  // ...
];

// 视频组件信息
const videosInfo = [
  // 每个字典项代表一个视频节
  // {
  //   title: "Example Video Block", // 视频节标题，可不显示
  //   description: "This is an example video block.", // 视频节描述，可不显示
  //   data: {
  //     // video_type: "video", // 视频类型，可选值有 [iframe, video]
  //     // src: "/example/video.mp4",
  //     caption: "Example Video 1",
  //   },
  // },
  // ...
];

// 导出配置
export const configAll = {
  routeConfig: routeConfig,
  pageConfig: pageConfig,
  paperInfo: paperInfo,
  headerInfo: headerInfo,
  authorsInfo: authorsInfo,
  affiliationsInfo: affiliationsInfo,
  linkbtnsInfo: linkbtnsInfo,
  carouselsInfo: carouselsInfo,
  gridviewImagesInfo: gridviewImagesInfo,
  videosInfo: videosInfo,
};
