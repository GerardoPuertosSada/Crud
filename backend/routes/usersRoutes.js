const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUserData } = require('../controllers/usersController')

//rutas publicas
router.post('/', registerUser)

router.post('/login', loginUser)

//rutas privadas
router.get('/getMe', getUserData)












module.exports = router