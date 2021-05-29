// logs.js
//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    username: '',
    password: '',
    ifsuccess: '',
    Tmajor1:"",
    Tmajor2:""
    

  },
  //事件处理函数
   login: function () {
        var that = this;
        if (this.data.username.length == 0 || this.data.password.length == 0) {
          wx.showToast({
            title: '账号或密码不能为空',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/teacher/login',
            method: 'post',
            data: {
              username: that.data.username,
              password: that.data.password,
            },
            header:{'content-type':'application/x-www-form-urlencoded'},
            success:function(res){
              console.log("回调函数:"+res.data)
              var resData = res.data;
  
              if(resData == true){
              var num=1
                  wx.showToast({
                      title: '登录成功',
                      duration:2000
                  })
               wx.request({
              url: 'http://localhost:8080/teacher/login_get',
              method: 'post',
              data: {
                username: that.data.username,
                
              },
              header:{'content-type':'application/x-www-form-urlencoded'},
              success:function(res){
                console.log("回调函数:"+res.data)
              that.setData({
                Tmajor1:res.data[0],
                Tmajor2:res.data[1]
              })

            app.globalData.Tmajor1=that.data.Tmajor1
            app.globalData.Tmajor2=that.data.Tmajor2
      }
    }),
              //赋值
              app.globalData.Tphonenum=that.data.username
              
              app.globalData.Tnumber=num
                   wx.switchTab({
                     url: '../my/my',
                   })
              }else{
                  wx.showToast({
                    title: '登录失败',
                    icon: 'none',
                    duration: 2000
                  })
              }
          }
          })
        }
      },
 
  onShow: function () {
    // 生命周期函数--监听页面显示
    wx.hideTabBar({})
  },
  onLoad: function () {
   
  },
 
 
  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  
 
  // 登录处理
  
})

