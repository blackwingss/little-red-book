/**
 * 所有配置
 * 
 * @author micelid
 */

'use strict'

let config = {
  // 服务端 host
  host: 'http://localhost:8000',

  // web开发环境的 host
  webHost: 'http://localhost:8080',

  // 跨域白名单
  whiteOrigins: [
    'http://localhost:8080',
    'http://localhost:8000'
  ]
}

module.exports = config
