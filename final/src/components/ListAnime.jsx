import React from 'react'
import { data } from '../movie.json'
import { Link } from 'react-router-dom'
import './ListAnime.css'

const ListAnime = ({ onClick }) => {

  // const handleClick = (e) => {
  //   props.handleChange(e)
  // }

  return (
    <div className='list-anime'>
      {data.map((i) => {
            return (
                    <div className='listed-anime' onClick={() => onClick(i.id)} key={i.id}>
                    <img src={i.image} alt="ok" className='image'/>
                    <div className='listed-anime-text'>
                      <h3>Eposode {i.episode}</h3>
                      <h1>{i.movieName}</h1>
                    </div>
                    </div>
            )
        })}
    </div>
  )
}

export default ListAnime