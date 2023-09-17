
import { Button } from '@mui/material'
import React from 'react'
import dashainOfferBanner from '../assets/dashainofferbanner2.png';

const HomeSeasonOfferBanner = () => {
  return (
    <div className="hsob_aw_container">
        <div className="size_manager">
            <div className="detail_container">
                <h2>Up to 50% Off</h2>
                <h3>Dashain Sale Offer</h3>
                <p>Yo Dashain ma offer ko Maja lutnuhos</p>
                <Button variant='contained' sx={{borderRadius:"30px",backgroundColor:'var(--bc2)',padding:'10px', width:140}}>Shop Now</Button>
            </div>
            <div className="img_container">
                <img src={dashainOfferBanner} alt="offerbanner" />
            </div>
        </div>
    </div>
  )
}

export default HomeSeasonOfferBanner