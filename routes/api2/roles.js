const query = require("@/config/controller");
const auth = require("@/middleware/auth2")
const adminAuth = require("@/middleware/adminAuth")
let express = require('express');
let router = express.Router();

/**
 * @api {get} /api2/roles/getAllRoles 获取角色列表
 * @apiDescription 获取角色列表
 * @apiName getAllRoles
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
 * @apiSampleRequest /api2/roles/getAllRoles
 * @apiVersion 2.0.0
 */
// 更新用户权限
router.get('/getAllRoles', [auth, adminAuth], async (req, res) => {
  let sql = "select * from role;";
  let roles = await query(sql);
  res.send({
      code: 200,
      content: roles,
      message: 'success'
    }
  )
})


/**
 * @api {get} /api2/roles/updateRole 获取角色列表
 * @apiDescription 获取角色列表
 * @apiName updateRole
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
 * @apiSampleRequest /api2/roles/updateRole
 * @apiVersion 2.0.0
 */
// 更新用户权限
router.post('/updateRole', auth, async (req, res) => {
  let sql = "update role set name=?,code=?,description=?,routes=? where id=?;";
  let values = [req.body.name, req.body.code, req.body.description, req.body.routes, req.body.id];
  let roles = await query(sql, values);
  res.send({
      code: 200,
      content: roles,
      message: 'success'
    }
  )
})
module.exports = router;
