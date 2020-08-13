const query = require("../../config/controller");
const request = require('request')
const jwt = require('jsonwebtoken')
const SECRET = require("../../config/development")
const auth = require("../../middleware/auth2")
let express = require('express');
let router = express.Router();
/**
 * @api {post} /api/user/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} account 用户名-g15
 * @apiParam {string} password 密码-bim201818
 * @apiSuccess {number} code 具体请看
 * @apiSuccess {json} data
 * @apiSuccess {string} message
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "code": 200,
 *  "data": {
 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjI5MGU3Y2YyYTc5M2U2NGU3NDIwMSIsImlhdCI6MTU5NjQzOTYyMn0.kBDO6X4BAeR_UVSAx3istIUzo0hWGdBSWJGQMN_HCFk"
 *    },
 *  "message": "success"
 * }
 * @apiError {number} code 具体请看.
 * @apiError {string} data 用户名或密码错误.
 * @apiError {string} message error.
 * @apiErrorExample Error-Response:
 * HTTP/1.1 401 Not Found
 * {
 *   code: 401,
 *   data: '用户名或密码错误！',
 *   message: 'error'
 * }
 * @apiSampleRequest http://localhost:3000/api/user/login
 * @apiVersion 0.1.0
 */
// 登录
router.post('/login', async (req, res) => {
  console.log(req.body.account);
  let values = [req.body.account];
  let sql = "select id,password,isDeleted from user where account=?;";
  let user = await query(sql, values);
  console.log(!user);
  if (user.length === 0) {
    return res.send({
      code: 401,
      data: '用户名不存在！',
      message: 'error'
    })
  }
  if (user[0].isDeleted != 0) {

  }
  const isPasswordValid = require('bcrypt').compareSync(
    req.body.password,
    user[0].password
  )
  console.log(isPasswordValid);
  if (!isPasswordValid) {
    return res.send({
      code: 401,
      data: '用户名或密码错误！',
      message: 'error'
    })
  }
  const token = jwt.sign({
    id: String(user[0].id)
  }, SECRET)

  // 生成token
  res.send({
    code: 200,
    data: {token},
    message: 'success'
  })
})

/**
 * @api {get} /api/user/userList 获取用户列表
 * @apiDescription 获取用户列表
 * @apiName userList
 * @apiGroup User
 * @apiHeader authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM
 * @apiSuccess {number} code 具体请看
 * @apiSuccess {json} data
 * @apiSuccess {string} message
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *  "code": 200,
 *  "data": [
 *      {
 *          "userinfo": [
 *              "admin"
 *          ],
 *          "isDeleted": 0,
 *          "_id": "5f2290e7cf2a793e64e74201",
 *          "account": "g15",
 *          "introduction": "这个人很懒，啥也没留......",
 *          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
 *          "nikename": "g15",
 *          "project": "g15",
 *          "__v": 0
 *      },
 *      {
 *          "roles": [
 *              "admin"
 *          ],
 *          "isDeleted": 0,
 *          "_id": "5f22910ccf2a793e64e74202",
 *          "account": "g360",
 *          "introduction": "这个人很懒，啥也没留......",
 *          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
 *          "nikename": "g360",
 *          "project": "g360",
 *          "__v": 0
 *      }
 *  ],
 *  "message": "success"
 * }
 * @apiSampleRequest http://localhost:3000/api/user/userList
 * @apiVersion 0.1.0
 */
//  获取用户列表
router.get('/userList', auth, async (req, res) => {
  let sql = "select id,account,roles,avatar,nikename,introduction,isDeleted from user";
  let user = await query(sql);
  res.send({
    code: 200,
    data: user,
    message: 'success'
  })
})

