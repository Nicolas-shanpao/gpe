const query = require("@/config/controller");
const auth = require("@/middleware/auth2")
let express = require('express');
let router = express.Router();

/**
 * @api {get} /api2/user/getAllUser 获取所有用户
 * @apiDescription 获取所有用户
 * @apiName getAllUser
 * @apiGroup 用户
 * @apiHeader authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM
 * @apiSuccess {number} code 具体请看
 * @apiSuccess {json} content
 * @apiSuccess {string} message
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *  "code": 200,
 *  "content": [],
 *  "message": "success"
 * }
 * @apiSampleRequest /api2/user/getAllUser
 * @apiVersion 2.0.0
 */
// 获取所有用户
router.get('/getAllUser', auth, async (req, res) => {
  let sql = "select id,username,roles,avatar,nikename,introduction from user;";
  let user = await query(sql);
  res.send({
      code: 200,
      content: user,
      message: 'success'
    }
  )
})
/**
 * @api {get} /api2/user/updateUserRoles 更新用户权限
 * @apiDescription 更新用户权限
 * @apiName updateUserRoles
 * @apiGroup 用户
 * @apiHeader authorization eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjdjOTZhNTExNzdmNDIxY2ExNjI5NCIsImlhdCI6MTU5NjQ0Njc5MH0.ztinMsRDhVVKLh5GNbgngD7YsHOgj1OgCFYxz4V3MzM
 * @apiSuccess {number} code 具体请看
 * @apiSuccess {json} content
 * @apiSuccess {string} message
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *  "code": 200,
 *  "content": {
 *      "roles": [
 *          "admin"
 *      ],
 *      "isDeleted": 0,
 *      "_id": "5f22910ccf2a793e64e74202",
 *      "username": "g15",
 *      "introduction": "这个人很懒，啥也没留......",
 *      "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
 *      "nikename": "g15",
 *      "project": "g15",
 *      "__v": 0
 *  },
 *  "message": "success"
 * }
 * @apiSampleRequest /api2/user/updateUserRoles
 * @apiVersion 2.0.0
 */
// 更新用户权限
router.post('/updateUserRoles', auth, async (req, res) => {
  if (req.user.roles === 'admin') {
    let valus = [req.body.roles, req.body.id]
    let sql = "update user set roles=? where id=?;";
    let user = await query(sql, valus);
    res.send({
        code: 200,
        content: user,
        message: 'success'
      }
    )
  } else {
    res.send({
        code: 201,
        content: '您的权限不够',
        message: 'success'
      }
    )
  }
})
module.exports = router;
