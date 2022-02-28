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
}

module.exports = HomeController;
