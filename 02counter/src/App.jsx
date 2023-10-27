import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // let [variable, setvariable] = useState(default value(int, array, string, object, etc))

  const addvalue = () =>{

    // counter = counter + 1;
    // setCounter(counter)

    setCounter(counter + 1)

    // if we directly use 'setCounter(counter + 1)' multiple times it will work as multiple addition, instead we use bellow given structure.

    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
    if(counter >= 20){
      setCounter(20);
    }
    // console.log(counter)
  }

  const subValue = function(){
    setCounter(counter-1);
    if(counter <= 0){
      setCounter(0);
    }
  }

  return (
    <>
      <h1>REACT</h1>
      <h2>counter : {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <button onClick={subValue}>subtract value</button>
      <button>button value {counter}</button>
      <p>This is a para : {counter}</p>
    </>
  )
}

export default App
