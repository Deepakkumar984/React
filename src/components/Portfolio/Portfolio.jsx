import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import image1 from "../../img/S1.png";
import Ecommerce from "../../img/S2.png";
import HOC from "../../img/S3.png";
import App from "../../img/S4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);  
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a target="blank" href={image1}><img src={image1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a target="blank" href={Ecommerce}><img src={Ecommerce} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target='_blank' href={App}> <img src={App} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="blank" href={HOC}> <img src={HOC} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
