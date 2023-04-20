const mongoose = require('mongoose');

const goalScheme = mongoose.Schema({
        text: {
            type: String,
            required : [true,'Please add text value']
        }        
 },
 {
    timestamps : true,
 }
)

module.exports = mongoose.model('Goal',goalScheme)
