'use strict';

const { app } = require('egg-mock/bootstrap');

describe('bootstrap', () => {
  it('jspang index page', () => {
    return app.httpRequest()
      .get('/my')
      .expect(200)
      .expect('<h1>super man</h1>');
  });
  // 测试异步请求
  it('jspang index page', async () => {
    return app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>小红，正向你走来</h1>');
  });
});
