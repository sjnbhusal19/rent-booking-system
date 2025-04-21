require('dotenv').config({ path: `${process.cwd()}/.env` })
const express = require('express')

const authRouter = require('./route/authRoute')
const catchAsync = require('./utils/catchAsync')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controller/errorController')

const app = express()
const port = process.env.APP_PORT || 4000

app.use(express.json())

//all routes
app.use('/api/auth', authRouter);

// app.use(
//   '*',
//   catchAsync(async(req,res,next)=>{
//     throw new Error('This is error');
//   })
// )

// app.use((err,req,res,next) => {
//   res.status(404).json({
//     status: 'error',
//     message: err.message
//   })
// })



app.use(catchAsync(async (req, res, next) => {
  throw new AppError(`Can't find ${req.originalUrl} on this server`,404)
})
);

app.use(globalErrorHandler)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})