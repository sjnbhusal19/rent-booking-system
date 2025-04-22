'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');

const bcrypt = require('bcrypt');
const sequelize = require('../../config/database');
const AppError = require('../../utils/appError');



module.exports = sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  
  password: {
    type: Sequelize.STRING
  },
  confirmPassword: {
    type: Sequelize.VIRTUAL,
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
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.ENUM('male', 'female', 'other')
  },
  dateOfBirth: {
    type: Sequelize.DATE
  },
  userType: {
    type: Sequelize.ENUM('tenant', 'owner', 'admin')
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  deletedAt: {
    type: Sequelize.DATE
  },
},
{
  paranoid:true,
  freezeTableName : true,
  modelName:'User'
}
)


