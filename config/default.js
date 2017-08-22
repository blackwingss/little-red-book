// 默认配置模块
module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    message: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
}
