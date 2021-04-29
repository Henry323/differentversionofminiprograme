const curriculums = require('./curriculums.js') //引入城市数组
Page({
  data: {
    hotcity: ["INT102", "CST102", "CST101", "CST107",  ],
    result: []
  },
  /**
   * 搜索城市
   */
  bindKeyInput(e) {
    var city = e.detail.value
    //如果输入为空，返回
    if (city == '') {
      this.setData({
        result: []
      })
      return
    }
    var result = []
    curriculums.curriculums.forEach(item => {
      item.curriculums.forEach(res => {
        if (res.curriculums.indexOf(city) == 0) { //使用indexOf()=0 实现是否以...开头
          result.push({
            citysName: res.citysName,
            txt: res.citysName + "," + item.provinceName,
          })
        }

      })
    })
    this.setData({
      result: result
    })
  },
  /**
   * 单击结果
   */
  onclick(e){
    var city = e.currentTarget.dataset.city
    
    wx.showToast({
      icon: 'none',
      title: city,
    })
  }
})

