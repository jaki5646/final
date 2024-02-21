import React from 'react'
import { data } from '../movie.json'
import './Home.css'
import ListAnime from './ListAnime'

const Home = () => {
  return (
    <div className='content-container'>
      <p className='logo explore'>Explore</p>
      <p className='waygwt'>What are you gonna watch today?</p>
      <div className="carousel">
        <img className='carousel-img' src='https://s3-alpha-sig.figma.com/img/a159/88d8/3feb9d7a97a93cac67eb291272ab227e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdj2QwQJJUFIVYgPFmnn4zQCdPvh0UOHxLlan2grnNx9FJCzH~NINJ65oqMweIZfJ81LjdgCaJ4IvqYKknsigcGhkGYasiUODHx1Ihiu46tBaeaGipPnzdXfQiCvlVSXjiTVzXqaB1tA0FAjNCADNQVi05~P8iqxcMfvRGAvxyo4DS~xBX6mQXx9O5PQTAWWRtUc0jmQxsiXitN4VboXlcpeVhLxoAM~MXbMH5bo04CVs4DjvWjHNR51pCXK-pMy~x9zUI3K70uUp0CQHzIxdjAwYQR1kx4nJlgZ~2T~Li2yx0yIRkY879IV~~SP7mAlHSTa8wR4BSVUAnw0h6OB~g__' alt="failed to load image" />
        <div className="carousel-floating-text">
          <h1 className='carousel-movie-name'>{data[0].movieName}</h1>
          <p className='carousel-movie-text'>{data[0].description}</p>
        </div>
      </div>
      <div className="new-release">
        <p className='logo'>New Release</p>
        <ListAnime/>
      </div>
    </div>
  )
}

export default Home