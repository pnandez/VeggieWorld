import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Recipe from '../Components/Recipe'
import RecipesContainer from '../Components/RecipesContainer'
import Searchbar from '../Components/Searchbar'
import Header from '../Components/Header'

const Home: NextPage = () => {

  const [searchedText, setSearchedText] = useState('')
  const [recipes, setRecipes] = useState([])

  const handleOnClickSearch = async () => {
    const response = await fetch('/api/search?searchwords=' + searchedText)
    console.log(await response.json())
    setRecipes(await response.json())
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-100">
      <Header setSearchedText={setSearchedText} handleOnClickSearch={handleOnClickSearch} />
      <RecipesContainer recipes={recipes} />
    </div>
  )
}

export default Home
