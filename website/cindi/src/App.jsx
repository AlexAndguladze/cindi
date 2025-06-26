import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

import {
    BrowserRouter,
    Outlet,
    Route, useLocation,
} from "react-router-dom";

function App() {
    const location = useLocation();
    const hideHeader = location.pathname === "/login";
  return (
    <div style={{minHeight: '100vh', display:'flex', flexDirection: 'column'}}>
        {!hideHeader && <Header/>}
      <main style = {{flex: 1}}>
        <Outlet/>
      </main>
      <Footer/>
    </div>    
  )
}

export default App
