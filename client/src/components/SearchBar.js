import React from 'react'

function SearchBar({setBrandedFood, setCommonFood}) {
  
  function handleOnSearch(query){
      fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,{
        method: 'GET',
        headers: {
          // 'Accept': 'application/json',
          // 'Content-Type': 'application/json',
          'x-app-id': '82d8f938',
          'x-app-key': '556bd327893a5a9a92f6e7546b8da21c',
          'x-remote-user-id': 0
        }
        })
      .then((response) => response.json())
      .then((data) => {
       if(data.common){
        setCommonFood(data.common)
       }else{
        setCommonFood([])
       }
       if(data.branded){
        setBrandedFood(data.branded)
      }else{
        setBrandedFood([])
       }
      });
    }

  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};


  return (
    <div>
      <div className="ui fluid category search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search food..." style={BarStyling} onChange={(e) => handleOnSearch(e.target.value)}/>
          <i className="search icon"></i>
          </div>
      <div className="results"></div>
      </div>
    </div>
  )
}

export default SearchBar;