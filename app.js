// 引入系统核心模块
const path = require('path')
const express = require('express') // express 是一个基于中间件处理方式的web开发框架，
const session = require('express-session') // 提供验证用户身份，网站警示信息模块
const MongoStore = require('connect-mongo')(session) // 负责连接mongodb的中间件,保存session到数据库，数据更持久
const flash = require('connect-flash') // 显示网站警示信息模块
const config = require('config-lite') // 引入配置模块，config/default.js
const formidable = require('express-formidable') // 引入表单处理模块

// 引入自定义模块
const routes = require('./routes') // 引入路由模块(默认引入index.js)
const pkg = require('./package.json')
const apiConfig = require('./apiConfig/config')

// 初始化全局web app实例
const app = express()

// 设置视图文件夹
app.set('views', path.join(__dirname, 'views'))
// 设置模板引擎
app.set('view engine', 'ejs')

// 使用中间件
// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
// 为用户请求到响应，提供服务的
// session中间件 session 验证用户身份 警示信息
app.use(session({
  name: config.session.key,
  secret: config.session.secret, // 密令
  resave: true,
  saveUninitiallized: false, //用户未登录，强制分配一个session,下单结账时才提醒登陆,分配一个唯一的id，时间戳：1970年以后的毫秒数
  cookies: {
    maxAge: config.session.maxAge // 过期时间
  },
  store: new MongoStore({
    url: config.mongodb
  })
}))
// flash中间件
app.use(flash())
// 解析表单
app.use(formidable({
  uploadDir: path.join(__dirname, 'public/img'), // 文件上传
  keepExtensions: true
}))

// 模板全局变量配置，引入package.json中的关键字
app.locals.blog = {
  title: pkg.name,
  description: pkg.description
}
// 串联使用中间件
// req: 请求对象,res: 结果输出(模板使用),next:传给下一个中间件
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.success = req.flash('success').toString();
  res.locals.error = req.flash('error').toString();
  next()
})
// 跨域支持
app.all('/api/*', (req, res, next) => {
  // 获取请求的完整域名
  const origin = req.headers.origin
  // 如果存在可允许白名单里，则发送允许通信响应头
  if (apiConfig.whiteOrigins.indexOf(origin) !== -1) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE')
  }
  next()
})

// 跳转路由
routes(app)

// error page
app.use(function (err, req, res, next) {
  res.render('error', {
    error: err
  });
});

// 监听
app.listen(8000, () => {
  console.log('The Server is listening at port: 8000');
})
