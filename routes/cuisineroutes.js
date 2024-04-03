
const express =  require('express')
const cuisineController =  require("../controllers/cuisineController")
const cuisine = require("../models/Cuisine")

const router = express.Router()


router.post('/add-cuisine', cuisineController.createCuisine)
router.get('/get-cuisines', cuisineController.getCuisine)
router.get('/get-single-cuisine/:id',cuisineController.singleCuisine)
router.patch('/update-cuisine/:id', cuisineController.updateCuisine)
router.delete('/delete/:id',cuisineController.deleteCuisine)

module.exports = router