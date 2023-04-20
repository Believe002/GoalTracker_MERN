const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');


// Handles -Get Requests, Over Router - /api/goals 
const getGoals = asyncHandler(async (req,res) => {
    
    const goals = await Goal.find()
    res.status(200).json({goals})
})


// Handles - Post Requests, Over Router - /api/goals 
const setGoals = asyncHandler(async (req,res) => { 
    console.log(req.body);

    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field inside SetGoal');
    }

    const goal = await Goal.create({
        text : req.body.text
    })

    res.status(200).json({goal})
})

// Handles - Put Requests, Over Router - /api/goals 
const updateGoals = asyncHandler(async (req,res) => { 
    
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400)
        throw new Error('Goal Not Found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new : true
    })

    res.status(200).json(updatedGoal)
})


// Handles - Delete Requests, Over Router - /api/goals 
const deleteGoals = asyncHandler(async (req,res) => { 
    
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400)
        throw new Error('Goal Not Found');
    }
    
    await goal.deleteOne()

    res.status(200).json({message:`Deleted Goals with Id ${req.params.id}`})
})


module.exports= {
    getGoals,setGoals,updateGoals,deleteGoals
}