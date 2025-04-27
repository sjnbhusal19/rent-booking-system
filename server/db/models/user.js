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
    type: Sequelize.STRING,
    allowNull:false,
    validate: {
      notNull: {
        msg:'First name cannot be null.',
      },
      notEmpty:{
        msg:'First name cannot be empty.'
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull:false,
    validate: {
      notNull: {
        msg:'Last name cannot be null.',
      },
      notEmpty:{
        msg:'Last name cannot be empty.'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    allowNull:false,
    validate: {
      notNull: {
        msg:'Email cannot be null.',
      },
      notEmpty:{
        msg:'Email cannot be empty.'
      },
      isEmail: {
        msg:'Invalid email id.'
      }
    }
  },
  
  password: {
    type: Sequelize.STRING,
    allowNull:false,
    validate: {
      notNull: {
        msg:'Password cannot be null.',
      },
      notEmpty:{
        msg:'Password cannot be empty.'
      }
    }
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
    type: Sequelize.STRING,
    allowNull:false,
    validate: {
      notNull: {
        msg:'Address cannot be null.',
      },
      notEmpty:{
        msg:'Address cannot be empty.'
      }
    }
  },
  gender: {
    type: Sequelize.ENUM('male', 'female', 'other'),
    allowNull:false,
    validate: {
      notNull: {
        msg:'Gender cannot be null.',
      },
      notEmpty:{
        msg:'Gender cannot be empty.'
      }
    }
  },
  dateOfBirth: {
    type: Sequelize.DATE,
    allowNull:false,
    validate: {
      notNull: {
        msg:'Date of birth cannot be null.',
      },
      notEmpty:{
        msg:'Date of birth cannot be empty.'
      }
    }
  },
  userType: {
    type: Sequelize.ENUM('tenant', 'owner', 'admin'),
    allowNull:false,
    validate: {
      notNull: {
        msg:'User Type cannot be null',
      },
      notEmpty:{
        msg:'User Type cannot be empty'
      }
    }
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


