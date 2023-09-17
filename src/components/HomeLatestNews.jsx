import { Button } from '@mui/material'
import React from 'react'
import {ArrowForward} from '@mui/icons-material'
const HomeLatestNews = () => {
    const latestNews = [
{
            title:'Dashain Offer of Sportspasal is Going Limilitlessly',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut deleniti minima labore blanditiis, eligendi hic. Omnis error dolorum autem laboriosam, ea, quod molestiae quia numquam, laborum nemo quis illum.',
            imgSrc:'https://picsum.photos/200/210'
        },
        {
            title:'Share of Anil Enterprice reacing sky',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut deleniti minima labore blanditiis, eligendi hic. Omnis error dolorum autem laboriosam, ea, quod molestiae quia numquam, laborum nemo quis illum.',
            imgSrc:'https://picsum.photos/200/209'
        },
        {
            title:'The Networth of "Anil Group of company" toucing the 2nd Billion',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut deleniti minima labore blanditiis, eligendi hic. Omnis error dolorum autem laboriosam, ea, quod molestiae quia numquam, laborum nemo quis illum.',
            imgSrc:'https://picsum.photos/200/208'
        },
    ]
  return (
    <div className="hln_aw_container">
        <div className="size_manager">
        <div className="header">
                <p>News trending on market</p>
                <h2>Latest <span className='gb_underline'>news</span></h2>
            </div>

        <div className="latest_news_container">
            {latestNews.map((elem,index)=>{
                return(
                    <div className='latest_news_list'>
                        <div className="img_box" style={{
                            backgroundImage:`url(${elem.imgSrc})`
                        }}></div>
                        <div className="description_box">
                            <p>By Admin</p>
                            <h3>{elem.title}</h3>
                            <p>{elem.description.slice(0,60).concat("...")}</p>
                            <Button className='read_more' variant='text' endIcon={<ArrowForward className='arrow_read_more'/>} sx={{
                                fontFamily:'var(--roboto)'
                            }}>Read More</Button>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default HomeLatestNews