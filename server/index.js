require('dotenv').config({path: `${process.cwd()}/.env`})
const express = require('express')

const authRouter = require('./route/authRoute')

const app = express()
const port = process.env.APP_PORT || 4000

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Success',
    message: 'Api are working'
  })
})

//all routes
app.use('/api/auth',authRouter);

app.use((req, res,next) => {
    res.status(404).json({
      status: 'Failed',
      message: `Route not found: ${req.originalUrl}`
    });
  });

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})