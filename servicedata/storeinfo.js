var name;
/*wx.request({
  url: "http://127.0.0.1/guest",
  method: 'GET',
  data: {
    a: 1,
    b: 2
  },
  header: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  success: function (res) {
    console.log("success");
    console.log(res);
    name=res.data.name;
    exports.name=name
  }
});*/
var stores = [
  {
    storename: '月亮城大酒店',
    imagesrc: '/images/timg.jpg',
    content: '月亮城大酒店是诸佛庵最大最老牌的大酒店，菜品丰富味道鲜美',
    postid:0,
    goodslist:[
      {
        goodname:"番茄炒鸡蛋",
        goodprice:15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }
    ],
    userslist:[
      {
        userId:5,
        name:"新月",
        cost:200
      },
      {
        userId:8,
        name: "南岳",
        cost: 480
      },
      {
        userId:29,
        name: "风雨同舟",
        cost: 310
      },
      {
        userId:80,
        name: "Umbrella",
        cost: 963
      },
    ]
  },
  {
    storename: '锦城大酒店',
    imagesrc: '/images/timg1.jpg',
    content: '锦城大酒店是霍山升学宴的绝佳选择',
    postid:1,
    goodslist: [
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
       {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
       {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }
    ],
    userslist: [
      {
        userId: 5,
        name: "新月",
        cost: 200
      },
      {
        userId: 8,
        name: "南岳",
        cost: 480
      },
      {
        userId: 29,
        name: "风雨同舟",
        cost: 310
      },
      {
        userId: 80,
        name: "Umbrella",
        cost: 963
      },
    ]
  },
  {
    storename: '醉江南',
    imagesrc: '/images/timg2.jpg',
    content: '醉江南是中高档人士的首选',
    postid:2,
    goodslist: [
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
    ],
     userslist:[
       {
    userId: 5,
    name: "新月",
    cost: 200
  },
  {
    userId: 8,
    name: "南岳",
    cost: 480
  },
  {
    userId: 29,
    name: "风雨同舟",
    cost: 310
  },
  {
    userId: 80,
    name: "Umbrella",
    cost: 963
  }
     ]
  },
  {
    storename: '月亮城大酒店',
    imagesrc: '/images/timg.jpg',
    content: '月亮城大酒店是诸佛庵最大最老牌的大酒店，菜品丰富味道鲜美',
    postid: 0,
    goodslist: [
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }
    ],
    userslist: [
      {
        userId: 5,
        name: "新月",
        cost: 200
      },
      {
        userId: 8,
        name: "南岳",
        cost: 480
      },
      {
        userId: 29,
        name: "风雨同舟",
        cost: 310
      },
      {
        userId: 80,
        name: "Umbrella",
        cost: 963
      },
    ]
  },
  {
    storename: '锦城大酒店',
    imagesrc: '/images/timg1.jpg',
    content: '锦城大酒店是霍山升学宴的绝佳选择',
    postid: 1,
    goodslist: [
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }
    ],
    userslist: [
      {
        userId: 5,
        name: "新月",
        cost: 200
      },
      {
        userId: 8,
        name: "南岳",
        cost: 480
      },
      {
        userId: 29,
        name: "风雨同舟",
        cost: 310
      },
      {
        userId: 80,
        name: "Umbrella",
        cost: 963
      },
    ]
  },
  {
    storename: '醉江南',
    imagesrc: '/images/timg2.jpg',
    content: '醉江南是中高档人士的首选',
    postid: 2,
    goodslist: [
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
    ],
    userslist: [
      {
        userId: 5,
        name: "新月",
        cost: 200
      },
      {
        userId: 8,
        name: "南岳",
        cost: 480
      },
      {
        userId: 29,
        name: "风雨同舟",
        cost: 310
      },
      {
        userId: 80,
        name: "Umbrella",
        cost: 963
      }
    ]
  }, {
    storename: '月亮城大酒店',
    imagesrc: '/images/timg.jpg',
    content: '月亮城大酒店是诸佛庵最大最老牌的大酒店，菜品丰富味道鲜美',
    postid: 0,
    goodslist: [
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }
    ],
    userslist: [
      {
        userId: 5,
        name: "新月",
        cost: 200
      },
      {
        userId: 8,
        name: "南岳",
        cost: 480
      },
      {
        userId: 29,
        name: "风雨同舟",
        cost: 310
      },
      {
        userId: 80,
        name: "Umbrella",
        cost: 963
      },
    ]
  },
  {
    storename: '锦城大酒店',
    imagesrc: '/images/timg1.jpg',
    content: '锦城大酒店是霍山升学宴的绝佳选择',
    postid: 1,
    goodslist: [
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }, {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      }
    ],
    userslist: [
      {
        userId: 5,
        name: "新月",
        cost: 200
      },
      {
        userId: 8,
        name: "南岳",
        cost: 480
      },
      {
        userId: 29,
        name: "风雨同舟",
        cost: 310
      },
      {
        userId: 80,
        name: "Umbrella",
        cost: 963
      },
    ]
  },
  {
    storename: '醉江南',
    imagesrc: '/images/timg2.jpg',
    content: '醉江南是中高档人士的首选',
    postid: 2,
    goodslist: [
      {
        goodname: "番茄炒鸡蛋",
        goodprice: 15,
        goodimage: "/images/0312075f59633f0df444eb88.jpg"
      },
      {
        goodname: "麻婆豆腐",
        goodprice: 16,
        goodimage: "/images/9825bc315c6034a8ed795386c01349540923761a.jpg"
      },
      {
        goodname: "红烧鱼",
        goodprice: 50,
        goodimage: "/images/ca1349540923dd546abdc943da09b3de9d8248ca.jpg"
      },
    ],
    userslist: [
      {
        userId: 5,
        name: "新月",
        cost: 200
      },
      {
        userId: 8,
        name: "南岳",
        cost: 480
      },
      {
        userId: 29,
        name: "风雨同舟",
        cost: 310
      },
      {
        userId: 80,
        name: "Umbrella",
        cost: 963
      }
    ]
  },
]

exports.storelist=stores;