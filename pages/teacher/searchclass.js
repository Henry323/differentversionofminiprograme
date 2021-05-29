const majors = require('./curriculums.js') //引入城市数组
const app=getApp()
Page({
  data: {
    major1:"",
    major2:""
  },
  /**
   * 搜索城市
   */
  onLoad:function(){
    this.setData({
      major1:app.globalData.Tmajor1,
      major2:app.globalData.Tmajor2,
      

    })
    console.log(this.data.major1),
    console.log(this.data.major2)

  },
  /**
   * 单击结果
   */
  onclick1(e){
    var say = this.data.major1
    console.log(say)
    wx.navigateTo({
      url: 'publishOH?curriculum='+say,
    })
    
  },
  onclick2(e){
    var say = this.data.major2
    console.log(say)
    wx.navigateTo({
      url: 'publishOH?curriculum='+say,
    })
    
  }
})

