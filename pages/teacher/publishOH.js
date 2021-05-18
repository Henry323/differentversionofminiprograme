Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    fromlist: [],
    index: 0,
    lista: [0],
    week1: [],
    newList: [],
    listb: [0],
    listc: [0],
    listd: [0],
    liste: [0],
  },
 
  /**
   * 开始日期--时间
   */
  bindTimeChangea: function (e) {
    var nowIdx = e.currentTarget.dataset.idx;//获取当前索引
    var val = e.detail.value;//获取输入的值
    var oldVal = this.data.lista;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      time1: oldVal
    })  
  },
 
  /**
   * 结束日期--时间
   */
  bindTimesChangea: function (e) {
    var nowIdx = e.currentTarget.dataset.idx;//获取当前索引
    var val = e.detail.value;//获取输入的值
    var oldVal = this.data.lista;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      times1: oldVal
    })
  },
  
  
  bindTimeChangeb: function (b) {
    var nowIdx = b.currentTarget.dataset.idx;//获取当前索引
    var val = b.detail.value;//获取输入的值
    var oldVal = this.data.listb;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      time2: oldVal
    })  
  },
 
  /**
   * 结束日期--时间
   */
  bindTimesChangeb: function (b) {
    var nowIdx = b.currentTarget.dataset.idx;//获取当前索引
    var val = b.detail.value;//获取输入的值
    var oldVal = this.data.listb;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      times2: oldVal
    })
  },

  /**
   * 开始日期--时间
   */
  bindTimeChangec: function (c) {
    var nowIdx = c.currentTarget.dataset.idx;//获取当前索引
    var val = c.detail.value;//获取输入的值
    var oldVal = this.data.listc;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      time3: oldVal
    })  
  },
 
  /**
   * 结束日期--时间
   */
  bindTimesChangec: function (c) {
    var nowIdx = c.currentTarget.dataset.idx;//获取当前索引
    var val = c.detail.value;//获取输入的值
    var oldVal = this.data.listc;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      times3: oldVal
    })
  },

    /**
   * 开始日期--时间
   */
  bindTimeChanged: function (d) {
    var nowIdx = d.currentTarget.dataset.idx;//获取当前索引
    var val = d.detail.value;//获取输入的值
    var oldVal = this.data.listd;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      time4: oldVal
    })  
  },
 
  /**
   * 结束日期--时间
   */
  bindTimesChanged: function (d) {
    var nowIdx = d.currentTarget.dataset.idx;//获取当前索引
    var val = d.detail.value;//获取输入的值
    var oldVal = this.data.listd;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      times4: oldVal
    })
  },

    /**
   * 开始日期--时间
   */
  bindTimeChangee: function (a) {
    var nowIdx = a.currentTarget.dataset.idx;//获取当前索引
    var val = a.detail.value;//获取输入的值
    var oldVal = this.data.liste;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      time5: oldVal
    })  
  },
 
  /**
   * 结束日期--时间
   */
  bindTimesChangee: function (a) {
    var nowIdx = a.currentTarget.dataset.idx;//获取当前索引
    var val = a.detail.value;//获取输入的值
    var oldVal = this.data.liste;
    oldVal[nowIdx] = val;//修改对应索引值的内容  
    this.setData({
      times5: oldVal
    })
  },

})
