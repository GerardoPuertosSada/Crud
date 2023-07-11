const express = require('express')
const router = express.Router()
const  {getTareas, createTareas, updateTareas, deleteTareas} = require('../controllers/tareasControllers')


router.route('/').get(getTareas).post(createTareas)
router.route('/:id').put(updateTareas).delete(deleteTareas)

// se puede poner lo mismo pero en diferentes lineas es lo mismo, en la forma de arriba es mas sintetizado
// router.get('/', getTareas)

// router.post('/', createTareas)

// router.put('/:id', updateTareas)

// router.delete('/:id', deleteTareas)

module.exports = router