var app = getApp();
Page({
  data: {
    bindName: '',
    bindPassword: '',
    isChecked: false,
    userName: '',
    phone: '',
    realName: '',
    card: '',
    email: '',
    userId: ''
  },
  // 点击注册账号
  registerTap: function() {
    wx.redirectTo({
      url: '../register/register'
    })
  },
  // 获取用户名
  bindNameInput: function(e) {
    this.setData({
      bindName: e.detail.value
    })
    var that = this;
    if (that.data.bindName.length !== 0 && that.data.bindPassword.length !== 0) {
      this.setData({
        isChecked: true
      })
    } else if (that.data.bindName.length === 0) {
      this.setData({
        isChecked: false
      })
    }
  },
  // 获取密码
  bindPasswordInput: function(e) {
    this.setData({
      bindPassword: e.detail.value
    })
    var that = this;
    if (that.data.bindName.length !== 0 && that.data.bindPassword.length !== 0) {
      this.setData({
        isChecked: true
      })
    } else if (that.data.bindPassword.length === 0) {
      this.setData({
        isChecked: false
      })
    }
  },
  // 点击登录
  bindingSuccess: function() {
    var that = this;
    var bindName = that.data.bindName;
    var bindPassword = that.data.bindPassword;
    if (bindName.length !== 0 && bindPassword.length !== 0) {
      // 初始化云
      wx.cloud.init({
        env: 'wubaib-9543f7',
        traceUser: true
      });
      // 初始化数据库
      const db = wx.cloud.database();
      db.collection('userInformation').where({
        userName: bindName
      }).get().then(res => {
        console.log(res.data);
        if (res.data[0].userPassword === bindPassword) {
          console.log("登录成功");
          // 保存手机号，真实姓名，身份证号，邮箱 保存用户名
          that.setData({
            userName: res.data[0].userName,
            phone: res.data[0].phone,
            realName: res.data[0].realName,
            card: res.data[0].card,
            email: res.data[0].email,
            userId: res.data[0]._id
          })
          app.appData.userinfo = {
            phone: that.data.phone,
            realName: that.data.realName,
            card: that.data.card,
            email: that.data.email
          }
          app.appData.account = {
            userName: that.data.userName
          }
          app.appData.userId = {
            userId: that.data.userId
          }
          wx.switchTab({
            url: '../personalCenter/personalCenter',
          })
        } else {
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})