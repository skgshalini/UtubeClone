import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen =useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className=" p-5 shadow w-48">
        
        <ul>
  <Link to="/"><li>Home</li></Link>  
    <li>Shorts</li>
    <li>Videos</li>
    <li>Live</li>
      </ul>
      <h1 className="font-bold pt-4">Subscription</h1>
      <ul>
    <li>Music</li>
    <li>Gaming</li>
    <li>Sports</li>
    <li>Movie</li>
      </ul>
      <h1 className="font-bold pt-4">Watchlist</h1>
      <ul>
    <li>Music</li>
    <li>Gaming</li>
    <li>Sports</li>
    <li>Movie</li>
      </ul>
    </div>
  )
}

export default Sidebar
