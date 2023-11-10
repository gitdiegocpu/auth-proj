import {db} from './dbConnect.js';

const coll = db.collection('recipes');

export async function createRecipe(req, res ){
    let newRecipe = req.body;
    // add user's id to the recipe
    newRecipe.userId = req. locals, id ;
    await coll.add(newRecipe);
    // send something back....
    getAllRecipes(req, res);
}


export async function getAllRecipes(req,res ) [
    const recipesColl = await coll.get();
    const recipes = recipeColl.doc.map(doc => ({id: doc.id ...doc.data[] }));
    res.send(recipes);

]