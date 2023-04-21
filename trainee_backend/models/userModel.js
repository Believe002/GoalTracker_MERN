const mongoose = require('mongoose');

const UserSchema = mongoose.Schema
({
    name : {
        type : String,
        requied : [true,'Please add a Name']
    },
    
    email : {
        type : String,
        requied : [true,'Please add a Email'],
        unique : true
    },
    
    password : {
        type : String,
        requied : [true,'Please add a Password']
    }
    
},
    {
        timestamp : true
    }
)

module.exports = mongoose.model('User',UserSchema)