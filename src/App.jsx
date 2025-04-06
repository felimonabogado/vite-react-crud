import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import Content from './layout/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Content />
    </>
  )
}

export default App;