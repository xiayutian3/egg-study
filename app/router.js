'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.home.hello);
  router.get('/my', controller.jspang.index);
  router.get('/getGirls', controller.jspang.getGirls);
};
