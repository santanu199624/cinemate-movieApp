import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import UseFetch from '../../Hooks/UseFetch'
import { useSearchParams } from 'react-router-dom'

import "./Search.css"

const Search = ({ apiPath }) => {

  
  const [searchParams]= useSearchParams();
  const queryTerm = searchParams.get("q")
  const {data : movies} = UseFetch(apiPath, queryTerm)

  return (
    <main>
      <div className='search_result'>
        <p>{movies.length === 0 ? `No Result Found For '${queryTerm}'` : `Result For '${queryTerm}'` }</p>
      </div>
      <section className='movieList'>
        <div className="card_section">
          {movies.map((movie) => (

          <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Search
