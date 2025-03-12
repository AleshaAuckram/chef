import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngrediantsList from './IngrediantsList';
import { getRecipeFromMistral } from '../ai';

export default function Body() {
    

    const [ingrediants, setIngrediants] = React.useState([])
    
    const [recipe, setRecipe] = React.useState("")


    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingrediants)
        setRecipe(recipeMarkdown)
    }

    function addIngrediants(formData) {
        const newIngrediant = formData.get('ingrediant')
        setIngrediants(prevIngrediants => [...prevIngrediants, newIngrediant])
    }

    return (
        
        <main>
            <form action={addIngrediants} className="add-ingrediant-form">
                <input 
                type="text" 
                placeholder="e.g. oregano"
                aria-label="Add ingrediant" 
                name="ingrediant"
                />
                <button>Add ingrediant</button>
            </form> 

            {ingrediants.length > 0 && 
            <IngrediantsList 
            ingrediants={ingrediants} 
            getRecipe={getRecipe}/>}
                
                {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}

