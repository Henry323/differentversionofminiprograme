//index.js
//获取应用实例
const app = getApp()
var openid = wx.getStorageSync("openid");
Page({

  
  data: {
    Sid:"",
    Semail:"",
    Sname:"",
    Smajor:"",
    num:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')
  },
  onLoad:function(options){
    this.setData({
      num:app.globalData.Snumber
    })

  },
  
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  // 事件处理函数
  Sinfor:function(){
    if(this.data.num==1){
      var that=this
        wx.request({
            url: 'http://localhost:8080/student/editback',
            method: 'post',
            data: {
              
              phonenum:app.globalData.Sphonenum
            },
            header:{'content-type':'application/x-www-form-urlencoded'},
            success:function(res){
              console.log("回调函数:"+res.data)
              console.log(res.data)
              
              that.setData({
                Semail:res.data[0],
                Smajor:res.data[2],
                Sid:res.data[1],
                Sname:res.data[3]
              })

              wx.navigateTo({
                            url: '../personalinfor/personalinfor?IDData='+that.data.Sid+'&NameData='
                +that.data.Sname+'&MajorData='+that.data.Smajor+'&EmailData='+that.data.Semail
                    
                                })
              
              
          }
          })
    }
    else{
      wx.showModal({
        title: 'Danger!',
        content: 'Please Login First!',
        success:function(res){
            if(res.confirm){
               console.log('cancel')
            }else{
               console.log('cancel')
            }
        }
     })

    }
  },
  onShow: function () {
    // 为了所有导航栏窗口都能同步导航状态，则在 onShow 中调用
    app.setTabBar(this,2);
  },
  
})
