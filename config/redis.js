const redis = require('redis')

// c创建客户端

const redisClient = redis.createClient(6379, '127.0.0.1')
redisClient.on('error', err => {
  console.log(err)
})

module.exports = redisClient
