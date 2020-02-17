'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    sex: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};