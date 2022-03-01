'use strict';

/**
 * @param {Egg.Application} app - egg application
 *
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.home.hello);
  router.get('/my', controller.jspang.index);
  // 模拟异步请求
  router.get('/getGirls', controller.jspang.getGirls);
  // 自由传参模式
  router.get('/getGirl', controller.jspang.getGirl);
  // 严格传参
  router.get('/getGirl2/:id/:name', controller.jspang.getGirl2);
  // post
  router.post('/add', controller.jspang.add);
  // 测试共用service
  router.get('/testGetGirl', controller.home.testGetGirl);
};
