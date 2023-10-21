import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='md:grid md:grid-cols-2 grid-cols-3 gap-4 mt-4'>
    <Card id="mehul" />
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </React.StrictMode>,
)
