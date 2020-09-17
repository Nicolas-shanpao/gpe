const query = require("../config/controller");
const jwt = require('jsonwebtoken')
const SECRET = require("../config/development")
var auth = async (req, res, next) => {
  const token = String(req.headers.authorization).split(' ').pop();
  // 验证
  if (token) {
    jwt.verify(token, SECRET, async (err, decoded) => {
      if (err) {
        return res.send({
          code: 401,
          success: false,
          message: 'token认证失败！'
        });
      } else {
        // 如果验证通过，在req中写入解密结果
        const {id} = decoded
        let values = [id];
        let sql = "select id,username,roles,avatar,nikename,introduction from user where id=?;";
        let user = await query(sql, values);
        req.user = user[0]
        next(); //继续下一步路由
      }
    })
  } else {
    // 没有拿到token 返回错误
    return res.send({
      code: 403,
      success: false,
      message: '没有找到token.'
    });
  }
}
module.exports = auth
