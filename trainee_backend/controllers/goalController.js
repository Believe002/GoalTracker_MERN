const asyncHandler = require('express-async-handler');


// Handles -Get Requests, Over Router - /api/goals 
const getGoals = asyncHandler(async (req,res) => { 
    res.status(200).json({message:'Get Goals'})
})


// Handles - Post Requests, Over Router - /api/goals 
const setGoals = asyncHandler(async (req,res) => { 
    console.log(req.body);

    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field');
    }
    res.status(200).json({message:'Set Goals'})
})

// Handles - Put Requests, Over Router - /api/goals 
const updateGoals = asyncHandler(async (req,res) => { 
    res.status(200).json({message:`Update Goals with Id ${req.params.id}`})
})


// Handles - Delete Requests, Over Router - /api/goals 
const deleteGoals = asyncHandler(async (req,res) => { 
    res.status(200).json({message:`Delete Goals with Id ${req.params.id}`})
})


module.exports= {
    getGoals,setGoals,updateGoals,deleteGoals
}