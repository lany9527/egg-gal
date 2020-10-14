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
  // 在 docker 里 初始化一个 mysql 容器, 然后连接
  // docker run -p 3306:3306 --name lymysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
  config.sequelize = {
    dialect: 'mysql',
    database: 'graphql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root123456',
    // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
    timezone: '+08:00',
  };

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    csrf: {
      ignore: () => true,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602569754626_740';

  // add your middleware config here
  config.middleware = [ 'graphql' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
