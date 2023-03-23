import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from '../../img/happy.png'
import { Pagination } from "swiper";
import "swiper/css/pagination";


const Testimonial = () => {
  

  return (
    <div className="t-wrapper" id="testimonial">
      
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
      
          return (
            <SwiperSlide >
              <div className="testimonial">
              <div className="t-heading">
        <span>You can always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "#d6ba22" }}></div>
      <div className="blur t-blur2" style={{ background: "#24fcac" }}></div>

      </div>
                <img src={img} alt="" />
                
              </div>
            </SwiperSlide>
          );
      
      </Swiper>
    </div>
  );
};

export default Testimonial;
