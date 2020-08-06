const mysql = require("mysql")
const config = {
  // 数据库配置
  database: {
    DATABASE: "lzztest",
    USERNAME: "liazz",
    PASSWORD: "JUPyZP2wkgy0L22V",
    PORT: "3306",
    HOST: "0.0.0.0"
  }
};
let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
});
module.exports = pool
