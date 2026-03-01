const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

router.get('/', recipeController.getRecipes)
router .get('/search', recipeController.searchRecipes)

module.exports = router;