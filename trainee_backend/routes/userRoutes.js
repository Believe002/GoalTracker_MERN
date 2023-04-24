const express = require('express');
const router = express.Router();
const { registerUser,loginUser,getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Define Endpoints for Get Request for User Register
router.post('/',registerUser);


// Define Endpoints for Post Request for User Login with Email & Password
router.post('/login',loginUser);


// Define Endpoints for Get Request used internally for authentication 
router.get('/me',protect,getMe);

module.exports = router;


