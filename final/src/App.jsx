import { createContext, useContext, useState } from 'react'
import {Routes, Route, useSearchParams} from 'react-router-dom'
import Header from './Header'
import Home from './components/Home'
import ListAnime from './components/ListAnime'
import NotFound from './components/NotFound'
import Anime from './components/Anime'
import './App.css'

// const [searchParams] = useSearchParams();


function App() {

  return (
  //     <themeContext.Provider value={theme}>
        <div className="container">
          <Header></Header>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/anime' element={<ListAnime/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
              <Route path='/anime/:data' element={<Anime/>}></Route>
            </Routes>
        </div>
      // </themeContext.Provider>
  )
}

export default App
