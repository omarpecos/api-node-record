const {Schema, model} = require('mongoose')

const recordSchema = new Schema({
  variant: String,
  type: String,
  data: Object,
  recorded: {type: Date, default: Date.now}
})

module.exports = model('Record', recordSchema)

