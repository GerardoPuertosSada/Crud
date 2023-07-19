const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {

  let token 

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      //conseguir el token del encabezado
      token = req.headers.authorization.split(' ')[1]

      //decodificar el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('No autorizado, token fallido')
    }
  }
  if(!token){
    res.status(401)
    throw new Error('No se proporciono ningun token')
  }
})

module.exports = { protect }
