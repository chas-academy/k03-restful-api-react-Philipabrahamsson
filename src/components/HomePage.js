import React, { useEffect, useState } from 'react';
import * as constants from '../constants/Constants';
import HandleSearch from './HandleSearch';

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`${constants.baseUrl}/${constants.trendingWeekly}${constants.API_KEY}`)
      .then(data => data.json())
      .then(data => {
        setMovies(data.results)})
      .catch(err => console.error(err)
      )
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <HandleSearch updateMovies={setMovies} />
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movies && movies.map((movie, index) => 
      <img key={index} style={{ padding: '4px', width: '23%' }}
           src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        />)

      };
    </div>
    </div>
  );
}
export default HomePage;