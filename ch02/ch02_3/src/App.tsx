import React from 'react'
import logo from './logo.svg'
import './App.css'
import ClassComponent from './ClassComponent'

function App() {
  return (
    <ul>
      <ClassComponent href="https://www.google.com" text="go to google"></ClassComponent>
      <ClassComponent href="https://www.naver.com" text="go to naver"></ClassComponent>
    </ul>
  )
}

export default App
