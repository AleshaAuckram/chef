import React from 'react';

export default function IngrediantsList(props) {
    const ingrediantList = props.ingrediants.map(ingrediant => 
        (<li key={ingrediant}>{ingrediant}</li>
    ))
    return(
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingrediant-list" aria-live="polite">{ingrediantList}</ul>
                {props.ingrediants.length > 3 &&<div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingrediants</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
                </section>

    )
}