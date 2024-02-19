import React from 'react';
import { FaUser } from "react-icons/fa";
import './Header.css'
import Log from './Log.jsx';

const Header = (props) => {
  return (
      <div className='user-header'>
        <div className="functions">
            <FaUser className='user-icon'/>
            <input className='user-search' type="text" placeholder='People, Groups and Messages'/>
            <div className="filter">
                <ul>
                    <li><button className='all-messages'>All</button></li>
                    <li><button className='read-messages'>Read</button></li>
                    <li><button className='unread-messages'>Unread</button></li>
                </ul>
            </div>
        </div>
        <div className="chat-logs">
            <div className="logs">
              <Log user={props.user}></Log>
            </div>
        </div>
      </div>
  )
}

export default Header