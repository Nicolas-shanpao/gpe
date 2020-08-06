define({ "api": [
  {
    "type": "post",
    "url": "/api/point/addPoint",
    "title": "新增点位",
    "description": "<p>新增点位</p>",
    "name": "addPoint",
    "group": "Point",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "alt",
            "description": "<p>高程</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "viewdata",
            "description": "<p>视角数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>标注描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": 200,\n \"data\": {\n  alt: -592.21,\n  createdAt: \"2020-08-03T06:22:09.441Z\",\n  isDeleted: 0,\n  lat: 33.794301,\n  lng: 116.893426,\n  name: \"隐患1\",\n  remark: \"隐患1隐患1隐患1隐患1隐患1\",\n  type: \"yh\",\n  user_id: \"5f2290e7cf2a793e64e74201\",\n  viewdata: \"{\"y\":25.532849,\"x\":115.323881,\"z\":1217493.68,\"heading\":359.2,\"pitch\":-53,\"roll\":0}\",\n  __v: 0,\n  _id: \"5f27ad115070a33860578648\",\n },\n \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/point/addPoint"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "get",
    "url": "/api/point/getPointList",
    "title": "获取用户点位列表",
    "description": "<p>获取用户点位列表</p>",
    "name": "getPointList",
    "group": "Point",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": 200,\n \"data\": [\n  {\n    \"isDeleted\": 0,\n    \"_id\": \"5f27acea5070a33860578646\",\n    \"user_id\": \"5f2290e7cf2a793e64e74201\",\n    \"name\": \"监控1\",\n    \"type\": \"jk\",\n    \"lng\": 115.866398,\n    \"lat\": 33.95615,\n    \"alt\": -589.9,\n    \"viewdata\": \"{\\\"y\\\":25.532849,\\\"x\\\":115.323881,\\\"z\\\":1217493.68,\\\"heading\\\":359.2,\\\"pitch\\\":-53,\\\"roll\\\":0}\",\n    \"remark\": \"监控\",\n    \"createdAt\": \"2020-08-03T06:21:30.748Z\",\n    \"__v\": 0\n   }\n ],\n \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/point/getPointList"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "get",
    "url": "/api/point/getPointListByType",
    "title": "获取用户点位列表  类型",
    "description": "<p>获取用户点位列表  类型</p>",
    "name": "getPointListByType",
    "group": "Point",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": 200,\n \"data\": [\n  {\n    \"isDeleted\": 0,\n    \"_id\": \"5f27acea5070a33860578646\",\n    \"user_id\": \"5f2290e7cf2a793e64e74201\",\n    \"name\": \"监控1\",\n    \"type\": \"jk\",\n    \"lng\": 115.866398,\n    \"lat\": 33.95615,\n    \"alt\": -589.9,\n    \"viewdata\": \"{\\\"y\\\":25.532849,\\\"x\\\":115.323881,\\\"z\\\":1217493.68,\\\"heading\\\":359.2,\\\"pitch\\\":-53,\\\"roll\\\":0}\",\n    \"remark\": \"监控\",\n    \"createdAt\": \"2020-08-03T06:21:30.748Z\",\n    \"__v\": 0\n   }\n ],\n \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/point/getPointListByType"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "get",
    "url": "/api/point/getPointDetail",
    "title": "获取用户点位列表  类型",
    "description": "<p>获取用户点位列表  类型</p>",
    "name": "getPointListByType",
    "group": "Point",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": 200,\n \"data\": [\n  {\n    \"isDeleted\": 0,\n    \"_id\": \"5f27acea5070a33860578646\",\n    \"user_id\": \"5f2290e7cf2a793e64e74201\",\n    \"name\": \"监控1\",\n    \"type\": \"jk\",\n    \"lng\": 115.866398,\n    \"lat\": 33.95615,\n    \"alt\": -589.9,\n    \"viewdata\": \"{\\\"y\\\":25.532849,\\\"x\\\":115.323881,\\\"z\\\":1217493.68,\\\"heading\\\":359.2,\\\"pitch\\\":-53,\\\"roll\\\":0}\",\n    \"remark\": \"监控\",\n    \"createdAt\": \"2020-08-03T06:21:30.748Z\",\n    \"__v\": 0\n   }\n ],\n \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/point/getPointListByType"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/user/changeUserinfo",
    "title": "修改用户信息",
    "description": "<p>修改用户信息</p>",
    "name": "changeUserinfo",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nikename",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roles",
            "description": "<p>权限</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n \"code\": 200,\n \"data\": {\n   \"account\": \"lzz\"\n },\n \"message\": \"注册成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/changeUserinfo"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/getUserinfo",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "name": "getUserinfo",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n \"code\": 200,\n \"data\": {\n     \"roles\": [\n         \"admin\"\n     ],\n     \"isDeleted\": 0,\n     \"_id\": \"5f22910ccf2a793e64e74202\",\n     \"account\": \"g15\",\n     \"introduction\": \"这个人很懒，啥也没留......\",\n     \"avatar\": \"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\n     \"nikename\": \"g15\",\n     \"project\": \"g15\",\n     \"__v\": 0\n },\n \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/getUserinfo"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>用户名-g15</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码-bim201818</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": 200,\n \"data\": {\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjI5MGU3Y2YyYTc5M2U2NGU3NDIwMSIsImlhdCI6MTU5NjQzOTYyMn0.kBDO6X4BAeR_UVSAx3istIUzo0hWGdBSWJGQMN_HCFk\"\n   },\n \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>用户名或密码错误.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  code: 401,\n  data: '用户名或密码错误！',\n  message: 'error'\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/login"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/signup",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nikename",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n \"code\": 200,\n \"data\": {\n   \"account\": \"lzz\"\n },\n \"message\": \"注册成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/signup"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/userList",
    "title": "获取用户列表",
    "description": "<p>获取用户列表</p>",
    "name": "userList",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>具体请看</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n \"code\": 200,\n \"data\": [\n     {\n         \"userinfo\": [\n             \"admin\"\n         ],\n         \"isDeleted\": 0,\n         \"_id\": \"5f2290e7cf2a793e64e74201\",\n         \"account\": \"g15\",\n         \"introduction\": \"这个人很懒，啥也没留......\",\n         \"avatar\": \"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\n         \"nikename\": \"g15\",\n         \"project\": \"g15\",\n         \"__v\": 0\n     },\n     {\n         \"roles\": [\n             \"admin\"\n         ],\n         \"isDeleted\": 0,\n         \"_id\": \"5f22910ccf2a793e64e74202\",\n         \"account\": \"g360\",\n         \"introduction\": \"这个人很懒，啥也没留......\",\n         \"avatar\": \"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\n         \"nikename\": \"g360\",\n         \"project\": \"g360\",\n         \"__v\": 0\n     }\n ],\n \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/userList"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  }
] });
