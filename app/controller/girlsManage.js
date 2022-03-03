'use strict';

const Controller = require('egg').Controller;

class GirlsManageController extends Controller {
  async addGirl() {
    const { ctx } = this;
    const params = {
      name: '小白',
      age: 18,
      skill: '头疗',
    };
    const res = await ctx.service.testdb.addGirl(params);
    console.log('res: ', res);
    ctx.body = '添加女孩-成功';
  }

  async delGirl() {
    const { ctx } = this;
    const id = { id: 3 };
    const res = await ctx.service.testdb.delGirl(id);
    if (res) {
      ctx.body = '删除女孩-成功';
    } else {
      ctx.body = '删除失败';
    }
  }

  async updateGirl() {
    const { ctx } = this;
    const params = {
      id: 3,
      name: '小白',
      age: 20,
      skill: '头疗',
    };
    const res = await ctx.service.testdb.updateGirl(params);
    if (res) {
      ctx.body = '修改女孩-成功';
    } else {
      ctx.body = '修改失败';
    }
  }

  async getGirls() {
    const { ctx } = this;
    const res = await ctx.service.testdb.getGirls();
    console.log('res: ', res);

    ctx.body = '查询女孩' + JSON.stringify(res);
  }
}

module.exports = GirlsManageController;
