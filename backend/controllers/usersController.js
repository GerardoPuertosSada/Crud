const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const registerUser = asyncHandler( async (req, res) =>{
    const {name, email, password} = req.body

    if (!name || !email || !password ) {
        res.status(400)
        throw new Error('Faltan datos')
    }

    //verificar que el usuario no exista

    const userExists = await User.findOne({email})
    if (userExists) {
      req.status(400)
      throw new Error('El usuario ya existe')
    }

    //encriptar hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //crear el user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
    })
  }    
     else {
        res.status(400)
        throw new Error('Datos invalidos')

    }
})

const loginUser = asyncHandler( async (req, res) =>{
  //desturamos los datos del req.body 
  const {email, password} =req.body
  if(!email || !password) {
    res.status(400)
    throw new Error('Faltan datos')
  }
  //verificar que el usuario exista con el email
  const user = await User.findOne({email})


  // verificar el password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(401)
    throw new Error('Email o contraseña invalidos')
  }
})


const getUserData = asyncHandler( async (req, res) =>{
    res.json({message: 'get user data'})
})

module.exports = {registerUser, loginUser, getUserData}

