import React, { ReactElement } from 'react'
import Searchbar from './Searchbar'

interface Props {
  setSearchedText: any
  handleOnClickSearch: any
}


function Header({ setSearchedText, handleOnClickSearch }: Props): ReactElement {
  return (
    <div className="bg-[url('/images/bg-title_small_screen.jpeg')] bg-cover sm:bg-[url('/images/bg-title.jpeg')] sm:bg-cover w-full">
      <div
        className="flex flex-col  md:px-12 px-10 pb-6 pt-8 
      font-montserrat items-center "
      >
        <h1 className="text-4xl font-bold text-active mt-10 ">
          Veggie World
        </h1>
        <h2 className="text-primary text-xl font-light mt-5 ">
          Master veggie cuisine.
        </h2>
        <Searchbar setSearchedText={setSearchedText} onSearchSubmitted={handleOnClickSearch} />
      </div>
    </div>
  )
}

export default Header