import React from 'react'
import { data } from '../movie.json'
import { Link } from 'react-router-dom'
import './ListAnime.css'

const ListAnime = () => {
  console.log(data)
  return (
    <div className='list-anime'>
      {data.map((i) => {
            return (
                <Link to={`/anime/${i.id}`} key={i.id} className='listed-anime'>
                    <img src={i.image} alt="ok" className='image'/>
                    <div className='listed-anime-text'>
                      <h3>Eposode {i.episode}</h3>
                      <h1>{i.movieName}</h1>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default ListAnime