/**
 * @api {get} /api/user/getUserinfo 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName getUserinfo
 * @apiGroup User
 * @apiHeader authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM
 * @apiSuccess {number} code 具体请看
 * @apiSuccess {json} data
 * @apiSuccess {string} message
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *  "code": 200,
 *  "data": {
 *      "roles": [
 *          "admin"
 *      ],
 *      "isDeleted": 0,
 *      "_id": "5f22910ccf2a793e64e74202",
 *      "account": "g15",
 *      "introduction": "这个人很懒，啥也没留......",
 *      "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
 *      "nikename": "g15",
 *      "project": "g15",
 *      "__v": 0
 *  },
 *  "message": "success"
 * }
 * @apiSampleRequest http://localhost:3000/api/user/getUserinfo
 * @apiVersion 0.1.0
 */
// 获取用户信息
router.get('/getUserinfo', auth, async (req, res) => {
  res.send({
      code: 200,
      data: req.user,
      message: 'success'
    }
  )
})

/**
 * @api {post} /api/user/signup 用户注册
 * @apiDescription 用户注册
 * @apiName signup
 * @apiGroup User
 * @apiParam {string} account 用户名
 * @apiParam {string} nikename 昵称
 * @apiParam {string} password 密码
 * @apiSuccess {number} code 具体请看
 * @apiSuccess {json} data
 * @apiSuccess {string} message
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *  "code": 200,
 *  "data": {
 *    "account": "lzz"
 *  },
 *  "message": "注册成功！"
 * }
 * @apiSampleRequest http://localhost:3000/api/user/signup
 * @apiVersion 0.1.0
 */
//  用户注册
router.post('/signup', async (req, res) => {
  let values1 = [req.body.account];
  let sql1 = "select id from user where account=?;";
  let user1 = await query(sql1, values1);
  if (user1.length === 0) {
    let values2 = [
      req.body.account,     //account
      req.body.nikename,    //nikename
      "['admin']",            //roles
      '',                   //introduction
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',//avatar
      require('bcrypt').hashSync(req.body.password, 10),
      new Date().getTime(),
      new Date().getTime()
    ];
    let sql2 = "insert into user set account=?,nikename=?,roles=?,introduction=?,avatar=?,password=?,createAt=?,updateAt=?;";
    let user2 = await query(sql2, values2);
    res.send({
      code: 200,
      data: user2,
      message: 'error'
    })
  } else {
    res.send({
      code: 200,
      data: '用户名已存在',
      message: 'error'
    })
  }

})
/**
 * @api {post} /api/user/changeUserinfo 修改用户信息
 * @apiDescription 修改用户信息
 * @apiName changeUserinfo
 * @apiGroup User
 * @apiHeader authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM

 * @apiParam {string} nikename 昵称
 * @apiParam {string} avatar 头像
 * @apiParam {string} introduction 简介
 * @apiParam {string} roles 权限

 * @apiSuccess {number} code 具体请看
 * @apiSuccess {json} data
 * @apiSuccess {string} message
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *  "code": 200,
 *  "data": {
 *    "account": "lzz"
 *  },
 *  "message": "注册成功！"
 * }
 * @apiSampleRequest http://localhost:3000/api/user/changeUserinfo
 * @apiVersion 0.1.0
 */
//  修改用户信息
router.post('/changeUserinfo', auth, async (req, res) => {
  let values = [req.body.nikename, req.body.introduction, req.body.roles, req.user.id];
  let sql = "update user set nikename=?,introduction=?,roles=?, where id=?;"
  let user = await query(sql, values);
  console.log(user);
  res.send({
      code: 200,
      data: user,
      message: '修改成功'
    }
  )
})
// javaAPI
router.post('/javaAPI', async (req, res) => {
  console.log(req);
  request('http://bim.checc.com.cn/baisha/bimelements/v1/api/ybgclc/getAllTreeList', (error, response, body) => {
    // console.log('error:', error); // 返回错误信息
    // console.log('statusCode:', response && response.statusCode); // 返回请求的状态码
    // console.log('body:', body); // 返回回来的数据
    console.log(JSON.parse(body));
    let data = JSON.parse(body)
    res.send({
      code: 200,
      data: [data.content],
      message: 'success'
    })
  })
})

module.exports = router;
