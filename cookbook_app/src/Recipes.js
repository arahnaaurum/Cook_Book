import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import './Recipes.css';

function Recipes () {
    let params = useParams();
    let category = params.category;
    
    const catDict = {
        soup: "Супы",
        main: "Основные блюда",
        dessert: "Десерты",
    }
    
    const location = useLocation();
    const [listOfRecipes, setListOfRecipes] = useState();

    useEffect(()=> {
            fetch(`http://127.0.0.1:8000/recipes?category=${category}`)
            .then(response => response.json())
            .then((result) => {
            setListOfRecipes(result)})          
    }, [category]);

    if (listOfRecipes) {
        return (
            <div className='recipes_container'>
                <h3 className='recipes_title'> { catDict[category] } </h3>
                { listOfRecipes.map((recipe, index)=> {
                    return <>
                        <div key={ index }>
                        {recipe.title} |
                        <Link to= {location.pathname + "/" + index } className='recipes_link'> Читать рецепт полностью </Link>
                        </div>
                        </>
                }) }
            </div>
        );
    } else {
        return (
            <div>
                { category }
            </div>
        );
    }

}

export default Recipes;