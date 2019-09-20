import React, { useEffect, useState } from 'react';
import * as constants from '../constants/Constants';
import { withRouter } from 'react-router-dom'

const HandleSearch = (props) => {
  
  const [movieQuery, updateMovieQuery] = useState('');

  const search = (event) => {
    event.preventDefault();
    const baseUrl = `https://api.themoviedb.org/3`;
    const query = `/search/movie?api_key=978764f7929f89a0f0d4c0cfd6b531d4&query=
    ${movieQuery.split(" ").join("+")}`;
    fetch(baseUrl + query).then(data => data.json()).then(data => console.log(data))
      .catch(err => console.error(err))
    props.history.push('/store')
  }
  return (
    <div>
      <h2>Movie Store</h2>
      <form onSubmit={(event) => search(event)}>

        <input
          onChange={(event) => {
            updateMovieQuery(event.target.value)
          }}
          placeholder='Search for a movie' />
        <button type='submit'>Search</button>
        </form>
    </div>
      )
    }
    
    
export default withRouter(HandleSearch);