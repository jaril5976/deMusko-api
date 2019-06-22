'use strict';
module.exports = (sequelize, DataTypes) => {
  const access_token = sequelize.define('access_token', {
    user_id: DataTypes.INTEGER,
    access_token: DataTypes.STRING
  }, {});
  access_token.associate = function(models) {
    // associations can be defined here
  };
  return access_token;
};