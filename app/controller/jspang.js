'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>super man</h1>';
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>小红，正向你走来</h1>');
      }, 5000);
    });
  }
}

module.exports = JspangController;
