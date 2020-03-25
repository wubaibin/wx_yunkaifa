//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  appData: {
    // 账户信息
    account: '',
    //用户信息
    userinfo: '',
    //id (在binding.js中获取的userId)
    userId: '',
    complainData: [],
    newsData: []
  }
})
