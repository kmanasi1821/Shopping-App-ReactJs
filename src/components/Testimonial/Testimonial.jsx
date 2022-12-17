import React from "react";
import css from "./Testimonial.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

const Testimonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rating</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            debitis praesentium eligendi recusandae ea natus odio, eum
            reiciendis et sint nam quaerat modi? Ut fuga, rerum dolores rem nam
            nobis?
          </span>
        </div>

        <img src={Hero} alt="" />

        <div className={css.container}>
          <span>100K</span>
          <span>Happy Customers with us !</span>
        </div>
      </div>
      <div className={css.review}>Reviews</div>
      <div className={css.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousal}
        >
          {TestimonialsData.map((testimonial, i) => {
            return (
              <SwiperSlide>
                <div className={css.testimonial}>
                  <img src={testimonial.image} alt="" />
                  <span>{testimonial.comment}</span>
                  <hr />
                  <span>{testimonial.name}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
