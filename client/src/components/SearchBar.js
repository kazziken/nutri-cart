import React from 'react'

function SearchBar() {
  return (
    <div>
      <div className="ui fluid category search">
      <div className="ui icon input">
      <input className="prompt" type="text" placeholder="Search food..."/>
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
      </div>
    </div>
  )
}

export default SearchBar