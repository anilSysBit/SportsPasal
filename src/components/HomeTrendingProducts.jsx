import React from 'react'

const HomeTrendingProducts = () => {
    const items = [
        {
            name: 'Water Bottle',
            price: '100',
            category: 'Outdoor Accessories',
            imgSrc: 'https://picsum.photos/200/200'
        },
        {
            name: 'Football',
            price: '250',
            category: 'Outdoor Sport',
            imgSrc: 'https://picsum.photos/200/201'
        },
        {
            name: 'Dumbbell',
            price: '300',
            category: 'Fitness Equipment',
            imgSrc: 'https://picsum.photos/200/202'
        },
        {
            name: 'Jersey',
            price: '400',
            category: 'Sports Apparel',
            imgSrc: 'https://picsum.photos/200/203'
        },
        {
            name: 'Chessboard',
            price: '150',
            category: 'Board Games',
            imgSrc: 'https://picsum.photos/200/204'
        },
        {
            name: 'Badminton Racket',
            price: '200',
            category: 'Outdoor Sport',
            imgSrc: 'https://picsum.photos/200/205'
        },
        {
            name: 'Mountain Cycle',
            price: '3000',
            category: 'Cycling',
            imgSrc: 'https://picsum.photos/200/206'
        },
        {
            name: 'Boxing Glub',
            price: '3000',
            category: 'Fitness',
            imgSrc: 'https://picsum.photos/200/208'
        },
        // Add more items as needed
    ];
    
  return (
    <div className="htp_aw_container">
        <div className="size_manager">
            <div className="header">
                <p>Popular Item in the Market</p>
                <h2>Trending <span className='gb_underline'>Product</span></h2>
            </div>
            <div className="product_list_container">
                {items.map((elem,index)=>{
                    return(
                        <div key={index} className='product_list'>
                            <div className="img_container" style={{
                                backgroundImage:`url(${elem.imgSrc})`
                            }}>
                                <span className='pl_hover'></span>
                            </div>
                            <div className="detail_container">
                                <p>{elem.category}</p>
                                <h2>{elem.name}</h2>
                                <h3>Rs.{elem.price}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default HomeTrendingProducts