'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};