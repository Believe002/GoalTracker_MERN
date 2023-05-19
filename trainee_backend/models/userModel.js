const mongoose = require('mongoose');

const UserSchema = mongoose.Schema
({
    name : {
        type : String,
        required : [true,'Please add a Name']
    },
    
    email : {
        type : String,
        required : [true,'Please add a Email'],
        unique : true
    },
    
    password : {
        type : String,
        required : [true,'Please add a Password']
    }
    
},
    {
        timestamp : true
    }
)

module.exports = mongoose.model('User',UserSchema)