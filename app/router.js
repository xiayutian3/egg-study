'use strict';

/**
 * @param {Egg.Application} app - egg application
 *
 */
module.exports = app => {
  // 使用局部中间件
  const counter = app.middleware.counter();


  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.home.hello);
  // 使用局部中间件
  router.get('/my', counter, controller.jspang.index);
  // 模拟异步请求
  router.get('/getGirls', controller.jspang.getGirls);
  // 自由传参模式
  router.get('/getGirl', controller.jspang.getGirl);
  // 严格传参
  router.get('/getGirl2/:id/:name', controller.jspang.getGirl2);
  // post
  router.post('/addpost', controller.jspang.addpost);
  // 测试共用service
  router.get('/testGetGirl', controller.home.testGetGirl);
  // cookies的操作 增加Cookie 删除Cookie 修改Cookie 查看Cookie
  router.post('/add', controller.jspang.add);
  router.post('/del', controller.jspang.del);
  router.post('/editor', controller.jspang.editor);
  router.post('/show', controller.jspang.show);

  // 测试扩展上下文 get、post获取参数统一
  router.get('/newContext', controller.jspang.newContext);
  router.post('/newContext', controller.jspang.newContext);
};
