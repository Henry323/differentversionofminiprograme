// pages/personalinfor/personalinfor.js
const app=getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
  
      
      name:"",
      major1:"",
      major2:"",
      email:""
    
  
  },
 chickEdit:function(){
  wx.navigateTo({
    url: '../teachers/edit',
    
    })
 },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    
    that.setData({
     
      name:options.NameData,
      major1:options.Major1Data,
      major2:options.Major2Data,
      email:options.EmailData
    })
    app.globalData.Tmajor1=that.data.major1
    app.globalData.Tmajor2=that.data.major2
  },
  
});


