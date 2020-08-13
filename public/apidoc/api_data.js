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
    "type": "post",
    "url": "/api/shuqian/addShuqian",
    "title": "新增书签",
    "description": "<p>addShuqian</p>",
    "name": "addShuqian",
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
        "url": "http://localhost:3000/api/shuqian/addShuqian"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/shuqians.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/point/editFengxianDetail",
    "title": "修改、编辑风险信息",
    "description": "<p>修改、编辑风险信息</p>",
    "name": "editFengxianDetail",
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
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updateAt",
            "description": "<p>修改时间</p>"
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
        "url": "http://localhost:3000/api/point/editFengxianDetail"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/point/editHandongDetail",
    "title": "修改、编辑涵洞信息",
    "description": "<p>修改、编辑涵洞信息</p>",
    "name": "editHandongDetail",
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
            "field": "aqdj",
            "description": "<p>安全等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gnlx",
            "description": "<p>功能类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hdlx",
            "description": "<p>涵洞类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hzdj",
            "description": "<p>荷载等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kj",
            "description": "<p>孔径</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ks",
            "description": "<p>孔数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kzlddj",
            "description": "<p>抗震烈度等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lxbh",
            "description": "<p>路线编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sgff",
            "description": "<p>施工方法</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sjhspl",
            "description": "<p>设计洪水频率</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sjll",
            "description": "<p>设计流量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "spjj",
            "description": "<p>水平夹角</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updateAt",
            "description": "<p>修改时间</p>"
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
        "url": "http://localhost:3000/api/point/editHandongDetail"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/point/editJiankongDetail",
    "title": "修改、编辑监控信息",
    "description": "<p>修改、编辑监控信息</p>",
    "name": "editJiankongDetail",
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
            "field": "hdurl",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updateAt",
            "description": "<p>修改时间</p>"
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
        "url": "http://localhost:3000/api/point/editJiankongDetail"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/point/editPointBasemsg",
    "title": "修改、编辑点位基本信息",
    "description": "<p>修改、编辑点位基本信息</p>",
    "name": "editPointBasemsg",
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
            "field": "user_id:",
            "description": "<p>{type: String, required: true},// 用户id  用来确定点位所属</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>点位名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>标注类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updateAt",
            "description": "<p>修改时间</p>"
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
        "url": "http://localhost:3000/api/point/editPointBasemsg"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/point/editQiaoliangDetail",
    "title": "编辑桥梁信息",
    "description": "<p>编辑桥梁信息</p>",
    "name": "editQiaoliangDetail",
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
            "type": "String",
            "optional": false,
            "field": "bkxx",
            "description": "<p>布跨信息</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gm",
            "description": "<p>规模</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gzxs",
            "description": "<p>构造形式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hddj",
            "description": "<p>航道等级形式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hzdj",
            "description": "<p>荷载等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kzlddj",
            "description": "<p>抗震烈度等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "qc",
            "description": "<p>桥长</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "qdzh",
            "description": "<p>起点桩号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "qk",
            "description": "<p>桥宽</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "xjj",
            "description": "<p>斜交角</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "zdzh",
            "description": "<p>终点桩号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updateAt",
            "description": "<p>修改时间</p>"
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
        "url": "http://localhost:3000/api/point/editQiaoliangDetail"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/shuqian/editShuqianDetail",
    "title": "修改、编辑书签信息",
    "description": "<p>修改、编辑书签信息</p>",
    "name": "editShuqianDetail",
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
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updateAt",
            "description": "<p>修改时间</p>"
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
        "url": "http://localhost:3000/api/shuqian/editShuqianDetail"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/shuqians.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/point/editSuidaoDetail",
    "title": "修改、编辑隧道信息",
    "description": "<p>修改、编辑隧道信息</p>",
    "name": "editSuidaoDetail",
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
            "field": "qdzh",
            "description": "<p>起点桩号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "zdzh",
            "description": "<p>终点桩号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sdcd",
            "description": "<p>隧道长度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dmmj",
            "description": "<p>断面面积</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sdcdgm",
            "description": "<p>隧道长度规模</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wz",
            "description": "<p>位置</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hdmbzxs",
            "description": "<p>横断面布置形式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hzdj",
            "description": "<p>荷载等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fsdj",
            "description": "<p>防水等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kzlddj",
            "description": "<p>抗震烈度等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "qadj",
            "description": "<p>安全等级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sgff",
            "description": "<p>施工方法</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updateAt",
            "description": "<p>修改时间</p>"
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
        "url": "http://localhost:3000/api/point/editSuidaoDetail"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/points.js",
    "groupTitle": "Point"
  },
  {
    "type": "post",
    "url": "/api/point/editYinhuanDetail",
    "title": "修改、编辑隐患信息",
    "description": "<p>修改、编辑隐患信息</p>",
    "name": "editYinhuanDetail",
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
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "updateAt",
            "description": "<p>修改时间</p>"
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
        "url": "http://localhost:3000/api/point/editYinhuanDetail"
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
    "title": "根据类型获取用户点位列表",
    "description": "<p>根据类型获取用户点位列表</p>",
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
    "url": "/api/shuqian/getShuqianList",
    "title": "获取用户所有书签视角",
    "description": "<p>获取用户所有书签视角</p>",
    "name": "getShuqianList",
    "group": "Shuqian",
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
        "url": "http://localhost:3000/api/shuqian/getShuqianList"
      }
    ],
    "version": "0.1.0",
    "filename": "routes/api/shuqians.js",
    "groupTitle": "Shuqian"
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
