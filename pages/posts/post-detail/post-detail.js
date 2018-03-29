
var App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:false,
    Total:'',
    weekTotal:'',
    userType: 1,
    showModal:1,
    letNum:'',
    letNumOld:'',
    srcArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    var storeId = options.id;
    wx.request({
      url: 'https://www.greatforworld.com/getStreInfo',
      data:{
        storied: storeId
      },
      method:'GET',
      success:function(res){
        var res = res.data
        if (res.code == 0){
          that.setData({
            store: {
              storename: res.data.name,
              feature: res.data.feature,
              imagesrc: res.data.pic,
            },
            goods: res.data.goodlist,
            users: res.data.consumerqueue,
            Total:res.data.sum,
            letNum: res.data.t,
            letNumOld: res.data.t
          });
          for (var i = 0; i < res.data.goodlist.length; i++) {
            that.getImg(i,res,that)
          }
        }
      }
    })
    
  
   },
   
   getImg:function(i,res,that){
     wx.downloadFile({
       url: 'https://www.greatforworld.com/common/downLoadFile?id=' + res.data.goodlist[i].src,
       success: function (responce) {
         if (responce.statusCode != 200) {
           return
         }
         that.data.goods[i].pic = responce.tempFilePath
         that.setData({ goods: that.data.goods });
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
     var that = this
     wx.request({
       url: 'https://www.greatforworld.com/modifyStoreInfo_t',
       method:'POST',
       data:{
         storied:'',
         t: that.data.letNum
       },
       success:function(res){
         that.setData({
           showModal: 1,
           letNumOld: that.data.letNum
         })
       }
     })
   },
   noLet: function(){
     this.setData({
       showModal: 1,
       letNum: this.data.letNumOld
     })
   }

})

