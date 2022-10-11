import React from 'react'
import { BgImg } from '../../Components/BackGround'
import { createMuiTheme } from '@mui/material'
import './Home.css'

const Home = () => {
  return (
    <>
      <BgImg />
      <div className='mainHome'>
        <div className='TextContainer'>
          <h1 className='HeroQues'>What does SAP do?</h1>
          <p className='HeroText'>SAP helps companies and organisations of all sizes and <br />
            industries run their businesses profitably,<br />adapt continuously, and grow sustainably.</p>
        </div>
        <div className='HeroContainer'>
        <img src={require('../../Assets/Illustrations/TechBoss.png')} className="HeroArt" />
        </div>
      </div>
    </>
  )
}

export default Home