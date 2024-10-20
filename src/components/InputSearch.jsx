import React from 'react'
import searchIcon from '../images/search.svg'

const InputSearch = ({inputFunc,onclick}) => {
  return (
    <div className="input-with-search">
      <input
        type="text"
        className="country-name"
        placeholder="Enter city name..."
        onChange={inputFunc}
      />
      <input
        type="button"
        className="search"
        style={{ backgroundImage: `url(${searchIcon})` }}
        onClick={onclick}
      />
    </div>
  )
}

export default InputSearch
