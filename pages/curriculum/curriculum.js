// pages/curriculum/curriculum.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      information:"",
      listlen:0,
      appointmentinfo:[],
      classcide:"",
      choosetime:"",
      teachername:""
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 为了所有导航栏窗口都能同步导航状态，则在 onShow 中调用
    app.setTabBar(this,1);
    var that=this
    wx.request({
              url: 'http://localhost:8080/student/sshow',
              method: 'post',
              data: {
                  
                  phonenum:app.globalData.Sphonenum
              },
              header:{'content-type':'application/x-www-form-urlencoded'},
              success:function(res){
              console.log(res.data)
              console.log(res.data.length)
              that.setData({
                listlen:res.data.length,
                appointmentinfo:res.data
              })
              
              
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})