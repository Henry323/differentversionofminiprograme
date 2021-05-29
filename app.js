// app.js
App({
  globalData:{
    Tphonenum:0,
    Tnumber:0,
    Tmajor1:"",
    Tmajor2:"",
    Tname:"",

    Sphonenum:0,
    Snumber:0,
    
      
    
    tabBar: [
        {
          pagePath: "/pages/search/search",
          iconPath: "/icon/search1.png",
          selectedIconPath: "/icon/search.png",
          text: "search"
        },
        {
          pagePath: "/pages/curriculum/curriculum",
          iconPath: "/icon/curiculum1.png",
          selectedIconPath: "/icon/curiculum.png",
          text: "curriculum"
        },
        {
          pagePath: "/pages/mine/mine",
          iconPath: "/icon/mine1.png",
          selectedIconPath: "/icon/mine.png",
          text: "mine"
        },
        {
          
          pagePath: "/pages/reservation/reservation",
          iconPath: "/icon/curiculum1.png",
          selectedIconPath: "/icon/curiculum.png",
          text: "reservation"
        },
        {
          pagePath: "/pages/my/my",
          iconPath: "/pages/img/mine1.png",
          selectedIconPath: "/pages/img/mine.png",
          text: "mine"
        }
    ]
    },
    onLaunch: function () {

    },
    
    setTabBar(current,index = 0){
      if (typeof current.getTabBar === 'function' && current.getTabBar()) {
        current.getTabBar().setData({
          list: this.globalData.tabBar,
          selected: index
        });
      }
     }
  
  
})
