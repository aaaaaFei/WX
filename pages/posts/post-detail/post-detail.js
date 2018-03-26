var storeinfo = require("../../../servicedata/storeinfo.js");
var get = require("../../../model/getopenid.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:false,
    Total:'',
    weekTotal:'',
    userType:0,
    showModal:1,
    letNum:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postid=options.id;
    var postdata=storeinfo.storelist[postid];
    var goodlist=postdata.goodslist;
    var userslist=postdata.userslist;
    var content = postdata.content;
    this.setData({store:postdata,
                  goods:goodlist,
                  users: userslist,
                  storeContent: content
                  
     });
   console.log(goodlist);
   if (options.userType){
     var Total = Math.floor(Math.random() * 1000000)
     var weekTotal = Math.floor(Math.random() * 100000)
     this.setData({
       Total: Total,
       weekTotal: weekTotal,
       userType: options.userType
     });
   }
  
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

