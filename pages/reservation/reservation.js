// pages/reservation/reservation.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      teachername:"",
      listlen:0,
      list:[]
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
    app.setTabBar(this,3);
    var that=this
    wx.request({
              url: 'http://localhost:8080/teacher/getname',
              method: 'post',
              data: {
                  
                  phonenum:app.globalData.Tphonenum
              },
              header:{'content-type':'application/x-www-form-urlencoded'},
              success:function(res){
              console.log(res.data)
              
              that.setData({
                teachername:res.data
              })

              wx.request({
                        url: 'http://localhost:8080/teacher/tshow',
                        method: 'post',
                        data: {
                            
                            teachername:that.data.teachername
                        },
                        header:{'content-type':'application/x-www-form-urlencoded'},
                        success:function(res){
                        console.log(res.data)
                        console.log(res.data.length)
                        that.setData({
                          list:res.data,
                          listlen:res.data.length
                        })
                        
                        
                }
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