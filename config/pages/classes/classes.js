// ===================================================================
// DO NOT CHANGE THIS FILE!
// This file defines the block classes used in the project page.
// ===================================================================

export class PuretextBlock {
  id = "puretext";
  constructor(title, content) {
    this.title = title; // 标题
    this.content = content; // 内容
  }
  getProps() {
    return {
      title: this.title,
      content: this.content,
    };
  }
}

export class CarouselBlock {
  id = "carousel";
  constructor(carouselType, title, description, imgFit, dataList) {
    this.carouselType = carouselType; // 图片类型轮播
    this.title = title; // 轮播节标题，可不显示
    this.description = description; // 轮播节描述，可不显示
    this.imgFit = imgFit; // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    this.dataList = dataList; // 图片地址列表 (相对于 public 文件夹的路径)
  }
  getProps() {
    return {
      title: this.title,
      description: this.description,
      imgFit: this.imgFit,
      dataList: this.dataList,
      carouselType: this.carouselType,
    };
  }
}

export class GridviewImageBlock {
  id = "gridviewImage";
  constructor(
    title,
    description,
    showImageCaption,
    imgFit,
    rows,
    columns,
    width,
    height,
    dataList
  ) {
    this.title = title; // 网格视图节标题，可不显示
    this.description = description; // 网格视图节描述，可不显示
    this.showImageCaption = showImageCaption; // 是否显示图片标题
    this.imgFit = imgFit; // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    this.rows = rows; // 行数
    this.columns = columns; // 列数
    this.width = width; // 宽度，支持百分比和像素值
    this.height = height; // 高度，支持百分比和像素值
    this.dataList = dataList; // 图片数据列表
  }
  getProps() {
    return {
      title: this.title,
      description: this.description,
      showImageCaption: this.showImageCaption,
      imgFit: this.imgFit,
      rows: this.rows,
      columns: this.columns,
      width: this.width,
      height: this.height,
      dataList: this.dataList,
    };
  }
}

export class VideoBlock {
  id = "video";
  constructor(title, description, data) {
    this.title = title; // 视频节标题，可不显示
    this.description = description; // 视频节描述，可不显示
    this.data = data; // 视频数据
  }
  getProps() {
    return {
      title: this.title,
      description: this.description,
      data: this.data,
    };
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
