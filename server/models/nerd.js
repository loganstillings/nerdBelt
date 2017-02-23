var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var NerdSchema = new Schema({
    name: String,
    power: String,
    like: {type: Number, default: 0},
    status: {type: String, default: 'Active'}
})

mongoose.model('Nerd', NerdSchema)