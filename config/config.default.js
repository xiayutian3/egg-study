/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646059818421_2365';

  // add your middleware config here
  config.middleware = [];

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // ejs模板引擎的配置
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
    // 修改ejs 默认分隔符 这种<%%>的形式展示数据 建议不要随便修改
    // delimiter: '$',
  };


  // 静态资源路径设置
  config.static = {
    // prefix: '/assets/',
  };

  // // session的相关配置
  // config.session = {
  //   key: 'PANG_SESS', // 设置Key的默认值
  //   httpOnly: true, // 设置服务端操作
  //   maxAge: 1000 * 60, // 设置最大有效时间
  //   renew: true, // 页面有访问动作自动刷新session
  // };

  // // 全局挂载我们的中间件 counter
  // config.middleware = [ 'counter' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
