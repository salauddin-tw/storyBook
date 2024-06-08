import React from "react"
import logo from "./logo.svg"
import { Button, Page } from "./stories"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Page />
      <header className="">
        <Button label="Buttonss" size="large" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
