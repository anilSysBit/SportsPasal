import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageListClasses } from '@mui/material';


const HomeShowItems = () => {
    const sportsProducts = [
        {
            name: 'Basketball',
            category: 'Outdoor Sport',
            imgSrc: 'https://images.pexels.com/photos/1089087/pexels-photo-1089087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Running Shoes',
            category: 'Footwear',
            imgSrc: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Tennis Racket',
            category: 'Tennis Equipment',
            imgSrc: 'https://images.pexels.com/photos/2618794/pexels-photo-2618794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Soccer Ball',
            category: 'Soccer Equipment',
            imgSrc: 'https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Circket Duge Ball',
            category: 'Circket Equipment',
            imgSrc: 'https://images.pexels.com/photos/5519470/pexels-photo-5519470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Football Jersey',
            category: 'Apparel',
            imgSrc: 'https://images.pexels.com/photos/15810418/pexels-photo-15810418/free-photo-of-fashion-man-travel-flag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];
    const options = {
        responsive: {
          800: {
            items: 3
          },
          600:{
            items:2
          },
          300:{
            items:1
          }
        }// Adjust this value to increase the number of dots
      };
  return (
    <div className="hsi_aw_container">
        <OwlCarousel loop margin={10} {...options}>
            {sportsProducts.map((elem,index)=>{
                return(
                    <div key={index} className='carousel_item' style={{
                        backgroundImage:`url(${elem.imgSrc})`
                    }}>
                        <span className='head_transition'>
                            <span className='view_container'>
                            <h2>{elem.name}</h2>
                            <p>{elem.category}</p>
                            </span>
                        </span>
                    </div>
                )
            })}
            </OwlCarousel>
    </div>
  )
}

export default HomeShowItems