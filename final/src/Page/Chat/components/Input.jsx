import React, { useState } from 'react';
import uuid4 from 'uuid4';
import './Input.css';
import Message from './Message';

const Input = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (text.trim() !== '') {
      const newMessage = {
        id: uuid4(),
        text: text,
        sender: true,
        timestamp: Date.now()
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      
      <div className='input-field'>
        <input
          className='message-input'
          type="text"
          placeholder='Type your message'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default Input;
