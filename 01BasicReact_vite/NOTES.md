# Intro
This react app was created using Vite, a package bundler for react
You can create a react app using vite with command `npm create vite@latest`

You can run the development server with `npm run dev`

# Intermediate
All the components are present in the `src` folder and all the components should be named with first capital letter and the extension should be `jsx`
`Vite` configured projects also have a `vite.config.js` file which consists of configurations of vite

First we have to run some commands
`cd <file_name>`
`npm insall` //installs all the dependencies
`npm run dev` //to start the development server

# Syntax

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Component from "./Component.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Component/>
  </React.StrictMode>,
)
```
We saw the syntax of creating components and exporting of the components and this thing above👆 is the syntax of rendering the `main.jsx` file.