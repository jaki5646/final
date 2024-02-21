import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../movie.json'
import NotFound from './NotFound'
import './Anime.css'

const Anime = () => {
  const param = useParams();
  let check = false;
  const list = param.data - 1 //array nên bị giảm 1 đơn vị

  data.map((i) => {
    if(i.id === param.data) {
      check = true;
      console.log(param.data)
    }
  })

  return !check ? (<NotFound/>) : (
    <div className='anime-detail'>
        <img src={data[list].image} alt="" />
        <div className="anime-detail-text">
          <p>
            Name: {data[list].movieName}
          </p>
          <p>
            Episode: {data[list].episode}
          </p>
          <p>Sypnosis: {data[list].description}</p>
        </div>
    </div>
  )
}

export default Anime