import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj  = {
    username : "hemant",
    age :21
  }

  let arr = [1, 2, 3]; 

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>tailwind tst</h1>

      <Card username="Hemant" btnText = "click me"/>
      <Card username = "Dabbu" btn btnText="visit here"/>
      <Card />
    </>
  )
}

export default App
