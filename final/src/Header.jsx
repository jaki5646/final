import React, { useContext } from 'react'
// import { themeContext } from './App'
import './Header.css'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    // const theme = useContext(themeContext)

    
    return (
    <div className='header'>
        <Link className='logo' to={'/'}>
            Anonime
        </Link>
        <ul className='nav'>
            <li><NavLink className='left-logo' to={'/'}>Home</NavLink></li>
            <li><NavLink className='left-logo' to={'/anime'}>List Anime</NavLink></li>
        </ul>
        <div className="search-bar">
            <input type="text" placeholder='type'/>
        </div>
    </div>
  )
}

export default Header