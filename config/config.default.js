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
  // 在 docker 里 初始化一个 mysql 容器
  // docker run -p 3306:3306 --name lymysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
  config.sequelize = {
    dialect: 'mysql',
    database: 'graphql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
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
