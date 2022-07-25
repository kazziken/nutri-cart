import React, {useState} from 'react'

// const initialState = {
//   loading: false,
//   results: [],
//   value: '',
// }

// function exampleReducer(state, action) {
//   switch (action.type) {
//     case 'CLEAN_QUERY':
//       return initialState
//     case 'START_SEARCH':
//       return { ...state, loading: true, value: action.query }
//     case 'FINISH_SEARCH':
//       return { ...state, loading: false, results: action.results }
//     case 'UPDATE_SELECTION':
//       return { ...state, value: action.selection }

//     default:
//       throw new Error()
//   }
// }


function SearchBar({setBrandedFood, setCommonFood }) {
  const [query, setQuery] = useState("");

  
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
        console.log(data);
        // data.preventDefault();
        setCommonFood(data.common)
        setBrandedFood(data.branded)
      });
    }

  return (
    <div>
      <div className="ui fluid category search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search food..." onChange={(e) => handleOnSearch(e.target.value)}/>
          <i className="search icon"></i>
          </div>
      <div className="results"></div>
      </div>
    </div>
  )
}

export default SearchBar;