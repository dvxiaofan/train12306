// pages/trainList/trainList.js
Page({
  data: {
    date: '',
    trainList: [],
    scrHeight: 600,
    currentTab: '1'
  },

  onLoad: function (op) {
    let startStation = op.startStation;
    let endStation = op.endStation;
    let date = op.date;
    wx.setNavigationBarTitle({
      title: startStation + ' → ' + endStation
    });
    this.setData({
      date: date
    });
  },

  switchNav: function (e) {
    let id = e.currentTarget.id;
    this.setData({
      currentTab: id
    });
  }
})