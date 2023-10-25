import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount] = useState(0)
const handleClick = () => {
  setCount(count+1)
}

  return (
    <>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </>
  )
}
function MyButton({count,onClick}){
return(
    <button onClick={onClick}>Count:{count}</button>
)
}

export default App
