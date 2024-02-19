import React from 'react'
import './Input.css'
import './Message.css'

const Message = (props) => {
  const texts = [];
    for(let j = 0; j < props.user[0].message.length; j++) {
        if(props.user[0].message[j] === null) {
          return <></>
        }
        else {
          texts.push(props.user[0].message[j])
        }
    }


  return (<>
    <>
    {texts.map((i) => {
      if(!i.sender) {
        return (
          <div className='receiver-container' key={i.id}>
            <img className='message-avatar' src={props.user[0].avatar} alt="" />
            <p className='receiver message-sent'>{i.text}</p>
          </div>
        )
      }
      else {
        return (
          <div className="sender-container" key={i.id}>
            <p className='sender message-sent'>{i.text}</p>
          </div>
        )
      }
    })}
    </>
  </>)
}

export default Message