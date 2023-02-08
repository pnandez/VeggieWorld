import React, { ReactElement } from 'react'
import { transferableAbortController } from 'util'

interface Props {
  setSearchedText: any
  onSearchSubmitted: any
}



const Searchbar = ({ setSearchedText, onSearchSubmitted }: Props): ReactElement => {


  const inputOnChange = (e: any) => {
    e.preventDefault()
    setSearchedText(e.target.value)
  }
  return (
    <div className="place-content-center inline-flex w-5/6 mt-1 sm:mx-auto md:max-w-4xl mt-4"
      onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Search for a recipe" onChange={inputOnChange}
        className='border-2 rounded-full w-11/12  p-1 pl-3 shadow-md mr-1' />
      <button type='submit'
        className=' p-2 bg-green-400 active:bg-green-600 rounded shadow-md w-auto '
      >
        Search
      </button>
    </div >
  )
}

export default Searchbar
