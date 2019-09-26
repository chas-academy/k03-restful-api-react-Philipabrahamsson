import React, { useEffect, useState } from 'react';
import * as constants from '../constants/Constants';
import { withRouter } from 'react-router-dom'

const HandleSearch = ({ updateMovies }) => {

  const [movieQuery, updateMovieQuery] = useState('');

  const handleMovieQueryInput = event => updateMovieQuery(event.target.value)

  const search = () => {
    const query = `/search/movie?api_key=978764f7929f89a0f0d4c0cfd6b531d4&query=
    ${encodeURIComponent(movieQuery)}`;
    fetch(constants.baseUrl + query)
      .then(data => data.json())
      .then(data => updateMovies(data.results))
      .catch(err => console.error(err))
  }
  
  const handleEnterPressed = (e) => {
    if (e.key === 'Enter') {
      search()
    }
  }

  return (
    <div style={{ width: '95%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '85%', flexGrow: '1' }}>
        <input
          onChange={handleMovieQueryInput}
          onKeyDown={handleEnterPressed}
          value={movieQuery}
          placeholder='Search for a movie'
          style={
            {
              border: 'none',
              width: '90%',
              borderBottom: '2px solid #000000',
              fontSize: '18px',
              padding: '8px',
              outline: 'none'
            }
          } />
        </div>
      <button onClick={search} style={{ width: '10%', background: 'none', border: '2px solid #000000', fontSize: '16px', padding: '8px', borderRadius: '6px', }}>Search</button>
    </div>
  )
}


export default withRouter(HandleSearch);