const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
  user:{
      type: 
  },
  texto: {
      type: String,
      required: [true, 'por favor teclea una descripción a la tarea']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tarea', tareaSchema);