import React, { useState } from 'react'
import { data } from '../movie.json'
import './Home.css'
import ListAnime from './ListAnime'

const Home = () => {

  const [carousel, setCarousel] = useState(data[0]);

  const onClick  = (i) => {
    setCarousel(data[i-1])
  }

  return (
    <div className='content-container'>
      <p className='logo explore'>Explore</p>
      <p className='waygwt'>What are you gonna watch today?</p>
      <div className="carousel">
        <img className='carousel-img' src={carousel.image} alt="failed to load image" />
        <div className="carousel-floating-text">
          <h1 className='carousel-movie-name'>{carousel.movieName}</h1>
          <p className='carousel-movie-text'>{carousel.description}</p>
        </div>
      </div>
      <div className="new-release">
        <p className='logo'>New Release</p>
        <ListAnime onClick={onClick}/>
      </div>
    </div>
  )
}

export default Home