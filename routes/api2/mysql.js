const auth = require("@/middleware/auth")
let express = require('express');
let router = express.Router();
const query = require("@/config/controller");

router.post('/userList', auth, async (req, res) => {
  console.log(req.body);
  let values = [req.body.id];
  let sql = "select * from user where id=?;";
  let val = await query(sql, values);
  console.log(val);
  res.send({
    code: 200,
    data: val,
    message: 'success'
  })
})

module.exports = router;
