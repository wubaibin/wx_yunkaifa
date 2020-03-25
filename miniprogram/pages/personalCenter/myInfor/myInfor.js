var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    phone: '',
    realName: '',
    card: '',
    email: ''
  },
  // updatePasswordTap: function () {
  //   wx.navigateTo({
  //     url: 'updatePassword/updatePassword',
  //   })
  // },
  // updateEmailTap: function () {
  //   wx.navigateTo({
  //     url: 'updateEmail/updateEmail',
  //   })
  // },
  // updateCardTap: function () {
  //   wx.navigateTo({
  //     url: 'updateCard/updateCard',
  //   })
  // },
  // updatePhoneTap: function () {
  //   wx.navigateTo({
  //     url: 'updatePhone/updatePhone',
  //   })
  // },
  // updateNameTap: function () {
  //   wx.navigateTo({
  //     url: 'updateName/updateName',
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userName: app.appData.account.userName,
      phone: app.appData.userinfo.phone,
      realName: app.appData.userinfo.realName,
      card: app.appData.userinfo.card,
      email: app.appData.userinfo.email
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

  }
})