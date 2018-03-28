
var App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:false,
    Total:'',
    weekTotal:'',
    userType: App.globalData.userType,
    showModal:1,
    letNum:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var storeId = options.storeId;
    wx.request({
      url: 'https://www.greatforworld.com/getStreInfo',
      data:{
        storied: storeId
      },
      method:'GET',
      success:function(res){
        var res = res.data
        if (res.code == 0){
          this.setData({
            store: {
              storename: res.data.name,
              feature: res.data.feature,
              imagesrc: res.data.pic
            },
            goods: res.data.goodlist,
            users: userslist,
          });
        }
      }
    })
    
  
   },
  gotoorder: function () {
    wx.navigateTo({
      url: '../../order/order',

    })
   
  },
  switch: function(){
    this.setData({
      key:false
    })
   
    },
   switch1: function(){
     this.setData({
       key:true
     })
   },
   add:function(){
     wx.navigateTo({
       url: '../../store/goodslist/goodslist',

     })
   },
   let:function(){
     this.setData({
       showModal: 0
     })
   },
   addLet:function(){
     this.setData({
       showModal: 1
     })
   },
   noLet: function(){
     this.setData({
       showModal: 1
     })
   }

})

