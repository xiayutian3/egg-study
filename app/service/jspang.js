'use strict';

// 业务逻辑的抽象，与数据库连接交互,通常也都是异步操作
const Service = require('egg').Service;
class JspangService extends Service {
  async getGirl(id) {
    return {
      id,
      name: '小红',
      age: 18,
    };
  }
}

module.exports = JspangService;
