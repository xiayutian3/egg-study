'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = '<h1>super man</h1>';

    // 使用ejs模板渲染引擎
    ctx.render('jspang.html', {

    });
  }

  // 模拟异步请求
  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>小红，正向你走来</h1>');
      }, 5000);
    });
  }

  // 自由传参模式
  async getGirl() {
    const ctx = this.ctx;
    // ctx.body = ctx.query;

    // 使用我们封装的service服务
    const res = await ctx.service.jspang.getGirl('123');
    ctx.body = res;
  }

  // 严格传参模式
  async getGirl2() {
    const ctx = this.ctx;
    ctx.body = 'id:' + ctx.params.id + 'name:' + ctx.params.name;
  }

  // POST
  async add() {
    const ctx = this.ctx;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

}

module.exports = JspangController;
