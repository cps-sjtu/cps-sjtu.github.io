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
  addAndBetweenLastTwoNames: true,
  // 是否显示作者单位上标
  showAffiliationSup: true,
  // 是否显示作者单位信息
  showAffiliationInfo: true,
};

// 文章信息
const paperInfo = {
  title: "EXAMPLE_TITLE_PLACEHOLDER",
  shortTitle: "EXAMPLE_SHORT_TITLE_PLACEHOLDER",
  date: "", // YYYY-MM-DD, 可不填
  abstract:
    "EXAMPLE_ABSTRACT_PLACEHOLDER, This block supports **Markdown** syntax.",
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
  keywords: "KEYWORD1, KEYWORD2, KEYWORD3",
  author: "AUTHOR1, AUTHOR2, AUTHOR3",
  citation_title: "EXAMPLE_CITATION_TITLE_PLACEHOLDER",
  citation_authors: ["AUTHOR1", "AUTHOR2"],
  citation_publication_date: "2025",
  robots: "index, follow",
  language: "English",
};

// 作者信息
const authorsInfo = [
  // style为主页上作者名字的特殊样式，可选值有 underline 和 bold
  {
    name: "AUTHOR1",
    style: "underline",
    link: "https://author1-website.com",
    affiliationIndex: 1,
  },
  {
    name: "AUTHOR2",
    style: "bold",
    affiliationIndex: 1,
  },
];

// 单位信息
const affiliationsInfo = [
  {
    index: 1,
    name: "AFFILIATION1_PLACEHOLDER",
  },
  {
    index: 2,
    name: "AFFILIATION2_PLACEHOLDER",
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
    paperInfo.abstract, // 摘要内容
    "More info about this block, shown below the block.", // 更多信息，留空可不显示
    true // 是否显示块顶部分割线
  ),
  // 轮播图组件信息
  new CarouselBlock(
    "image", // 图片类型轮播
    "Example Image Carousel", // 轮播节标题，留空可不显示
    "This is an example image carousel, this description supports **Markdown** syntax.", // 轮播节描述，留空可不显示
    "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    [
      // 图片地址列表 (相对于 public 文件夹的路径)
      "/example/1.png",
    ],
    "More info about this block, shown below the block.", // 更多信息，留空可不显示
    true // 是否显示块顶部分割线
  ),
  // 网格视图图片组件信息
  new GridviewBlock(
    "Example Gridview Image Block", // 网格视图节标题，留空可不显示
    "This is an example gridview image block, this description supports **Markdown** syntax.", // 网格视图节描述，留空可不显示
    true, // 是否显示图片标题
    "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    1, // 行数
    2, // 列数
    "100%", // 宽度，支持百分比和像素值
    "auto", // 高度，支持百分比和像素值
    [
      // 图片数据列表
      {
        src: "/example/1.png",
        caption: "Image 1 Caption",
      },
      // 视频数据列表
      {
        isVideo: true,
        videoType: "video", // 视频类型，可选值有 [iframe, video]
        src: "/SAGAS/videos/easy_circ_giant.mp4",
        caption: "Example Video 1",
        controls: true, // 是否显示视频控制栏
        loop: false, // 是否循环播放
        autoplay: false, // 是否自动播放
        muted: false, // 是否静音
      },
    ],
    "More info about this block, shown below the block.", // 更多信息，留空可不显示
    true // 是否显示块顶部分割线
  ),
  // 弹性视图组件信息
  new FlexviewBlock(
    "Example Flexview Block", // 弹性视图节标题，留空可不显示
    "This is an example flexview block, this description supports **Markdown** syntax.", // 弹性视图节描述，留空可不显示
    true, // 是否显示标题
    "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    "49%", // 宽度，支持百分比和像素值
    "auto", // 高度，支持百分比和像素值
    [
      // 图片数据列表
      {
        src: "/example/1.png",
        caption: "Image 1 Caption",
      },
      // 视频数据列表
      {
        isVideo: true,
        videoType: "video", // 视频类型，可选值有 [iframe, video]
        src: "/SAGAS/videos/easy_circ_giant.mp4",
        caption: "Example Video 1",
        controls: true, // 是否显示视频控制栏
        loop: false, // 是否循环播放
        autoplay: false, // 是否自动播放
        muted: false, // 是否静音
      },
    ],
    "More info about this block, shown below the block.", // 更多信息，留空可不显示
    true // 是否显示块顶部分割线
  ),
  // 视频组件信息
  new VideoBlock(
    "Example Video Block", // 视频节标题，留空可不显示
    "This is an example video block, this description supports **Markdown** syntax.", // 视频节描述，留空可不显示
    {
      // videoType: "video", // 视频类型，可选值有 [iframe, video]
      // src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      videoType: "iframe", // 视频类型，可选值有 [iframe, video]
      src: "//player.bilibili.com/player.html?isOutside=true&aid=584666059&bvid=BV15z4y1Z734&cid=239973476&p=1", // 视频地址
      caption: "Example Video 1", // 视频标题，留空可不显示
    },
    "More info about this block, shown below the block.", // 更多信息，留空可不显示
    true // 是否显示块顶部分割线
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
