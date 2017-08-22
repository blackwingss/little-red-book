// commonjs 模块化机制
// 路由总入口

const homeData = require('../data/homeData.json')
const findData = require('../data/findData.json')
const buyData = require('../data/buyData.json')
module.exports = function (app) {
  // 根目录级别中间件
  app.get('/', (req, res) => {
    res.redirect('/posts')
  })
  // 应用级别中间件
  // 转到注册页
  app.use('/signup', require('./signup'))
  // 转到登录页
  app.use('/signin', require('./signin'))
  // 转到登出页
  app.use('/signout', require('./signout'))
  // 转到文章页
  app.use('/posts', require('./posts'))
  app.get('/resume', function (req, res, next) {
    res.render('resume')
  });
  app.get('/api/homeData', (req, res, next) => {
    res.send(homeData)
  })
  app.get('/api/findData', (req, res, next) => {
    res.send(findData)
  })
  app.get('/api/buyData', (req, res, next) => {
    res.send(buyData)
  })
  app.get('/redbook', (req, res, next) => {
    res.render('index')
  })
  // 404
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404');
    }
  })
}
