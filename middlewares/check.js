module.exports = {
  // 登录检查
  checkLogin: function (req, res, next) {
    if ( !req.session.user) {
      req.flash('error', '未登录');
      return res.redirect('./signin');
    }
    next();
  },
  // 未登录检查
  checkNotLogin: function (req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录');
      return res.redirect('back')
    }
    next();
  }
}
