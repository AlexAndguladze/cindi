import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

import {
  BrowserRouter,
  Outlet,
  Route,
 } from "react-router-dom";

function App() {

  return (
    <div style={{minHeight: '100vh', display:'flex', flexDirection: 'column'}}>
      <Header/>
      <main style = {{flex: 1, Xpadding: '1rem'}}>
        <Outlet/>
      </main>
      <Footer/>
    </div>    
  )
}

export default App
