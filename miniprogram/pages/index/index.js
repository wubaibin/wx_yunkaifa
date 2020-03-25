var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgContent: []
  },
  complainTap: function () {
    wx.navigateTo({
      url: 'complain/complain',
    })
  },
  newsTap: function (e) {
    app.appData.newsData = this.data.swiperImgContent;
    var postId = e.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'news/news?id=' + postId
    })
  },
  lawsTap: function () {
    wx.navigateTo({
      url: 'laws/laws',
    })
  },
  knowledgeTap: function () {
    wx.navigateTo({
      url: 'knowledge/knowledge',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var indexContent = {
      mainTitle: {
        mainTitle02: "消费者"
      },
      mainText: {
        mainText03: "维权法规",
        mainText04: "维权知识"
      },
      mainImg: {
        mainImg03: "/images/3.png",
        mainImg04: "/images/4.png"
      }
    }
    this.setData(indexContent);
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