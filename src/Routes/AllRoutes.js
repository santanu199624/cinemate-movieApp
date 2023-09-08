import { Routes, Route } from "react-router-dom"
import  MovieDetail  from "../Pages/MovieDetail/MovieDetail"
import  MovieList  from "../Pages/MovieList/MovieList"
import  Search  from "../Pages/Search/Search"
import  PageNotFound  from "../Pages/PageNotFound/PageNotFound"
import React from 'react'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="movie/:id" element={<MovieDetail apiPath="movie/movie_id" />} />
            <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" />} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default AllRoutes
