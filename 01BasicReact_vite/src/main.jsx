import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Component from "./Component.jsx";

function MyApp(){
  return (
    <div>
      <h1>MyApp!!!!</h1>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
    <Component/>
  </React.StrictMode>,
)
