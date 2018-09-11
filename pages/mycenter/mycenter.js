// pages/mycenter/mycenter.js
Page({
  data: {
    avatarUrl: '../../images/icon/grzx/tx.jpg',
    userInfo: {},
  },
  onLoad: function (options) {
   
  },
  onGotUserInfo: function(e) {
    let uInfo = e.detail.userInfo;
    this.setData({
      userInfo: uInfo,
      avatarUrl: uInfo.avatarUrl
    })
  },

  grabTicket: function() {
    wx.navigateTo({
      url: '../grabTicket/grabTicket',
    })
  }

})