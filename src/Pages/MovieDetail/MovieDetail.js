import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import "./MovieDetail.css"

const MovieDetail = () => {

  const params = useParams()
  // console.log(params)

  const [movie, setMovie] = useState({})

  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  useEffect(() => {
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ea6b591ab81f508207abe3d879b70e19`)
      const json = await response.json()
      setMovie(json)
      console.log(json)
    }
    fetchMovie()
  }, [])

  return (
    <main>
      <section className='movie_details'>
         <div className="movie_img">
            <img src={image} alt="" />
         </div>
         <div className="movie_content">
            <h1 className='movie_title'>{movie.original_title}</h1>
            <p className='overview'>{movie.overview}</p>
            { movie.genres ? (<p className='generes'>
              { movie.genres.map((genere) => (
                <span className='gener' key={genere.id}>{genere.name}</span>
              ))}
            </p>) : "" }

            <p className='ratings'>
              <span>{movie.vote_average}-</span>
              <span>{movie.vote_count} reviews</span>
            </p>

            <p className='release_date'>
              <span>Release Date: </span>
              <span>{movie.release_date}</span>
            </p>

            <p className='imdb_link'>
              <span>IMDB Link: </span>
              <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel='noreference'>{movie.imdb_id}</a>
            </p>
            
         </div>
      </section>
    </main>
  )
}

export default MovieDetail
