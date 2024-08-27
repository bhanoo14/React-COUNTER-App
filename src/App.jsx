import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  function inCreaseValue(){
    setCount((prev) => prev +1)
  }

  function inDcreaseValue(){
    setCount((prev) => prev -1)
  }

  return (
    <>
      <h1>Counter-App</h1>
      <h2>data1 :{count} <button onClick={inCreaseValue}>Add Value</button> </h2>
      <h2>data2 :{count} <button onClick={inDcreaseValue}>remove value</button> </h2>
    </>
  )
}

export default App
