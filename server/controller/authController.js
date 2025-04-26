require('dotenv').config();
const user = require("../db/models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const generateToken = (payload) => {
    return jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
  };
  
const signUp =catchAsync (async (req, res, next) => {
   const body = req.body

   if(!['owner','tenant'].includes(body.userType)) {
    throw new AppError("Invalid User Type.",400)
   }

  const newUser = await user.create({
    userType: body.userType,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
    address: body.address,
    gender: body.gender,
    dateOfBirth: body.dateOfBirth,
    confirmPassword:body.confirmPassword,
  })

  if(!newUser){
    return next(new AppError("Failed to create the user",400))
  }

  const result = newUser.toJSON()

  delete result.password;
  delete result.deletedAt;

  result.token = generateToken({
    id: result.id
  });


  return res.status(201).json({
    status:"success",
    data: result
  })
})



const login = catchAsync (async (req, res, next) => {
    const {email,password} = req.body;

    if (!email || !password) {
        return next(new AppError("Please provide email and password",400))
    }

        const result = await user.findOne({where: {email}})
        if(!result || !(await bcrypt.compare(password, result.password))){
            return next(new AppError("Incorrect email or password.",401))
        }
    

    const token= generateToken({
        id:result.id,
    });

    return res.json({
        status:"success",
        token
    })
})

const checkEmailExists = catchAsync(async (req, res, next) => {
 // console.log(req.body)
  const { email } = req.body; // 👈 get email from URL query
   //console.log(email)
  if (!email) {
    return next(new AppError("Email is required", 400));
  }

  const existingUser = await user.findOne({ where: { email } });

  if (existingUser) {
    return res.status(200).json({ exists: true });
  } else {
    return res.status(200).json({ exists: false });
  }
});


const authentication = catchAsync

module.exports = {signUp, login,checkEmailExists}