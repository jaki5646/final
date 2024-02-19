import React from 'react'
import './Chat.css'
import Message from './components/Message'
import Input from './components/Input'

const Chat = (props) => {
  return (
    <div className='chat'>
      <div className="messages">
        <Message user={props.user}></Message>
      </div>
      <Input user={props.user}></Input>
    </div>
  )
}

export default Chat