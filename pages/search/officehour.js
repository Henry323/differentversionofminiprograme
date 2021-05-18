// pages/search/officehour.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datetimeArray:[[],[]],
    times:['9:00-9:30','9:30-10:00','10:00-10:30','10:30-11:00','11:00-11:30','14:00-14:30','14:30-15:00','15:00-15:30','15:30-16:00','16:00-16:30','16:30-17:00'],
    multiIndex:[0,0],
    
    
    address:{},
    da:{},
    
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
      classname:options.curriculum
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
    var some1=this.data.chooseTime
    var some2=this.data.classname
    
    this.data.somedata.Choosetime=some1
    this.data.somedata.Classname=some2
    wx.setStorageSync('data', this.data.somedata)
   
    wx.setStorageSync('flag', 1)
    wx.showToast({
      title: 'submit successful',
      icon: 'success'

    })
    
    wx.navigateBack({
      delta: 1,
    })
  }

  

})