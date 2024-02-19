import React, { useState } from 'react'
import uuid4 from "uuid4";
import User from './User/User.jsx'
import Chat from './Chat/Chat.jsx'
import './Page.css'

const Page = () => {
  //format from date to unix timestamp and vice versa

  //get current exact time in unix
  // function getCurrentTimestamp() {
  //   return Date.now();
  // }


  //unix to readable date
  // const timestampToDate  = (i) => {
  //   const date = new Date(i);
  //   const datevalues = [
  //     date.getFullYear(),
  //     date.getMonth()+1,
  //     date.getDate(),
  //     date.getHours(),
  //     date.getMinutes(),
  //     date.getSeconds(),
  //   ];
  //   return datevalues;
  // }

  //readable date to unix
  
  
  
  // //dùng để đặt random message
  // let month = Math.floor(Math.random() * (12 - 0))
  // let theDate = Math.floor(Math.random() * (30 - 0))
  // let hour = Math.floor(Math.random() * (24 - 0))
  // let minute = Math.floor(Math.random() * (60 - 0))
  // let second = Math.floor(Math.random() * (60 - 0))

  
  // console.log(month,theDate,hour,minute,second)
  // //log ra ngày random (làm tay)
  
  
  // const dateToTimestamp = (y, m, d, h, s, ms) => {
  //   const UNIX_TIME = Date.UTC(y, m, d, h, s, m)
  //   return UNIX_TIME
  // }
  // console.log(dateToTimestamp(2024, month, theDate, hour, minute, second))
  // //log ra ngày random với giá trị unix timestamp

  
  // // console.log(timestampToDate(0))


  const [user, setUser] = useState([{
    id: uuid4(),
    name: 'Asuka Kurashina',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8JcNUKd98qAmZuLt1J4sBhwMbGnU3rih5g&usqp=CAU',
    message: [
      {
        text: 'Aisuki teru',
        sender: false,
        timestamp: 1640995200000,
        id: uuid4()
      },
      {
        text: 'no u',
        sender: true,
        timestamp: 1672531200000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Ichinose',
    avatar: 'https://www.giantbomb.com/a/uploads/square_small/18/187968/2686286-ichinose.rika.full.1690526.jpg',
    message: [
      {
        text: 'To thik cau UwU',
        sender: false,
        timestamp: 1640995200000,
        id: uuid4()
      },
      {
        text: 'khong em',
        sender: true,
        timestamp: 1704067200000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Madoka',
    avatar: 'https://tiermaker.com/images/chart/chart/chara-in-aokana-route-1190393/madokapng.png',
    message: [
      {
        text: 'thang bien thai nay',
        sender: false,
        timestamp: 1672531200000,
        id: uuid4()
      },
      {
        text: 'het cuu',
        sender: true,
        timestamp: 1705067200000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Mashiro',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSII4o-VYrlFosrj_ybcb2fQmzl5CrG5l0A&usqp=CAU',
    message: [
      {
        text: 'anh trai da den',
        sender: false,
        timestamp: 1672531200000,
        id: uuid4()
      },
      {
        text: 'i have came',
        sender: true,
        timestamp: 1718925309000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Misaki',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1dEDUBVLtPmfYuQLMsEv1ORdstBvMJZEDQ&usqp=CAU',
    message: [
      {
        text: 'Basaya',
        sender: false,
        timestamp: 1712526363000,
        id: uuid4()
      },
      {
        text: ':sob:',
        sender: true,
        timestamp: 1720355466000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Rolando',
    avatar: 'https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1',
    message: [
      {
        text: 'Tai m ma t thua wc',
        sender: false,
        timestamp: 1672531200000,
        id: uuid4()
      },
      {
        text: 'van de ky nang',
        sender: true,
        timestamp: 1723067587000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Pepsi',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8i0ZTdlk55QSJam8G_hop2staxiK0o9uBnw&usqp=CAU',
    message: [
      {
        text: 'hay lam em, em khong bo thuoc xo vao chai nuoc thang Ro thi bon anh khong co wc roi',
        sender: false,
        timestamp: 1721849046000,
        id: uuid4()
      },
      {
        text: 'messi da GOAT',
        sender: true,
        timestamp: 1731207070000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Torres',
    avatar: 'https://bloganchoi.com/wp-content/uploads/2023/10/t-r.jpg',
    message: [
      {
        text: 'em dep lam',
        sender: false,
        timestamp: 1672531200000,
        id: uuid4()
      },
      {
        text: 'siuuuuuu',
        sender: true,
        timestamp: 1724641027000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Henry',
    avatar: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/11/14/13/thierryhenry141119.jpg?width=1200&height=1200&fit=crop',
    message: [
      {
        text: 'I am the son of wind god',
        sender: false,
        timestamp: 1712084904000,
        id: uuid4()
      },
      {
        text: 'net po chay, tat canh danh dau go brrrrr',
        sender: true,
        timestamp: 1713084904000,
        id: uuid4()
      }
    ]
  },
  {
    id: uuid4(),
    name: 'Real',
    avatar: 'https://cdn.discordapp.com/emojis/1195954637916876814.png',
    message: [
      {
        text: 'Real',
        sender: false,
        timestamp: 1589854504000,
        id: uuid4()
      },
      {
        text: 'Phake',
        sender: true,
        timestamp: 1716084904000,
        id: uuid4()
      }
    ]
  }


])



// array lấy timestamp
// const newArray = user.map((i) => {
//   return i.message.map((j) => {return j.timestamp})
// })


  const handleClick = () => {
    return 0;
  }

  return (
    <div className='container'>
        <User user={user} onClick={handleClick}></User>
        <Chat user={user}></Chat>
    </div>
  )
}

export default Page