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
