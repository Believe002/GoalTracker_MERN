const express = require('express');
const router = express.Router();
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware');

// Define Endpoints for Get & Post Requests
router.route("/").get(protect,getGoals).post(protect,setGoals);

// Define Endpoints for Put & Delete Requests
router.route("/:id").put(protect,updateGoals).delete(protect,deleteGoals);

module.exports = router;





