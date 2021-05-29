// pages/search/officehour.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datetimeArray:[[],[]],
    times:['9:00-10:00','10:00-11:00','11:00-12:00','14:00-15:00','15:00-16:00','16:00-17:00'],
    multiIndex:[0,0],
    
    
    address:{},
    da:{},
    phonenum:0,
    classname:"",
    chooseTime:"",
    somedata:{
      Classname:"",
      Choosetime:""
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      classname:options.curriculum,
      phonenum:app.globalData.Tphonenum
    })
    
    var datas = this.getDates(7)
    this.setData({
      datetimeArray:[datas,this.data.times],
      //address
    })
    
    let chooseTime = this.data.datetimeArray[0][0]+" "+this.data.datetimeArray[1][0]
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
 
  getDate(day) {
    var dd = new Date()
    dd.setDate(dd.getDate() + day);//获取AddDayCount天后的日期 
    var y = dd.getFullYear()
    var m = dd.getMonth() + 1//获取当前月份的日期 
    m = m < 10 ? '0' + m : m
    var d = dd.getDate()
    d = d < 10 ? '0' + d : d
    return y + "-" + m + "-" + d
  },
  
  //获取未来几天的数组
  getDates(days){
    let datas =this.data.datetimeArray[0]
    // datas.push('---')
    for(var i = 1;i <= days;i++){
      datas.push(this.getDate(i))
    }
    return datas;
  },

   bindMultiPickerChange(e) {
		// console.log(e);
    var arr = e.detail.value;
    // console.log(arr);  
		var one = this.data.datetimeArray[0][arr[0]];
		var two = this.data.datetimeArray[1][arr[1]];
		this.setData({
			multiIndex: e.detail.value,
			chooseTime: one + " " + two
    })
    // console.log(this.data.chooseTime);
		
  },
  
  
  submitAppointment:function(e){
    var that = this;
    console.log(that.data.classname),
    console.log(that.data.chooseTime),
    console.log(that.data.phonenum)
    wx.request({
              url: 'http://localhost:8080/teacher/publish',
              method: 'post',
              data: {
                Tclasscode: that.data.classname,
                Tofficehour: that.data.chooseTime,
                Tphonenum: that.data.phonenum

              },
              header:{'content-type':'application/x-www-form-urlencoded'},
              success:function(res){
              console.log("回调函数:"+res.data)
              var resData = res.data;
              if(resData == true){
                wx.showToast({
                  title: 'submit successful',
                })
                wx.switchTab({
  url: '../my/my',
})
                
            }else{
                wx.showToast({
                  title: 'submit fail',
                  icon: 'none',
                  duration: 2000
                })
            }
              }
    })
  }

  

})