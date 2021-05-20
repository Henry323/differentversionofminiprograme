const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  teacher(){
    wx.switchTab({
      url: '../reservation/reservation',
    })
    // 修改导航栏数据
    app.globalData.tabBar[0].isHidden = true;
    app.globalData.tabBar[1].isHidden = true;
    app.globalData.tabBar[2].isHidden = true;
    // 重新设置导航栏，达到更新导航栏的目的
    app.setTabBar(this, 3);
  },
  student(){
    wx.switchTab({
      url: '../search/search',
    })
    // 修改导航栏数据
    app.globalData.tabBar[3].isHidden = true;
    app.globalData.tabBar[4].isHidden = true;
    // 重新设置导航栏，达到更新导航栏的目的
    app.setTabBar(this, 0);
  },
})