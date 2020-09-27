// const Users = require('@/models/Users')
// const Models = require('@/models/models')

const auth = require("@/middleware/auth2")
// const query = require("@/../config/controller");
const query = require("@/config/controller");
let express = require('express');
let router = express.Router();
let multer = require('multer')
let ExifImage = require('exif').ExifImage;
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 接收到文件后输出的保存路径（若不存在则需要创建）
    cb(null, './public/uploads/avatar');
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
    cb(null, Date.now() + "-" + file.originalname);
  }
});
let upload = multer({
  storage: storage
})
function getType(file){
  let filename=file;
  let fileArr = filename.split('.')
  return fileArr[fileArr.length-1];
}
//如果一直出现500报错信息 Node Multer unexpected field 则需要如此操作
let avatar = upload.single('avatar')
router.post('/uploadAvatar', [auth, avatar], async (req, res, next) => {
  let pathArray = req.file.path.split('\\')
  pathArray.shift()
  let avatarPath = pathArray.join('/')
  avatarPath = 'http://10.25.106.117:3000/' + avatarPath
  let moreData
  try {
    new ExifImage({image: req.file.path}, async function (error, exifData) {
      if (error) {
        console.log('Error: ' + error.message);
      } else {
        moreData = exifData
        let file = req.file
        let values = [
          file.filename,          //filename
          file.mimetype,          //filetype
          getType(file.filename),                //fileext
          file.size,              //filesize
          (file.size / 1024 / 1024).toFixed(2) + 'M',
          //filesizecn
          avatarPath,             //filepath
          req.user.id,            //optid
          req.user.username,      //optname
          new Date().getTime(),   //createdAt
          new Date().getTime()    //updateAt
        ];
        let sql = "insert into file_list set filename=?,filetype=?,fileext=?,filesize=?,filesizecn=?,filepath=?,optid=?,optname=?,createdAt=?,updateAt=?;";
        let fileMessage = await query(sql, values);
        res.send({
            code: 200,
            data: {
              fileMessage,
              moreData,
              avatarPath: avatarPath
            },
            message: '修改成功!'
          }
        )
      }
    });
  } catch (error) {
    console.log('Error: ' + error.message);
  }
})
// 上传模型
var model = upload.single('model')
router.post('/uploadModel', [auth, model], async (req, res, next) => {
  let pathArray = req.file.path.split('\\')
  pathArray.shift()
  let modelPath = pathArray.join('/')
  res.send({
      code: 200,
      data: modelPath,
      message: '修改成功!'
    }
  )
})
module.exports = router;
