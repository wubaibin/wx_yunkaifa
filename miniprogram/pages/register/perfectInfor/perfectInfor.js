var app = getApp();
Page({
  data: {
    userName: '',
    userPassword: '',
    phone: '',
    realName: '',
    card: '',
    email: '',
  },
  // 返回主界面
  backHomeTap: function() {
    wx.switchTab({
      url: '../../index/index',
    })
  },
  // 手机号
  phoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  // 真实姓名
  nameInput: function(e) {
    this.setData({
      realName: e.detail.value
    });
  },
  // 身份证
  cardInput: function(e) {
    this.setData({
      card: e.detail.value
    })
  },
  // email
  emailInput: function(e) {
    this.setData({
      email: e.detail.value
    })
  },
  // 下一步完成
  registerSuccessTap: function() {
    var phone = this.data.phone;
    var realName = this.data.realName;
    var card = this.data.card;
    var email = this.data.email;
    var userName = this.data.userName;
    var userPassword = this.data.userPassword;
    var phonereg = /^1[345789]\d{9}$/;
    var namereg = /^[\u4E00-\u9FA5]+$/;
    var cardreg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
    var emailreg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    var that = this;
    if (phone === '') {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000,
        mask: true
      });
    } else if (!phonereg.test(phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    } else if (!namereg.test(realName)) {
      wx.showToast({
        title: '请输入正确的名字',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    } else if (card === '') {
      wx.showToast({
        title: '请输入身份证',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    } else if (!cardreg.test(card)) {
      wx.showToast({
        title: '请输入正确的身份证',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    } else if (email === '') {
      wx.showToast({
        title: '请输入邮箱',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    } else if (!emailreg.test(email)) {
      wx.showToast({
        title: '请输入正确的邮箱',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    } else {
      // 初始化云
      wx.cloud.init({
        env: 'wubaib-9543f7',
        traceUser: true
      });
      // 初始化数据库
      const db = wx.cloud.database();
      db.collection('userInformation').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          realName: realName,
          userName: userName,
          userPassword: userPassword,
          phone: phone,
          email: email,
          card: card
        },
        success: function(res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log(res);
          console.log(res.errMsg);
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
    this.setData({
      userName: app.appData.account.userName,
      userPassword: app.appData.account.userPassword
    })
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