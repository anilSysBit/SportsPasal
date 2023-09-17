import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HomeBestSellerList = () => {
  const bestSellers = [
    {
      name: "Argentina Jersey",
      category: "Apparel",
      price: "500",
      imgSrc: "https://picsum.photos/200/201",
    },
    {
      name: "Nike Basketball Shoes",
      category: "Footwear",
      price: "150",
      imgSrc: "https://picsum.photos/200/202",
    },
    {
      name: "Adidas Soccer Ball",
      category: "Equipment",
      price: "30",
      imgSrc: "https://picsum.photos/200/203",
    },
    {
      name: "Wilson Tennis Racket",
      category: "Equipment",
      price: "120",
      imgSrc: "https://picsum.photos/200/204",
    },
    {
      name: "Oakley Sports Sunglasses",
      category: "Accessories",
      price: "80",
      imgSrc: "https://picsum.photos/200/205",
    },
    {
      name: "Fitness Tracker Watch",
      category: "Accessories",
      price: "100",
      imgSrc: "https://picsum.photos/200/206",
    },
  ];
  return (
    <div className="hbsl_aw_container">
        <div className="header">
        <p>Popular Item in the Market</p>
        <h2>Best Seller in <span className='gb_underline'>Market</span></h2>
    </div>
      <div className="size_manager">
        <OwlCarousel loop margin={-300}>
          {bestSellers.map((elem, index) => {
            return (
              <div key={index} className="product_list">
                <div
                  className="img_container"
                  style={{
                    backgroundImage: `url(${elem.imgSrc})`,
                  }}
                >
                  <span className="pl_hover"></span>
                </div>
                <div className="detail_container">
                  <p>{elem.category}</p>
                  <h2>{elem.name}</h2>
                  <h3>Rs.{elem.price}</h3>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default HomeBestSellerList;
