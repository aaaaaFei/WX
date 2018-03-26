Page({
  data: {},
  onLoad:function(){
  var user=[
    {
      nickName:"Then",
      cost:50
    },
    {
      nickName: "if",
      cost: 30
    },
    {
      nickName: "新月",
      cost: 170
    },
    {
      nickName: "天空",
      cost: 136
    }
  ]
  this.setData({userlist:user,
                shopname:"月亮城大酒店"})
  }
})