const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');



// Handles - Post Request using Route - /api/users/register
// Creates New User
const registerUser = asyncHandler( async (req,res) => {
    const {name,email,password} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all Fields => Name, Email & Password');
    }

    // Check if user already Exist

    const userExist = await User.findOne({email});

    if(userExist) {
        res.status(400)
        throw new Error(`User ${name} already exists`);

    }

    // Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    // Creating User
    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })

    console.log(user);
    //Check User Created Successfully
    if(user) {
        const message = {
            status : 'Success',
            _id : user.id,
            name : user.name,
            email : user.email,
            token : generateToken(user.id)
        }
        res.status(201).json(message);
    }
    else {
        res.status(400)
        throw new Error('Failed to Create User');
    }
 }
)

// Handles - Post Request using Route - /api/users/login
// Login User
const loginUser = asyncHandler( async  (req,res) => {
    const {email,password} = req.body;
    console.log(password);

    const user = await User.findOne({email});
    //Check User Created Successfully
    if(user && (await bcrypt.compare(password,user.password))) {
     
        const message = {
            status : 'Login Successfull',
            _id : user.id,
            name : user.name,
            email : user.email,
            token : generateToken(user.id)
        }

        res.status(201).json(message);
    }
    else {
        res.status(400)
        throw new Error('Invalid Credentials');
    }
})

// Handles - Get Request using Route - /api/users/me
// Creates New User
// Private Function for Authentication and Handled By Middleware
const getMe = asyncHandler( async  (req,res) => {
    const {id,name,email} = await User.findById(req.user.id);
    const message = {
        id,
        name,
        email
    }
    res.json({message})
})


//Function  to Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id } , process.env.JWT_SECRET, {expiresIn : '30d'} )
}

module.exports = {
    registerUser,loginUser,getMe
}