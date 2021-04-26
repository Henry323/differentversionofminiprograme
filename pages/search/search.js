Page({
  // 页面的初始数据
  data: {
    inputShowed: false,  //初始文本框不显示内容
  },
  // 使文本框进入可编辑状态
  showInput: function () {
    this.setData({
      inputShowed: true   //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  }
});
