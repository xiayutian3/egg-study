'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async hello() {
    const { ctx } = this;
    ctx.body = 'hello';
  }

  // 测试我们写的service能否共用
  async testGetGirl() {
    const { ctx } = this;
    const id = ctx.query.id;
    const res = await ctx.service.jspang.getGirl(id);
    ctx.body = res;
  }

}

module.exports = HomeController;
