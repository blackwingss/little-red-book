/*
  登出功能路由模块
 */
const express = require('express')
const router = express.Router() // 注册成为路由中间件
const checkLogin = require('../middlewares/check').checkLogin;

// 登出
router.get('/', checkLogin, (req, res, next) => {
  req.session.user = null;
  req.flash('success', '登出成功');
  res.redirect('/posts')
})

module.exports = router
