const User = require('../lib/mongo').User

module.exports = {
  // CRUD(增删改查)之增(create)
  // mongolass API
  create: function (user) {
    // 把表单提交的数据，组装成一个user的json对象
    return User.create(user).exec()
  },
  // CRUD(增删改查)之查(get)
  // 根据名字返回信息
  getUserByName: function (name) {
    return User
      .findOne({ name: name})
      .addCreatedAt()
      .exec()
  }
}
