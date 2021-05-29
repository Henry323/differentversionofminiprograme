const majors = require('./curriculums.js') //引入城市数组
const app=getApp();
Page({
  data: {
    hotcity: ["INT102", "CST102", "CST101", "CST107",  ],
    result: [],
    say: "",
    curriculum:"",
    teachername:[],
    time:[]
  },
  onShow: function () {
   
    app.setTabBar(this,0);
  },
  /**
   * 搜索城市
   */
  bindKeyInput(e) {
    var city = e.detail.value
    //如果输入为空，返回
    if (city == '') {
      this.setData({
        result: []
      })
      return
    }
    var result = []
    majors.majors.forEach(zz => {
      zz.curriculums.forEach(res => {
        if (res.curriculumsName.indexOf(city) == 0) { //使用indexOf()=0 实现是否以...开头
          result.push({
            curriculumsName: res.curriculumsName,
            txt: zz.majorName + "," + res.curriculumsName,
          })
        }

      })
    })
    this.setData({
      result: result
    })
    
  }, 
  /**
   * 单击结果
   */
  onclick(e){
    var say = e.currentTarget.dataset.curriculums
    console.log(say)
    var that=this
        wx.request({
            url: 'http://localhost:8080/student/search',
            method: 'post',
            data: {
          
              say
              
            },
            header:{'content-type':'application/x-www-form-urlencoded'},
            success:function(res){
              console.log("回调函数:"+res.data)
              console.log(res.data)
              var o={}
              
              for (var item in res.data){
                var key = item;
                var value = res.data[key];
                o[key]=value
                that.setData({
                  teachername:that.data.teachername.concat(key)
                })
              }
              
              console.log(that.data.teachername)
              let names=JSON.stringify(that.data.teachername)
              let teachernamesandtime=JSON.stringify(o)

              wx.navigateTo({
                url: 'officehour?curriculum='+say+'&teachername='+names+'&teachernameandtime='+teachernamesandtime
              })
              
          
    
   
    
  }
})
},
})

