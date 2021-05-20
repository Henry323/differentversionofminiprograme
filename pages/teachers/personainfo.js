// pages/personalinfor/personalinfor.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
  
      
      name:"",
      major:"",
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
      major:options.MajorData,
      email:options.EmailData
    })
  },
  
});


