// pages/search/officehour.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TeachernameArray:[[],[]],
    NmultiIndex:[0,0],
    choosename:"",
    teachername:[],
    
    datetimeArray:[[],[]],
    multiIndex:[0,0],
    chooseTime:"",
    times:[],

    teachernameandtime:{},
    
    classname:"",
    chooseTime:"",
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let teachername=JSON.parse(options.teachername)
    let teachernameandtime=JSON.parse(options.teachernameandtime)
    this.setData({
      classname:options.curriculum,
      teachername:teachername,
      teachernameandtime:teachernameandtime
      })
    console.log(this.data.teachernameandtime)
    console.log(this.data.teachername)
    this.setData({
      TeachernameArray:[this.data.teachername],
      
      //address
    })
    
    
    let choosename= this.data.TeachernameArray[0][0]
    
    this.setData({
      choosename:choosename,
      
    })
    console.log(this.data.choosename)
    for (var item in this.data.teachernameandtime){
      var key = item;
      var value = this.data.teachernameandtime[key];
      if(key==this.data.choosename){
        this.setData({
          times:this.data.times.concat(value)
        })
        console.log(this.data.times)
        break;
      }

    }
    this.setData({
      datetimeArray:[this.data.times]

    })
    let chooseTime=this.data.datetimeArray[0][0]
    this.setData({
      chooseTime:chooseTime
    })
    
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
 
  
  


   bindMultiPickerChange(e) {
		// console.log(e);
    var arr = e.detail.value;
    // console.log(arr);  
		var one = this.data.datetimeArray[0][arr[0]];
		
		this.setData({
			multiIndex: e.detail.value,
			chooseTime: one
    })
    // console.log(this.data.chooseTime);
		
  },

  bindteacherMultiPickerChange(e){
    var arr = e.detail.value;
    console.log(arr)
    // console.log(arr);  
    var one = this.data.TeachernameArray[0][arr[0]];
    this.setData({
      NmultiIndex: e.detail.value,
			choosename: one
    })
    this.setData({
      times:[]
    })
    for (var item in this.data.teachernameandtime){
      var key = item;
      var value = this.data.teachernameandtime[key];
      if(key==this.data.choosename){
        this.setData({
          times:this.data.times.concat(value)
        })
        console.log(this.data.times)
        break;
      }
      
    }

    this.setData({
      datetimeArray:[this.data.times]

    })
    let chooseTime=this.data.datetimeArray[0][0]
    this.setData({
      chooseTime:chooseTime
    })
    
  },
  
  
  submitAppointment:function(e){
    var chooseT=this.data.chooseTime
    var classN=this.data.classname
    var chooseTeacher=this.data.choosename
    var that=this
    wx.request({
        url: 'http://localhost:8080/student/submit',
        method: 'post',
        data: {
          phonenum:app.globalData.Sphonenum,
          chooseT,
          classN,
          chooseTeacher
          
        },
        header:{'content-type':'application/x-www-form-urlencoded'},
        success:function(res){
          if(res.data==true){
            wx.showToast({
              title: 'submit successful!',
            })

            wx.navigateBack({
              delta: 1,
            })
          }
          else{
            wx.showToast({
              title: 'submit fail!',
            })
          }
          
}
})   
  }

  

})