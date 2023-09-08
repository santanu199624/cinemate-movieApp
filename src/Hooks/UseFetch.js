import  { useState, useEffect } from 'react'

const UseFetch = (apiPath, queryTerm="") => {

    const [data, setData] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=ea6b591ab81f508207abe3d879b70e19&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url)
          const json = await response.json()
          setData(json.results)
        }
        fetchMovies()
      },[url])
    

  return { data }
}

export default UseFetch
