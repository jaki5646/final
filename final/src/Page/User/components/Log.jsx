import React, { useState } from 'react'
import './Log.css'

const Log = ({ user }) => {
  function getCurrentTimestamp() {
    return Date.now();
  }

    const timestampToDate  = (i) => {
    const date = new Date(i);
    const datevalues = [
      date.getFullYear(),
      date.getMonth()+1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if(i > getCurrentTimestamp()+30000) {
      return 'Just now'
    }
    return (Math.floor(getCurrentTimestamp() - i)/8640000) !== 0 ? (<>{Math.floor((getCurrentTimestamp()-i)/86400000)}day(s) ago</>) : Math.floor((getCurrentTimestamp() - i)/3600000) !== 0 ? (<>{Math.floor((getCurrentTimestamp() - i)/3600000)}hours ago(s)</>) : Math.floor((getCurrentTimestamp() - i)/60000) !== 0 ? (<>{Math.floor((getCurrentTimestamp() - i)/60000)}minues ago</>) : (<>{Math.floor((getCurrentTimestamp() - i)/1000)} seconds ago</>);
  }


  let sortedUser = [];


  // console.log(user[0].message[user[0].message.length - 1].timestamp)
  const compareNumbers = (a, b) => {
    return a - b;
  }

  //array sort date






  //take timestamp with respective #array
  let holdArray = []
  let sortArray = [];

  for(let i = 0; i < user.length; i++) {
    holdArray.push([i, user[i].message])
  }
  for(let i = 0; i < holdArray.length; i++) {
    sortArray.unshift(holdArray[i][1][holdArray[i][1].length-1].timestamp);
  }
  sortArray.sort(compareNumbers)


  //assign which is nearest message
  bigloop: for(let i = 0; i < sortArray.length; i++) {
    loop: for(let j = 0; j < user.length; j++) {
      if(user[j].message[user[j].message.length - 1].timestamp !== sortArray[i]) {
        continue loop;
      }
      sortedUser.unshift(user[j]); 
      continue bigloop;
    }
  }
  const [newUser, setNewUser] = useState(sortedUser)



  return (
    sortedUser.map((user) => {
      return(
        <div className='log' key={user.id}>
            <img className='avatar' src={user.avatar} alt="" />
            <div className='name-and-message'>
                <p className='name'>{user.name}</p>
                <p className='message'>{user.message[user.message.length - 1].text}</p>
            </div>
            <p className='timer'>{timestampToDate(user.message[user.message.length - 1].timestamp)}</p>
        </div>
      )
    })
  )
}

export default Log