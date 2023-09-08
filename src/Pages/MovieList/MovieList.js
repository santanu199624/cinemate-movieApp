
import MovieCard from '../../components/MovieCard/MovieCard'

import "./MovieList.css"
import UseFetch from '../../Hooks/UseFetch'


const MovieList = ({ apiPath }) => {


  const {data : movies} = UseFetch(apiPath)
  return (
    <main>
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

export default MovieList
