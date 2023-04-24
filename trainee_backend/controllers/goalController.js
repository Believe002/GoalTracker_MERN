const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');


// Handles -Get Requests, Over Router - /api/goals 
const getGoals = asyncHandler(async (req,res) => {
    
    const goals = await Goal.find({user:req.user.id})
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
        text : req.body.text,
        user : req.user.id
    })
    console.log("Goal Created",goal)
    res.status(200).json({goal})
})

// Handles - Put Requests, Over Router - /api/goals 
const updateGoals = asyncHandler(async (req,res) => { 
    
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400)
        throw new Error('Goal Not Found');
    }
    
<<<<<<< HEAD
    // Check for User ID exist
=======
    // Check for user existing or not
>>>>>>> 95a2d65cd16b27305b6e9ec4a7e7f40457ceac3c
    if(!req.user) {
        res.status(401);
        throw new Error("User not found");
    }

    if(goal.user.toString() != req.user.id) {
        res.status.status(401);
        throw new Error('User not Authorized');
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
    
<<<<<<< HEAD
    // Check for User found with id
=======
    // Check for user existing or not
>>>>>>> 95a2d65cd16b27305b6e9ec4a7e7f40457ceac3c
    if(!req.user) {
        res.status(401);
        throw new Error("User not found");
    }

<<<<<<< HEAD
=======
    //Check for User Deleting his own goals
>>>>>>> 95a2d65cd16b27305b6e9ec4a7e7f40457ceac3c
    if(goal.user.toString() != req.user.id) {
        res.status.status(401);
        throw new Error('User not Authorized');
    }

    
    await goal.deleteOne()

    res.status(200).json({message:`Deleted Goal with Id ${req.params.id}`})
})


module.exports= {
    getGoals,setGoals,updateGoals,deleteGoals
}