const user = require("../db/models/user")


const signUp = async (req, res, next) => {
   const body = req.body

   if(!['owner','tenant'].includes(body.userType)) {
    return res.status(400).json({
        status: "failed",
        message: "Invalid User Type."
    })
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
    return res.status(400).json({
        status: "failed",
        message: "Failed to create the user",
    })
  }

  return res.status(201).json({
    status:"success",
    data: newUser
  })
}

module.exports = {signUp}