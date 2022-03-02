'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
  async index() {
    const { ctx, app } = this;
    // ctx.body = '<h1>super man</h1>';

    // 全局中间件计数器
    console.log(ctx.session.counter);

    // session的获取
    const username = ctx.session.username;


    // 使用ejs模板渲染引擎(因为是异步)
    await ctx.render('jspang.html',
      {
        id: 2022,
        name: '小红',
        age: 18,
        skills: [
          '泰式按摩',
          '精油搓背',
          '水疗SPA',
        ],
        username,
        nowTime: app.currentTime(), // 使用我们自定义的application 扩展的方法
        timeProp: app.timeProp, // 使用我们自定义的application 扩展的属性
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
  async addpost() {
    const ctx = this.ctx;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

  // cookies的操作 增加Cookie 删除Cookie 修改Cookie 查看Cookie
  async add() {
    const ctx = this.ctx;
    // console.log('ctx: ', ctx.header);
    // ctx.cookies.set('user', 'jspang.com', {
    //   maxAge: 1000 * 60, // 过期时间
    //   httpOnly: false,  //客户端只读
    // });

    // 在Cookie里设置中文
    ctx.cookies.set('user', '技术胖', {
      encrypt: true, // 加密
    });

    // 添加一个Session
    // ctx.session.username = 'jspang';

    // Session是直接支持中文的
    ctx.session.username = '技术胖最帅';

    ctx.body = {
      status: 200,
      data: 'cookies添加成功',
    };
  }
  async del() {
    const ctx = this.ctx;
    // console.log('ctx: ', ctx.header);
    // 删除cookie
    ctx.cookies.set('user', null);

    // 删除Session
    ctx.session.username = null;
    ctx.body = {
      status: 200,
      data: 'cookies删除成功',
    };
  }
  async editor() {
    const ctx = this.ctx;
    // console.log('ctx: ', ctx.header);
    ctx.cookies.set('user', 'bilibili');
    ctx.body = {
      status: 200,
      data: 'Cookie修改成功',
    };
  }
  async show() {
    const ctx = this.ctx;
    // console.log('ctx: ', ctx.header);
    const user = ctx.cookies.get('user', {
      encrypt: true, // 解密cookies
    });
    console.log(user);
    ctx.body = {
      status: 200,
      data: 'Cookie显示成功',
    };
  }


  // 测试扩展上下文
  async newContext() {
    const { ctx } = this;
    const params = ctx.params();
    console.log('params: ', params);
    ctx.body = 'newContext';
  }

  // 测试request的扩展
  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = {
      status: 200,
      body: token,
    };
  }


  // 测试response的扩展
  async newResponse() {
    const ctx = this.ctx;
    ctx.response.token = 'jspang.com';

    // 测试helper的扩展
    const testBase64 = ctx.helper.base64Encode('jspang.com');

    ctx.body = testBase64;
  }

}

module.exports = JspangController;
