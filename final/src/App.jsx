import { useState } from 'react'
import './App.css'
import Page from './Page/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page></Page>
    </>
  )
}

export default App
