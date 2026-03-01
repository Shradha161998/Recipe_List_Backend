const axios = require('axios');

exports.getRecipes = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/recipes');
    if(response.status === 200){
        res.json(response.data.recipes);
    }else{
        res.status(response.status).json({ error: 'Failed to fetch recipes' });
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'An error occurred while fetching recipes' });
  }
}


exports.searchRecipes = async (req,res) =>{
    try{

        const query = req.query.q
        const response = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`);
        if(response.status === 200){
            res.json(response.data.recipes);
        }else{
            res.status(response.status).json({ error: 'Failed to search recipes' });
        }
    }catch(error){
        console.error('Error searching recipes:', error);
        res.status(500).json({ error: 'An error occurred while searching recipes' });
    }
}