// pages/personalinfor/personalinfor.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
  
      id:"",
      name:"",
      major:"",
      email:""
    
  
  },
 chickEdit:function(){
  wx.navigateTo({
    url: 'edid',
    
    })
 },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
  
    that.setData({
      id:options.IDData,
      name:options.NameData,
      major:options.MajorData,
      email:options.EmailData
    })
  },
  exit:function(e){
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('student');
          //页面跳转
          wx.redirectTo({
            url: '../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
resetpwd:function(e){
    var no=this.data.myinfo.no;
    wx.navigateTo({
      url: '../password/password?no=' + no,
    })
  },
  setemail: function (e) {
    var no = this.data.myinfo.no;
    wx.navigateTo({
      url: '../email/email?no=' + no,
    })
  
  },
  inputbind:function(e){
      console.log(e);
      var v=e.detail.value;
      this.setData({
        id:v
      });

  }
});


