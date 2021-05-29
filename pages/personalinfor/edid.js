// pages/personalinfor/edid.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      phonenum:0,
      Sid:"",
      Sname:"",
      Smajor:"",
      Semail:""
    },
    IDbind:function(e){
      console.log(e);
      var v=e.detail.value;
      this.setData({
        Sid:v
      });
  
  },
  Namebind:function(e){
    console.log(e);
    var v=e.detail.value;
    this.setData({
      Sname:v
    });
  
  },
  Majorbind:function(e){
    console.log(e);
    var v=e.detail.value;
    this.setData({
      Smajor:v
    });
  
  },
   Emailbind:function(e){
    console.log(e);
    var v=e.detail.value;
    this.setData({
      Semail:v
    });
  
  },
  finishEdit:function(){
    var that = this;
        if (this.data.Semail.length == 0 || this.data.Sid.length == 0|| this.data.Sname.length == 0|| this.data.Smajor.length == 0) {
          wx.showToast({
            title: 'personal information can not be empty',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/student/edit',
            method: 'post',
            data: {
                Sid:that.data.Sid,
                Semail:that.data.Semail,
                Sname:that.data.Sname,
                Smajor:that.data.Smajor,
                phonenum:app.globalData.Sphonenum
            },
            header:{'content-type':'application/x-www-form-urlencoded'},
            success:function(res){
              console.log("回调函数:"+res.data)
              var resData = res.data;
  
              if(resData == true){
              
                  wx.showToast({
                      title: 'submit successful',
                      duration:2000
                  })
                  wx.navigateTo({
                  url: '../personalinfor/personalinfor?IDData='+that.data.Sid+'&NameData='+that.data.Sname+'&MajorData='+that.data.Smajor+'&EmailData='+that.data.Semail
          
                      })

 
                  
                  
              }else{
                  wx.showToast({
                    title: 'submit fail',
                    icon: 'none',
                    duration: 2000
                  })
              }
          }
          })
        }


    
    
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
  
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })