import React from 'react'
import './App.css'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/HomPage/Home'
import Products from './Pages/Products/Products'
import Contact from './Pages/Contact/Contact'
import AboutUs from './Pages/AboutUs/AboutUs'
import { BgImg } from './Components/BackGround'

export default function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/products"  element={<Products />}/>
          <Route path="/contact"  element={<Contact />}/>
          <Route path="/about-us" element={<AboutUs />}/>
        </Routes>
    </Router>
  )
}
