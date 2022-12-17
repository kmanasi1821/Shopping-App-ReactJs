import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from "../../data/products";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="s_container">
      <Swiper
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => {
          return (
            <SwiperSlide>
              <div className="left-s">
                <div className="name">
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>{slide.price}$</span>
                <div>Add Cart</div>
              </div>
              <img src={slide.img} alt="product" className="img-p" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
