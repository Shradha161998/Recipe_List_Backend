const express = require('express');
const recipeRoutes = require('./routes/recipes');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const app = express();
const port = 3000;

const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100,
    message: 'Too many requests from this IP, please try again after 5 minutes'
})

app.use(limiter);

app.use(cors())
app.use(express.json());
app.use('/recipes', recipeRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})