var app = getApp();
Page({
  data: {
    userName: '',
    phone: '',
    realName: '',
    card: '',
    email: ''
  },
  // 点击账户信息
  myInforTap: function () {
    wx.navigateTo({
      url: 'myInfor/myInfor',
    })
  },
  // 点击我的投诉
  // myComplainTap: function () {
  //   wx.navigateTo({
  //     url: 'myComplain/myComplain',
  //   })
  // },
  // 点击我的举报
  // myReportTap: function () {
  //   wx.navigateTo({
  //     url: 'myReport/myReport',
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    if (app.appData.userId === '') {
      wx.redirectTo({
        url: '../noLogin/noLogin',
      })
    } else {
      this.setData({
        userName: app.appData.account.userName,
        phone: app.appData.userinfo.phone,
        realName: app.appData.userinfo.realName,
        card: app.appData.userinfo.card,
        email: app.appData.userinfo.email
      })
    }
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

  }
})