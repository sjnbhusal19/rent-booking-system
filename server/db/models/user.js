'use strict';
const {
  Model,
  Sequelize,
  DataTypes
} = require('sequelize');

const bcrypt = require('bcrypt');
const sequelize = require('../../config/database');
const AppError = require('../../utils/appError');



module.exports = sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  confirmPassword: {
    type: DataTypes.VIRTUAL,
    set(value) {
      if(value==this.password){
        const hashPassword = bcrypt.hashSync(value, 10)
        this.setDataValue('password',hashPassword)
      } else{
        throw new AppError ("Password and confirm password must be the same",400)
      }
    }
  },
  address: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other')
  },
  dateOfBirth: {
    type: DataTypes.DATE
  },
  userType: {
    type: DataTypes.ENUM('tenant', 'owner', 'admin')
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  deletedAt: {
    type: DataTypes.DATE
  },
},
{
  paranoid:true,
  freezeTableName : true,
  modelName:'User'
}
)


