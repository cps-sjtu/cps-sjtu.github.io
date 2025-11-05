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
  title: "EXAMPLE_TITLE_PLACEHOLDER",
  short_title: "EXAMPLE_SHORT_TITLE_PLACEHOLDER",
  date: "EXAMPLE_DATE_PLACEHOLDER",
  abstract: "EXAMPLE_ABSTRACT_PLACEHOLDER",
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

// 轮播图组件信息
const carouselsInfo = [
  // 每个字典项代表一个轮播节
  // style 可选值有 [image]
  {
    // 图片类型轮播
    style: "image",
    title: "Example Image Carousel", // 轮播节标题，可不显示
    description: "This is an example image carousel.", // 轮播节描述，可不显示
    imgFit: "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    dataList: [
      // 图片地址列表 (相对于 public 文件夹的路径)
      "/example/1.png",
      "/example/2.png",
      "/example/3.png",
      "/example/4.jpg",
      "/example/5.jpg",
    ],
  },
];

// 网格视图图片组件信息
const gridviewImagesInfo = [
  // 每个字典项代表一个网格视图节
  {
    title: "Example Gridview Image Block", // 网格视图节标题，可不显示
    description: "This is an example gridview image block.", // 网格视图节描述，可不显示
    showImageCaption: true, // 是否显示图片标题
    imgFit: "cover", // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    rows: 2, // 行数
    columns: 3, // 列数
    dataList: [
      // 图片数据列表
      {
        src: "/example/1.png",
        caption: "Image 1 Caption",
      },
      {
        src: "/example/2.png",
        caption: "Image 2 Caption",
      },
      {
        src: "/example/3.png",
        caption: "Image 3 Caption",
      },
      {
        src: "/example/4.jpg",
        caption: "Image 4 Caption",
      },
      {
        src: "/example/5.jpg",
        caption: "Image 5 Caption",
      },
      {
        src: "/example/antmaze.png",
        caption: "Image 6 Caption",
      },
    ],
  },
];

// 视频组件信息
const videosInfo = [
  // 每个字典项代表一个视频节
  {
    title: "Example Video Block", // 视频节标题，可不显示
    description: "This is an example video block.", // 视频节描述，可不显示
    data: {
      // video_type: "video", // 视频类型，可选值有 [iframe, video]
      // src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      video_type: "iframe", // 视频类型，可选值有 [iframe, video]
      src: "//player.bilibili.com/player.html?isOutside=true&aid=584666059&bvid=BV15z4y1Z734&cid=239973476&p=1",
      caption: "Example Video 1",
    },
  },
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
