import React from 'react'
import logo from './logo.svg'
import './App.css'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

function App() {
  return (
    <ul>
      <ClassComponent href="https://www.google.com" text="go to google"></ClassComponent>
      <ArrowComponent href="https://www.naver.com" text="go to naver"></ArrowComponent>
    </ul>
  )
}

export default App
