// ===================================================================
// DO NOT CHANGE THIS FILE!
// This file defines the block classes used in the project page.
// ===================================================================

export class BasicBlock {
  constructor(title, description, moreInfo = "", showDivider = true) {
    this.title = title; // 标题
    this.description = description; // 描述
    this.moreInfo = moreInfo; // 更多信息，可选
    this.showDivider = showDivider; // 是否显示分割线，默认显示
  }
  getProps() {
    return {
      title: this.title,
      description: this.description,
      moreInfo: this.moreInfo,
      showDivider: this.showDivider,
    };
  }
}

export class PuretextBlock extends BasicBlock {
  id = "puretext";
  constructor(title, content, moreInfo = "", showDivider = true) {
    super(title, content, moreInfo, showDivider);
  }
  getProps() {
    let ret = super.getProps();
    ret.content = this.description;
    ret.description = undefined;
    return ret;
  }
}

export class CarouselBlock extends BasicBlock {
  id = "carousel";
  constructor(
    carouselType,
    title,
    description,
    imgFit,
    dataList,
    moreInfo = "",
    showDivider = true
  ) {
    super(title, description, moreInfo, showDivider);
    this.carouselType = carouselType; // 图片类型轮播
    this.imgFit = imgFit; // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    this.dataList = dataList; // 图片地址列表 (相对于 public 文件夹的路径)
  }
  getProps() {
    let ret = super.getProps();
    ret.imgFit = this.imgFit;
    ret.dataList = this.dataList;
    ret.carouselType = this.carouselType;
    return ret;
  }
}

export class GridviewBlock extends BasicBlock {
  id = "gridview";
  constructor(
    title,
    description,
    showImageCaption,
    imgFit,
    rows,
    columns,
    width,
    height,
    dataList,
    moreInfo = "",
    showDivider = true
  ) {
    super(title, description, moreInfo, showDivider);
    this.showImageCaption = showImageCaption; // 是否显示图片标题
    this.imgFit = imgFit; // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    this.rows = rows; // 行数
    this.columns = columns; // 列数
    this.width = width; // 宽度，支持百分比和像素值
    this.height = height; // 高度，支持百分比和像素值
    this.dataList = dataList; // 图片数据列表
  }
  getProps() {
    let ret = super.getProps();
    ret.showImageCaption = this.showImageCaption;
    ret.imgFit = this.imgFit;
    ret.rows = this.rows;
    ret.columns = this.columns;
    ret.width = this.width;
    ret.height = this.height;
    ret.dataList = this.dataList;
    return ret;
  }
}

export class VideoBlock extends BasicBlock {
  id = "video";
  constructor(title, description, data, moreInfo = "", showDivider = true) {
    super(title, description, moreInfo, showDivider);
    this.data = data; // 视频数据
  }
  getProps() {
    let ret = super.getProps();
    ret.data = this.data;
    return ret;
  }
}

export class FlexviewBlock extends BasicBlock {
  id = "flexview";
  constructor(
    title,
    description,
    showImageCaption,
    imgFit,
    width,
    height,
    dataList,
    moreInfo = "",
    showDivider = true
  ) {
    super(title, description, moreInfo, showDivider);
    this.showImageCaption = showImageCaption; // 是否显示图片标题
    this.imgFit = imgFit; // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    this.width = width; // 宽度，支持百分比和像素值
    this.height = height; // 高度，支持百分比和像素值
    this.dataList = dataList; // 图片数据列表
  }
  getProps() {
    let ret = super.getProps();
    ret.showImageCaption = this.showImageCaption;
    ret.imgFit = this.imgFit;
    ret.width = this.width;
    ret.height = this.height;
    ret.dataList = this.dataList;
    return ret;
  }
}

export class BibtexBlock {
  id = "bibtex";
  constructor(bibtex) {
    this.bibtex = bibtex; // BibTeX 内容
  }
  getProps() {
    return {
      bibtex: this.bibtex,
    };
  }
}
