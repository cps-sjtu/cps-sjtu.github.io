import {
  PuretextBlock,
  CarouselBlock,
  GridviewBlock,
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
  addAndBetweenLastTwoNames: true,
  // 是否显示作者单位上标
  showAffiliationSup: true,
  // 是否显示作者单位信息
  showAffiliationInfo: true,
};

// 文章信息
const paperInfo = {
  title:
    "DAG-STL: A Hierarchical Framework of Zero-Shot Trajectory Planning for Signal Temporal Logic Tasks",
  shortTitle: "DAG-STL",
  date: "",  // YYYY-MM-DD, 可不填
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

// TitleBlock 组件信息, 一般无需修改
const titleBlockInfo = {
  title: paperInfo.title,
  authors: authorsInfo,
  affiliations: affiliationsInfo,
  linkbtns: linkbtnsInfo,
};

// 自定义其他节组件信息
// TitleBlock 组件只能有一个、且位于最前面，其他组件可按需添加多个，顺序按 blocksInfo 数组顺序排列
// 目前支持的组件有：[AbstractBlock, CarouselBlock, GridviewBlock, VideoBlock, BibtexBlock]
const blocksInfo = [
  // 纯文字组件信息
  new PuretextBlock(
    "Abstract", // 摘要节标题
    paperInfo.abstract // 摘要内容
  ),
  // Bibtex引用组件信息
  new BibtexBlock(paperInfo.bibtex),
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
