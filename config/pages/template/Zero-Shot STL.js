import {
  AbstractBlock,
  CarouselBlock,
  GridviewImageBlock,
  VideoBlock,
  BibtexBlock,
} from "../classes/classes.js";

// 路由配置项 [redirect,]
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
  // 是否显示作者单位上标
  showAffiliationSup: true,
  // 是否显示作者单位信息
  showAffiliationInfo: true,
};

// 文章信息
const paperInfo = {
  title: "Zero-Shot Trajectory Planning for Signal Temporal Logic Tasks",
  shortTitle: "Zero-Shot STL",
  date: "Oct 2025",
  abstract:
    "Signal Temporal Logic (STL) is a powerful specification language for describing complex temporal behaviors of continuous signals, making it well-suited for high-level robotic task descriptions. However, generating executable plans for STL tasks is challenging, as it requires consideration of the coupling between the task specification and the system dynamics. Existing approaches either follow a model-based setting that explicitly requires knowledge of the system dynamics or adopt a task-oriented data-driven approach to learn plans for specific tasks. In this work, we address the problem of generating executable STL plans for systems with unknown dynamics. We propose a  hierarchical planning framework that enables zero-shot generalization to new STL tasks by leveraging only task-agnostic trajectory data during offline training. The framework consists of three key components: (i) decomposing the STL specification into several progresses and time constraints, (ii) searching for timed waypoints that satisfy all progresses under time constraints, and (iii) generating trajectory segments using a pre-trained diffusion model and stitching them into complete trajectories. We formally prove that our method guarantees STL satisfaction, and simulation results demonstrate its effectiveness in generating dynamically feasible trajectories across diverse long-horizon STL tasks.",
  bibtex: `@article{liu2025zero,
    title={Zero-Shot Trajectory Planning for Signal Temporal Logic Tasks},
    author={Liu, Ruijia and Hou, Ancheng and Yu, Xiao and Yin, Xiang},
    journal={arXiv preprint arXiv:2501.13457},
    year={2025}
}`,
};

// 页面元数据信息（搜索用）
const headerInfo = {
  title: paperInfo.title,
  description: "DESCRIPTION_PLACEHOLDER",
  keywords: "Signal Temporal Logic, Trajectory Planning, Diffusion Model",
  author: "Ruijia Liu, Ancheng Hou, Xiao Yu and Xiang Yin",
  citation_title:
    "Zero-Shot Trajectory Planning for Signal Temporal Logic Tasks",
  citation_authors: ["Liu, Ruijia", "Hou, Ancheng"],
  citation_publication_date: "2025",
  robots: "index, follow",
  language: "English",
};

// 作者信息
const authorsInfo = [
  // style为CPS Group主页上作者名字的特殊样式，可选值有 underline 和 bold
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
  {
    type: "arxiv",
    label: "Paper",
    url: "https://arxiv.org/abs/2501.13457",
  },
  // {
  //   type: "github",
  //   label: "Code",
  //   // url: "github url here"
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
// 目前支持的组件有：[AbstractBlock, CarouselBlock, GridviewImageBlock, VideoBlock, BibtexBlock]
const blocksInfo = [
  // 摘要组件信息
  new AbstractBlock(
    "Abstract", // 摘要节标题
    paperInfo.abstract // 摘要内容
  ),
  // Bibtex引用组件信息
  new BibtexBlock(paperInfo.bibtex),
];

// 导出配置
export const configAll = {
  routeConfig: routeConfig,
  pageConfig: pageConfig,
  paperInfo: paperInfo,
  headerInfo: headerInfo,
  titleBlockInfo: titleBlockInfo,
  blocksInfo: blocksInfo,
};
