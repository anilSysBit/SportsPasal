import React from 'react'
import { Button } from '@mui/material'
import homepic from '../assets/homepic.png'
const Homepage = () => {
  return (
    <div className="hp_aw_container">
      <div className="size_manager">
        <div className="left">
          <span></span>
          <span>
            <img src={homepic} alt="carts" height={'80%'}/>
          </span>
        </div>
        <div className="right">
          <h4>Shop is Fun</h4>
          <h1>Browse Our Premium Products</h1>
          <p>Discover the ultimate sports collection at our E-commerce store in Nepal. Explore top-notch gear, apparel, and accessories for athletes and sports enthusiasts. Elevate your game with our premium selection.</p>
          <Button variant='contained' sx={{
          borderRadius:'30px',
          padding:'15px',
          fontSize:'15px',
          bgcolor:'var(--bc2)',
          width:180
        }}>Browse Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Homepage