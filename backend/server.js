const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
connectDB()
const cors = require('cors')

const port = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))


app.use(errorHandler)


app.listen(port, () => console.log(`server started on port ${port}`))
