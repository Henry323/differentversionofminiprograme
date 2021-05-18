const majors = require('./curriculums.js') //引入城市数组
Page({
  data: {
    hotcity: ["INT102", "CST102", "CST101", "CST107",  ],
    result: [],
    say: "",
    curriculum:"",
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
    majors.majors.forEach(zz => {
      zz.curriculums.forEach(res => {
        if (res.curriculumsName.indexOf(city) == 0) { //使用indexOf()=0 实现是否以...开头
          result.push({
            curriculumsName: res.curriculumsName,
            txt: zz.majorName + "," + res.curriculumsName,
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
    var say = e.currentTarget.dataset.curriculums
    console.log(say)
    wx.navigateTo({
      url: 'publishOH?curriculum='+say,
    })
    
  }
})

