import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"

import "./Header.css"

const Header = () => {
    const [theme, setTheme] = useState("light_theme")
    const navigate = useNavigate()
    
    const toggleTheme = () => {
        if(theme === "dark_theme"){
            setTheme("light_theme")
        }else{
            setTheme("dark_theme")
        }
    }

    useEffect(()=>{
        document.body.className = theme
    }, [theme])

    const handleSearch = (e) =>{
        e.preventDefault()
        const queryTerm = e.target.search.value
        e.target.reset()

        return navigate(`/search?q=${queryTerm}`)
    }

    return (
        <nav>
            <Link to="/">
            <div className="logo">
                <img src="https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" />
                <span>CINEMATE</span>
            </div>
            </Link>
            <div className="nav_items">
                <ul>
                    <li><NavLink to="/" className="nav_links" end>Home</NavLink></li>
                    <li><NavLink to="/movies/popular" className="nav_links">Popular</NavLink></li>
                    <li><NavLink to="/movies/top_rated" className="nav_links">Top Rated</NavLink></li>
                    <li><NavLink to="/movies/upcoming" className="nav_links">Upcoming</NavLink></li>
                </ul>
            </div>
            <button className="dark" onClick={()=> toggleTheme()} ><i className="fa-solid fa-moon"></i></button>
            <form onSubmit={handleSearch}>
                <input type="text" id="search" name="search" placeholder="search..." autoComplete="off" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
        </nav>
    )
}

export default Header