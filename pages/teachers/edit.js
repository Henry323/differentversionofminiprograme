// pages/personalinfor/edid.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      phonenum:0,
      Tname:"",
      Tmajor1:"",
      Temail:"",
      Tmajor2:""
    },
    
  Namebind:function(e){
    console.log(e);
    var v=e.detail.value;
    this.setData({
      Tname:v
    });
  
  },
  Major1bind:function(e){
      console.log(e);
      var v=e.detail.value;
      this.setData({
        Tmajor1:v
      });
  },
  Major2bind:function(e){
    console.log(e);
    var v=e.detail.value;
    this.setData({
      Tmajor2:v
    });
  
  },
  
   Eemailbind:function(e){
    console.log(e);
    var v=e.detail.value;
    this.setData({
      Temail:v
    });
  
  },
  finishEdit:function(){
    
    var that = this;
        if (that.data.Temail.length == 0 || that.data.Tmajor1.length == 0|| that.data.Tmajor2.length == 0|| that.data.Tname.length == 0) {
          wx.showToast({
            title: 'Personal information can not be empty',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/teacher/edit',
            method: 'post',
            data: {
              Temail:that.data.Temail,
              Tname:that.data.Tname,
              Tmajor1:that.data.Tmajor1,
              Tmajor2:that.data.Tmajor2,
              phonenum:app.globalData.Tphonenum
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
                 url: '../teachers/personainfo?NameData='+that.data.Tname+'&Major1Data='+that.data.Tmajor1+'&Major2Data='+that.data.Tmajor2+'&EmailData='+that.data.Temail
          
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

    //PASS parameter
    
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