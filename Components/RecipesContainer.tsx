import React, { ReactElement } from 'react'
import RecipeCard from './RecipeCard'
import Searchbar from './Searchbar'

interface Props {
  recipes: any[]
}


function RecipesContainer({ recipes }: Props): ReactElement {


  return (
    <>
      {
        recipes.forEach(recipe => {
          <RecipeCard key={recipe['id']} recipe={recipe} />
        })
      }
    </>
  )
}

export default RecipesContainer
