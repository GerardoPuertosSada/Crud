const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUserData } = require('../controllers/usersController')
const { protect } = require('../middleware/authMiddleware')

//rutas publicas
router.post('/', registerUser)

router.post('/login', loginUser)

//rutas privadas
router.get('/getMe', protect, getUserData)












module.exports = router