import React, { useEffect } from 'react'
import { Link } from "react-router-dom"

import "./PageNotFound.css"

const PageNotFound = () => {

  useEffect(() => {
    document.title = `PageNotFound/CineMate`
  })

  return (
    <main>
      <div className='pageNotFound'>
          <h1>404 OOPS...</h1>
          <p>Page Not Found</p>
      </div>

      <Link to="/">
      <button className='back_to_home'>Back To Home</button>
      </Link>
    </main>
  )
}

export default PageNotFound
