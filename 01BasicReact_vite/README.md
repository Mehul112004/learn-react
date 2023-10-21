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

### What is StrictMode

React Strict Mode is a development tool that helps you identify potential issues in your React codebase. It is a wrapper component that can be used to highlight problems in your code early during development. When you enable Strict Mode, React will perform additional checks and give warnings for the component tree inside it.
It also checks if there are any deprecations in your components codebase.

### What is render()

React render is a method that is responsible for painting the DOM.

In Vite bundled apps the script is inherently linked inside the `index.html` file.
And this render method injects all the markup inside that HTML file.

### What is createRoot

This method creates the root element which will contain all the components to be injected.

## We can also nest components in each other as
```
    function Comp(){
  return (
    <h1>This will be the nested Component</h1>
  )
}
function App() {

  return (
    <>
    <Comp />
   <h1>Chai aur react with vite</h1>
   </>
  )
}
export default App

```