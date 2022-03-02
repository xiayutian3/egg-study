'use strict';

// 扩展Context

module.exports = {
  // get方法和post方法 获取参数的方法统一化,都用params( )方法
  params(key) {
    const method = this.request.method;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;

  },
};
