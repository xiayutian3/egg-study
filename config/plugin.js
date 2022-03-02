'use strict';

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

// 开启ejs
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

// 开启mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
