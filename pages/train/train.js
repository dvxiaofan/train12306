// pages/train/train.js
Page({

  data: {
    currentTab: 0,
    imgUrls: [
      '../../images/haibao/1.jpg',
      '../../images/haibao/2.jpg',
      '../../images/haibao/3.jpg'
    ]
  },

  onLoad: function (options) {
  
  },

  switchNav: function(e) {
    let id = e.currentTarget.id;
    
    this.setData({
      currentTab: id
    });
  },

  formSubmit: function(e) {
    let formValue = e.detail.value;
    let startStation = formValue.startStation;
    let endStation = formValue.endStation;
    let date = formValue.date;
    let week = formValue.week;
    let gt = formValue.gt;
    let xs = formValue.xs;

    wx.navigateTo({
      url: `../trainList/trainList?startStation=${startStation}&endStation=${endStation}&date=${date}&week=${week}&gt=${gt}&xs=${xs}`
    })
  }
})