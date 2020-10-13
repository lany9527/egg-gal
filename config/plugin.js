'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  graphql: {
    enable: true,
    package: 'egg-graphql',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validate: {
    package: 'egg-validate',
  },
};
