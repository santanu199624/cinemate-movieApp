import React from 'react'
import { Link } from "react-router-dom"

import "./MovieCard.css";

const MovieCard = ({movie}) => {

  const {backdrop_path, original_title, release_date, overview,id} = movie
  const image = `https://image.tmdb.org/t/p/w500/${backdrop_path}`

  return (
            <div className="card">
    <Link to={`movie/${id}`}>
          <div className="card_image">
          <img src={image} alt="" />
          </div>
      </Link>

          <div className="card_content">
          <Link to={`movie/${id}`}>
            <h1>{original_title}</h1>
            </Link>
            <p>{release_date}</p>
            <p>{overview}</p>
          </div>
      </div>
    
  )
}

export default MovieCard
