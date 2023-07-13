const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
connectDB()

const port = process.env.PORT || 8000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))


app.use(errorHandler)


app.listen(port, () => console.log(`server started on port ${port}`))
