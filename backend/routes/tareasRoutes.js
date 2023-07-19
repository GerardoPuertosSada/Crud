const express = require('express')
const router = express.Router()
const  {getTareas, createTareas, updateTareas, deleteTareas} = require('../controllers/tareasControllers')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTareas).post(protect, createTareas)
router.route('/:id').put(protect, updateTareas).delete(protect, deleteTareas)

// se puede poner lo mismo pero en diferentes lineas es lo mismo, en la forma de arriba es mas sintetizado
// router.get('/', getTareas)

// router.post('/', createTareas)

// router.put('/:id', updateTareas)

// router.delete('/:id', deleteTareas)

module.exports = router