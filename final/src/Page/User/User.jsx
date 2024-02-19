import React, { useState } from 'react'
import Header from './components/Header'
import './User.css'

const User = (props) => {
  return (
    <div className='user'>
      <Header user={props.user}></Header>
    </div>
  )
}

export default User