/*
数据库配置
数据库独立于web服务
 */
const config = require('config-lite')
const Mongolass = require('mongolass') // mongolass驱动：和数据库打交道的模块
const mongolass = new Mongolass() // 实例化驱动
mongolass.connect(config.mongodb) // 连接数据库
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')

// 根据 id 生成创建时间 created_at
mongolass.plugin('addCreatedAt', {
  afterFind: function (results) {
    results.forEach(function (item) {
      item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
    });
    return results;
  },
  afterFindOne: function (result) {
    if (result) {
      result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
    }
    return result;
  }
});
// 数据库设计
// model:数据模型
// 设计索引(使得查询更合理)

// 设计用户表
exports.User = mongolass.model('User',{
  name: {
    type: 'string' // 字段类型
  },
  password: {
    type: 'string'
  },
  avatar: {
    type: 'string'
  },
  gender: {
    type: 'string',
    enum: ['m','f','x'] // 枚举，限制值的范围
  },
  bio: {
    type: 'string'
  }
})
exports.User.index({ name: 1 },{ unique: true }).exec() // 插入一条索引

// 文章表
exports.Post = mongolass.model('Post',{
  author: {
    type: Mongolass.Types.ObjectId
  },
  title: {
    type: 'string'
  },
  content: {
    type: 'string'
  },
  pv: {
    type: 'number'
  }
})
// 按创建时间降序查看用户的文章列表
exports.Post.index({
  author: 1,
  _id: -1
}).exec();
// 文章评论
exports.Comment = mongolass.model('Comment', {
  author: { type: Mongolass.Types.ObjectId },
  content: { type: 'string' },
  postId: { type: Mongolass.Types.ObjectId }
});
exports.Comment.index({ postId: 1, _id: 1 }).exec();// 通过文章 id 获取该文章下所有留言，按留言创建时间升序
exports.Comment.index({ author: 1, _id: 1 }).exec();// 通过用户 id 和留言 id 删除一个留言
