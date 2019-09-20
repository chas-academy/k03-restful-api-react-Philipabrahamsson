import React, { useEffect, useState } from 'react';
import * as constants from '../constants/Constants';


const HomePage = () => {

  const [moviesData, setMoviesData] = useState();
  
  useEffect(() => {
    fetch(`${constants.baseUrl}/${constants.trendingWeekly}${constants.API_KEY}`)
      .then(data => data.json())
      .then(data => {
        setMoviesData(data.results)})
      .catch(err => console.error(err)
      )

  }, [])
  return (
    <div>
      <h2>Coming soon</h2>
      {moviesData && moviesData.map(movie => {

        console.log(movie)
        return (
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            width={200}

          />


        )
      })

      };
    </div>
  );
}
export default HomePage;