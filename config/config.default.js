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


  // 配置mysql数据库
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'egg_article',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
